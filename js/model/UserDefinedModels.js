define
(
    ["model/base", "model/AsynchronousMachineDynamics", "model/DiscontinuousExcitationControlDynamics", "model/ExcitationSystemDynamics", "model/LoadDynamics", "model/MechanicalLoadDynamics", "model/OverexcitationLimiterDynamics", "model/PFVArControllerType1Dynamics", "model/PFVArControllerType2Dynamics", "model/PowerSystemStabilizerDynamics", "model/SynchronousMachineDynamics", "model/TurbineGovernorDynamics", "model/TurbineLoadControllerDynamics", "model/UnderexcitationLimiterDynamics", "model/VoltageAdjusterDynamics", "model/VoltageCompensatorDynamics", "model/WindDynamics"],
    /**
     * This section contains user-defined dynamic model classes to support the exchange of both proprietary and explicitly defined user-defined models.
     * <u>
     * </u><u>Proprietary models</u> represent behaviour which, while not defined by a standard model class, is mutually understood by the sending and receiving applications based on the name passed in the .name attribute of the appropriate xxxUserDefined class.
     *
     * Proprietary model parameters are passed as general attributes using as many instances of the ProprietaryParameterDynamics class as there are parameters.
     *
     */
    function (base, AsynchronousMachineDynamics, DiscontinuousExcitationControlDynamics, ExcitationSystemDynamics, LoadDynamics, MechanicalLoadDynamics, OverexcitationLimiterDynamics, PFVArControllerType1Dynamics, PFVArControllerType2Dynamics, PowerSystemStabilizerDynamics, SynchronousMachineDynamics, TurbineGovernorDynamics, TurbineLoadControllerDynamics, UnderexcitationLimiterDynamics, VoltageAdjusterDynamics, VoltageCompensatorDynamics, WindDynamics)
    {

        /**
         * Power Factor or VAr controller Type II function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_PFVArControllerType2UserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = PFVArControllerType2Dynamics.parse_PFVArControllerType2Dynamics (context, sub);
            obj.cls = "PFVArControllerType2UserDefined";
            base.parse_element (/<cim:PFVArControllerType2UserDefined.proprietary>([\s\S]*?)<\/cim:PFVArControllerType2UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.PFVArControllerType2UserDefined;
            if (null == bucket)
                context.parsed.PFVArControllerType2UserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PFVArControllerType2UserDefined (obj, exporters, full)
        {
            var fields = exporters["PFVArControllerType2Dynamics"](obj, exporters, false);

            base.export_element (obj, "PFVArControllerType2UserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Turbine load controller function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_TurbineLoadControllerUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = TurbineLoadControllerDynamics.parse_TurbineLoadControllerDynamics (context, sub);
            obj.cls = "TurbineLoadControllerUserDefined";
            base.parse_element (/<cim:TurbineLoadControllerUserDefined.proprietary>([\s\S]*?)<\/cim:TurbineLoadControllerUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.TurbineLoadControllerUserDefined;
            if (null == bucket)
                context.parsed.TurbineLoadControllerUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TurbineLoadControllerUserDefined (obj, exporters, full)
        {
            var fields = exporters["TurbineLoadControllerDynamics"](obj, exporters, false);

            base.export_element (obj, "TurbineLoadControllerUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * <font color="#0f0f0f">Voltage adjuster</font> function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_VoltageAdjusterUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = VoltageAdjusterDynamics.parse_VoltageAdjusterDynamics (context, sub);
            obj.cls = "VoltageAdjusterUserDefined";
            base.parse_element (/<cim:VoltageAdjusterUserDefined.proprietary>([\s\S]*?)<\/cim:VoltageAdjusterUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.VoltageAdjusterUserDefined;
            if (null == bucket)
                context.parsed.VoltageAdjusterUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_VoltageAdjusterUserDefined (obj, exporters, full)
        {
            var fields = exporters["VoltageAdjusterDynamics"](obj, exporters, false);

            base.export_element (obj, "VoltageAdjusterUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Turbine-governor function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_TurbineGovernorUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = TurbineGovernorDynamics.parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "TurbineGovernorUserDefined";
            base.parse_element (/<cim:TurbineGovernorUserDefined.proprietary>([\s\S]*?)<\/cim:TurbineGovernorUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.TurbineGovernorUserDefined;
            if (null == bucket)
                context.parsed.TurbineGovernorUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TurbineGovernorUserDefined (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "TurbineGovernorUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Load whose dynamic behaviour is described by a user-defined model.
         *
         */
        function parse_LoadUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = LoadDynamics.parse_LoadDynamics (context, sub);
            obj.cls = "LoadUserDefined";
            base.parse_element (/<cim:LoadUserDefined.proprietary>([\s\S]*?)<\/cim:LoadUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.LoadUserDefined;
            if (null == bucket)
                context.parsed.LoadUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LoadUserDefined (obj, exporters, full)
        {
            var fields = exporters["LoadDynamics"](obj, exporters, false);

            base.export_element (obj, "LoadUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Excitation system function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_ExcitationSystemUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = ExcitationSystemDynamics.parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcitationSystemUserDefined";
            base.parse_element (/<cim:ExcitationSystemUserDefined.proprietary>([\s\S]*?)<\/cim:ExcitationSystemUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.ExcitationSystemUserDefined;
            if (null == bucket)
                context.parsed.ExcitationSystemUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcitationSystemUserDefined (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcitationSystemUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Wind plant function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_WindPlantUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = WindDynamics.parse_WindPlantDynamics (context, sub);
            obj.cls = "WindPlantUserDefined";
            base.parse_element (/<cim:WindPlantUserDefined.proprietary>([\s\S]*?)<\/cim:WindPlantUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.WindPlantUserDefined;
            if (null == bucket)
                context.parsed.WindPlantUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WindPlantUserDefined (obj, exporters, full)
        {
            var fields = exporters["WindPlantDynamics"](obj, exporters, false);

            base.export_element (obj, "WindPlantUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * <font color="#0f0f0f">Power system stabilizer</font> function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_PowerSystemStabilizerUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = PowerSystemStabilizerDynamics.parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PowerSystemStabilizerUserDefined";
            base.parse_element (/<cim:PowerSystemStabilizerUserDefined.proprietary>([\s\S]*?)<\/cim:PowerSystemStabilizerUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.PowerSystemStabilizerUserDefined;
            if (null == bucket)
                context.parsed.PowerSystemStabilizerUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PowerSystemStabilizerUserDefined (obj, exporters, full)
        {
            var fields = exporters["PowerSystemStabilizerDynamics"](obj, exporters, false);

            base.export_element (obj, "PowerSystemStabilizerUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Wind Type 3 or Type 4 function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_WindType3or4UserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = WindDynamics.parse_WindTurbineType3or4Dynamics (context, sub);
            obj.cls = "WindType3or4UserDefined";
            base.parse_element (/<cim:WindType3or4UserDefined.proprietary>([\s\S]*?)<\/cim:WindType3or4UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.WindType3or4UserDefined;
            if (null == bucket)
                context.parsed.WindType3or4UserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WindType3or4UserDefined (obj, exporters, full)
        {
            var fields = exporters["WindTurbineType3or4Dynamics"](obj, exporters, false);

            base.export_element (obj, "WindType3or4UserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Asynchronous machine whose dynamic behaviour is described by a user-defined model.
         *
         */
        function parse_AsynchronousMachineUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = AsynchronousMachineDynamics.parse_AsynchronousMachineDynamics (context, sub);
            obj.cls = "AsynchronousMachineUserDefined";
            base.parse_element (/<cim:AsynchronousMachineUserDefined.proprietary>([\s\S]*?)<\/cim:AsynchronousMachineUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.AsynchronousMachineUserDefined;
            if (null == bucket)
                context.parsed.AsynchronousMachineUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AsynchronousMachineUserDefined (obj, exporters, full)
        {
            var fields = exporters["AsynchronousMachineDynamics"](obj, exporters, false);

            base.export_element (obj, "AsynchronousMachineUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Power Factor or VAr controller Type I function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_PFVArControllerType1UserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = PFVArControllerType1Dynamics.parse_PFVArControllerType1Dynamics (context, sub);
            obj.cls = "PFVArControllerType1UserDefined";
            base.parse_element (/<cim:PFVArControllerType1UserDefined.proprietary>([\s\S]*?)<\/cim:PFVArControllerType1UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.PFVArControllerType1UserDefined;
            if (null == bucket)
                context.parsed.PFVArControllerType1UserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PFVArControllerType1UserDefined (obj, exporters, full)
        {
            var fields = exporters["PFVArControllerType1Dynamics"](obj, exporters, false);

            base.export_element (obj, "PFVArControllerType1UserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Mechanical load function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_MechanicalLoadUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = MechanicalLoadDynamics.parse_MechanicalLoadDynamics (context, sub);
            obj.cls = "MechanicalLoadUserDefined";
            base.parse_element (/<cim:MechanicalLoadUserDefined.proprietary>([\s\S]*?)<\/cim:MechanicalLoadUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.MechanicalLoadUserDefined;
            if (null == bucket)
                context.parsed.MechanicalLoadUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MechanicalLoadUserDefined (obj, exporters, full)
        {
            var fields = exporters["MechanicalLoadDynamics"](obj, exporters, false);

            base.export_element (obj, "MechanicalLoadUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Voltage compensator function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_VoltageCompensatorUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = VoltageCompensatorDynamics.parse_VoltageCompensatorDynamics (context, sub);
            obj.cls = "VoltageCompensatorUserDefined";
            base.parse_element (/<cim:VoltageCompensatorUserDefined.proprietary>([\s\S]*?)<\/cim:VoltageCompensatorUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.VoltageCompensatorUserDefined;
            if (null == bucket)
                context.parsed.VoltageCompensatorUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_VoltageCompensatorUserDefined (obj, exporters, full)
        {
            var fields = exporters["VoltageCompensatorDynamics"](obj, exporters, false);

            base.export_element (obj, "VoltageCompensatorUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Underexcitation limiter function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_UnderexcitationLimiterUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = UnderexcitationLimiterDynamics.parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcitationLimiterUserDefined";
            base.parse_element (/<cim:UnderexcitationLimiterUserDefined.proprietary>([\s\S]*?)<\/cim:UnderexcitationLimiterUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.UnderexcitationLimiterUserDefined;
            if (null == bucket)
                context.parsed.UnderexcitationLimiterUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_UnderexcitationLimiterUserDefined (obj, exporters, full)
        {
            var fields = exporters["UnderexcitationLimiterDynamics"](obj, exporters, false);

            base.export_element (obj, "UnderexcitationLimiterUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Wind Type 1 or Type 2 function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_WindType1or2UserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = WindDynamics.parse_WindTurbineType1or2Dynamics (context, sub);
            obj.cls = "WindType1or2UserDefined";
            base.parse_element (/<cim:WindType1or2UserDefined.proprietary>([\s\S]*?)<\/cim:WindType1or2UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.WindType1or2UserDefined;
            if (null == bucket)
                context.parsed.WindType1or2UserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WindType1or2UserDefined (obj, exporters, full)
        {
            var fields = exporters["WindTurbineType1or2Dynamics"](obj, exporters, false);

            base.export_element (obj, "WindType1or2UserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Overexcitation limiter system function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_OverexcitationLimiterUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = OverexcitationLimiterDynamics.parse_OverexcitationLimiterDynamics (context, sub);
            obj.cls = "OverexcitationLimiterUserDefined";
            base.parse_element (/<cim:OverexcitationLimiterUserDefined.proprietary>([\s\S]*?)<\/cim:OverexcitationLimiterUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.OverexcitationLimiterUserDefined;
            if (null == bucket)
                context.parsed.OverexcitationLimiterUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OverexcitationLimiterUserDefined (obj, exporters, full)
        {
            var fields = exporters["OverexcitationLimiterDynamics"](obj, exporters, false);

            base.export_element (obj, "OverexcitationLimiterUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Supports definition of one or more parameters of several different datatypes for use by proprietary user-defined models.
         *
         * NOTE: This class does not inherit from IdentifiedObject since it is not intended that a single instance of it be referenced by more than one proprietary user-defined model instance.
         *
         */
        function parse_ProprietaryParameterDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProprietaryParameterDynamics";
            base.parse_element (/<cim:ProprietaryParameterDynamics.booleanParameterValue>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.booleanParameterValue>/g, obj, "booleanParameterValue", base.to_boolean, sub, context);
            base.parse_element (/<cim:ProprietaryParameterDynamics.floatParameterValue>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.floatParameterValue>/g, obj, "floatParameterValue", base.to_float, sub, context);
            base.parse_element (/<cim:ProprietaryParameterDynamics.integerParameterValue>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.integerParameterValue>/g, obj, "integerParameterValue", base.to_string, sub, context);
            base.parse_element (/<cim:ProprietaryParameterDynamics.parameterNumber>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.parameterNumber>/g, obj, "parameterNumber", base.to_string, sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.TurbineGovernorUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineGovernorUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.PFVArControllerType2UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType2UserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.WindType1or2UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindType1or2UserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.VoltageAdjusterUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageAdjusterUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.TurbineLoadControllerUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineLoadControllerUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscontinuousExcitationControlUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemStabilizerUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.ExcitationSystemUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.LoadUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.AsynchronousMachineUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.VoltageCompensatorUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageCompensatorUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.SynchronousMachineUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.MechanicalLoadUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MechanicalLoadUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.WindType3or4UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindType3or4UserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.PFVArControllerType1UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1UserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.WindPlantUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UnderexcitationLimiterUserDefined", sub, context);
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.OverexcitationLimiterUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverexcitationLimiterUserDefined", sub, context);
            bucket = context.parsed.ProprietaryParameterDynamics;
            if (null == bucket)
                context.parsed.ProprietaryParameterDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProprietaryParameterDynamics (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ProprietaryParameterDynamics", "booleanParameterValue", base.from_boolean, fields);
            base.export_element (obj, "ProprietaryParameterDynamics", "floatParameterValue", base.from_float, fields);
            base.export_element (obj, "ProprietaryParameterDynamics", "integerParameterValue", base.from_string, fields);
            base.export_element (obj, "ProprietaryParameterDynamics", "parameterNumber", base.from_string, fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "TurbineGovernorUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "PFVArControllerType2UserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "WindType1or2UserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "VoltageAdjusterUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "TurbineLoadControllerUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "DiscontinuousExcitationControlUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "PowerSystemStabilizerUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "ExcitationSystemUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "LoadUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "AsynchronousMachineUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "VoltageCompensatorUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "SynchronousMachineUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "MechanicalLoadUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "WindType3or4UserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "PFVArControllerType1UserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "WindPlantUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "UnderexcitationLimiterUserDefined", fields);
            base.export_attribute (obj, "ProprietaryParameterDynamics", "OverexcitationLimiterUserDefined", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Synchronous machine whose dynamic behaviour is described by a user-defined model.
         *
         */
        function parse_SynchronousMachineUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = SynchronousMachineDynamics.parse_SynchronousMachineDynamics (context, sub);
            obj.cls = "SynchronousMachineUserDefined";
            base.parse_element (/<cim:SynchronousMachineUserDefined.proprietary>([\s\S]*?)<\/cim:SynchronousMachineUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.SynchronousMachineUserDefined;
            if (null == bucket)
                context.parsed.SynchronousMachineUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SynchronousMachineUserDefined (obj, exporters, full)
        {
            var fields = exporters["SynchronousMachineDynamics"](obj, exporters, false);

            base.export_element (obj, "SynchronousMachineUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Discontinuous excitation control function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        function parse_DiscontinuousExcitationControlUserDefined (context, sub)
        {
            var obj;
            var bucket;

            obj = DiscontinuousExcitationControlDynamics.parse_DiscontinuousExcitationControlDynamics (context, sub);
            obj.cls = "DiscontinuousExcitationControlUserDefined";
            base.parse_element (/<cim:DiscontinuousExcitationControlUserDefined.proprietary>([\s\S]*?)<\/cim:DiscontinuousExcitationControlUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
            bucket = context.parsed.DiscontinuousExcitationControlUserDefined;
            if (null == bucket)
                context.parsed.DiscontinuousExcitationControlUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DiscontinuousExcitationControlUserDefined (obj, exporters, full)
        {
            var fields = exporters["DiscontinuousExcitationControlDynamics"](obj, exporters, false);

            base.export_element (obj, "DiscontinuousExcitationControlUserDefined", "proprietary", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_DiscontinuousExcitationControlUserDefined: parse_DiscontinuousExcitationControlUserDefined,
                export_TurbineLoadControllerUserDefined: export_TurbineLoadControllerUserDefined,
                export_MechanicalLoadUserDefined: export_MechanicalLoadUserDefined,
                export_SynchronousMachineUserDefined: export_SynchronousMachineUserDefined,
                parse_ExcitationSystemUserDefined: parse_ExcitationSystemUserDefined,
                parse_PFVArControllerType1UserDefined: parse_PFVArControllerType1UserDefined,
                export_OverexcitationLimiterUserDefined: export_OverexcitationLimiterUserDefined,
                parse_WindType1or2UserDefined: parse_WindType1or2UserDefined,
                parse_WindPlantUserDefined: parse_WindPlantUserDefined,
                export_PFVArControllerType1UserDefined: export_PFVArControllerType1UserDefined,
                parse_UnderexcitationLimiterUserDefined: parse_UnderexcitationLimiterUserDefined,
                export_VoltageAdjusterUserDefined: export_VoltageAdjusterUserDefined,
                export_VoltageCompensatorUserDefined: export_VoltageCompensatorUserDefined,
                parse_VoltageAdjusterUserDefined: parse_VoltageAdjusterUserDefined,
                parse_TurbineLoadControllerUserDefined: parse_TurbineLoadControllerUserDefined,
                parse_OverexcitationLimiterUserDefined: parse_OverexcitationLimiterUserDefined,
                parse_ProprietaryParameterDynamics: parse_ProprietaryParameterDynamics,
                parse_SynchronousMachineUserDefined: parse_SynchronousMachineUserDefined,
                parse_TurbineGovernorUserDefined: parse_TurbineGovernorUserDefined,
                parse_VoltageCompensatorUserDefined: parse_VoltageCompensatorUserDefined,
                export_DiscontinuousExcitationControlUserDefined: export_DiscontinuousExcitationControlUserDefined,
                export_LoadUserDefined: export_LoadUserDefined,
                parse_PFVArControllerType2UserDefined: parse_PFVArControllerType2UserDefined,
                export_PFVArControllerType2UserDefined: export_PFVArControllerType2UserDefined,
                export_TurbineGovernorUserDefined: export_TurbineGovernorUserDefined,
                export_AsynchronousMachineUserDefined: export_AsynchronousMachineUserDefined,
                parse_MechanicalLoadUserDefined: parse_MechanicalLoadUserDefined,
                export_WindType1or2UserDefined: export_WindType1or2UserDefined,
                export_UnderexcitationLimiterUserDefined: export_UnderexcitationLimiterUserDefined,
                export_ProprietaryParameterDynamics: export_ProprietaryParameterDynamics,
                parse_LoadUserDefined: parse_LoadUserDefined,
                parse_WindType3or4UserDefined: parse_WindType3or4UserDefined,
                export_WindType3or4UserDefined: export_WindType3or4UserDefined,
                parse_PowerSystemStabilizerUserDefined: parse_PowerSystemStabilizerUserDefined,
                export_PowerSystemStabilizerUserDefined: export_PowerSystemStabilizerUserDefined,
                export_WindPlantUserDefined: export_WindPlantUserDefined,
                export_ExcitationSystemUserDefined: export_ExcitationSystemUserDefined,
                parse_AsynchronousMachineUserDefined: parse_AsynchronousMachineUserDefined
            }
        );
    }
);