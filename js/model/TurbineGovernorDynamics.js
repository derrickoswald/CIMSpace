define
(
    ["model/base", "model/StandardModels"],
    /**
     * The turbine-governor model is linked to one or two synchronous generators and determines the shaft mechanical power (Pm) or torque (Tm) for the generator model.
     *
     * Unlike IEEE standard models for other function blocks, the three IEEE turbine-governor standard models (GovHydroIEEE0, GovHydroIEEE2, GovSteamIEEE1) are documented in IEEE Transactions not in IEEE standards. For that reason, diagrams are supplied for those models.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Governor control flag for Francis hydro model.
         *
         */
        class FrancisGovernorControlKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FrancisGovernorControlKind;
                if (null == bucket)
                   cim_data.FrancisGovernorControlKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FrancisGovernorControlKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FrancisGovernorControlKind";
                base.parse_element (/<cim:FrancisGovernorControlKind.mechanicHydrolicTachoAccelerator>([\s\S]*?)<\/cim:FrancisGovernorControlKind.mechanicHydrolicTachoAccelerator>/g, obj, "mechanicHydrolicTachoAccelerator", base.to_string, sub, context);
                base.parse_element (/<cim:FrancisGovernorControlKind.mechanicHydraulicTransientFeedback>([\s\S]*?)<\/cim:FrancisGovernorControlKind.mechanicHydraulicTransientFeedback>/g, obj, "mechanicHydraulicTransientFeedback", base.to_string, sub, context);
                base.parse_element (/<cim:FrancisGovernorControlKind.electromechanicalElectrohydraulic>([\s\S]*?)<\/cim:FrancisGovernorControlKind.electromechanicalElectrohydraulic>/g, obj, "electromechanicalElectrohydraulic", base.to_string, sub, context);

                var bucket = context.parsed.FrancisGovernorControlKind;
                if (null == bucket)
                   context.parsed.FrancisGovernorControlKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "FrancisGovernorControlKind", "mechanicHydrolicTachoAccelerator", base.from_string, fields);
                base.export_element (obj, "FrancisGovernorControlKind", "mechanicHydraulicTransientFeedback", base.from_string, fields);
                base.export_element (obj, "FrancisGovernorControlKind", "electromechanicalElectrohydraulic", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#FrancisGovernorControlKind_collapse" aria-expanded="true" aria-controls="FrancisGovernorControlKind_collapse">FrancisGovernorControlKind</a>
<div id="FrancisGovernorControlKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#mechanicHydrolicTachoAccelerator}}<div><b>mechanicHydrolicTachoAccelerator</b>: {{mechanicHydrolicTachoAccelerator}}</div>{{/mechanicHydrolicTachoAccelerator}}
{{#mechanicHydraulicTransientFeedback}}<div><b>mechanicHydraulicTransientFeedback</b>: {{mechanicHydraulicTransientFeedback}}</div>{{/mechanicHydraulicTransientFeedback}}
{{#electromechanicalElectrohydraulic}}<div><b>electromechanicalElectrohydraulic</b>: {{electromechanicalElectrohydraulic}}</div>{{/electromechanicalElectrohydraulic}}
</div>
`
                );
           }        }

        /**
         * Governor droop signal feedback source.
         *
         */
        class DroopSignalFeedbackKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DroopSignalFeedbackKind;
                if (null == bucket)
                   cim_data.DroopSignalFeedbackKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DroopSignalFeedbackKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DroopSignalFeedbackKind";
                base.parse_element (/<cim:DroopSignalFeedbackKind.electricalPower>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.electricalPower>/g, obj, "electricalPower", base.to_string, sub, context);
                base.parse_element (/<cim:DroopSignalFeedbackKind.none>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:DroopSignalFeedbackKind.fuelValveStroke>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.fuelValveStroke>/g, obj, "fuelValveStroke", base.to_string, sub, context);
                base.parse_element (/<cim:DroopSignalFeedbackKind.governorOutput>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.governorOutput>/g, obj, "governorOutput", base.to_string, sub, context);

                var bucket = context.parsed.DroopSignalFeedbackKind;
                if (null == bucket)
                   context.parsed.DroopSignalFeedbackKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DroopSignalFeedbackKind", "electricalPower", base.from_string, fields);
                base.export_element (obj, "DroopSignalFeedbackKind", "none", base.from_string, fields);
                base.export_element (obj, "DroopSignalFeedbackKind", "fuelValveStroke", base.from_string, fields);
                base.export_element (obj, "DroopSignalFeedbackKind", "governorOutput", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#DroopSignalFeedbackKind_collapse" aria-expanded="true" aria-controls="DroopSignalFeedbackKind_collapse">DroopSignalFeedbackKind</a>
<div id="DroopSignalFeedbackKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#electricalPower}}<div><b>electricalPower</b>: {{electricalPower}}</div>{{/electricalPower}}
{{#none}}<div><b>none</b>: {{none}}</div>{{/none}}
{{#fuelValveStroke}}<div><b>fuelValveStroke</b>: {{fuelValveStroke}}</div>{{/fuelValveStroke}}
{{#governorOutput}}<div><b>governorOutput</b>: {{governorOutput}}</div>{{/governorOutput}}
</div>
`
                );
           }        }

        /**
         * Turbine-governor function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class TurbineGovernorDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TurbineGovernorDynamics;
                if (null == bucket)
                   cim_data.TurbineGovernorDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TurbineGovernorDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "TurbineGovernorDynamics";
                base.parse_attribute (/<cim:TurbineGovernorDynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);
                base.parse_attribute (/<cim:TurbineGovernorDynamics.TurbineLoadControllerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineLoadControllerDynamics", sub, context);

                var bucket = context.parsed.TurbineGovernorDynamics;
                if (null == bucket)
                   context.parsed.TurbineGovernorDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TurbineGovernorDynamics", "AsynchronousMachineDynamics", fields);
                base.export_attribute (obj, "TurbineGovernorDynamics", "TurbineLoadControllerDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TurbineGovernorDynamics_collapse" aria-expanded="true" aria-controls="TurbineGovernorDynamics_collapse">TurbineGovernorDynamics</a>
<div id="TurbineGovernorDynamics_collapse" class="collapse in" style="margin-left: 10px;">
`
      + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
`
{{#AsynchronousMachineDynamics}}<div><b>AsynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AsynchronousMachineDynamics}}&quot;);})'>{{AsynchronousMachineDynamics}}</a></div>{{/AsynchronousMachineDynamics}}
{{#TurbineLoadControllerDynamics}}<div><b>TurbineLoadControllerDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TurbineLoadControllerDynamics}}&quot;);})'>{{TurbineLoadControllerDynamics}}</a></div>{{/TurbineLoadControllerDynamics}}
</div>
`
                );
           }        }

        /**
         * Cross compound turbine governor model.
         *
         */
        class GovSteamCC extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteamCC;
                if (null == bucket)
                   cim_data.GovSteamCC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteamCC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamCC";
                base.parse_element (/<cim:GovSteamCC.dhp>([\s\S]*?)<\/cim:GovSteamCC.dhp>/g, obj, "dhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.dlp>([\s\S]*?)<\/cim:GovSteamCC.dlp>/g, obj, "dlp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.fhp>([\s\S]*?)<\/cim:GovSteamCC.fhp>/g, obj, "fhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.flp>([\s\S]*?)<\/cim:GovSteamCC.flp>/g, obj, "flp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.mwbase>([\s\S]*?)<\/cim:GovSteamCC.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.pmaxhp>([\s\S]*?)<\/cim:GovSteamCC.pmaxhp>/g, obj, "pmaxhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.pmaxlp>([\s\S]*?)<\/cim:GovSteamCC.pmaxlp>/g, obj, "pmaxlp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.rhp>([\s\S]*?)<\/cim:GovSteamCC.rhp>/g, obj, "rhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.rlp>([\s\S]*?)<\/cim:GovSteamCC.rlp>/g, obj, "rlp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t1hp>([\s\S]*?)<\/cim:GovSteamCC.t1hp>/g, obj, "t1hp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t1lp>([\s\S]*?)<\/cim:GovSteamCC.t1lp>/g, obj, "t1lp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t3hp>([\s\S]*?)<\/cim:GovSteamCC.t3hp>/g, obj, "t3hp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t3lp>([\s\S]*?)<\/cim:GovSteamCC.t3lp>/g, obj, "t3lp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t4hp>([\s\S]*?)<\/cim:GovSteamCC.t4hp>/g, obj, "t4hp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t4lp>([\s\S]*?)<\/cim:GovSteamCC.t4lp>/g, obj, "t4lp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t5hp>([\s\S]*?)<\/cim:GovSteamCC.t5hp>/g, obj, "t5hp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t5lp>([\s\S]*?)<\/cim:GovSteamCC.t5lp>/g, obj, "t5lp", base.to_string, sub, context);

                var bucket = context.parsed.GovSteamCC;
                if (null == bucket)
                   context.parsed.GovSteamCC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamCC", "dhp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "dlp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "fhp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "flp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "pmaxhp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "pmaxlp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "rhp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "rlp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t1hp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t1lp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t3hp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t3lp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t4hp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t4lp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t5hp", base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t5lp", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteamCC_collapse" aria-expanded="true" aria-controls="GovSteamCC_collapse">GovSteamCC</a>
<div id="GovSteamCC_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#dhp}}<div><b>dhp</b>: {{dhp}}</div>{{/dhp}}
{{#dlp}}<div><b>dlp</b>: {{dlp}}</div>{{/dlp}}
{{#fhp}}<div><b>fhp</b>: {{fhp}}</div>{{/fhp}}
{{#flp}}<div><b>flp</b>: {{flp}}</div>{{/flp}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pmaxhp}}<div><b>pmaxhp</b>: {{pmaxhp}}</div>{{/pmaxhp}}
{{#pmaxlp}}<div><b>pmaxlp</b>: {{pmaxlp}}</div>{{/pmaxlp}}
{{#rhp}}<div><b>rhp</b>: {{rhp}}</div>{{/rhp}}
{{#rlp}}<div><b>rlp</b>: {{rlp}}</div>{{/rlp}}
{{#t1hp}}<div><b>t1hp</b>: {{t1hp}}</div>{{/t1hp}}
{{#t1lp}}<div><b>t1lp</b>: {{t1lp}}</div>{{/t1lp}}
{{#t3hp}}<div><b>t3hp</b>: {{t3hp}}</div>{{/t3hp}}
{{#t3lp}}<div><b>t3lp</b>: {{t3lp}}</div>{{/t3lp}}
{{#t4hp}}<div><b>t4hp</b>: {{t4hp}}</div>{{/t4hp}}
{{#t4lp}}<div><b>t4lp</b>: {{t4lp}}</div>{{/t4lp}}
{{#t5hp}}<div><b>t5hp</b>: {{t5hp}}</div>{{/t5hp}}
{{#t5lp}}<div><b>t5lp</b>: {{t5lp}}</div>{{/t5lp}}
</div>
`
                );
           }        }

        /**
         * PID governor and turbine.
         *
         */
        class GovHydroPID extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroPID;
                if (null == bucket)
                   cim_data.GovHydroPID = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroPID[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroPID";
                base.parse_element (/<cim:GovHydroPID.aturb>([\s\S]*?)<\/cim:GovHydroPID.aturb>/g, obj, "aturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.bturb>([\s\S]*?)<\/cim:GovHydroPID.bturb>/g, obj, "bturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.db1>([\s\S]*?)<\/cim:GovHydroPID.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.db2>([\s\S]*?)<\/cim:GovHydroPID.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.eps>([\s\S]*?)<\/cim:GovHydroPID.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv1>([\s\S]*?)<\/cim:GovHydroPID.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv2>([\s\S]*?)<\/cim:GovHydroPID.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv3>([\s\S]*?)<\/cim:GovHydroPID.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv4>([\s\S]*?)<\/cim:GovHydroPID.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv5>([\s\S]*?)<\/cim:GovHydroPID.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv6>([\s\S]*?)<\/cim:GovHydroPID.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.inputSignal>([\s\S]*?)<\/cim:GovHydroPID.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPID.kd>([\s\S]*?)<\/cim:GovHydroPID.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.kg>([\s\S]*?)<\/cim:GovHydroPID.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.ki>([\s\S]*?)<\/cim:GovHydroPID.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.kp>([\s\S]*?)<\/cim:GovHydroPID.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.mwbase>([\s\S]*?)<\/cim:GovHydroPID.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv1>([\s\S]*?)<\/cim:GovHydroPID.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv2>([\s\S]*?)<\/cim:GovHydroPID.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv3>([\s\S]*?)<\/cim:GovHydroPID.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv4>([\s\S]*?)<\/cim:GovHydroPID.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv5>([\s\S]*?)<\/cim:GovHydroPID.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv6>([\s\S]*?)<\/cim:GovHydroPID.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pmax>([\s\S]*?)<\/cim:GovHydroPID.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pmin>([\s\S]*?)<\/cim:GovHydroPID.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.r>([\s\S]*?)<\/cim:GovHydroPID.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.td>([\s\S]*?)<\/cim:GovHydroPID.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.tf>([\s\S]*?)<\/cim:GovHydroPID.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.tp>([\s\S]*?)<\/cim:GovHydroPID.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.tt>([\s\S]*?)<\/cim:GovHydroPID.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.tturb>([\s\S]*?)<\/cim:GovHydroPID.tturb>/g, obj, "tturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.velcl>([\s\S]*?)<\/cim:GovHydroPID.velcl>/g, obj, "velcl", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPID.velop>([\s\S]*?)<\/cim:GovHydroPID.velop>/g, obj, "velop", base.to_float, sub, context);

                var bucket = context.parsed.GovHydroPID;
                if (null == bucket)
                   context.parsed.GovHydroPID = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroPID", "aturb", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "bturb", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "db1", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "db2", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "eps", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv1", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv2", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv3", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv4", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv5", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv6", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "inputSignal", base.from_boolean, fields);
                base.export_element (obj, "GovHydroPID", "kd", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "kg", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "ki", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "kp", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv4", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv5", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv6", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pmax", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pmin", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "r", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "td", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "tf", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "tp", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "tt", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "tturb", base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "velcl", base.from_float, fields);
                base.export_element (obj, "GovHydroPID", "velop", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroPID_collapse" aria-expanded="true" aria-controls="GovHydroPID_collapse">GovHydroPID</a>
<div id="GovHydroPID_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#aturb}}<div><b>aturb</b>: {{aturb}}</div>{{/aturb}}
{{#bturb}}<div><b>bturb</b>: {{bturb}}</div>{{/bturb}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
{{#inputSignal}}<div><b>inputSignal</b>: {{inputSignal}}</div>{{/inputSignal}}
{{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
{{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
{{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
{{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
{{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
{{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
{{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
{{#tturb}}<div><b>tturb</b>: {{tturb}}</div>{{/tturb}}
{{#velcl}}<div><b>velcl</b>: {{velcl}}</div>{{/velcl}}
{{#velop}}<div><b>velop</b>: {{velop}}</div>{{/velop}}
</div>
`
                );
           }        }

        /**
         * General governor model with frequency-dependent fuel flow limit.
         *
         * This model is a modification of the GovCT1<b> </b>model in order to represent the frequency-dependent fuel flow limit of a specific gas turbine manufacturer.
         *
         */
        class GovCT2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovCT2;
                if (null == bucket)
                   cim_data.GovCT2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovCT2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovCT2";
                base.parse_element (/<cim:GovCT2.aset>([\s\S]*?)<\/cim:GovCT2.aset>/g, obj, "aset", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT2.db>([\s\S]*?)<\/cim:GovCT2.db>/g, obj, "db", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.dm>([\s\S]*?)<\/cim:GovCT2.dm>/g, obj, "dm", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim1>([\s\S]*?)<\/cim:GovCT2.flim1>/g, obj, "flim1", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim10>([\s\S]*?)<\/cim:GovCT2.flim10>/g, obj, "flim10", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim2>([\s\S]*?)<\/cim:GovCT2.flim2>/g, obj, "flim2", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim3>([\s\S]*?)<\/cim:GovCT2.flim3>/g, obj, "flim3", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim4>([\s\S]*?)<\/cim:GovCT2.flim4>/g, obj, "flim4", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim5>([\s\S]*?)<\/cim:GovCT2.flim5>/g, obj, "flim5", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim6>([\s\S]*?)<\/cim:GovCT2.flim6>/g, obj, "flim6", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim7>([\s\S]*?)<\/cim:GovCT2.flim7>/g, obj, "flim7", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim8>([\s\S]*?)<\/cim:GovCT2.flim8>/g, obj, "flim8", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim9>([\s\S]*?)<\/cim:GovCT2.flim9>/g, obj, "flim9", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.ka>([\s\S]*?)<\/cim:GovCT2.ka>/g, obj, "ka", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kdgov>([\s\S]*?)<\/cim:GovCT2.kdgov>/g, obj, "kdgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kigov>([\s\S]*?)<\/cim:GovCT2.kigov>/g, obj, "kigov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kiload>([\s\S]*?)<\/cim:GovCT2.kiload>/g, obj, "kiload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kimw>([\s\S]*?)<\/cim:GovCT2.kimw>/g, obj, "kimw", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kpgov>([\s\S]*?)<\/cim:GovCT2.kpgov>/g, obj, "kpgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kpload>([\s\S]*?)<\/cim:GovCT2.kpload>/g, obj, "kpload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kturb>([\s\S]*?)<\/cim:GovCT2.kturb>/g, obj, "kturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.ldref>([\s\S]*?)<\/cim:GovCT2.ldref>/g, obj, "ldref", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.maxerr>([\s\S]*?)<\/cim:GovCT2.maxerr>/g, obj, "maxerr", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.minerr>([\s\S]*?)<\/cim:GovCT2.minerr>/g, obj, "minerr", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.mwbase>([\s\S]*?)<\/cim:GovCT2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim1>([\s\S]*?)<\/cim:GovCT2.plim1>/g, obj, "plim1", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim10>([\s\S]*?)<\/cim:GovCT2.plim10>/g, obj, "plim10", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim2>([\s\S]*?)<\/cim:GovCT2.plim2>/g, obj, "plim2", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim3>([\s\S]*?)<\/cim:GovCT2.plim3>/g, obj, "plim3", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim4>([\s\S]*?)<\/cim:GovCT2.plim4>/g, obj, "plim4", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim5>([\s\S]*?)<\/cim:GovCT2.plim5>/g, obj, "plim5", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim6>([\s\S]*?)<\/cim:GovCT2.plim6>/g, obj, "plim6", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim7>([\s\S]*?)<\/cim:GovCT2.plim7>/g, obj, "plim7", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim8>([\s\S]*?)<\/cim:GovCT2.plim8>/g, obj, "plim8", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim9>([\s\S]*?)<\/cim:GovCT2.plim9>/g, obj, "plim9", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.prate>([\s\S]*?)<\/cim:GovCT2.prate>/g, obj, "prate", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.r>([\s\S]*?)<\/cim:GovCT2.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.rclose>([\s\S]*?)<\/cim:GovCT2.rclose>/g, obj, "rclose", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT2.rdown>([\s\S]*?)<\/cim:GovCT2.rdown>/g, obj, "rdown", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.ropen>([\s\S]*?)<\/cim:GovCT2.ropen>/g, obj, "ropen", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT2.rselect>([\s\S]*?)<\/cim:GovCT2.rselect>/g, obj, "rselect", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.rup>([\s\S]*?)<\/cim:GovCT2.rup>/g, obj, "rup", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.ta>([\s\S]*?)<\/cim:GovCT2.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tact>([\s\S]*?)<\/cim:GovCT2.tact>/g, obj, "tact", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tb>([\s\S]*?)<\/cim:GovCT2.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tc>([\s\S]*?)<\/cim:GovCT2.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tdgov>([\s\S]*?)<\/cim:GovCT2.tdgov>/g, obj, "tdgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.teng>([\s\S]*?)<\/cim:GovCT2.teng>/g, obj, "teng", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tfload>([\s\S]*?)<\/cim:GovCT2.tfload>/g, obj, "tfload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tpelec>([\s\S]*?)<\/cim:GovCT2.tpelec>/g, obj, "tpelec", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tsa>([\s\S]*?)<\/cim:GovCT2.tsa>/g, obj, "tsa", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tsb>([\s\S]*?)<\/cim:GovCT2.tsb>/g, obj, "tsb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.vmax>([\s\S]*?)<\/cim:GovCT2.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.vmin>([\s\S]*?)<\/cim:GovCT2.vmin>/g, obj, "vmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.wfnl>([\s\S]*?)<\/cim:GovCT2.wfnl>/g, obj, "wfnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.wfspd>([\s\S]*?)<\/cim:GovCT2.wfspd>/g, obj, "wfspd", base.to_boolean, sub, context);

                var bucket = context.parsed.GovCT2;
                if (null == bucket)
                   context.parsed.GovCT2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovCT2", "aset", base.from_float, fields);
                base.export_element (obj, "GovCT2", "db", base.from_string, fields);
                base.export_element (obj, "GovCT2", "dm", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim1", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim10", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim2", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim3", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim4", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim5", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim6", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim7", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim8", base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim9", base.from_string, fields);
                base.export_element (obj, "GovCT2", "ka", base.from_string, fields);
                base.export_element (obj, "GovCT2", "kdgov", base.from_string, fields);
                base.export_element (obj, "GovCT2", "kigov", base.from_string, fields);
                base.export_element (obj, "GovCT2", "kiload", base.from_string, fields);
                base.export_element (obj, "GovCT2", "kimw", base.from_string, fields);
                base.export_element (obj, "GovCT2", "kpgov", base.from_string, fields);
                base.export_element (obj, "GovCT2", "kpload", base.from_string, fields);
                base.export_element (obj, "GovCT2", "kturb", base.from_string, fields);
                base.export_element (obj, "GovCT2", "ldref", base.from_string, fields);
                base.export_element (obj, "GovCT2", "maxerr", base.from_string, fields);
                base.export_element (obj, "GovCT2", "minerr", base.from_string, fields);
                base.export_element (obj, "GovCT2", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim1", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim10", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim2", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim3", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim4", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim5", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim6", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim7", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim8", base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim9", base.from_string, fields);
                base.export_element (obj, "GovCT2", "prate", base.from_string, fields);
                base.export_element (obj, "GovCT2", "r", base.from_string, fields);
                base.export_element (obj, "GovCT2", "rclose", base.from_float, fields);
                base.export_element (obj, "GovCT2", "rdown", base.from_string, fields);
                base.export_element (obj, "GovCT2", "ropen", base.from_float, fields);
                base.export_element (obj, "GovCT2", "rselect", base.from_string, fields);
                base.export_element (obj, "GovCT2", "rup", base.from_string, fields);
                base.export_element (obj, "GovCT2", "ta", base.from_string, fields);
                base.export_element (obj, "GovCT2", "tact", base.from_string, fields);
                base.export_element (obj, "GovCT2", "tb", base.from_string, fields);
                base.export_element (obj, "GovCT2", "tc", base.from_string, fields);
                base.export_element (obj, "GovCT2", "tdgov", base.from_string, fields);
                base.export_element (obj, "GovCT2", "teng", base.from_string, fields);
                base.export_element (obj, "GovCT2", "tfload", base.from_string, fields);
                base.export_element (obj, "GovCT2", "tpelec", base.from_string, fields);
                base.export_element (obj, "GovCT2", "tsa", base.from_string, fields);
                base.export_element (obj, "GovCT2", "tsb", base.from_string, fields);
                base.export_element (obj, "GovCT2", "vmax", base.from_string, fields);
                base.export_element (obj, "GovCT2", "vmin", base.from_string, fields);
                base.export_element (obj, "GovCT2", "wfnl", base.from_string, fields);
                base.export_element (obj, "GovCT2", "wfspd", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovCT2_collapse" aria-expanded="true" aria-controls="GovCT2_collapse">GovCT2</a>
<div id="GovCT2_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#aset}}<div><b>aset</b>: {{aset}}</div>{{/aset}}
{{#db}}<div><b>db</b>: {{db}}</div>{{/db}}
{{#dm}}<div><b>dm</b>: {{dm}}</div>{{/dm}}
{{#flim1}}<div><b>flim1</b>: {{flim1}}</div>{{/flim1}}
{{#flim10}}<div><b>flim10</b>: {{flim10}}</div>{{/flim10}}
{{#flim2}}<div><b>flim2</b>: {{flim2}}</div>{{/flim2}}
{{#flim3}}<div><b>flim3</b>: {{flim3}}</div>{{/flim3}}
{{#flim4}}<div><b>flim4</b>: {{flim4}}</div>{{/flim4}}
{{#flim5}}<div><b>flim5</b>: {{flim5}}</div>{{/flim5}}
{{#flim6}}<div><b>flim6</b>: {{flim6}}</div>{{/flim6}}
{{#flim7}}<div><b>flim7</b>: {{flim7}}</div>{{/flim7}}
{{#flim8}}<div><b>flim8</b>: {{flim8}}</div>{{/flim8}}
{{#flim9}}<div><b>flim9</b>: {{flim9}}</div>{{/flim9}}
{{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
{{#kdgov}}<div><b>kdgov</b>: {{kdgov}}</div>{{/kdgov}}
{{#kigov}}<div><b>kigov</b>: {{kigov}}</div>{{/kigov}}
{{#kiload}}<div><b>kiload</b>: {{kiload}}</div>{{/kiload}}
{{#kimw}}<div><b>kimw</b>: {{kimw}}</div>{{/kimw}}
{{#kpgov}}<div><b>kpgov</b>: {{kpgov}}</div>{{/kpgov}}
{{#kpload}}<div><b>kpload</b>: {{kpload}}</div>{{/kpload}}
{{#kturb}}<div><b>kturb</b>: {{kturb}}</div>{{/kturb}}
{{#ldref}}<div><b>ldref</b>: {{ldref}}</div>{{/ldref}}
{{#maxerr}}<div><b>maxerr</b>: {{maxerr}}</div>{{/maxerr}}
{{#minerr}}<div><b>minerr</b>: {{minerr}}</div>{{/minerr}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#plim1}}<div><b>plim1</b>: {{plim1}}</div>{{/plim1}}
{{#plim10}}<div><b>plim10</b>: {{plim10}}</div>{{/plim10}}
{{#plim2}}<div><b>plim2</b>: {{plim2}}</div>{{/plim2}}
{{#plim3}}<div><b>plim3</b>: {{plim3}}</div>{{/plim3}}
{{#plim4}}<div><b>plim4</b>: {{plim4}}</div>{{/plim4}}
{{#plim5}}<div><b>plim5</b>: {{plim5}}</div>{{/plim5}}
{{#plim6}}<div><b>plim6</b>: {{plim6}}</div>{{/plim6}}
{{#plim7}}<div><b>plim7</b>: {{plim7}}</div>{{/plim7}}
{{#plim8}}<div><b>plim8</b>: {{plim8}}</div>{{/plim8}}
{{#plim9}}<div><b>plim9</b>: {{plim9}}</div>{{/plim9}}
{{#prate}}<div><b>prate</b>: {{prate}}</div>{{/prate}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#rclose}}<div><b>rclose</b>: {{rclose}}</div>{{/rclose}}
{{#rdown}}<div><b>rdown</b>: {{rdown}}</div>{{/rdown}}
{{#ropen}}<div><b>ropen</b>: {{ropen}}</div>{{/ropen}}
{{#rselect}}<div><b>rselect</b>: {{rselect}}</div>{{/rselect}}
{{#rup}}<div><b>rup</b>: {{rup}}</div>{{/rup}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#tact}}<div><b>tact</b>: {{tact}}</div>{{/tact}}
{{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
{{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
{{#tdgov}}<div><b>tdgov</b>: {{tdgov}}</div>{{/tdgov}}
{{#teng}}<div><b>teng</b>: {{teng}}</div>{{/teng}}
{{#tfload}}<div><b>tfload</b>: {{tfload}}</div>{{/tfload}}
{{#tpelec}}<div><b>tpelec</b>: {{tpelec}}</div>{{/tpelec}}
{{#tsa}}<div><b>tsa</b>: {{tsa}}</div>{{/tsa}}
{{#tsb}}<div><b>tsb</b>: {{tsb}}</div>{{/tsb}}
{{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
{{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
{{#wfnl}}<div><b>wfnl</b>: {{wfnl}}</div>{{/wfnl}}
{{#wfspd}}<div><b>wfspd</b>: {{wfspd}}</div>{{/wfspd}}
</div>
`
                );
           }        }

        /**
         * IEEE hydro turbine governor model represents plants with straightforward penstock configurations and hydraulic-dashpot governors.
         *
         */
        class GovHydro2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydro2;
                if (null == bucket)
                   cim_data.GovHydro2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydro2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydro2";
                base.parse_element (/<cim:GovHydro2.aturb>([\s\S]*?)<\/cim:GovHydro2.aturb>/g, obj, "aturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.bturb>([\s\S]*?)<\/cim:GovHydro2.bturb>/g, obj, "bturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.db1>([\s\S]*?)<\/cim:GovHydro2.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.db2>([\s\S]*?)<\/cim:GovHydro2.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.eps>([\s\S]*?)<\/cim:GovHydro2.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv1>([\s\S]*?)<\/cim:GovHydro2.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv2>([\s\S]*?)<\/cim:GovHydro2.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv3>([\s\S]*?)<\/cim:GovHydro2.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv4>([\s\S]*?)<\/cim:GovHydro2.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv5>([\s\S]*?)<\/cim:GovHydro2.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv6>([\s\S]*?)<\/cim:GovHydro2.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.kturb>([\s\S]*?)<\/cim:GovHydro2.kturb>/g, obj, "kturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.mwbase>([\s\S]*?)<\/cim:GovHydro2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv1>([\s\S]*?)<\/cim:GovHydro2.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv2>([\s\S]*?)<\/cim:GovHydro2.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv3>([\s\S]*?)<\/cim:GovHydro2.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv4>([\s\S]*?)<\/cim:GovHydro2.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv5>([\s\S]*?)<\/cim:GovHydro2.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv6>([\s\S]*?)<\/cim:GovHydro2.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pmax>([\s\S]*?)<\/cim:GovHydro2.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pmin>([\s\S]*?)<\/cim:GovHydro2.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.rperm>([\s\S]*?)<\/cim:GovHydro2.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.rtemp>([\s\S]*?)<\/cim:GovHydro2.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.tg>([\s\S]*?)<\/cim:GovHydro2.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.tp>([\s\S]*?)<\/cim:GovHydro2.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.tr>([\s\S]*?)<\/cim:GovHydro2.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.tw>([\s\S]*?)<\/cim:GovHydro2.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.uc>([\s\S]*?)<\/cim:GovHydro2.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydro2.uo>([\s\S]*?)<\/cim:GovHydro2.uo>/g, obj, "uo", base.to_float, sub, context);

                var bucket = context.parsed.GovHydro2;
                if (null == bucket)
                   context.parsed.GovHydro2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydro2", "aturb", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "bturb", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "db1", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "db2", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "eps", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv1", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv2", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv3", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv4", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv5", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv6", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "kturb", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv4", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv5", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv6", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pmax", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pmin", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "rperm", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "rtemp", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "tg", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "tp", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "tr", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "tw", base.from_string, fields);
                base.export_element (obj, "GovHydro2", "uc", base.from_float, fields);
                base.export_element (obj, "GovHydro2", "uo", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydro2_collapse" aria-expanded="true" aria-controls="GovHydro2_collapse">GovHydro2</a>
<div id="GovHydro2_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#aturb}}<div><b>aturb</b>: {{aturb}}</div>{{/aturb}}
{{#bturb}}<div><b>bturb</b>: {{bturb}}</div>{{/bturb}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
{{#kturb}}<div><b>kturb</b>: {{kturb}}</div>{{/kturb}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
{{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
{{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
{{#rtemp}}<div><b>rtemp</b>: {{rtemp}}</div>{{/rtemp}}
{{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
{{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
{{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
</div>
`
                );
           }        }

        /**
         * IEEE hydro turbine governor model represents plants with straightforward penstock configurations and hydraulic-dashpot governors.
         *
         * Ref<font color="#0f0f0f">erence: IEEE Transactions on Power Apparatus and Systems</font>
         *
         */
        class GovHydroIEEE2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroIEEE2;
                if (null == bucket)
                   cim_data.GovHydroIEEE2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroIEEE2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroIEEE2";
                base.parse_element (/<cim:GovHydroIEEE2.aturb>([\s\S]*?)<\/cim:GovHydroIEEE2.aturb>/g, obj, "aturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.bturb>([\s\S]*?)<\/cim:GovHydroIEEE2.bturb>/g, obj, "bturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv1>([\s\S]*?)<\/cim:GovHydroIEEE2.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv2>([\s\S]*?)<\/cim:GovHydroIEEE2.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv3>([\s\S]*?)<\/cim:GovHydroIEEE2.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv4>([\s\S]*?)<\/cim:GovHydroIEEE2.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv5>([\s\S]*?)<\/cim:GovHydroIEEE2.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv6>([\s\S]*?)<\/cim:GovHydroIEEE2.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.kturb>([\s\S]*?)<\/cim:GovHydroIEEE2.kturb>/g, obj, "kturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.mwbase>([\s\S]*?)<\/cim:GovHydroIEEE2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv1>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv2>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv3>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv4>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv5>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv6>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pmax>([\s\S]*?)<\/cim:GovHydroIEEE2.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pmin>([\s\S]*?)<\/cim:GovHydroIEEE2.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.rperm>([\s\S]*?)<\/cim:GovHydroIEEE2.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.rtemp>([\s\S]*?)<\/cim:GovHydroIEEE2.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.tg>([\s\S]*?)<\/cim:GovHydroIEEE2.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.tp>([\s\S]*?)<\/cim:GovHydroIEEE2.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.tr>([\s\S]*?)<\/cim:GovHydroIEEE2.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.tw>([\s\S]*?)<\/cim:GovHydroIEEE2.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.uc>([\s\S]*?)<\/cim:GovHydroIEEE2.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.uo>([\s\S]*?)<\/cim:GovHydroIEEE2.uo>/g, obj, "uo", base.to_float, sub, context);

                var bucket = context.parsed.GovHydroIEEE2;
                if (null == bucket)
                   context.parsed.GovHydroIEEE2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroIEEE2", "aturb", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "bturb", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv1", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv2", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv3", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv4", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv5", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv6", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "kturb", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv4", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv5", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv6", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pmax", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pmin", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "rperm", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "rtemp", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "tg", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "tp", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "tr", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "tw", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "uc", base.from_float, fields);
                base.export_element (obj, "GovHydroIEEE2", "uo", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroIEEE2_collapse" aria-expanded="true" aria-controls="GovHydroIEEE2_collapse">GovHydroIEEE2</a>
<div id="GovHydroIEEE2_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#aturb}}<div><b>aturb</b>: {{aturb}}</div>{{/aturb}}
{{#bturb}}<div><b>bturb</b>: {{bturb}}</div>{{/bturb}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
{{#kturb}}<div><b>kturb</b>: {{kturb}}</div>{{/kturb}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
{{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
{{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
{{#rtemp}}<div><b>rtemp</b>: {{rtemp}}</div>{{/rtemp}}
{{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
{{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
{{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
</div>
`
                );
           }        }

        /**
         * Woodward PID Hydro Governor.
         *
         */
        class GovHydroWPID extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroWPID;
                if (null == bucket)
                   cim_data.GovHydroWPID = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroWPID[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroWPID";
                base.parse_element (/<cim:GovHydroWPID.d>([\s\S]*?)<\/cim:GovHydroWPID.d>/g, obj, "d", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gatmax>([\s\S]*?)<\/cim:GovHydroWPID.gatmax>/g, obj, "gatmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gatmin>([\s\S]*?)<\/cim:GovHydroWPID.gatmin>/g, obj, "gatmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gv1>([\s\S]*?)<\/cim:GovHydroWPID.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gv2>([\s\S]*?)<\/cim:GovHydroWPID.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gv3>([\s\S]*?)<\/cim:GovHydroWPID.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.kd>([\s\S]*?)<\/cim:GovHydroWPID.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.ki>([\s\S]*?)<\/cim:GovHydroWPID.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.kp>([\s\S]*?)<\/cim:GovHydroWPID.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.mwbase>([\s\S]*?)<\/cim:GovHydroWPID.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pgv1>([\s\S]*?)<\/cim:GovHydroWPID.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pgv2>([\s\S]*?)<\/cim:GovHydroWPID.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pgv3>([\s\S]*?)<\/cim:GovHydroWPID.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pmax>([\s\S]*?)<\/cim:GovHydroWPID.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pmin>([\s\S]*?)<\/cim:GovHydroWPID.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.reg>([\s\S]*?)<\/cim:GovHydroWPID.reg>/g, obj, "reg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.ta>([\s\S]*?)<\/cim:GovHydroWPID.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.tb>([\s\S]*?)<\/cim:GovHydroWPID.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.treg>([\s\S]*?)<\/cim:GovHydroWPID.treg>/g, obj, "treg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.tw>([\s\S]*?)<\/cim:GovHydroWPID.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.velmax>([\s\S]*?)<\/cim:GovHydroWPID.velmax>/g, obj, "velmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.velmin>([\s\S]*?)<\/cim:GovHydroWPID.velmin>/g, obj, "velmin", base.to_string, sub, context);

                var bucket = context.parsed.GovHydroWPID;
                if (null == bucket)
                   context.parsed.GovHydroWPID = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroWPID", "d", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gatmax", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gatmin", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gv1", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gv2", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gv3", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "kd", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "ki", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "kp", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pmax", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pmin", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "reg", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "ta", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "tb", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "treg", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "tw", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "velmax", base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "velmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroWPID_collapse" aria-expanded="true" aria-controls="GovHydroWPID_collapse">GovHydroWPID</a>
<div id="GovHydroWPID_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#d}}<div><b>d</b>: {{d}}</div>{{/d}}
{{#gatmax}}<div><b>gatmax</b>: {{gatmax}}</div>{{/gatmax}}
{{#gatmin}}<div><b>gatmin</b>: {{gatmin}}</div>{{/gatmin}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
{{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
{{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#reg}}<div><b>reg</b>: {{reg}}</div>{{/reg}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
{{#treg}}<div><b>treg</b>: {{treg}}</div>{{/treg}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
{{#velmax}}<div><b>velmax</b>: {{velmax}}</div>{{/velmax}}
{{#velmin}}<div><b>velmin</b>: {{velmin}}</div>{{/velmin}}
</div>
`
                );
           }        }

        /**
         * Detailed electro-hydraulic governor for steam unit.
         *
         */
        class GovSteamFV4 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteamFV4;
                if (null == bucket)
                   cim_data.GovSteamFV4 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteamFV4[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamFV4";
                base.parse_element (/<cim:GovSteamFV4.cpsmn>([\s\S]*?)<\/cim:GovSteamFV4.cpsmn>/g, obj, "cpsmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.cpsmx>([\s\S]*?)<\/cim:GovSteamFV4.cpsmx>/g, obj, "cpsmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.crmn>([\s\S]*?)<\/cim:GovSteamFV4.crmn>/g, obj, "crmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.crmx>([\s\S]*?)<\/cim:GovSteamFV4.crmx>/g, obj, "crmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kdc>([\s\S]*?)<\/cim:GovSteamFV4.kdc>/g, obj, "kdc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kf1>([\s\S]*?)<\/cim:GovSteamFV4.kf1>/g, obj, "kf1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kf3>([\s\S]*?)<\/cim:GovSteamFV4.kf3>/g, obj, "kf3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.khp>([\s\S]*?)<\/cim:GovSteamFV4.khp>/g, obj, "khp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kic>([\s\S]*?)<\/cim:GovSteamFV4.kic>/g, obj, "kic", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kip>([\s\S]*?)<\/cim:GovSteamFV4.kip>/g, obj, "kip", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kit>([\s\S]*?)<\/cim:GovSteamFV4.kit>/g, obj, "kit", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kmp1>([\s\S]*?)<\/cim:GovSteamFV4.kmp1>/g, obj, "kmp1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kmp2>([\s\S]*?)<\/cim:GovSteamFV4.kmp2>/g, obj, "kmp2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kpc>([\s\S]*?)<\/cim:GovSteamFV4.kpc>/g, obj, "kpc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kpp>([\s\S]*?)<\/cim:GovSteamFV4.kpp>/g, obj, "kpp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kpt>([\s\S]*?)<\/cim:GovSteamFV4.kpt>/g, obj, "kpt", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.krc>([\s\S]*?)<\/cim:GovSteamFV4.krc>/g, obj, "krc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ksh>([\s\S]*?)<\/cim:GovSteamFV4.ksh>/g, obj, "ksh", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.lpi>([\s\S]*?)<\/cim:GovSteamFV4.lpi>/g, obj, "lpi", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.lps>([\s\S]*?)<\/cim:GovSteamFV4.lps>/g, obj, "lps", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.mnef>([\s\S]*?)<\/cim:GovSteamFV4.mnef>/g, obj, "mnef", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.mxef>([\s\S]*?)<\/cim:GovSteamFV4.mxef>/g, obj, "mxef", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.pr1>([\s\S]*?)<\/cim:GovSteamFV4.pr1>/g, obj, "pr1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.pr2>([\s\S]*?)<\/cim:GovSteamFV4.pr2>/g, obj, "pr2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.psmn>([\s\S]*?)<\/cim:GovSteamFV4.psmn>/g, obj, "psmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.rsmimn>([\s\S]*?)<\/cim:GovSteamFV4.rsmimn>/g, obj, "rsmimn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.rsmimx>([\s\S]*?)<\/cim:GovSteamFV4.rsmimx>/g, obj, "rsmimx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.rvgmn>([\s\S]*?)<\/cim:GovSteamFV4.rvgmn>/g, obj, "rvgmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.rvgmx>([\s\S]*?)<\/cim:GovSteamFV4.rvgmx>/g, obj, "rvgmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.srmn>([\s\S]*?)<\/cim:GovSteamFV4.srmn>/g, obj, "srmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.srmx>([\s\S]*?)<\/cim:GovSteamFV4.srmx>/g, obj, "srmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.srsmp>([\s\S]*?)<\/cim:GovSteamFV4.srsmp>/g, obj, "srsmp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.svmn>([\s\S]*?)<\/cim:GovSteamFV4.svmn>/g, obj, "svmn", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamFV4.svmx>([\s\S]*?)<\/cim:GovSteamFV4.svmx>/g, obj, "svmx", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ta>([\s\S]*?)<\/cim:GovSteamFV4.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tam>([\s\S]*?)<\/cim:GovSteamFV4.tam>/g, obj, "tam", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tc>([\s\S]*?)<\/cim:GovSteamFV4.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tcm>([\s\S]*?)<\/cim:GovSteamFV4.tcm>/g, obj, "tcm", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tdc>([\s\S]*?)<\/cim:GovSteamFV4.tdc>/g, obj, "tdc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tf1>([\s\S]*?)<\/cim:GovSteamFV4.tf1>/g, obj, "tf1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tf2>([\s\S]*?)<\/cim:GovSteamFV4.tf2>/g, obj, "tf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.thp>([\s\S]*?)<\/cim:GovSteamFV4.thp>/g, obj, "thp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tmp>([\s\S]*?)<\/cim:GovSteamFV4.tmp>/g, obj, "tmp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.trh>([\s\S]*?)<\/cim:GovSteamFV4.trh>/g, obj, "trh", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tv>([\s\S]*?)<\/cim:GovSteamFV4.tv>/g, obj, "tv", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ty>([\s\S]*?)<\/cim:GovSteamFV4.ty>/g, obj, "ty", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.y>([\s\S]*?)<\/cim:GovSteamFV4.y>/g, obj, "y", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.yhpmn>([\s\S]*?)<\/cim:GovSteamFV4.yhpmn>/g, obj, "yhpmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.yhpmx>([\s\S]*?)<\/cim:GovSteamFV4.yhpmx>/g, obj, "yhpmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ympmn>([\s\S]*?)<\/cim:GovSteamFV4.ympmn>/g, obj, "ympmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ympmx>([\s\S]*?)<\/cim:GovSteamFV4.ympmx>/g, obj, "ympmx", base.to_string, sub, context);

                var bucket = context.parsed.GovSteamFV4;
                if (null == bucket)
                   context.parsed.GovSteamFV4 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamFV4", "cpsmn", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "cpsmx", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "crmn", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "crmx", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kdc", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kf1", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kf3", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "khp", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kic", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kip", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kit", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kmp1", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kmp2", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kpc", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kpp", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kpt", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "krc", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "ksh", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "lpi", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "lps", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "mnef", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "mxef", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "pr1", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "pr2", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "psmn", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "rsmimn", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "rsmimx", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "rvgmn", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "rvgmx", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "srmn", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "srmx", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "srsmp", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "svmn", base.from_float, fields);
                base.export_element (obj, "GovSteamFV4", "svmx", base.from_float, fields);
                base.export_element (obj, "GovSteamFV4", "ta", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tam", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tc", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tcm", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tdc", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tf1", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tf2", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "thp", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tmp", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "trh", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tv", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "ty", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "y", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "yhpmn", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "yhpmx", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "ympmn", base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "ympmx", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteamFV4_collapse" aria-expanded="true" aria-controls="GovSteamFV4_collapse">GovSteamFV4</a>
<div id="GovSteamFV4_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#cpsmn}}<div><b>cpsmn</b>: {{cpsmn}}</div>{{/cpsmn}}
{{#cpsmx}}<div><b>cpsmx</b>: {{cpsmx}}</div>{{/cpsmx}}
{{#crmn}}<div><b>crmn</b>: {{crmn}}</div>{{/crmn}}
{{#crmx}}<div><b>crmx</b>: {{crmx}}</div>{{/crmx}}
{{#kdc}}<div><b>kdc</b>: {{kdc}}</div>{{/kdc}}
{{#kf1}}<div><b>kf1</b>: {{kf1}}</div>{{/kf1}}
{{#kf3}}<div><b>kf3</b>: {{kf3}}</div>{{/kf3}}
{{#khp}}<div><b>khp</b>: {{khp}}</div>{{/khp}}
{{#kic}}<div><b>kic</b>: {{kic}}</div>{{/kic}}
{{#kip}}<div><b>kip</b>: {{kip}}</div>{{/kip}}
{{#kit}}<div><b>kit</b>: {{kit}}</div>{{/kit}}
{{#kmp1}}<div><b>kmp1</b>: {{kmp1}}</div>{{/kmp1}}
{{#kmp2}}<div><b>kmp2</b>: {{kmp2}}</div>{{/kmp2}}
{{#kpc}}<div><b>kpc</b>: {{kpc}}</div>{{/kpc}}
{{#kpp}}<div><b>kpp</b>: {{kpp}}</div>{{/kpp}}
{{#kpt}}<div><b>kpt</b>: {{kpt}}</div>{{/kpt}}
{{#krc}}<div><b>krc</b>: {{krc}}</div>{{/krc}}
{{#ksh}}<div><b>ksh</b>: {{ksh}}</div>{{/ksh}}
{{#lpi}}<div><b>lpi</b>: {{lpi}}</div>{{/lpi}}
{{#lps}}<div><b>lps</b>: {{lps}}</div>{{/lps}}
{{#mnef}}<div><b>mnef</b>: {{mnef}}</div>{{/mnef}}
{{#mxef}}<div><b>mxef</b>: {{mxef}}</div>{{/mxef}}
{{#pr1}}<div><b>pr1</b>: {{pr1}}</div>{{/pr1}}
{{#pr2}}<div><b>pr2</b>: {{pr2}}</div>{{/pr2}}
{{#psmn}}<div><b>psmn</b>: {{psmn}}</div>{{/psmn}}
{{#rsmimn}}<div><b>rsmimn</b>: {{rsmimn}}</div>{{/rsmimn}}
{{#rsmimx}}<div><b>rsmimx</b>: {{rsmimx}}</div>{{/rsmimx}}
{{#rvgmn}}<div><b>rvgmn</b>: {{rvgmn}}</div>{{/rvgmn}}
{{#rvgmx}}<div><b>rvgmx</b>: {{rvgmx}}</div>{{/rvgmx}}
{{#srmn}}<div><b>srmn</b>: {{srmn}}</div>{{/srmn}}
{{#srmx}}<div><b>srmx</b>: {{srmx}}</div>{{/srmx}}
{{#srsmp}}<div><b>srsmp</b>: {{srsmp}}</div>{{/srsmp}}
{{#svmn}}<div><b>svmn</b>: {{svmn}}</div>{{/svmn}}
{{#svmx}}<div><b>svmx</b>: {{svmx}}</div>{{/svmx}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#tam}}<div><b>tam</b>: {{tam}}</div>{{/tam}}
{{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
{{#tcm}}<div><b>tcm</b>: {{tcm}}</div>{{/tcm}}
{{#tdc}}<div><b>tdc</b>: {{tdc}}</div>{{/tdc}}
{{#tf1}}<div><b>tf1</b>: {{tf1}}</div>{{/tf1}}
{{#tf2}}<div><b>tf2</b>: {{tf2}}</div>{{/tf2}}
{{#thp}}<div><b>thp</b>: {{thp}}</div>{{/thp}}
{{#tmp}}<div><b>tmp</b>: {{tmp}}</div>{{/tmp}}
{{#trh}}<div><b>trh</b>: {{trh}}</div>{{/trh}}
{{#tv}}<div><b>tv</b>: {{tv}}</div>{{/tv}}
{{#ty}}<div><b>ty</b>: {{ty}}</div>{{/ty}}
{{#y}}<div><b>y</b>: {{y}}</div>{{/y}}
{{#yhpmn}}<div><b>yhpmn</b>: {{yhpmn}}</div>{{/yhpmn}}
{{#yhpmx}}<div><b>yhpmx</b>: {{yhpmx}}</div>{{/yhpmx}}
{{#ympmn}}<div><b>ympmn</b>: {{ympmn}}</div>{{/ympmn}}
{{#ympmx}}<div><b>ympmx</b>: {{ympmx}}</div>{{/ympmx}}
</div>
`
                );
           }        }

        /**
         * Hydro turbine and governor.
         *
         * Represents plants with straight forward penstock configurations and "three term" electro-hydraulic governors (i.e. Woodard electronic).
         *
         */
        class GovHydroPID2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroPID2;
                if (null == bucket)
                   cim_data.GovHydroPID2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroPID2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroPID2";
                base.parse_element (/<cim:GovHydroPID2.atw>([\s\S]*?)<\/cim:GovHydroPID2.atw>/g, obj, "atw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.d>([\s\S]*?)<\/cim:GovHydroPID2.d>/g, obj, "d", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.feedbackSignal>([\s\S]*?)<\/cim:GovHydroPID2.feedbackSignal>/g, obj, "feedbackSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPID2.g0>([\s\S]*?)<\/cim:GovHydroPID2.g0>/g, obj, "g0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.g1>([\s\S]*?)<\/cim:GovHydroPID2.g1>/g, obj, "g1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.g2>([\s\S]*?)<\/cim:GovHydroPID2.g2>/g, obj, "g2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.gmax>([\s\S]*?)<\/cim:GovHydroPID2.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.gmin>([\s\S]*?)<\/cim:GovHydroPID2.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.kd>([\s\S]*?)<\/cim:GovHydroPID2.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.ki>([\s\S]*?)<\/cim:GovHydroPID2.ki>/g, obj, "ki", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPID2.kp>([\s\S]*?)<\/cim:GovHydroPID2.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.mwbase>([\s\S]*?)<\/cim:GovHydroPID2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.p1>([\s\S]*?)<\/cim:GovHydroPID2.p1>/g, obj, "p1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.p2>([\s\S]*?)<\/cim:GovHydroPID2.p2>/g, obj, "p2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.p3>([\s\S]*?)<\/cim:GovHydroPID2.p3>/g, obj, "p3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.rperm>([\s\S]*?)<\/cim:GovHydroPID2.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.ta>([\s\S]*?)<\/cim:GovHydroPID2.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.tb>([\s\S]*?)<\/cim:GovHydroPID2.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.treg>([\s\S]*?)<\/cim:GovHydroPID2.treg>/g, obj, "treg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.tw>([\s\S]*?)<\/cim:GovHydroPID2.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.velmax>([\s\S]*?)<\/cim:GovHydroPID2.velmax>/g, obj, "velmax", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPID2.velmin>([\s\S]*?)<\/cim:GovHydroPID2.velmin>/g, obj, "velmin", base.to_float, sub, context);

                var bucket = context.parsed.GovHydroPID2;
                if (null == bucket)
                   context.parsed.GovHydroPID2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroPID2", "atw", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "d", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "feedbackSignal", base.from_boolean, fields);
                base.export_element (obj, "GovHydroPID2", "g0", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "g1", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "g2", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "gmax", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "gmin", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "kd", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "ki", base.from_float, fields);
                base.export_element (obj, "GovHydroPID2", "kp", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "p1", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "p2", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "p3", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "rperm", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "ta", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "tb", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "treg", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "tw", base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "velmax", base.from_float, fields);
                base.export_element (obj, "GovHydroPID2", "velmin", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroPID2_collapse" aria-expanded="true" aria-controls="GovHydroPID2_collapse">GovHydroPID2</a>
<div id="GovHydroPID2_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#atw}}<div><b>atw</b>: {{atw}}</div>{{/atw}}
{{#d}}<div><b>d</b>: {{d}}</div>{{/d}}
{{#feedbackSignal}}<div><b>feedbackSignal</b>: {{feedbackSignal}}</div>{{/feedbackSignal}}
{{#g0}}<div><b>g0</b>: {{g0}}</div>{{/g0}}
{{#g1}}<div><b>g1</b>: {{g1}}</div>{{/g1}}
{{#g2}}<div><b>g2</b>: {{g2}}</div>{{/g2}}
{{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
{{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
{{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
{{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
{{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#p1}}<div><b>p1</b>: {{p1}}</div>{{/p1}}
{{#p2}}<div><b>p2</b>: {{p2}}</div>{{/p2}}
{{#p3}}<div><b>p3</b>: {{p3}}</div>{{/p3}}
{{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
{{#treg}}<div><b>treg</b>: {{treg}}</div>{{/treg}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
{{#velmax}}<div><b>velmax</b>: {{velmax}}</div>{{/velmax}}
{{#velmin}}<div><b>velmin</b>: {{velmin}}</div>{{/velmin}}
</div>
`
                );
           }        }

        /**
         * Single shaft gas turbine.
         *
         */
        class GovGAST extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovGAST;
                if (null == bucket)
                   cim_data.GovGAST = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovGAST[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST";
                base.parse_element (/<cim:GovGAST.at>([\s\S]*?)<\/cim:GovGAST.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.dturb>([\s\S]*?)<\/cim:GovGAST.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.kt>([\s\S]*?)<\/cim:GovGAST.kt>/g, obj, "kt", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.mwbase>([\s\S]*?)<\/cim:GovGAST.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.r>([\s\S]*?)<\/cim:GovGAST.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.t1>([\s\S]*?)<\/cim:GovGAST.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.t2>([\s\S]*?)<\/cim:GovGAST.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.t3>([\s\S]*?)<\/cim:GovGAST.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.vmax>([\s\S]*?)<\/cim:GovGAST.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.vmin>([\s\S]*?)<\/cim:GovGAST.vmin>/g, obj, "vmin", base.to_string, sub, context);

                var bucket = context.parsed.GovGAST;
                if (null == bucket)
                   context.parsed.GovGAST = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST", "at", base.from_string, fields);
                base.export_element (obj, "GovGAST", "dturb", base.from_string, fields);
                base.export_element (obj, "GovGAST", "kt", base.from_string, fields);
                base.export_element (obj, "GovGAST", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovGAST", "r", base.from_string, fields);
                base.export_element (obj, "GovGAST", "t1", base.from_string, fields);
                base.export_element (obj, "GovGAST", "t2", base.from_string, fields);
                base.export_element (obj, "GovGAST", "t3", base.from_string, fields);
                base.export_element (obj, "GovGAST", "vmax", base.from_string, fields);
                base.export_element (obj, "GovGAST", "vmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovGAST_collapse" aria-expanded="true" aria-controls="GovGAST_collapse">GovGAST</a>
<div id="GovGAST_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
{{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
{{#kt}}<div><b>kt</b>: {{kt}}</div>{{/kt}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
{{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
</div>
`
                );
           }        }

        /**
         * Simplified model  of boiler and steam turbine with PID governor.
         *
         */
        class GovSteamEU extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteamEU;
                if (null == bucket)
                   cim_data.GovSteamEU = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteamEU[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamEU";
                base.parse_element (/<cim:GovSteamEU.chc>([\s\S]*?)<\/cim:GovSteamEU.chc>/g, obj, "chc", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamEU.cho>([\s\S]*?)<\/cim:GovSteamEU.cho>/g, obj, "cho", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamEU.cic>([\s\S]*?)<\/cim:GovSteamEU.cic>/g, obj, "cic", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.cio>([\s\S]*?)<\/cim:GovSteamEU.cio>/g, obj, "cio", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.db1>([\s\S]*?)<\/cim:GovSteamEU.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.db2>([\s\S]*?)<\/cim:GovSteamEU.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.hhpmax>([\s\S]*?)<\/cim:GovSteamEU.hhpmax>/g, obj, "hhpmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.ke>([\s\S]*?)<\/cim:GovSteamEU.ke>/g, obj, "ke", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.kfcor>([\s\S]*?)<\/cim:GovSteamEU.kfcor>/g, obj, "kfcor", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.khp>([\s\S]*?)<\/cim:GovSteamEU.khp>/g, obj, "khp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.klp>([\s\S]*?)<\/cim:GovSteamEU.klp>/g, obj, "klp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.kwcor>([\s\S]*?)<\/cim:GovSteamEU.kwcor>/g, obj, "kwcor", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.mwbase>([\s\S]*?)<\/cim:GovSteamEU.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.pmax>([\s\S]*?)<\/cim:GovSteamEU.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.prhmax>([\s\S]*?)<\/cim:GovSteamEU.prhmax>/g, obj, "prhmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.simx>([\s\S]*?)<\/cim:GovSteamEU.simx>/g, obj, "simx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tb>([\s\S]*?)<\/cim:GovSteamEU.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tdp>([\s\S]*?)<\/cim:GovSteamEU.tdp>/g, obj, "tdp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.ten>([\s\S]*?)<\/cim:GovSteamEU.ten>/g, obj, "ten", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tf>([\s\S]*?)<\/cim:GovSteamEU.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tfp>([\s\S]*?)<\/cim:GovSteamEU.tfp>/g, obj, "tfp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.thp>([\s\S]*?)<\/cim:GovSteamEU.thp>/g, obj, "thp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tip>([\s\S]*?)<\/cim:GovSteamEU.tip>/g, obj, "tip", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tlp>([\s\S]*?)<\/cim:GovSteamEU.tlp>/g, obj, "tlp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tp>([\s\S]*?)<\/cim:GovSteamEU.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.trh>([\s\S]*?)<\/cim:GovSteamEU.trh>/g, obj, "trh", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tvhp>([\s\S]*?)<\/cim:GovSteamEU.tvhp>/g, obj, "tvhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tvip>([\s\S]*?)<\/cim:GovSteamEU.tvip>/g, obj, "tvip", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tw>([\s\S]*?)<\/cim:GovSteamEU.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wfmax>([\s\S]*?)<\/cim:GovSteamEU.wfmax>/g, obj, "wfmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wfmin>([\s\S]*?)<\/cim:GovSteamEU.wfmin>/g, obj, "wfmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wmax1>([\s\S]*?)<\/cim:GovSteamEU.wmax1>/g, obj, "wmax1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wmax2>([\s\S]*?)<\/cim:GovSteamEU.wmax2>/g, obj, "wmax2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wwmax>([\s\S]*?)<\/cim:GovSteamEU.wwmax>/g, obj, "wwmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wwmin>([\s\S]*?)<\/cim:GovSteamEU.wwmin>/g, obj, "wwmin", base.to_string, sub, context);

                var bucket = context.parsed.GovSteamEU;
                if (null == bucket)
                   context.parsed.GovSteamEU = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamEU", "chc", base.from_float, fields);
                base.export_element (obj, "GovSteamEU", "cho", base.from_float, fields);
                base.export_element (obj, "GovSteamEU", "cic", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "cio", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "db1", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "db2", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "hhpmax", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "ke", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "kfcor", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "khp", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "klp", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "kwcor", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "pmax", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "prhmax", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "simx", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tb", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tdp", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "ten", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tf", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tfp", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "thp", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tip", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tlp", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tp", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "trh", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tvhp", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tvip", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tw", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wfmax", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wfmin", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wmax1", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wmax2", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wwmax", base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wwmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteamEU_collapse" aria-expanded="true" aria-controls="GovSteamEU_collapse">GovSteamEU</a>
<div id="GovSteamEU_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#chc}}<div><b>chc</b>: {{chc}}</div>{{/chc}}
{{#cho}}<div><b>cho</b>: {{cho}}</div>{{/cho}}
{{#cic}}<div><b>cic</b>: {{cic}}</div>{{/cic}}
{{#cio}}<div><b>cio</b>: {{cio}}</div>{{/cio}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#hhpmax}}<div><b>hhpmax</b>: {{hhpmax}}</div>{{/hhpmax}}
{{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
{{#kfcor}}<div><b>kfcor</b>: {{kfcor}}</div>{{/kfcor}}
{{#khp}}<div><b>khp</b>: {{khp}}</div>{{/khp}}
{{#klp}}<div><b>klp</b>: {{klp}}</div>{{/klp}}
{{#kwcor}}<div><b>kwcor</b>: {{kwcor}}</div>{{/kwcor}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#prhmax}}<div><b>prhmax</b>: {{prhmax}}</div>{{/prhmax}}
{{#simx}}<div><b>simx</b>: {{simx}}</div>{{/simx}}
{{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
{{#tdp}}<div><b>tdp</b>: {{tdp}}</div>{{/tdp}}
{{#ten}}<div><b>ten</b>: {{ten}}</div>{{/ten}}
{{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
{{#tfp}}<div><b>tfp</b>: {{tfp}}</div>{{/tfp}}
{{#thp}}<div><b>thp</b>: {{thp}}</div>{{/thp}}
{{#tip}}<div><b>tip</b>: {{tip}}</div>{{/tip}}
{{#tlp}}<div><b>tlp</b>: {{tlp}}</div>{{/tlp}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#trh}}<div><b>trh</b>: {{trh}}</div>{{/trh}}
{{#tvhp}}<div><b>tvhp</b>: {{tvhp}}</div>{{/tvhp}}
{{#tvip}}<div><b>tvip</b>: {{tvip}}</div>{{/tvip}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
{{#wfmax}}<div><b>wfmax</b>: {{wfmax}}</div>{{/wfmax}}
{{#wfmin}}<div><b>wfmin</b>: {{wfmin}}</div>{{/wfmin}}
{{#wmax1}}<div><b>wmax1</b>: {{wmax1}}</div>{{/wmax1}}
{{#wmax2}}<div><b>wmax2</b>: {{wmax2}}</div>{{/wmax2}}
{{#wwmax}}<div><b>wwmax</b>: {{wwmax}}</div>{{/wwmax}}
{{#wwmin}}<div><b>wwmin</b>: {{wwmin}}</div>{{/wwmin}}
</div>
`
                );
           }        }

        /**
         * Modified IEEE Hydro Governor-Turbine Model.
         *
         * This model differs from that defined in the IEEE modeling guideline paper in that the limits on gate position and velocity do not permit "wind up" of the upstream signals.
         *
         */
        class GovHydro3 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydro3;
                if (null == bucket)
                   cim_data.GovHydro3 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydro3[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydro3";
                base.parse_element (/<cim:GovHydro3.at>([\s\S]*?)<\/cim:GovHydro3.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.db1>([\s\S]*?)<\/cim:GovHydro3.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.db2>([\s\S]*?)<\/cim:GovHydro3.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.dturb>([\s\S]*?)<\/cim:GovHydro3.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.eps>([\s\S]*?)<\/cim:GovHydro3.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.governorControl>([\s\S]*?)<\/cim:GovHydro3.governorControl>/g, obj, "governorControl", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydro3.gv1>([\s\S]*?)<\/cim:GovHydro3.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv2>([\s\S]*?)<\/cim:GovHydro3.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv3>([\s\S]*?)<\/cim:GovHydro3.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv4>([\s\S]*?)<\/cim:GovHydro3.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv5>([\s\S]*?)<\/cim:GovHydro3.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv6>([\s\S]*?)<\/cim:GovHydro3.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.h0>([\s\S]*?)<\/cim:GovHydro3.h0>/g, obj, "h0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.k1>([\s\S]*?)<\/cim:GovHydro3.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.k2>([\s\S]*?)<\/cim:GovHydro3.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.kg>([\s\S]*?)<\/cim:GovHydro3.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.ki>([\s\S]*?)<\/cim:GovHydro3.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.mwbase>([\s\S]*?)<\/cim:GovHydro3.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv1>([\s\S]*?)<\/cim:GovHydro3.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv2>([\s\S]*?)<\/cim:GovHydro3.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv3>([\s\S]*?)<\/cim:GovHydro3.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv4>([\s\S]*?)<\/cim:GovHydro3.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv5>([\s\S]*?)<\/cim:GovHydro3.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv6>([\s\S]*?)<\/cim:GovHydro3.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pmax>([\s\S]*?)<\/cim:GovHydro3.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pmin>([\s\S]*?)<\/cim:GovHydro3.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.qnl>([\s\S]*?)<\/cim:GovHydro3.qnl>/g, obj, "qnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.relec>([\s\S]*?)<\/cim:GovHydro3.relec>/g, obj, "relec", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.rgate>([\s\S]*?)<\/cim:GovHydro3.rgate>/g, obj, "rgate", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.td>([\s\S]*?)<\/cim:GovHydro3.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.tf>([\s\S]*?)<\/cim:GovHydro3.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.tp>([\s\S]*?)<\/cim:GovHydro3.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.tt>([\s\S]*?)<\/cim:GovHydro3.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.tw>([\s\S]*?)<\/cim:GovHydro3.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.velcl>([\s\S]*?)<\/cim:GovHydro3.velcl>/g, obj, "velcl", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydro3.velop>([\s\S]*?)<\/cim:GovHydro3.velop>/g, obj, "velop", base.to_float, sub, context);

                var bucket = context.parsed.GovHydro3;
                if (null == bucket)
                   context.parsed.GovHydro3 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydro3", "at", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "db1", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "db2", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "dturb", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "eps", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "governorControl", base.from_boolean, fields);
                base.export_element (obj, "GovHydro3", "gv1", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv2", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv3", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv4", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv5", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv6", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "h0", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "k1", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "k2", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "kg", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "ki", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv4", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv5", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv6", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pmax", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pmin", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "qnl", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "relec", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "rgate", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "td", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "tf", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "tp", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "tt", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "tw", base.from_string, fields);
                base.export_element (obj, "GovHydro3", "velcl", base.from_float, fields);
                base.export_element (obj, "GovHydro3", "velop", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydro3_collapse" aria-expanded="true" aria-controls="GovHydro3_collapse">GovHydro3</a>
<div id="GovHydro3_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
{{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
{{#governorControl}}<div><b>governorControl</b>: {{governorControl}}</div>{{/governorControl}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
{{#h0}}<div><b>h0</b>: {{h0}}</div>{{/h0}}
{{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
{{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
{{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
{{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
{{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
{{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#qnl}}<div><b>qnl</b>: {{qnl}}</div>{{/qnl}}
{{#relec}}<div><b>relec</b>: {{relec}}</div>{{/relec}}
{{#rgate}}<div><b>rgate</b>: {{rgate}}</div>{{/rgate}}
{{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
{{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
{{#velcl}}<div><b>velcl</b>: {{velcl}}</div>{{/velcl}}
{{#velop}}<div><b>velop</b>: {{velop}}</div>{{/velop}}
</div>
`
                );
           }        }

        /**
         * IEEE steam turbine governor model.
         *
         * Ref<font color="#0f0f0f">erence: IEEE Transactions on Power Apparatus and Systems</font>
         *
         */
        class GovSteamIEEE1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteamIEEE1;
                if (null == bucket)
                   cim_data.GovSteamIEEE1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteamIEEE1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamIEEE1";
                base.parse_element (/<cim:GovSteamIEEE1.k>([\s\S]*?)<\/cim:GovSteamIEEE1.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k1>([\s\S]*?)<\/cim:GovSteamIEEE1.k1>/g, obj, "k1", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k2>([\s\S]*?)<\/cim:GovSteamIEEE1.k2>/g, obj, "k2", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k3>([\s\S]*?)<\/cim:GovSteamIEEE1.k3>/g, obj, "k3", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k4>([\s\S]*?)<\/cim:GovSteamIEEE1.k4>/g, obj, "k4", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k5>([\s\S]*?)<\/cim:GovSteamIEEE1.k5>/g, obj, "k5", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k6>([\s\S]*?)<\/cim:GovSteamIEEE1.k6>/g, obj, "k6", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k7>([\s\S]*?)<\/cim:GovSteamIEEE1.k7>/g, obj, "k7", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k8>([\s\S]*?)<\/cim:GovSteamIEEE1.k8>/g, obj, "k8", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.mwbase>([\s\S]*?)<\/cim:GovSteamIEEE1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.pmax>([\s\S]*?)<\/cim:GovSteamIEEE1.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.pmin>([\s\S]*?)<\/cim:GovSteamIEEE1.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t1>([\s\S]*?)<\/cim:GovSteamIEEE1.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t2>([\s\S]*?)<\/cim:GovSteamIEEE1.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t3>([\s\S]*?)<\/cim:GovSteamIEEE1.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t4>([\s\S]*?)<\/cim:GovSteamIEEE1.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t5>([\s\S]*?)<\/cim:GovSteamIEEE1.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t6>([\s\S]*?)<\/cim:GovSteamIEEE1.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t7>([\s\S]*?)<\/cim:GovSteamIEEE1.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.uc>([\s\S]*?)<\/cim:GovSteamIEEE1.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.uo>([\s\S]*?)<\/cim:GovSteamIEEE1.uo>/g, obj, "uo", base.to_float, sub, context);

                var bucket = context.parsed.GovSteamIEEE1;
                if (null == bucket)
                   context.parsed.GovSteamIEEE1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamIEEE1", "k", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "k1", base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k2", base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k3", base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k4", base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k5", base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k6", base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k7", base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k8", base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "pmax", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "pmin", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t1", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t2", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t3", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t4", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t5", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t6", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t7", base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "uc", base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "uo", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteamIEEE1_collapse" aria-expanded="true" aria-controls="GovSteamIEEE1_collapse">GovSteamIEEE1</a>
<div id="GovSteamIEEE1_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
{{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
{{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
{{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
{{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
{{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
{{#k6}}<div><b>k6</b>: {{k6}}</div>{{/k6}}
{{#k7}}<div><b>k7</b>: {{k7}}</div>{{/k7}}
{{#k8}}<div><b>k8</b>: {{k8}}</div>{{/k8}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
{{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
{{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
{{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
{{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
{{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
</div>
`
                );
           }        }

        /**
         * Woodward Gas turbine governor model.
         *
         */
        class GovGASTWD extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovGASTWD;
                if (null == bucket)
                   cim_data.GovGASTWD = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovGASTWD[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGASTWD";
                base.parse_element (/<cim:GovGASTWD.a>([\s\S]*?)<\/cim:GovGASTWD.a>/g, obj, "a", base.to_float, sub, context);
                base.parse_element (/<cim:GovGASTWD.af1>([\s\S]*?)<\/cim:GovGASTWD.af1>/g, obj, "af1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.af2>([\s\S]*?)<\/cim:GovGASTWD.af2>/g, obj, "af2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.b>([\s\S]*?)<\/cim:GovGASTWD.b>/g, obj, "b", base.to_float, sub, context);
                base.parse_element (/<cim:GovGASTWD.bf1>([\s\S]*?)<\/cim:GovGASTWD.bf1>/g, obj, "bf1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.bf2>([\s\S]*?)<\/cim:GovGASTWD.bf2>/g, obj, "bf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.c>([\s\S]*?)<\/cim:GovGASTWD.c>/g, obj, "c", base.to_float, sub, context);
                base.parse_element (/<cim:GovGASTWD.cf2>([\s\S]*?)<\/cim:GovGASTWD.cf2>/g, obj, "cf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.ecr>([\s\S]*?)<\/cim:GovGASTWD.ecr>/g, obj, "ecr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.etd>([\s\S]*?)<\/cim:GovGASTWD.etd>/g, obj, "etd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.k3>([\s\S]*?)<\/cim:GovGASTWD.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.k4>([\s\S]*?)<\/cim:GovGASTWD.k4>/g, obj, "k4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.k5>([\s\S]*?)<\/cim:GovGASTWD.k5>/g, obj, "k5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.k6>([\s\S]*?)<\/cim:GovGASTWD.k6>/g, obj, "k6", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.kd>([\s\S]*?)<\/cim:GovGASTWD.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.kdroop>([\s\S]*?)<\/cim:GovGASTWD.kdroop>/g, obj, "kdroop", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.kf>([\s\S]*?)<\/cim:GovGASTWD.kf>/g, obj, "kf", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.ki>([\s\S]*?)<\/cim:GovGASTWD.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.kp>([\s\S]*?)<\/cim:GovGASTWD.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.mwbase>([\s\S]*?)<\/cim:GovGASTWD.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.t>([\s\S]*?)<\/cim:GovGASTWD.t>/g, obj, "t", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.t3>([\s\S]*?)<\/cim:GovGASTWD.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.t4>([\s\S]*?)<\/cim:GovGASTWD.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.t5>([\s\S]*?)<\/cim:GovGASTWD.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tc>([\s\S]*?)<\/cim:GovGASTWD.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tcd>([\s\S]*?)<\/cim:GovGASTWD.tcd>/g, obj, "tcd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.td>([\s\S]*?)<\/cim:GovGASTWD.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tf>([\s\S]*?)<\/cim:GovGASTWD.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tmax>([\s\S]*?)<\/cim:GovGASTWD.tmax>/g, obj, "tmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tmin>([\s\S]*?)<\/cim:GovGASTWD.tmin>/g, obj, "tmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tr>([\s\S]*?)<\/cim:GovGASTWD.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.trate>([\s\S]*?)<\/cim:GovGASTWD.trate>/g, obj, "trate", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tt>([\s\S]*?)<\/cim:GovGASTWD.tt>/g, obj, "tt", base.to_string, sub, context);

                var bucket = context.parsed.GovGASTWD;
                if (null == bucket)
                   context.parsed.GovGASTWD = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGASTWD", "a", base.from_float, fields);
                base.export_element (obj, "GovGASTWD", "af1", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "af2", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "b", base.from_float, fields);
                base.export_element (obj, "GovGASTWD", "bf1", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "bf2", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "c", base.from_float, fields);
                base.export_element (obj, "GovGASTWD", "cf2", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "ecr", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "etd", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "k3", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "k4", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "k5", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "k6", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "kd", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "kdroop", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "kf", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "ki", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "kp", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "t", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "t3", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "t4", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "t5", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tc", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tcd", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "td", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tf", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tmax", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tmin", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tr", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "trate", base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tt", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovGASTWD_collapse" aria-expanded="true" aria-controls="GovGASTWD_collapse">GovGASTWD</a>
<div id="GovGASTWD_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
{{#af1}}<div><b>af1</b>: {{af1}}</div>{{/af1}}
{{#af2}}<div><b>af2</b>: {{af2}}</div>{{/af2}}
{{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
{{#bf1}}<div><b>bf1</b>: {{bf1}}</div>{{/bf1}}
{{#bf2}}<div><b>bf2</b>: {{bf2}}</div>{{/bf2}}
{{#c}}<div><b>c</b>: {{c}}</div>{{/c}}
{{#cf2}}<div><b>cf2</b>: {{cf2}}</div>{{/cf2}}
{{#ecr}}<div><b>ecr</b>: {{ecr}}</div>{{/ecr}}
{{#etd}}<div><b>etd</b>: {{etd}}</div>{{/etd}}
{{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
{{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
{{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
{{#k6}}<div><b>k6</b>: {{k6}}</div>{{/k6}}
{{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
{{#kdroop}}<div><b>kdroop</b>: {{kdroop}}</div>{{/kdroop}}
{{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
{{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
{{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#t}}<div><b>t</b>: {{t}}</div>{{/t}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
{{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
{{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
{{#tcd}}<div><b>tcd</b>: {{tcd}}</div>{{/tcd}}
{{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
{{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
{{#tmax}}<div><b>tmax</b>: {{tmax}}</div>{{/tmax}}
{{#tmin}}<div><b>tmin</b>: {{tmin}}</div>{{/tmin}}
{{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
{{#trate}}<div><b>trate</b>: {{trate}}</div>{{/trate}}
{{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
</div>
`
                );
           }        }

        /**
         * Generic turbogas with acceleration and temperature controller.
         *
         */
        class GovGAST3 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovGAST3;
                if (null == bucket)
                   cim_data.GovGAST3 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovGAST3[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST3";
                base.parse_element (/<cim:GovGAST3.bca>([\s\S]*?)<\/cim:GovGAST3.bca>/g, obj, "bca", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.bp>([\s\S]*?)<\/cim:GovGAST3.bp>/g, obj, "bp", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.dtc>([\s\S]*?)<\/cim:GovGAST3.dtc>/g, obj, "dtc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.ka>([\s\S]*?)<\/cim:GovGAST3.ka>/g, obj, "ka", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.kac>([\s\S]*?)<\/cim:GovGAST3.kac>/g, obj, "kac", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.kca>([\s\S]*?)<\/cim:GovGAST3.kca>/g, obj, "kca", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.ksi>([\s\S]*?)<\/cim:GovGAST3.ksi>/g, obj, "ksi", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.ky>([\s\S]*?)<\/cim:GovGAST3.ky>/g, obj, "ky", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.mnef>([\s\S]*?)<\/cim:GovGAST3.mnef>/g, obj, "mnef", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.mxef>([\s\S]*?)<\/cim:GovGAST3.mxef>/g, obj, "mxef", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.rcmn>([\s\S]*?)<\/cim:GovGAST3.rcmn>/g, obj, "rcmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.rcmx>([\s\S]*?)<\/cim:GovGAST3.rcmx>/g, obj, "rcmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tac>([\s\S]*?)<\/cim:GovGAST3.tac>/g, obj, "tac", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tc>([\s\S]*?)<\/cim:GovGAST3.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.td>([\s\S]*?)<\/cim:GovGAST3.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tfen>([\s\S]*?)<\/cim:GovGAST3.tfen>/g, obj, "tfen", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tg>([\s\S]*?)<\/cim:GovGAST3.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tsi>([\s\S]*?)<\/cim:GovGAST3.tsi>/g, obj, "tsi", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tt>([\s\S]*?)<\/cim:GovGAST3.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.ttc>([\s\S]*?)<\/cim:GovGAST3.ttc>/g, obj, "ttc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.ty>([\s\S]*?)<\/cim:GovGAST3.ty>/g, obj, "ty", base.to_string, sub, context);

                var bucket = context.parsed.GovGAST3;
                if (null == bucket)
                   context.parsed.GovGAST3 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST3", "bca", base.from_float, fields);
                base.export_element (obj, "GovGAST3", "bp", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "dtc", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "ka", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "kac", base.from_float, fields);
                base.export_element (obj, "GovGAST3", "kca", base.from_float, fields);
                base.export_element (obj, "GovGAST3", "ksi", base.from_float, fields);
                base.export_element (obj, "GovGAST3", "ky", base.from_float, fields);
                base.export_element (obj, "GovGAST3", "mnef", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "mxef", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "rcmn", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "rcmx", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tac", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tc", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "td", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tfen", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tg", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tsi", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tt", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "ttc", base.from_string, fields);
                base.export_element (obj, "GovGAST3", "ty", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovGAST3_collapse" aria-expanded="true" aria-controls="GovGAST3_collapse">GovGAST3</a>
<div id="GovGAST3_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#bca}}<div><b>bca</b>: {{bca}}</div>{{/bca}}
{{#bp}}<div><b>bp</b>: {{bp}}</div>{{/bp}}
{{#dtc}}<div><b>dtc</b>: {{dtc}}</div>{{/dtc}}
{{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
{{#kac}}<div><b>kac</b>: {{kac}}</div>{{/kac}}
{{#kca}}<div><b>kca</b>: {{kca}}</div>{{/kca}}
{{#ksi}}<div><b>ksi</b>: {{ksi}}</div>{{/ksi}}
{{#ky}}<div><b>ky</b>: {{ky}}</div>{{/ky}}
{{#mnef}}<div><b>mnef</b>: {{mnef}}</div>{{/mnef}}
{{#mxef}}<div><b>mxef</b>: {{mxef}}</div>{{/mxef}}
{{#rcmn}}<div><b>rcmn</b>: {{rcmn}}</div>{{/rcmn}}
{{#rcmx}}<div><b>rcmx</b>: {{rcmx}}</div>{{/rcmx}}
{{#tac}}<div><b>tac</b>: {{tac}}</div>{{/tac}}
{{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
{{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
{{#tfen}}<div><b>tfen</b>: {{tfen}}</div>{{/tfen}}
{{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
{{#tsi}}<div><b>tsi</b>: {{tsi}}</div>{{/tsi}}
{{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
{{#ttc}}<div><b>ttc</b>: {{ttc}}</div>{{/ttc}}
{{#ty}}<div><b>ty</b>: {{ty}}</div>{{/ty}}
</div>
`
                );
           }        }

        /**
         * Steam turbine governor with reheat time constants and modeling of the effects of fast valve closing to reduce mechanical power.
         *
         */
        class GovSteamFV2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteamFV2;
                if (null == bucket)
                   cim_data.GovSteamFV2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteamFV2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamFV2";
                base.parse_element (/<cim:GovSteamFV2.dt>([\s\S]*?)<\/cim:GovSteamFV2.dt>/g, obj, "dt", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.k>([\s\S]*?)<\/cim:GovSteamFV2.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.mwbase>([\s\S]*?)<\/cim:GovSteamFV2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.r>([\s\S]*?)<\/cim:GovSteamFV2.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.t1>([\s\S]*?)<\/cim:GovSteamFV2.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.t3>([\s\S]*?)<\/cim:GovSteamFV2.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.ta>([\s\S]*?)<\/cim:GovSteamFV2.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.tb>([\s\S]*?)<\/cim:GovSteamFV2.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.tc>([\s\S]*?)<\/cim:GovSteamFV2.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.ti>([\s\S]*?)<\/cim:GovSteamFV2.ti>/g, obj, "ti", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.tt>([\s\S]*?)<\/cim:GovSteamFV2.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.vmax>([\s\S]*?)<\/cim:GovSteamFV2.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.vmin>([\s\S]*?)<\/cim:GovSteamFV2.vmin>/g, obj, "vmin", base.to_string, sub, context);

                var bucket = context.parsed.GovSteamFV2;
                if (null == bucket)
                   context.parsed.GovSteamFV2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamFV2", "dt", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "k", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "r", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "t1", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "t3", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "ta", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "tb", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "tc", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "ti", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "tt", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "vmax", base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "vmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteamFV2_collapse" aria-expanded="true" aria-controls="GovSteamFV2_collapse">GovSteamFV2</a>
<div id="GovSteamFV2_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#dt}}<div><b>dt</b>: {{dt}}</div>{{/dt}}
{{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
{{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
{{#ti}}<div><b>ti</b>: {{ti}}</div>{{/ti}}
{{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
{{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
{{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
</div>
`
                );
           }        }

        /**
         * Detailed hydro unit - Pelton model.
         *
         * This model can be used to represent the dynamic related to water tunnel and surge chamber.
         *
         */
        class GovHydroPelton extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroPelton;
                if (null == bucket)
                   cim_data.GovHydroPelton = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroPelton[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroPelton";
                base.parse_element (/<cim:GovHydroPelton.av0>([\s\S]*?)<\/cim:GovHydroPelton.av0>/g, obj, "av0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.av1>([\s\S]*?)<\/cim:GovHydroPelton.av1>/g, obj, "av1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.bp>([\s\S]*?)<\/cim:GovHydroPelton.bp>/g, obj, "bp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.db1>([\s\S]*?)<\/cim:GovHydroPelton.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.db2>([\s\S]*?)<\/cim:GovHydroPelton.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.h1>([\s\S]*?)<\/cim:GovHydroPelton.h1>/g, obj, "h1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.h2>([\s\S]*?)<\/cim:GovHydroPelton.h2>/g, obj, "h2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.hn>([\s\S]*?)<\/cim:GovHydroPelton.hn>/g, obj, "hn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.kc>([\s\S]*?)<\/cim:GovHydroPelton.kc>/g, obj, "kc", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.kg>([\s\S]*?)<\/cim:GovHydroPelton.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.qc0>([\s\S]*?)<\/cim:GovHydroPelton.qc0>/g, obj, "qc0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.qn>([\s\S]*?)<\/cim:GovHydroPelton.qn>/g, obj, "qn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.simplifiedPelton>([\s\S]*?)<\/cim:GovHydroPelton.simplifiedPelton>/g, obj, "simplifiedPelton", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPelton.staticCompensating>([\s\S]*?)<\/cim:GovHydroPelton.staticCompensating>/g, obj, "staticCompensating", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPelton.ta>([\s\S]*?)<\/cim:GovHydroPelton.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.ts>([\s\S]*?)<\/cim:GovHydroPelton.ts>/g, obj, "ts", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.tv>([\s\S]*?)<\/cim:GovHydroPelton.tv>/g, obj, "tv", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.twnc>([\s\S]*?)<\/cim:GovHydroPelton.twnc>/g, obj, "twnc", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.twng>([\s\S]*?)<\/cim:GovHydroPelton.twng>/g, obj, "twng", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.tx>([\s\S]*?)<\/cim:GovHydroPelton.tx>/g, obj, "tx", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.va>([\s\S]*?)<\/cim:GovHydroPelton.va>/g, obj, "va", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPelton.valvmax>([\s\S]*?)<\/cim:GovHydroPelton.valvmax>/g, obj, "valvmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.valvmin>([\s\S]*?)<\/cim:GovHydroPelton.valvmin>/g, obj, "valvmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.vav>([\s\S]*?)<\/cim:GovHydroPelton.vav>/g, obj, "vav", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.vc>([\s\S]*?)<\/cim:GovHydroPelton.vc>/g, obj, "vc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPelton.vcv>([\s\S]*?)<\/cim:GovHydroPelton.vcv>/g, obj, "vcv", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.waterTunnelSurgeChamberSimulation>([\s\S]*?)<\/cim:GovHydroPelton.waterTunnelSurgeChamberSimulation>/g, obj, "waterTunnelSurgeChamberSimulation", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPelton.zsfc>([\s\S]*?)<\/cim:GovHydroPelton.zsfc>/g, obj, "zsfc", base.to_string, sub, context);

                var bucket = context.parsed.GovHydroPelton;
                if (null == bucket)
                   context.parsed.GovHydroPelton = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroPelton", "av0", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "av1", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "bp", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "db1", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "db2", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "h1", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "h2", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "hn", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "kc", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "kg", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "qc0", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "qn", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "simplifiedPelton", base.from_boolean, fields);
                base.export_element (obj, "GovHydroPelton", "staticCompensating", base.from_boolean, fields);
                base.export_element (obj, "GovHydroPelton", "ta", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "ts", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "tv", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "twnc", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "twng", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "tx", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "va", base.from_float, fields);
                base.export_element (obj, "GovHydroPelton", "valvmax", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "valvmin", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "vav", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "vc", base.from_float, fields);
                base.export_element (obj, "GovHydroPelton", "vcv", base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "waterTunnelSurgeChamberSimulation", base.from_boolean, fields);
                base.export_element (obj, "GovHydroPelton", "zsfc", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroPelton_collapse" aria-expanded="true" aria-controls="GovHydroPelton_collapse">GovHydroPelton</a>
<div id="GovHydroPelton_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#av0}}<div><b>av0</b>: {{av0}}</div>{{/av0}}
{{#av1}}<div><b>av1</b>: {{av1}}</div>{{/av1}}
{{#bp}}<div><b>bp</b>: {{bp}}</div>{{/bp}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#h1}}<div><b>h1</b>: {{h1}}</div>{{/h1}}
{{#h2}}<div><b>h2</b>: {{h2}}</div>{{/h2}}
{{#hn}}<div><b>hn</b>: {{hn}}</div>{{/hn}}
{{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
{{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
{{#qc0}}<div><b>qc0</b>: {{qc0}}</div>{{/qc0}}
{{#qn}}<div><b>qn</b>: {{qn}}</div>{{/qn}}
{{#simplifiedPelton}}<div><b>simplifiedPelton</b>: {{simplifiedPelton}}</div>{{/simplifiedPelton}}
{{#staticCompensating}}<div><b>staticCompensating</b>: {{staticCompensating}}</div>{{/staticCompensating}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#ts}}<div><b>ts</b>: {{ts}}</div>{{/ts}}
{{#tv}}<div><b>tv</b>: {{tv}}</div>{{/tv}}
{{#twnc}}<div><b>twnc</b>: {{twnc}}</div>{{/twnc}}
{{#twng}}<div><b>twng</b>: {{twng}}</div>{{/twng}}
{{#tx}}<div><b>tx</b>: {{tx}}</div>{{/tx}}
{{#va}}<div><b>va</b>: {{va}}</div>{{/va}}
{{#valvmax}}<div><b>valvmax</b>: {{valvmax}}</div>{{/valvmax}}
{{#valvmin}}<div><b>valvmin</b>: {{valvmin}}</div>{{/valvmin}}
{{#vav}}<div><b>vav</b>: {{vav}}</div>{{/vav}}
{{#vc}}<div><b>vc</b>: {{vc}}</div>{{/vc}}
{{#vcv}}<div><b>vcv</b>: {{vcv}}</div>{{/vcv}}
{{#waterTunnelSurgeChamberSimulation}}<div><b>waterTunnelSurgeChamberSimulation</b>: {{waterTunnelSurgeChamberSimulation}}</div>{{/waterTunnelSurgeChamberSimulation}}
{{#zsfc}}<div><b>zsfc</b>: {{zsfc}}</div>{{/zsfc}}
</div>
`
                );
           }        }

        /**
         * General model for any prime mover with a PID governor, used primarily for combustion turbine and combined cycle units.
         *
         * This model can be used to represent a variety of prime movers controlled by PID governors.  It is suitable, for example, for representation of
         *
         */
        class GovCT1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovCT1;
                if (null == bucket)
                   cim_data.GovCT1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovCT1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovCT1";
                base.parse_element (/<cim:GovCT1.aset>([\s\S]*?)<\/cim:GovCT1.aset>/g, obj, "aset", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT1.db>([\s\S]*?)<\/cim:GovCT1.db>/g, obj, "db", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.dm>([\s\S]*?)<\/cim:GovCT1.dm>/g, obj, "dm", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.ka>([\s\S]*?)<\/cim:GovCT1.ka>/g, obj, "ka", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kdgov>([\s\S]*?)<\/cim:GovCT1.kdgov>/g, obj, "kdgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kigov>([\s\S]*?)<\/cim:GovCT1.kigov>/g, obj, "kigov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kiload>([\s\S]*?)<\/cim:GovCT1.kiload>/g, obj, "kiload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kimw>([\s\S]*?)<\/cim:GovCT1.kimw>/g, obj, "kimw", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kpgov>([\s\S]*?)<\/cim:GovCT1.kpgov>/g, obj, "kpgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kpload>([\s\S]*?)<\/cim:GovCT1.kpload>/g, obj, "kpload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kturb>([\s\S]*?)<\/cim:GovCT1.kturb>/g, obj, "kturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.ldref>([\s\S]*?)<\/cim:GovCT1.ldref>/g, obj, "ldref", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.maxerr>([\s\S]*?)<\/cim:GovCT1.maxerr>/g, obj, "maxerr", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.minerr>([\s\S]*?)<\/cim:GovCT1.minerr>/g, obj, "minerr", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.mwbase>([\s\S]*?)<\/cim:GovCT1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.r>([\s\S]*?)<\/cim:GovCT1.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.rclose>([\s\S]*?)<\/cim:GovCT1.rclose>/g, obj, "rclose", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT1.rdown>([\s\S]*?)<\/cim:GovCT1.rdown>/g, obj, "rdown", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.ropen>([\s\S]*?)<\/cim:GovCT1.ropen>/g, obj, "ropen", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT1.rselect>([\s\S]*?)<\/cim:GovCT1.rselect>/g, obj, "rselect", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.rup>([\s\S]*?)<\/cim:GovCT1.rup>/g, obj, "rup", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.ta>([\s\S]*?)<\/cim:GovCT1.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tact>([\s\S]*?)<\/cim:GovCT1.tact>/g, obj, "tact", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tb>([\s\S]*?)<\/cim:GovCT1.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tc>([\s\S]*?)<\/cim:GovCT1.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tdgov>([\s\S]*?)<\/cim:GovCT1.tdgov>/g, obj, "tdgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.teng>([\s\S]*?)<\/cim:GovCT1.teng>/g, obj, "teng", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tfload>([\s\S]*?)<\/cim:GovCT1.tfload>/g, obj, "tfload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tpelec>([\s\S]*?)<\/cim:GovCT1.tpelec>/g, obj, "tpelec", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tsa>([\s\S]*?)<\/cim:GovCT1.tsa>/g, obj, "tsa", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tsb>([\s\S]*?)<\/cim:GovCT1.tsb>/g, obj, "tsb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.vmax>([\s\S]*?)<\/cim:GovCT1.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.vmin>([\s\S]*?)<\/cim:GovCT1.vmin>/g, obj, "vmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.wfnl>([\s\S]*?)<\/cim:GovCT1.wfnl>/g, obj, "wfnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.wfspd>([\s\S]*?)<\/cim:GovCT1.wfspd>/g, obj, "wfspd", base.to_boolean, sub, context);

                var bucket = context.parsed.GovCT1;
                if (null == bucket)
                   context.parsed.GovCT1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovCT1", "aset", base.from_float, fields);
                base.export_element (obj, "GovCT1", "db", base.from_string, fields);
                base.export_element (obj, "GovCT1", "dm", base.from_string, fields);
                base.export_element (obj, "GovCT1", "ka", base.from_string, fields);
                base.export_element (obj, "GovCT1", "kdgov", base.from_string, fields);
                base.export_element (obj, "GovCT1", "kigov", base.from_string, fields);
                base.export_element (obj, "GovCT1", "kiload", base.from_string, fields);
                base.export_element (obj, "GovCT1", "kimw", base.from_string, fields);
                base.export_element (obj, "GovCT1", "kpgov", base.from_string, fields);
                base.export_element (obj, "GovCT1", "kpload", base.from_string, fields);
                base.export_element (obj, "GovCT1", "kturb", base.from_string, fields);
                base.export_element (obj, "GovCT1", "ldref", base.from_string, fields);
                base.export_element (obj, "GovCT1", "maxerr", base.from_string, fields);
                base.export_element (obj, "GovCT1", "minerr", base.from_string, fields);
                base.export_element (obj, "GovCT1", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovCT1", "r", base.from_string, fields);
                base.export_element (obj, "GovCT1", "rclose", base.from_float, fields);
                base.export_element (obj, "GovCT1", "rdown", base.from_string, fields);
                base.export_element (obj, "GovCT1", "ropen", base.from_float, fields);
                base.export_element (obj, "GovCT1", "rselect", base.from_string, fields);
                base.export_element (obj, "GovCT1", "rup", base.from_string, fields);
                base.export_element (obj, "GovCT1", "ta", base.from_string, fields);
                base.export_element (obj, "GovCT1", "tact", base.from_string, fields);
                base.export_element (obj, "GovCT1", "tb", base.from_string, fields);
                base.export_element (obj, "GovCT1", "tc", base.from_string, fields);
                base.export_element (obj, "GovCT1", "tdgov", base.from_string, fields);
                base.export_element (obj, "GovCT1", "teng", base.from_string, fields);
                base.export_element (obj, "GovCT1", "tfload", base.from_string, fields);
                base.export_element (obj, "GovCT1", "tpelec", base.from_string, fields);
                base.export_element (obj, "GovCT1", "tsa", base.from_string, fields);
                base.export_element (obj, "GovCT1", "tsb", base.from_string, fields);
                base.export_element (obj, "GovCT1", "vmax", base.from_string, fields);
                base.export_element (obj, "GovCT1", "vmin", base.from_string, fields);
                base.export_element (obj, "GovCT1", "wfnl", base.from_string, fields);
                base.export_element (obj, "GovCT1", "wfspd", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovCT1_collapse" aria-expanded="true" aria-controls="GovCT1_collapse">GovCT1</a>
<div id="GovCT1_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#aset}}<div><b>aset</b>: {{aset}}</div>{{/aset}}
{{#db}}<div><b>db</b>: {{db}}</div>{{/db}}
{{#dm}}<div><b>dm</b>: {{dm}}</div>{{/dm}}
{{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
{{#kdgov}}<div><b>kdgov</b>: {{kdgov}}</div>{{/kdgov}}
{{#kigov}}<div><b>kigov</b>: {{kigov}}</div>{{/kigov}}
{{#kiload}}<div><b>kiload</b>: {{kiload}}</div>{{/kiload}}
{{#kimw}}<div><b>kimw</b>: {{kimw}}</div>{{/kimw}}
{{#kpgov}}<div><b>kpgov</b>: {{kpgov}}</div>{{/kpgov}}
{{#kpload}}<div><b>kpload</b>: {{kpload}}</div>{{/kpload}}
{{#kturb}}<div><b>kturb</b>: {{kturb}}</div>{{/kturb}}
{{#ldref}}<div><b>ldref</b>: {{ldref}}</div>{{/ldref}}
{{#maxerr}}<div><b>maxerr</b>: {{maxerr}}</div>{{/maxerr}}
{{#minerr}}<div><b>minerr</b>: {{minerr}}</div>{{/minerr}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#rclose}}<div><b>rclose</b>: {{rclose}}</div>{{/rclose}}
{{#rdown}}<div><b>rdown</b>: {{rdown}}</div>{{/rdown}}
{{#ropen}}<div><b>ropen</b>: {{ropen}}</div>{{/ropen}}
{{#rselect}}<div><b>rselect</b>: {{rselect}}</div>{{/rselect}}
{{#rup}}<div><b>rup</b>: {{rup}}</div>{{/rup}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#tact}}<div><b>tact</b>: {{tact}}</div>{{/tact}}
{{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
{{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
{{#tdgov}}<div><b>tdgov</b>: {{tdgov}}</div>{{/tdgov}}
{{#teng}}<div><b>teng</b>: {{teng}}</div>{{/teng}}
{{#tfload}}<div><b>tfload</b>: {{tfload}}</div>{{/tfload}}
{{#tpelec}}<div><b>tpelec</b>: {{tpelec}}</div>{{/tpelec}}
{{#tsa}}<div><b>tsa</b>: {{tsa}}</div>{{/tsa}}
{{#tsb}}<div><b>tsb</b>: {{tsb}}</div>{{/tsb}}
{{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
{{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
{{#wfnl}}<div><b>wfnl</b>: {{wfnl}}</div>{{/wfnl}}
{{#wfspd}}<div><b>wfspd</b>: {{wfspd}}</div>{{/wfspd}}
</div>
`
                );
           }        }

        /**
         * Basic Hydro turbine governor model.
         *
         */
        class GovHydro1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydro1;
                if (null == bucket)
                   cim_data.GovHydro1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydro1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydro1";
                base.parse_element (/<cim:GovHydro1.at>([\s\S]*?)<\/cim:GovHydro1.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.dturb>([\s\S]*?)<\/cim:GovHydro1.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.gmax>([\s\S]*?)<\/cim:GovHydro1.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.gmin>([\s\S]*?)<\/cim:GovHydro1.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.hdam>([\s\S]*?)<\/cim:GovHydro1.hdam>/g, obj, "hdam", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.mwbase>([\s\S]*?)<\/cim:GovHydro1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.qnl>([\s\S]*?)<\/cim:GovHydro1.qnl>/g, obj, "qnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.rperm>([\s\S]*?)<\/cim:GovHydro1.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.rtemp>([\s\S]*?)<\/cim:GovHydro1.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.tf>([\s\S]*?)<\/cim:GovHydro1.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.tg>([\s\S]*?)<\/cim:GovHydro1.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.tr>([\s\S]*?)<\/cim:GovHydro1.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.tw>([\s\S]*?)<\/cim:GovHydro1.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.velm>([\s\S]*?)<\/cim:GovHydro1.velm>/g, obj, "velm", base.to_float, sub, context);

                var bucket = context.parsed.GovHydro1;
                if (null == bucket)
                   context.parsed.GovHydro1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydro1", "at", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "dturb", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "gmax", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "gmin", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "hdam", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "qnl", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "rperm", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "rtemp", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "tf", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "tg", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "tr", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "tw", base.from_string, fields);
                base.export_element (obj, "GovHydro1", "velm", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydro1_collapse" aria-expanded="true" aria-controls="GovHydro1_collapse">GovHydro1</a>
<div id="GovHydro1_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
{{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
{{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
{{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
{{#hdam}}<div><b>hdam</b>: {{hdam}}</div>{{/hdam}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#qnl}}<div><b>qnl</b>: {{qnl}}</div>{{/qnl}}
{{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
{{#rtemp}}<div><b>rtemp</b>: {{rtemp}}</div>{{/rtemp}}
{{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
{{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
{{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
{{#velm}}<div><b>velm</b>: {{velm}}</div>{{/velm}}
</div>
`
                );
           }        }

        /**
         * Simplified governor model.
         *
         */
        class GovSteam2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteam2;
                if (null == bucket)
                   cim_data.GovSteam2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteam2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteam2";
                base.parse_element (/<cim:GovSteam2.dbf>([\s\S]*?)<\/cim:GovSteam2.dbf>/g, obj, "dbf", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.k>([\s\S]*?)<\/cim:GovSteam2.k>/g, obj, "k", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam2.mnef>([\s\S]*?)<\/cim:GovSteam2.mnef>/g, obj, "mnef", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.mxef>([\s\S]*?)<\/cim:GovSteam2.mxef>/g, obj, "mxef", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.pmax>([\s\S]*?)<\/cim:GovSteam2.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.pmin>([\s\S]*?)<\/cim:GovSteam2.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.t1>([\s\S]*?)<\/cim:GovSteam2.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.t2>([\s\S]*?)<\/cim:GovSteam2.t2>/g, obj, "t2", base.to_string, sub, context);

                var bucket = context.parsed.GovSteam2;
                if (null == bucket)
                   context.parsed.GovSteam2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteam2", "dbf", base.from_string, fields);
                base.export_element (obj, "GovSteam2", "k", base.from_float, fields);
                base.export_element (obj, "GovSteam2", "mnef", base.from_string, fields);
                base.export_element (obj, "GovSteam2", "mxef", base.from_string, fields);
                base.export_element (obj, "GovSteam2", "pmax", base.from_string, fields);
                base.export_element (obj, "GovSteam2", "pmin", base.from_string, fields);
                base.export_element (obj, "GovSteam2", "t1", base.from_string, fields);
                base.export_element (obj, "GovSteam2", "t2", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteam2_collapse" aria-expanded="true" aria-controls="GovSteam2_collapse">GovSteam2</a>
<div id="GovSteam2_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#dbf}}<div><b>dbf</b>: {{dbf}}</div>{{/dbf}}
{{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
{{#mnef}}<div><b>mnef</b>: {{mnef}}</div>{{/mnef}}
{{#mxef}}<div><b>mxef</b>: {{mxef}}</div>{{/mxef}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
</div>
`
                );
           }        }

        /**
         * Double derivative hydro governor and turbine.
         *
         */
        class GovHydroDD extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroDD;
                if (null == bucket)
                   cim_data.GovHydroDD = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroDD[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroDD";
                base.parse_element (/<cim:GovHydroDD.aturb>([\s\S]*?)<\/cim:GovHydroDD.aturb>/g, obj, "aturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.bturb>([\s\S]*?)<\/cim:GovHydroDD.bturb>/g, obj, "bturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.db1>([\s\S]*?)<\/cim:GovHydroDD.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.db2>([\s\S]*?)<\/cim:GovHydroDD.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.eps>([\s\S]*?)<\/cim:GovHydroDD.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gmax>([\s\S]*?)<\/cim:GovHydroDD.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gmin>([\s\S]*?)<\/cim:GovHydroDD.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv1>([\s\S]*?)<\/cim:GovHydroDD.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv2>([\s\S]*?)<\/cim:GovHydroDD.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv3>([\s\S]*?)<\/cim:GovHydroDD.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv4>([\s\S]*?)<\/cim:GovHydroDD.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv5>([\s\S]*?)<\/cim:GovHydroDD.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv6>([\s\S]*?)<\/cim:GovHydroDD.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.inputSignal>([\s\S]*?)<\/cim:GovHydroDD.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroDD.k1>([\s\S]*?)<\/cim:GovHydroDD.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.k2>([\s\S]*?)<\/cim:GovHydroDD.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.kg>([\s\S]*?)<\/cim:GovHydroDD.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.ki>([\s\S]*?)<\/cim:GovHydroDD.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.mwbase>([\s\S]*?)<\/cim:GovHydroDD.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv1>([\s\S]*?)<\/cim:GovHydroDD.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv2>([\s\S]*?)<\/cim:GovHydroDD.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv3>([\s\S]*?)<\/cim:GovHydroDD.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv4>([\s\S]*?)<\/cim:GovHydroDD.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv5>([\s\S]*?)<\/cim:GovHydroDD.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv6>([\s\S]*?)<\/cim:GovHydroDD.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pmax>([\s\S]*?)<\/cim:GovHydroDD.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pmin>([\s\S]*?)<\/cim:GovHydroDD.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.r>([\s\S]*?)<\/cim:GovHydroDD.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.td>([\s\S]*?)<\/cim:GovHydroDD.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.tf>([\s\S]*?)<\/cim:GovHydroDD.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.tp>([\s\S]*?)<\/cim:GovHydroDD.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.tt>([\s\S]*?)<\/cim:GovHydroDD.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.tturb>([\s\S]*?)<\/cim:GovHydroDD.tturb>/g, obj, "tturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.velcl>([\s\S]*?)<\/cim:GovHydroDD.velcl>/g, obj, "velcl", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroDD.velop>([\s\S]*?)<\/cim:GovHydroDD.velop>/g, obj, "velop", base.to_float, sub, context);

                var bucket = context.parsed.GovHydroDD;
                if (null == bucket)
                   context.parsed.GovHydroDD = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroDD", "aturb", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "bturb", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "db1", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "db2", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "eps", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gmax", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gmin", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv1", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv2", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv3", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv4", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv5", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv6", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "inputSignal", base.from_boolean, fields);
                base.export_element (obj, "GovHydroDD", "k1", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "k2", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "kg", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "ki", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv4", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv5", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv6", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pmax", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pmin", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "r", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "td", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "tf", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "tp", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "tt", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "tturb", base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "velcl", base.from_float, fields);
                base.export_element (obj, "GovHydroDD", "velop", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroDD_collapse" aria-expanded="true" aria-controls="GovHydroDD_collapse">GovHydroDD</a>
<div id="GovHydroDD_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#aturb}}<div><b>aturb</b>: {{aturb}}</div>{{/aturb}}
{{#bturb}}<div><b>bturb</b>: {{bturb}}</div>{{/bturb}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
{{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
{{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
{{#inputSignal}}<div><b>inputSignal</b>: {{inputSignal}}</div>{{/inputSignal}}
{{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
{{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
{{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
{{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
{{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
{{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
{{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
{{#tturb}}<div><b>tturb</b>: {{tturb}}</div>{{/tturb}}
{{#velcl}}<div><b>velcl</b>: {{velcl}}</div>{{/velcl}}
{{#velop}}<div><b>velop</b>: {{velop}}</div>{{/velop}}
</div>
`
                );
           }        }

        /**
         * IEEE Simplified Hydro Governor-Turbine Model.
         *
         * Used for Mechanical-Hydraulic and Electro-Hydraulic turbine governors, with our without steam feedback. Typical values given are for Mechanical-Hydraulic.
         *
         */
        class GovHydroIEEE0 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroIEEE0;
                if (null == bucket)
                   cim_data.GovHydroIEEE0 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroIEEE0[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroIEEE0";
                base.parse_element (/<cim:GovHydroIEEE0.k>([\s\S]*?)<\/cim:GovHydroIEEE0.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.mwbase>([\s\S]*?)<\/cim:GovHydroIEEE0.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.pmax>([\s\S]*?)<\/cim:GovHydroIEEE0.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.pmin>([\s\S]*?)<\/cim:GovHydroIEEE0.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.t1>([\s\S]*?)<\/cim:GovHydroIEEE0.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.t2>([\s\S]*?)<\/cim:GovHydroIEEE0.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.t3>([\s\S]*?)<\/cim:GovHydroIEEE0.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.t4>([\s\S]*?)<\/cim:GovHydroIEEE0.t4>/g, obj, "t4", base.to_string, sub, context);

                var bucket = context.parsed.GovHydroIEEE0;
                if (null == bucket)
                   context.parsed.GovHydroIEEE0 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroIEEE0", "k", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "pmax", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "pmin", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "t1", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "t2", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "t3", base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "t4", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroIEEE0_collapse" aria-expanded="true" aria-controls="GovHydroIEEE0_collapse">GovHydroIEEE0</a>
<div id="GovHydroIEEE0_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
</div>
`
                );
           }        }

        /**
         * A simplified steam turbine governor model.
         *
         */
        class GovSteam0 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteam0;
                if (null == bucket)
                   cim_data.GovSteam0 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteam0[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteam0";
                base.parse_element (/<cim:GovSteam0.dt>([\s\S]*?)<\/cim:GovSteam0.dt>/g, obj, "dt", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.mwbase>([\s\S]*?)<\/cim:GovSteam0.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.r>([\s\S]*?)<\/cim:GovSteam0.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.t1>([\s\S]*?)<\/cim:GovSteam0.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.t2>([\s\S]*?)<\/cim:GovSteam0.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.t3>([\s\S]*?)<\/cim:GovSteam0.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.vmax>([\s\S]*?)<\/cim:GovSteam0.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.vmin>([\s\S]*?)<\/cim:GovSteam0.vmin>/g, obj, "vmin", base.to_string, sub, context);

                var bucket = context.parsed.GovSteam0;
                if (null == bucket)
                   context.parsed.GovSteam0 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteam0", "dt", base.from_string, fields);
                base.export_element (obj, "GovSteam0", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovSteam0", "r", base.from_string, fields);
                base.export_element (obj, "GovSteam0", "t1", base.from_string, fields);
                base.export_element (obj, "GovSteam0", "t2", base.from_string, fields);
                base.export_element (obj, "GovSteam0", "t3", base.from_string, fields);
                base.export_element (obj, "GovSteam0", "vmax", base.from_string, fields);
                base.export_element (obj, "GovSteam0", "vmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteam0_collapse" aria-expanded="true" aria-controls="GovSteam0_collapse">GovSteam0</a>
<div id="GovSteam0_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#dt}}<div><b>dt</b>: {{dt}}</div>{{/dt}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
{{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
</div>
`
                );
           }        }

        /**
         * Simplified Steam turbine governor model.
         *
         */
        class GovSteamSGO extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteamSGO;
                if (null == bucket)
                   cim_data.GovSteamSGO = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteamSGO[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamSGO";
                base.parse_element (/<cim:GovSteamSGO.k1>([\s\S]*?)<\/cim:GovSteamSGO.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.k2>([\s\S]*?)<\/cim:GovSteamSGO.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.k3>([\s\S]*?)<\/cim:GovSteamSGO.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.mwbase>([\s\S]*?)<\/cim:GovSteamSGO.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.pmax>([\s\S]*?)<\/cim:GovSteamSGO.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.pmin>([\s\S]*?)<\/cim:GovSteamSGO.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t1>([\s\S]*?)<\/cim:GovSteamSGO.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t2>([\s\S]*?)<\/cim:GovSteamSGO.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t3>([\s\S]*?)<\/cim:GovSteamSGO.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t4>([\s\S]*?)<\/cim:GovSteamSGO.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t5>([\s\S]*?)<\/cim:GovSteamSGO.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t6>([\s\S]*?)<\/cim:GovSteamSGO.t6>/g, obj, "t6", base.to_string, sub, context);

                var bucket = context.parsed.GovSteamSGO;
                if (null == bucket)
                   context.parsed.GovSteamSGO = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamSGO", "k1", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "k2", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "k3", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "pmax", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "pmin", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t1", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t2", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t3", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t4", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t5", base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t6", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteamSGO_collapse" aria-expanded="true" aria-controls="GovSteamSGO_collapse">GovSteamSGO</a>
<div id="GovSteamSGO_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
{{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
{{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
{{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
{{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
</div>
`
                );
           }        }

        /**
         * Fourth order lead-lag governor and hydro turbine.
         *
         */
        class GovHydroR extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroR;
                if (null == bucket)
                   cim_data.GovHydroR = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroR[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroR";
                base.parse_element (/<cim:GovHydroR.at>([\s\S]*?)<\/cim:GovHydroR.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.db1>([\s\S]*?)<\/cim:GovHydroR.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.db2>([\s\S]*?)<\/cim:GovHydroR.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.dturb>([\s\S]*?)<\/cim:GovHydroR.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.eps>([\s\S]*?)<\/cim:GovHydroR.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gmax>([\s\S]*?)<\/cim:GovHydroR.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gmin>([\s\S]*?)<\/cim:GovHydroR.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv1>([\s\S]*?)<\/cim:GovHydroR.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv2>([\s\S]*?)<\/cim:GovHydroR.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv3>([\s\S]*?)<\/cim:GovHydroR.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv4>([\s\S]*?)<\/cim:GovHydroR.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv5>([\s\S]*?)<\/cim:GovHydroR.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv6>([\s\S]*?)<\/cim:GovHydroR.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.h0>([\s\S]*?)<\/cim:GovHydroR.h0>/g, obj, "h0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.inputSignal>([\s\S]*?)<\/cim:GovHydroR.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroR.kg>([\s\S]*?)<\/cim:GovHydroR.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.ki>([\s\S]*?)<\/cim:GovHydroR.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.mwbase>([\s\S]*?)<\/cim:GovHydroR.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv1>([\s\S]*?)<\/cim:GovHydroR.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv2>([\s\S]*?)<\/cim:GovHydroR.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv3>([\s\S]*?)<\/cim:GovHydroR.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv4>([\s\S]*?)<\/cim:GovHydroR.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv5>([\s\S]*?)<\/cim:GovHydroR.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv6>([\s\S]*?)<\/cim:GovHydroR.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pmax>([\s\S]*?)<\/cim:GovHydroR.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pmin>([\s\S]*?)<\/cim:GovHydroR.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.qnl>([\s\S]*?)<\/cim:GovHydroR.qnl>/g, obj, "qnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.r>([\s\S]*?)<\/cim:GovHydroR.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t1>([\s\S]*?)<\/cim:GovHydroR.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t2>([\s\S]*?)<\/cim:GovHydroR.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t3>([\s\S]*?)<\/cim:GovHydroR.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t4>([\s\S]*?)<\/cim:GovHydroR.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t5>([\s\S]*?)<\/cim:GovHydroR.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t6>([\s\S]*?)<\/cim:GovHydroR.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t7>([\s\S]*?)<\/cim:GovHydroR.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t8>([\s\S]*?)<\/cim:GovHydroR.t8>/g, obj, "t8", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.td>([\s\S]*?)<\/cim:GovHydroR.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.tp>([\s\S]*?)<\/cim:GovHydroR.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.tt>([\s\S]*?)<\/cim:GovHydroR.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.tw>([\s\S]*?)<\/cim:GovHydroR.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.velcl>([\s\S]*?)<\/cim:GovHydroR.velcl>/g, obj, "velcl", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroR.velop>([\s\S]*?)<\/cim:GovHydroR.velop>/g, obj, "velop", base.to_float, sub, context);

                var bucket = context.parsed.GovHydroR;
                if (null == bucket)
                   context.parsed.GovHydroR = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroR", "at", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "db1", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "db2", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "dturb", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "eps", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gmax", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gmin", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv1", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv2", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv3", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv4", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv5", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv6", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "h0", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "inputSignal", base.from_boolean, fields);
                base.export_element (obj, "GovHydroR", "kg", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "ki", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv4", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv5", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv6", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pmax", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pmin", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "qnl", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "r", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t1", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t2", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t3", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t4", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t5", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t6", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t7", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t8", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "td", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "tp", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "tt", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "tw", base.from_string, fields);
                base.export_element (obj, "GovHydroR", "velcl", base.from_float, fields);
                base.export_element (obj, "GovHydroR", "velop", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroR_collapse" aria-expanded="true" aria-controls="GovHydroR_collapse">GovHydroR</a>
<div id="GovHydroR_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
{{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
{{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
{{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
{{#h0}}<div><b>h0</b>: {{h0}}</div>{{/h0}}
{{#inputSignal}}<div><b>inputSignal</b>: {{inputSignal}}</div>{{/inputSignal}}
{{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
{{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
{{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
{{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#qnl}}<div><b>qnl</b>: {{qnl}}</div>{{/qnl}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
{{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
{{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
{{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
{{#t8}}<div><b>t8</b>: {{t8}}</div>{{/t8}}
{{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
{{#velcl}}<div><b>velcl</b>: {{velcl}}</div>{{/velcl}}
{{#velop}}<div><b>velop</b>: {{velop}}</div>{{/velop}}
</div>
`
                );
           }        }

        /**
         * Hydro turbine and governor.
         *
         * Represents plants with straight-forward penstock configurations and hydraulic governors of traditional 'dashpot' type.  This model can be used to represent simple, Francis, Pelton or Kaplan turbines.
         *
         */
        class GovHydro4 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydro4;
                if (null == bucket)
                   cim_data.GovHydro4 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydro4[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydro4";
                base.parse_element (/<cim:GovHydro4.at>([\s\S]*?)<\/cim:GovHydro4.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv0>([\s\S]*?)<\/cim:GovHydro4.bgv0>/g, obj, "bgv0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv1>([\s\S]*?)<\/cim:GovHydro4.bgv1>/g, obj, "bgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv2>([\s\S]*?)<\/cim:GovHydro4.bgv2>/g, obj, "bgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv3>([\s\S]*?)<\/cim:GovHydro4.bgv3>/g, obj, "bgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv4>([\s\S]*?)<\/cim:GovHydro4.bgv4>/g, obj, "bgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv5>([\s\S]*?)<\/cim:GovHydro4.bgv5>/g, obj, "bgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bmax>([\s\S]*?)<\/cim:GovHydro4.bmax>/g, obj, "bmax", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydro4.db1>([\s\S]*?)<\/cim:GovHydro4.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.db2>([\s\S]*?)<\/cim:GovHydro4.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.dturb>([\s\S]*?)<\/cim:GovHydro4.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.eps>([\s\S]*?)<\/cim:GovHydro4.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gmax>([\s\S]*?)<\/cim:GovHydro4.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gmin>([\s\S]*?)<\/cim:GovHydro4.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv0>([\s\S]*?)<\/cim:GovHydro4.gv0>/g, obj, "gv0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv1>([\s\S]*?)<\/cim:GovHydro4.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv2>([\s\S]*?)<\/cim:GovHydro4.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv3>([\s\S]*?)<\/cim:GovHydro4.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv4>([\s\S]*?)<\/cim:GovHydro4.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv5>([\s\S]*?)<\/cim:GovHydro4.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.hdam>([\s\S]*?)<\/cim:GovHydro4.hdam>/g, obj, "hdam", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.mwbase>([\s\S]*?)<\/cim:GovHydro4.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv0>([\s\S]*?)<\/cim:GovHydro4.pgv0>/g, obj, "pgv0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv1>([\s\S]*?)<\/cim:GovHydro4.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv2>([\s\S]*?)<\/cim:GovHydro4.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv3>([\s\S]*?)<\/cim:GovHydro4.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv4>([\s\S]*?)<\/cim:GovHydro4.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv5>([\s\S]*?)<\/cim:GovHydro4.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.qn1>([\s\S]*?)<\/cim:GovHydro4.qn1>/g, obj, "qn1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.rperm>([\s\S]*?)<\/cim:GovHydro4.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.rtemp>([\s\S]*?)<\/cim:GovHydro4.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tblade>([\s\S]*?)<\/cim:GovHydro4.tblade>/g, obj, "tblade", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tg>([\s\S]*?)<\/cim:GovHydro4.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tp>([\s\S]*?)<\/cim:GovHydro4.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tr>([\s\S]*?)<\/cim:GovHydro4.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tw>([\s\S]*?)<\/cim:GovHydro4.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.uc>([\s\S]*?)<\/cim:GovHydro4.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydro4.uo>([\s\S]*?)<\/cim:GovHydro4.uo>/g, obj, "uo", base.to_float, sub, context);

                var bucket = context.parsed.GovHydro4;
                if (null == bucket)
                   context.parsed.GovHydro4 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydro4", "at", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv0", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv1", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv2", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv3", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv4", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv5", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bmax", base.from_float, fields);
                base.export_element (obj, "GovHydro4", "db1", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "db2", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "dturb", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "eps", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gmax", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gmin", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv0", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv1", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv2", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv3", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv4", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv5", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "hdam", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv0", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv4", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv5", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "qn1", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "rperm", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "rtemp", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tblade", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tg", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tp", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tr", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tw", base.from_string, fields);
                base.export_element (obj, "GovHydro4", "uc", base.from_float, fields);
                base.export_element (obj, "GovHydro4", "uo", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydro4_collapse" aria-expanded="true" aria-controls="GovHydro4_collapse">GovHydro4</a>
<div id="GovHydro4_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
{{#bgv0}}<div><b>bgv0</b>: {{bgv0}}</div>{{/bgv0}}
{{#bgv1}}<div><b>bgv1</b>: {{bgv1}}</div>{{/bgv1}}
{{#bgv2}}<div><b>bgv2</b>: {{bgv2}}</div>{{/bgv2}}
{{#bgv3}}<div><b>bgv3</b>: {{bgv3}}</div>{{/bgv3}}
{{#bgv4}}<div><b>bgv4</b>: {{bgv4}}</div>{{/bgv4}}
{{#bgv5}}<div><b>bgv5</b>: {{bgv5}}</div>{{/bgv5}}
{{#bmax}}<div><b>bmax</b>: {{bmax}}</div>{{/bmax}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
{{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
{{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
{{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
{{#gv0}}<div><b>gv0</b>: {{gv0}}</div>{{/gv0}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#hdam}}<div><b>hdam</b>: {{hdam}}</div>{{/hdam}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv0}}<div><b>pgv0</b>: {{pgv0}}</div>{{/pgv0}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
{{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
{{#qn1}}<div><b>qn1</b>: {{qn1}}</div>{{/qn1}}
{{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
{{#rtemp}}<div><b>rtemp</b>: {{rtemp}}</div>{{/rtemp}}
{{#tblade}}<div><b>tblade</b>: {{tblade}}</div>{{/tblade}}
{{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
{{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
{{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
</div>
`
                );
           }        }

        /**
         * Modified single shaft gas turbine.
         *
         */
        class GovGAST1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovGAST1;
                if (null == bucket)
                   cim_data.GovGAST1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovGAST1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST1";
                base.parse_element (/<cim:GovGAST1.a>([\s\S]*?)<\/cim:GovGAST1.a>/g, obj, "a", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST1.b>([\s\S]*?)<\/cim:GovGAST1.b>/g, obj, "b", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST1.db1>([\s\S]*?)<\/cim:GovGAST1.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.db2>([\s\S]*?)<\/cim:GovGAST1.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.eps>([\s\S]*?)<\/cim:GovGAST1.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.fidle>([\s\S]*?)<\/cim:GovGAST1.fidle>/g, obj, "fidle", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv1>([\s\S]*?)<\/cim:GovGAST1.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv2>([\s\S]*?)<\/cim:GovGAST1.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv3>([\s\S]*?)<\/cim:GovGAST1.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv4>([\s\S]*?)<\/cim:GovGAST1.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv5>([\s\S]*?)<\/cim:GovGAST1.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv6>([\s\S]*?)<\/cim:GovGAST1.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.ka>([\s\S]*?)<\/cim:GovGAST1.ka>/g, obj, "ka", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.kt>([\s\S]*?)<\/cim:GovGAST1.kt>/g, obj, "kt", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.lmax>([\s\S]*?)<\/cim:GovGAST1.lmax>/g, obj, "lmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.loadinc>([\s\S]*?)<\/cim:GovGAST1.loadinc>/g, obj, "loadinc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.ltrate>([\s\S]*?)<\/cim:GovGAST1.ltrate>/g, obj, "ltrate", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST1.mwbase>([\s\S]*?)<\/cim:GovGAST1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv1>([\s\S]*?)<\/cim:GovGAST1.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv2>([\s\S]*?)<\/cim:GovGAST1.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv3>([\s\S]*?)<\/cim:GovGAST1.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv4>([\s\S]*?)<\/cim:GovGAST1.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv5>([\s\S]*?)<\/cim:GovGAST1.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv6>([\s\S]*?)<\/cim:GovGAST1.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.r>([\s\S]*?)<\/cim:GovGAST1.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.rmax>([\s\S]*?)<\/cim:GovGAST1.rmax>/g, obj, "rmax", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST1.t1>([\s\S]*?)<\/cim:GovGAST1.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.t2>([\s\S]*?)<\/cim:GovGAST1.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.t3>([\s\S]*?)<\/cim:GovGAST1.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.t4>([\s\S]*?)<\/cim:GovGAST1.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.t5>([\s\S]*?)<\/cim:GovGAST1.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.tltr>([\s\S]*?)<\/cim:GovGAST1.tltr>/g, obj, "tltr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.vmax>([\s\S]*?)<\/cim:GovGAST1.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.vmin>([\s\S]*?)<\/cim:GovGAST1.vmin>/g, obj, "vmin", base.to_string, sub, context);

                var bucket = context.parsed.GovGAST1;
                if (null == bucket)
                   context.parsed.GovGAST1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST1", "a", base.from_float, fields);
                base.export_element (obj, "GovGAST1", "b", base.from_float, fields);
                base.export_element (obj, "GovGAST1", "db1", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "db2", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "eps", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "fidle", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv1", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv2", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv3", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv4", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv5", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv6", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "ka", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "kt", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "lmax", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "loadinc", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "ltrate", base.from_float, fields);
                base.export_element (obj, "GovGAST1", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv4", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv5", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv6", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "r", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "rmax", base.from_float, fields);
                base.export_element (obj, "GovGAST1", "t1", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "t2", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "t3", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "t4", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "t5", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "tltr", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "vmax", base.from_string, fields);
                base.export_element (obj, "GovGAST1", "vmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovGAST1_collapse" aria-expanded="true" aria-controls="GovGAST1_collapse">GovGAST1</a>
<div id="GovGAST1_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
{{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
{{#fidle}}<div><b>fidle</b>: {{fidle}}</div>{{/fidle}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
{{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
{{#kt}}<div><b>kt</b>: {{kt}}</div>{{/kt}}
{{#lmax}}<div><b>lmax</b>: {{lmax}}</div>{{/lmax}}
{{#loadinc}}<div><b>loadinc</b>: {{loadinc}}</div>{{/loadinc}}
{{#ltrate}}<div><b>ltrate</b>: {{ltrate}}</div>{{/ltrate}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
{{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
{{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#rmax}}<div><b>rmax</b>: {{rmax}}</div>{{/rmax}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
{{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
{{#tltr}}<div><b>tltr</b>: {{tltr}}</div>{{/tltr}}
{{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
{{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
</div>
`
                );
           }        }

        /**
         * Steam turbine governor model, based on the GovSteamIEEE1 model  (with optional deadband and nonlinear valve gain added).
         *
         */
        class GovSteam1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteam1;
                if (null == bucket)
                   cim_data.GovSteam1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteam1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteam1";
                base.parse_element (/<cim:GovSteam1.db1>([\s\S]*?)<\/cim:GovSteam1.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.db2>([\s\S]*?)<\/cim:GovSteam1.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.eps>([\s\S]*?)<\/cim:GovSteam1.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv1>([\s\S]*?)<\/cim:GovSteam1.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv2>([\s\S]*?)<\/cim:GovSteam1.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv3>([\s\S]*?)<\/cim:GovSteam1.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv4>([\s\S]*?)<\/cim:GovSteam1.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv5>([\s\S]*?)<\/cim:GovSteam1.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv6>([\s\S]*?)<\/cim:GovSteam1.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.k>([\s\S]*?)<\/cim:GovSteam1.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.k1>([\s\S]*?)<\/cim:GovSteam1.k1>/g, obj, "k1", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k2>([\s\S]*?)<\/cim:GovSteam1.k2>/g, obj, "k2", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k3>([\s\S]*?)<\/cim:GovSteam1.k3>/g, obj, "k3", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k4>([\s\S]*?)<\/cim:GovSteam1.k4>/g, obj, "k4", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k5>([\s\S]*?)<\/cim:GovSteam1.k5>/g, obj, "k5", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k6>([\s\S]*?)<\/cim:GovSteam1.k6>/g, obj, "k6", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k7>([\s\S]*?)<\/cim:GovSteam1.k7>/g, obj, "k7", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k8>([\s\S]*?)<\/cim:GovSteam1.k8>/g, obj, "k8", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.mwbase>([\s\S]*?)<\/cim:GovSteam1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv1>([\s\S]*?)<\/cim:GovSteam1.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv2>([\s\S]*?)<\/cim:GovSteam1.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv3>([\s\S]*?)<\/cim:GovSteam1.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv4>([\s\S]*?)<\/cim:GovSteam1.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv5>([\s\S]*?)<\/cim:GovSteam1.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv6>([\s\S]*?)<\/cim:GovSteam1.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pmax>([\s\S]*?)<\/cim:GovSteam1.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pmin>([\s\S]*?)<\/cim:GovSteam1.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.sdb1>([\s\S]*?)<\/cim:GovSteam1.sdb1>/g, obj, "sdb1", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovSteam1.sdb2>([\s\S]*?)<\/cim:GovSteam1.sdb2>/g, obj, "sdb2", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovSteam1.t1>([\s\S]*?)<\/cim:GovSteam1.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t2>([\s\S]*?)<\/cim:GovSteam1.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t3>([\s\S]*?)<\/cim:GovSteam1.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t4>([\s\S]*?)<\/cim:GovSteam1.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t5>([\s\S]*?)<\/cim:GovSteam1.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t6>([\s\S]*?)<\/cim:GovSteam1.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t7>([\s\S]*?)<\/cim:GovSteam1.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.uc>([\s\S]*?)<\/cim:GovSteam1.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.uo>([\s\S]*?)<\/cim:GovSteam1.uo>/g, obj, "uo", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.valve>([\s\S]*?)<\/cim:GovSteam1.valve>/g, obj, "valve", base.to_boolean, sub, context);

                var bucket = context.parsed.GovSteam1;
                if (null == bucket)
                   context.parsed.GovSteam1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteam1", "db1", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "db2", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "eps", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv1", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv2", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv3", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv4", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv5", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv6", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "k", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "k1", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k2", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k3", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k4", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k5", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k6", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k7", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k8", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv1", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv2", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv3", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv4", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv5", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv6", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pmax", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pmin", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "sdb1", base.from_boolean, fields);
                base.export_element (obj, "GovSteam1", "sdb2", base.from_boolean, fields);
                base.export_element (obj, "GovSteam1", "t1", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t2", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t3", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t4", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t5", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t6", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t7", base.from_string, fields);
                base.export_element (obj, "GovSteam1", "uc", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "uo", base.from_float, fields);
                base.export_element (obj, "GovSteam1", "valve", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteam1_collapse" aria-expanded="true" aria-controls="GovSteam1_collapse">GovSteam1</a>
<div id="GovSteam1_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
{{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
{{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
{{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
{{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
{{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
{{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
{{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
{{#k6}}<div><b>k6</b>: {{k6}}</div>{{/k6}}
{{#k7}}<div><b>k7</b>: {{k7}}</div>{{/k7}}
{{#k8}}<div><b>k8</b>: {{k8}}</div>{{/k8}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
{{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
{{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
{{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
{{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
{{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#sdb1}}<div><b>sdb1</b>: {{sdb1}}</div>{{/sdb1}}
{{#sdb2}}<div><b>sdb2</b>: {{sdb2}}</div>{{/sdb2}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
{{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
{{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
{{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
{{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
{{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
{{#valve}}<div><b>valve</b>: {{valve}}</div>{{/valve}}
</div>
`
                );
           }        }

        /**
         * Detailed hydro unit - Francis model.
         *
         * This model can be used to represent three types of governors.
         *
         */
        class GovHydroFrancis extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroFrancis;
                if (null == bucket)
                   cim_data.GovHydroFrancis = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroFrancis[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroFrancis";
                base.parse_element (/<cim:GovHydroFrancis.am>([\s\S]*?)<\/cim:GovHydroFrancis.am>/g, obj, "am", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.av0>([\s\S]*?)<\/cim:GovHydroFrancis.av0>/g, obj, "av0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.av1>([\s\S]*?)<\/cim:GovHydroFrancis.av1>/g, obj, "av1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.bp>([\s\S]*?)<\/cim:GovHydroFrancis.bp>/g, obj, "bp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.db1>([\s\S]*?)<\/cim:GovHydroFrancis.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.etamax>([\s\S]*?)<\/cim:GovHydroFrancis.etamax>/g, obj, "etamax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.governorControl>([\s\S]*?)<\/cim:GovHydroFrancis.governorControl>/g, obj, "governorControl", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.h1>([\s\S]*?)<\/cim:GovHydroFrancis.h1>/g, obj, "h1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.h2>([\s\S]*?)<\/cim:GovHydroFrancis.h2>/g, obj, "h2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.hn>([\s\S]*?)<\/cim:GovHydroFrancis.hn>/g, obj, "hn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.kc>([\s\S]*?)<\/cim:GovHydroFrancis.kc>/g, obj, "kc", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.kg>([\s\S]*?)<\/cim:GovHydroFrancis.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.kt>([\s\S]*?)<\/cim:GovHydroFrancis.kt>/g, obj, "kt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.qc0>([\s\S]*?)<\/cim:GovHydroFrancis.qc0>/g, obj, "qc0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.qn>([\s\S]*?)<\/cim:GovHydroFrancis.qn>/g, obj, "qn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.ta>([\s\S]*?)<\/cim:GovHydroFrancis.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.td>([\s\S]*?)<\/cim:GovHydroFrancis.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.ts>([\s\S]*?)<\/cim:GovHydroFrancis.ts>/g, obj, "ts", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.twnc>([\s\S]*?)<\/cim:GovHydroFrancis.twnc>/g, obj, "twnc", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.twng>([\s\S]*?)<\/cim:GovHydroFrancis.twng>/g, obj, "twng", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.tx>([\s\S]*?)<\/cim:GovHydroFrancis.tx>/g, obj, "tx", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.va>([\s\S]*?)<\/cim:GovHydroFrancis.va>/g, obj, "va", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.valvmax>([\s\S]*?)<\/cim:GovHydroFrancis.valvmax>/g, obj, "valvmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.valvmin>([\s\S]*?)<\/cim:GovHydroFrancis.valvmin>/g, obj, "valvmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.vc>([\s\S]*?)<\/cim:GovHydroFrancis.vc>/g, obj, "vc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation>([\s\S]*?)<\/cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation>/g, obj, "waterTunnelSurgeChamberSimulation", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.zsfc>([\s\S]*?)<\/cim:GovHydroFrancis.zsfc>/g, obj, "zsfc", base.to_string, sub, context);

                var bucket = context.parsed.GovHydroFrancis;
                if (null == bucket)
                   context.parsed.GovHydroFrancis = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroFrancis", "am", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "av0", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "av1", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "bp", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "db1", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "etamax", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "governorControl", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "h1", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "h2", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "hn", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "kc", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "kg", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "kt", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "qc0", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "qn", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "ta", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "td", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "ts", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "twnc", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "twng", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "tx", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "va", base.from_float, fields);
                base.export_element (obj, "GovHydroFrancis", "valvmax", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "valvmin", base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "vc", base.from_float, fields);
                base.export_element (obj, "GovHydroFrancis", "waterTunnelSurgeChamberSimulation", base.from_boolean, fields);
                base.export_element (obj, "GovHydroFrancis", "zsfc", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroFrancis_collapse" aria-expanded="true" aria-controls="GovHydroFrancis_collapse">GovHydroFrancis</a>
<div id="GovHydroFrancis_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#am}}<div><b>am</b>: {{am}}</div>{{/am}}
{{#av0}}<div><b>av0</b>: {{av0}}</div>{{/av0}}
{{#av1}}<div><b>av1</b>: {{av1}}</div>{{/av1}}
{{#bp}}<div><b>bp</b>: {{bp}}</div>{{/bp}}
{{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
{{#etamax}}<div><b>etamax</b>: {{etamax}}</div>{{/etamax}}
{{#governorControl}}<div><b>governorControl</b>: {{governorControl}}</div>{{/governorControl}}
{{#h1}}<div><b>h1</b>: {{h1}}</div>{{/h1}}
{{#h2}}<div><b>h2</b>: {{h2}}</div>{{/h2}}
{{#hn}}<div><b>hn</b>: {{hn}}</div>{{/hn}}
{{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
{{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
{{#kt}}<div><b>kt</b>: {{kt}}</div>{{/kt}}
{{#qc0}}<div><b>qc0</b>: {{qc0}}</div>{{/qc0}}
{{#qn}}<div><b>qn</b>: {{qn}}</div>{{/qn}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
{{#ts}}<div><b>ts</b>: {{ts}}</div>{{/ts}}
{{#twnc}}<div><b>twnc</b>: {{twnc}}</div>{{/twnc}}
{{#twng}}<div><b>twng</b>: {{twng}}</div>{{/twng}}
{{#tx}}<div><b>tx</b>: {{tx}}</div>{{/tx}}
{{#va}}<div><b>va</b>: {{va}}</div>{{/va}}
{{#valvmax}}<div><b>valvmax</b>: {{valvmax}}</div>{{/valvmax}}
{{#valvmin}}<div><b>valvmin</b>: {{valvmin}}</div>{{/valvmin}}
{{#vc}}<div><b>vc</b>: {{vc}}</div>{{/vc}}
{{#waterTunnelSurgeChamberSimulation}}<div><b>waterTunnelSurgeChamberSimulation</b>: {{waterTunnelSurgeChamberSimulation}}</div>{{/waterTunnelSurgeChamberSimulation}}
{{#zsfc}}<div><b>zsfc</b>: {{zsfc}}</div>{{/zsfc}}
</div>
`
                );
           }        }

        /**
         * Generic turbogas.
         *
         */
        class GovGAST4 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovGAST4;
                if (null == bucket)
                   cim_data.GovGAST4 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovGAST4[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST4";
                base.parse_element (/<cim:GovGAST4.bp>([\s\S]*?)<\/cim:GovGAST4.bp>/g, obj, "bp", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.ktm>([\s\S]*?)<\/cim:GovGAST4.ktm>/g, obj, "ktm", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.mnef>([\s\S]*?)<\/cim:GovGAST4.mnef>/g, obj, "mnef", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.mxef>([\s\S]*?)<\/cim:GovGAST4.mxef>/g, obj, "mxef", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.rymn>([\s\S]*?)<\/cim:GovGAST4.rymn>/g, obj, "rymn", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.rymx>([\s\S]*?)<\/cim:GovGAST4.rymx>/g, obj, "rymx", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.ta>([\s\S]*?)<\/cim:GovGAST4.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.tc>([\s\S]*?)<\/cim:GovGAST4.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.tcm>([\s\S]*?)<\/cim:GovGAST4.tcm>/g, obj, "tcm", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.tm>([\s\S]*?)<\/cim:GovGAST4.tm>/g, obj, "tm", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.tv>([\s\S]*?)<\/cim:GovGAST4.tv>/g, obj, "tv", base.to_string, sub, context);

                var bucket = context.parsed.GovGAST4;
                if (null == bucket)
                   context.parsed.GovGAST4 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST4", "bp", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "ktm", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "mnef", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "mxef", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "rymn", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "rymx", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "ta", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "tc", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "tcm", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "tm", base.from_string, fields);
                base.export_element (obj, "GovGAST4", "tv", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovGAST4_collapse" aria-expanded="true" aria-controls="GovGAST4_collapse">GovGAST4</a>
<div id="GovGAST4_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#bp}}<div><b>bp</b>: {{bp}}</div>{{/bp}}
{{#ktm}}<div><b>ktm</b>: {{ktm}}</div>{{/ktm}}
{{#mnef}}<div><b>mnef</b>: {{mnef}}</div>{{/mnef}}
{{#mxef}}<div><b>mxef</b>: {{mxef}}</div>{{/mxef}}
{{#rymn}}<div><b>rymn</b>: {{rymn}}</div>{{/rymn}}
{{#rymx}}<div><b>rymx</b>: {{rymx}}</div>{{/rymx}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
{{#tcm}}<div><b>tcm</b>: {{tcm}}</div>{{/tcm}}
{{#tm}}<div><b>tm</b>: {{tm}}</div>{{/tm}}
{{#tv}}<div><b>tv</b>: {{tv}}</div>{{/tv}}
</div>
`
                );
           }        }

        /**
         * Simplified GovSteamIEEE1 Steam turbine governor model with Prmax limit and fast valving.
         *
         */
        class GovSteamFV3 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovSteamFV3;
                if (null == bucket)
                   cim_data.GovSteamFV3 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovSteamFV3[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamFV3";
                base.parse_element (/<cim:GovSteamFV3.k>([\s\S]*?)<\/cim:GovSteamFV3.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.k1>([\s\S]*?)<\/cim:GovSteamFV3.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.k2>([\s\S]*?)<\/cim:GovSteamFV3.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.k3>([\s\S]*?)<\/cim:GovSteamFV3.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.mwbase>([\s\S]*?)<\/cim:GovSteamFV3.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.pmax>([\s\S]*?)<\/cim:GovSteamFV3.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.pmin>([\s\S]*?)<\/cim:GovSteamFV3.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.prmax>([\s\S]*?)<\/cim:GovSteamFV3.prmax>/g, obj, "prmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t1>([\s\S]*?)<\/cim:GovSteamFV3.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t2>([\s\S]*?)<\/cim:GovSteamFV3.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t3>([\s\S]*?)<\/cim:GovSteamFV3.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t4>([\s\S]*?)<\/cim:GovSteamFV3.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t5>([\s\S]*?)<\/cim:GovSteamFV3.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t6>([\s\S]*?)<\/cim:GovSteamFV3.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.ta>([\s\S]*?)<\/cim:GovSteamFV3.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.tb>([\s\S]*?)<\/cim:GovSteamFV3.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.tc>([\s\S]*?)<\/cim:GovSteamFV3.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.uc>([\s\S]*?)<\/cim:GovSteamFV3.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamFV3.uo>([\s\S]*?)<\/cim:GovSteamFV3.uo>/g, obj, "uo", base.to_float, sub, context);

                var bucket = context.parsed.GovSteamFV3;
                if (null == bucket)
                   context.parsed.GovSteamFV3 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamFV3", "k", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "k1", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "k2", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "k3", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "pmax", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "pmin", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "prmax", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t1", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t2", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t3", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t4", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t5", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t6", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "ta", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "tb", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "tc", base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "uc", base.from_float, fields);
                base.export_element (obj, "GovSteamFV3", "uo", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovSteamFV3_collapse" aria-expanded="true" aria-controls="GovSteamFV3_collapse">GovSteamFV3</a>
<div id="GovSteamFV3_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
{{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
{{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
{{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
{{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
{{#prmax}}<div><b>prmax</b>: {{prmax}}</div>{{/prmax}}
{{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
{{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
{{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
{{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
{{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
{{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
{{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
{{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
{{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
</div>
`
                );
           }        }

        /**
         * Woodward Electric Hydro Governor Model.
         *
         */
        class GovHydroWEH extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovHydroWEH;
                if (null == bucket)
                   cim_data.GovHydroWEH = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovHydroWEH[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroWEH";
                base.parse_element (/<cim:GovHydroWEH.db>([\s\S]*?)<\/cim:GovHydroWEH.db>/g, obj, "db", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.dicn>([\s\S]*?)<\/cim:GovHydroWEH.dicn>/g, obj, "dicn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.dpv>([\s\S]*?)<\/cim:GovHydroWEH.dpv>/g, obj, "dpv", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.dturb>([\s\S]*?)<\/cim:GovHydroWEH.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.feedbackSignal>([\s\S]*?)<\/cim:GovHydroWEH.feedbackSignal>/g, obj, "feedbackSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl1>([\s\S]*?)<\/cim:GovHydroWEH.fl1>/g, obj, "fl1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl2>([\s\S]*?)<\/cim:GovHydroWEH.fl2>/g, obj, "fl2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl3>([\s\S]*?)<\/cim:GovHydroWEH.fl3>/g, obj, "fl3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl4>([\s\S]*?)<\/cim:GovHydroWEH.fl4>/g, obj, "fl4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl5>([\s\S]*?)<\/cim:GovHydroWEH.fl5>/g, obj, "fl5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp1>([\s\S]*?)<\/cim:GovHydroWEH.fp1>/g, obj, "fp1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp10>([\s\S]*?)<\/cim:GovHydroWEH.fp10>/g, obj, "fp10", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp2>([\s\S]*?)<\/cim:GovHydroWEH.fp2>/g, obj, "fp2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp3>([\s\S]*?)<\/cim:GovHydroWEH.fp3>/g, obj, "fp3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp4>([\s\S]*?)<\/cim:GovHydroWEH.fp4>/g, obj, "fp4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp5>([\s\S]*?)<\/cim:GovHydroWEH.fp5>/g, obj, "fp5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp6>([\s\S]*?)<\/cim:GovHydroWEH.fp6>/g, obj, "fp6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp7>([\s\S]*?)<\/cim:GovHydroWEH.fp7>/g, obj, "fp7", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp8>([\s\S]*?)<\/cim:GovHydroWEH.fp8>/g, obj, "fp8", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp9>([\s\S]*?)<\/cim:GovHydroWEH.fp9>/g, obj, "fp9", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gmax>([\s\S]*?)<\/cim:GovHydroWEH.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gmin>([\s\S]*?)<\/cim:GovHydroWEH.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gtmxcl>([\s\S]*?)<\/cim:GovHydroWEH.gtmxcl>/g, obj, "gtmxcl", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gtmxop>([\s\S]*?)<\/cim:GovHydroWEH.gtmxop>/g, obj, "gtmxop", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv1>([\s\S]*?)<\/cim:GovHydroWEH.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv2>([\s\S]*?)<\/cim:GovHydroWEH.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv3>([\s\S]*?)<\/cim:GovHydroWEH.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv4>([\s\S]*?)<\/cim:GovHydroWEH.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv5>([\s\S]*?)<\/cim:GovHydroWEH.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.kd>([\s\S]*?)<\/cim:GovHydroWEH.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.ki>([\s\S]*?)<\/cim:GovHydroWEH.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.kp>([\s\S]*?)<\/cim:GovHydroWEH.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.mwbase>([\s\S]*?)<\/cim:GovHydroWEH.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss1>([\s\S]*?)<\/cim:GovHydroWEH.pmss1>/g, obj, "pmss1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss10>([\s\S]*?)<\/cim:GovHydroWEH.pmss10>/g, obj, "pmss10", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss2>([\s\S]*?)<\/cim:GovHydroWEH.pmss2>/g, obj, "pmss2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss3>([\s\S]*?)<\/cim:GovHydroWEH.pmss3>/g, obj, "pmss3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss4>([\s\S]*?)<\/cim:GovHydroWEH.pmss4>/g, obj, "pmss4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss5>([\s\S]*?)<\/cim:GovHydroWEH.pmss5>/g, obj, "pmss5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss6>([\s\S]*?)<\/cim:GovHydroWEH.pmss6>/g, obj, "pmss6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss7>([\s\S]*?)<\/cim:GovHydroWEH.pmss7>/g, obj, "pmss7", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss8>([\s\S]*?)<\/cim:GovHydroWEH.pmss8>/g, obj, "pmss8", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss9>([\s\S]*?)<\/cim:GovHydroWEH.pmss9>/g, obj, "pmss9", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.rpg>([\s\S]*?)<\/cim:GovHydroWEH.rpg>/g, obj, "rpg", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroWEH.rpp>([\s\S]*?)<\/cim:GovHydroWEH.rpp>/g, obj, "rpp", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroWEH.td>([\s\S]*?)<\/cim:GovHydroWEH.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tdv>([\s\S]*?)<\/cim:GovHydroWEH.tdv>/g, obj, "tdv", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tg>([\s\S]*?)<\/cim:GovHydroWEH.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tp>([\s\S]*?)<\/cim:GovHydroWEH.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tpe>([\s\S]*?)<\/cim:GovHydroWEH.tpe>/g, obj, "tpe", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tw>([\s\S]*?)<\/cim:GovHydroWEH.tw>/g, obj, "tw", base.to_string, sub, context);

                var bucket = context.parsed.GovHydroWEH;
                if (null == bucket)
                   context.parsed.GovHydroWEH = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroWEH", "db", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "dicn", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "dpv", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "dturb", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "feedbackSignal", base.from_boolean, fields);
                base.export_element (obj, "GovHydroWEH", "fl1", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fl2", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fl3", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fl4", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fl5", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp1", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp10", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp2", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp3", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp4", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp5", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp6", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp7", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp8", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp9", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gmax", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gmin", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gtmxcl", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gtmxop", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv1", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv2", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv3", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv4", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv5", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "kd", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "ki", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "kp", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss1", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss10", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss2", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss3", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss4", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss5", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss6", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss7", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss8", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss9", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "rpg", base.from_float, fields);
                base.export_element (obj, "GovHydroWEH", "rpp", base.from_float, fields);
                base.export_element (obj, "GovHydroWEH", "td", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tdv", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tg", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tp", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tpe", base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tw", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovHydroWEH_collapse" aria-expanded="true" aria-controls="GovHydroWEH_collapse">GovHydroWEH</a>
<div id="GovHydroWEH_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#db}}<div><b>db</b>: {{db}}</div>{{/db}}
{{#dicn}}<div><b>dicn</b>: {{dicn}}</div>{{/dicn}}
{{#dpv}}<div><b>dpv</b>: {{dpv}}</div>{{/dpv}}
{{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
{{#feedbackSignal}}<div><b>feedbackSignal</b>: {{feedbackSignal}}</div>{{/feedbackSignal}}
{{#fl1}}<div><b>fl1</b>: {{fl1}}</div>{{/fl1}}
{{#fl2}}<div><b>fl2</b>: {{fl2}}</div>{{/fl2}}
{{#fl3}}<div><b>fl3</b>: {{fl3}}</div>{{/fl3}}
{{#fl4}}<div><b>fl4</b>: {{fl4}}</div>{{/fl4}}
{{#fl5}}<div><b>fl5</b>: {{fl5}}</div>{{/fl5}}
{{#fp1}}<div><b>fp1</b>: {{fp1}}</div>{{/fp1}}
{{#fp10}}<div><b>fp10</b>: {{fp10}}</div>{{/fp10}}
{{#fp2}}<div><b>fp2</b>: {{fp2}}</div>{{/fp2}}
{{#fp3}}<div><b>fp3</b>: {{fp3}}</div>{{/fp3}}
{{#fp4}}<div><b>fp4</b>: {{fp4}}</div>{{/fp4}}
{{#fp5}}<div><b>fp5</b>: {{fp5}}</div>{{/fp5}}
{{#fp6}}<div><b>fp6</b>: {{fp6}}</div>{{/fp6}}
{{#fp7}}<div><b>fp7</b>: {{fp7}}</div>{{/fp7}}
{{#fp8}}<div><b>fp8</b>: {{fp8}}</div>{{/fp8}}
{{#fp9}}<div><b>fp9</b>: {{fp9}}</div>{{/fp9}}
{{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
{{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
{{#gtmxcl}}<div><b>gtmxcl</b>: {{gtmxcl}}</div>{{/gtmxcl}}
{{#gtmxop}}<div><b>gtmxop</b>: {{gtmxop}}</div>{{/gtmxop}}
{{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
{{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
{{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
{{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
{{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
{{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
{{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
{{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#pmss1}}<div><b>pmss1</b>: {{pmss1}}</div>{{/pmss1}}
{{#pmss10}}<div><b>pmss10</b>: {{pmss10}}</div>{{/pmss10}}
{{#pmss2}}<div><b>pmss2</b>: {{pmss2}}</div>{{/pmss2}}
{{#pmss3}}<div><b>pmss3</b>: {{pmss3}}</div>{{/pmss3}}
{{#pmss4}}<div><b>pmss4</b>: {{pmss4}}</div>{{/pmss4}}
{{#pmss5}}<div><b>pmss5</b>: {{pmss5}}</div>{{/pmss5}}
{{#pmss6}}<div><b>pmss6</b>: {{pmss6}}</div>{{/pmss6}}
{{#pmss7}}<div><b>pmss7</b>: {{pmss7}}</div>{{/pmss7}}
{{#pmss8}}<div><b>pmss8</b>: {{pmss8}}</div>{{/pmss8}}
{{#pmss9}}<div><b>pmss9</b>: {{pmss9}}</div>{{/pmss9}}
{{#rpg}}<div><b>rpg</b>: {{rpg}}</div>{{/rpg}}
{{#rpp}}<div><b>rpp</b>: {{rpp}}</div>{{/rpp}}
{{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
{{#tdv}}<div><b>tdv</b>: {{tdv}}</div>{{/tdv}}
{{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#tpe}}<div><b>tpe</b>: {{tpe}}</div>{{/tpe}}
{{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
</div>
`
                );
           }        }

        /**
         * Gas turbine model.
         *
         */
        class GovGAST2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GovGAST2;
                if (null == bucket)
                   cim_data.GovGAST2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GovGAST2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST2";
                base.parse_element (/<cim:GovGAST2.a>([\s\S]*?)<\/cim:GovGAST2.a>/g, obj, "a", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST2.af1>([\s\S]*?)<\/cim:GovGAST2.af1>/g, obj, "af1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.af2>([\s\S]*?)<\/cim:GovGAST2.af2>/g, obj, "af2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.b>([\s\S]*?)<\/cim:GovGAST2.b>/g, obj, "b", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST2.bf1>([\s\S]*?)<\/cim:GovGAST2.bf1>/g, obj, "bf1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.bf2>([\s\S]*?)<\/cim:GovGAST2.bf2>/g, obj, "bf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.c>([\s\S]*?)<\/cim:GovGAST2.c>/g, obj, "c", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST2.cf2>([\s\S]*?)<\/cim:GovGAST2.cf2>/g, obj, "cf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.ecr>([\s\S]*?)<\/cim:GovGAST2.ecr>/g, obj, "ecr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.etd>([\s\S]*?)<\/cim:GovGAST2.etd>/g, obj, "etd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.k3>([\s\S]*?)<\/cim:GovGAST2.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.k4>([\s\S]*?)<\/cim:GovGAST2.k4>/g, obj, "k4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.k5>([\s\S]*?)<\/cim:GovGAST2.k5>/g, obj, "k5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.k6>([\s\S]*?)<\/cim:GovGAST2.k6>/g, obj, "k6", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.kf>([\s\S]*?)<\/cim:GovGAST2.kf>/g, obj, "kf", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.mwbase>([\s\S]*?)<\/cim:GovGAST2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.t>([\s\S]*?)<\/cim:GovGAST2.t>/g, obj, "t", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.t3>([\s\S]*?)<\/cim:GovGAST2.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.t4>([\s\S]*?)<\/cim:GovGAST2.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.t5>([\s\S]*?)<\/cim:GovGAST2.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tc>([\s\S]*?)<\/cim:GovGAST2.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tcd>([\s\S]*?)<\/cim:GovGAST2.tcd>/g, obj, "tcd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tf>([\s\S]*?)<\/cim:GovGAST2.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tmax>([\s\S]*?)<\/cim:GovGAST2.tmax>/g, obj, "tmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tmin>([\s\S]*?)<\/cim:GovGAST2.tmin>/g, obj, "tmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tr>([\s\S]*?)<\/cim:GovGAST2.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.trate>([\s\S]*?)<\/cim:GovGAST2.trate>/g, obj, "trate", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tt>([\s\S]*?)<\/cim:GovGAST2.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.w>([\s\S]*?)<\/cim:GovGAST2.w>/g, obj, "w", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.x>([\s\S]*?)<\/cim:GovGAST2.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.y>([\s\S]*?)<\/cim:GovGAST2.y>/g, obj, "y", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.z>([\s\S]*?)<\/cim:GovGAST2.z>/g, obj, "z", base.to_boolean, sub, context);

                var bucket = context.parsed.GovGAST2;
                if (null == bucket)
                   context.parsed.GovGAST2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST2", "a", base.from_float, fields);
                base.export_element (obj, "GovGAST2", "af1", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "af2", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "b", base.from_float, fields);
                base.export_element (obj, "GovGAST2", "bf1", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "bf2", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "c", base.from_float, fields);
                base.export_element (obj, "GovGAST2", "cf2", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "ecr", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "etd", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "k3", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "k4", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "k5", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "k6", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "kf", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "mwbase", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "t", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "t3", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "t4", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "t5", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tc", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tcd", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tf", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tmax", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tmin", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tr", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "trate", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tt", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "w", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "x", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "y", base.from_string, fields);
                base.export_element (obj, "GovGAST2", "z", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GovGAST2_collapse" aria-expanded="true" aria-controls="GovGAST2_collapse">GovGAST2</a>
<div id="GovGAST2_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TurbineGovernorDynamics.prototype.template.call (this) +
`
{{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
{{#af1}}<div><b>af1</b>: {{af1}}</div>{{/af1}}
{{#af2}}<div><b>af2</b>: {{af2}}</div>{{/af2}}
{{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
{{#bf1}}<div><b>bf1</b>: {{bf1}}</div>{{/bf1}}
{{#bf2}}<div><b>bf2</b>: {{bf2}}</div>{{/bf2}}
{{#c}}<div><b>c</b>: {{c}}</div>{{/c}}
{{#cf2}}<div><b>cf2</b>: {{cf2}}</div>{{/cf2}}
{{#ecr}}<div><b>ecr</b>: {{ecr}}</div>{{/ecr}}
{{#etd}}<div><b>etd</b>: {{etd}}</div>{{/etd}}
{{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
{{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
{{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
{{#k6}}<div><b>k6</b>: {{k6}}</div>{{/k6}}
{{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
{{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
{{#t}}<div><b>t</b>: {{t}}</div>{{/t}}
{{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
{{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
{{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
{{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
{{#tcd}}<div><b>tcd</b>: {{tcd}}</div>{{/tcd}}
{{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
{{#tmax}}<div><b>tmax</b>: {{tmax}}</div>{{/tmax}}
{{#tmin}}<div><b>tmin</b>: {{tmin}}</div>{{/tmin}}
{{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
{{#trate}}<div><b>trate</b>: {{trate}}</div>{{/trate}}
{{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
{{#w}}<div><b>w</b>: {{w}}</div>{{/w}}
{{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
{{#y}}<div><b>y</b>: {{y}}</div>{{/y}}
{{#z}}<div><b>z</b>: {{z}}</div>{{/z}}
</div>
`
                );
           }        }

        return (
            {
                GovHydroPID2: GovHydroPID2,
                TurbineGovernorDynamics: TurbineGovernorDynamics,
                GovHydroIEEE2: GovHydroIEEE2,
                GovCT2: GovCT2,
                GovHydro3: GovHydro3,
                GovCT1: GovCT1,
                GovSteamIEEE1: GovSteamIEEE1,
                GovSteamFV3: GovSteamFV3,
                GovGAST3: GovGAST3,
                GovHydroIEEE0: GovHydroIEEE0,
                DroopSignalFeedbackKind: DroopSignalFeedbackKind,
                GovSteam2: GovSteam2,
                GovHydro2: GovHydro2,
                GovGAST1: GovGAST1,
                GovHydroFrancis: GovHydroFrancis,
                GovGASTWD: GovGASTWD,
                GovSteam1: GovSteam1,
                GovGAST4: GovGAST4,
                GovHydroDD: GovHydroDD,
                GovHydro1: GovHydro1,
                GovGAST2: GovGAST2,
                FrancisGovernorControlKind: FrancisGovernorControlKind,
                GovHydroWPID: GovHydroWPID,
                GovSteamFV4: GovSteamFV4,
                GovHydroPID: GovHydroPID,
                GovHydroR: GovHydroR,
                GovHydro4: GovHydro4,
                GovSteamSGO: GovSteamSGO,
                GovGAST: GovGAST,
                GovSteamEU: GovSteamEU,
                GovHydroWEH: GovHydroWEH,
                GovHydroPelton: GovHydroPelton,
                GovSteamCC: GovSteamCC,
                GovSteamFV2: GovSteamFV2,
                GovSteam0: GovSteam0
            }
        );
    }
);