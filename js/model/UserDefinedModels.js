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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:PFVArControllerType2UserDefined.proprietary>([\s\S]*?)<\/cim:PFVArControllerType2UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.PFVArControllerType2UserDefined;
            if (null == bucket)
                context.parsed.PFVArControllerType2UserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:TurbineLoadControllerUserDefined.proprietary>([\s\S]*?)<\/cim:TurbineLoadControllerUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.TurbineLoadControllerUserDefined;
            if (null == bucket)
                context.parsed.TurbineLoadControllerUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:VoltageAdjusterUserDefined.proprietary>([\s\S]*?)<\/cim:VoltageAdjusterUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.VoltageAdjusterUserDefined;
            if (null == bucket)
                context.parsed.VoltageAdjusterUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:TurbineGovernorUserDefined.proprietary>([\s\S]*?)<\/cim:TurbineGovernorUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.TurbineGovernorUserDefined;
            if (null == bucket)
                context.parsed.TurbineGovernorUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:LoadUserDefined.proprietary>([\s\S]*?)<\/cim:LoadUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.LoadUserDefined;
            if (null == bucket)
                context.parsed.LoadUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:ExcitationSystemUserDefined.proprietary>([\s\S]*?)<\/cim:ExcitationSystemUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.ExcitationSystemUserDefined;
            if (null == bucket)
                context.parsed.ExcitationSystemUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:WindPlantUserDefined.proprietary>([\s\S]*?)<\/cim:WindPlantUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.WindPlantUserDefined;
            if (null == bucket)
                context.parsed.WindPlantUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:PowerSystemStabilizerUserDefined.proprietary>([\s\S]*?)<\/cim:PowerSystemStabilizerUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.PowerSystemStabilizerUserDefined;
            if (null == bucket)
                context.parsed.PowerSystemStabilizerUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:WindType3or4UserDefined.proprietary>([\s\S]*?)<\/cim:WindType3or4UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.WindType3or4UserDefined;
            if (null == bucket)
                context.parsed.WindType3or4UserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:AsynchronousMachineUserDefined.proprietary>([\s\S]*?)<\/cim:AsynchronousMachineUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.AsynchronousMachineUserDefined;
            if (null == bucket)
                context.parsed.AsynchronousMachineUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:PFVArControllerType1UserDefined.proprietary>([\s\S]*?)<\/cim:PFVArControllerType1UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.PFVArControllerType1UserDefined;
            if (null == bucket)
                context.parsed.PFVArControllerType1UserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:MechanicalLoadUserDefined.proprietary>([\s\S]*?)<\/cim:MechanicalLoadUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.MechanicalLoadUserDefined;
            if (null == bucket)
                context.parsed.MechanicalLoadUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:VoltageCompensatorUserDefined.proprietary>([\s\S]*?)<\/cim:VoltageCompensatorUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.VoltageCompensatorUserDefined;
            if (null == bucket)
                context.parsed.VoltageCompensatorUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:UnderexcitationLimiterUserDefined.proprietary>([\s\S]*?)<\/cim:UnderexcitationLimiterUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.UnderexcitationLimiterUserDefined;
            if (null == bucket)
                context.parsed.UnderexcitationLimiterUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:WindType1or2UserDefined.proprietary>([\s\S]*?)<\/cim:WindType1or2UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.WindType1or2UserDefined;
            if (null == bucket)
                context.parsed.WindType1or2UserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:OverexcitationLimiterUserDefined.proprietary>([\s\S]*?)<\/cim:OverexcitationLimiterUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.OverexcitationLimiterUserDefined;
            if (null == bucket)
                context.parsed.OverexcitationLimiterUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Used for boolean parameter value.
             *
             * If this attribute is populated, integerParameterValue and floatParameterValue will not be.
             *
             */
            base.parse_element (/<cim:ProprietaryParameterDynamics.booleanParameterValue>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.booleanParameterValue>/g, obj, "booleanParameterValue", base.to_boolean, sub, context);

            /**
             * Used for floating point parameter value.
             *
             * If this attribute is populated, booleanParameterValue and integerParameterValue will not be.
             *
             */
            base.parse_element (/<cim:ProprietaryParameterDynamics.floatParameterValue>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.floatParameterValue>/g, obj, "floatParameterValue", base.to_float, sub, context);

            /**
             * Used for integer parameter value.
             *
             * If this attribute is populated, booleanParameterValue and floatParameterValue will not be.
             *
             */
            base.parse_element (/<cim:ProprietaryParameterDynamics.integerParameterValue>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.integerParameterValue>/g, obj, "integerParameterValue", base.to_string, sub, context);

            /**
             * Sequence number of the parameter among the set of parameters associated with the related proprietary user-defined model.
             *
             */
            base.parse_element (/<cim:ProprietaryParameterDynamics.parameterNumber>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.parameterNumber>/g, obj, "parameterNumber", base.to_string, sub, context);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.TurbineGovernorUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineGovernorUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.PFVArControllerType2UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType2UserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.WindType1or2UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindType1or2UserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.VoltageAdjusterUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageAdjusterUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.TurbineLoadControllerUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineLoadControllerUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscontinuousExcitationControlUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemStabilizerUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.ExcitationSystemUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.LoadUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.AsynchronousMachineUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.VoltageCompensatorUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageCompensatorUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.SynchronousMachineUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.MechanicalLoadUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MechanicalLoadUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.WindType3or4UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindType3or4UserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.PFVArControllerType1UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1UserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.WindPlantUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UnderexcitationLimiterUserDefined", sub, context, true);

            /**
             * Proprietary user-defined model with which this parameter is associated.
             *
             */
            base.parse_attribute (/<cim:ProprietaryParameterDynamics.OverexcitationLimiterUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverexcitationLimiterUserDefined", sub, context, true);

            bucket = context.parsed.ProprietaryParameterDynamics;
            if (null == bucket)
                context.parsed.ProprietaryParameterDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:SynchronousMachineUserDefined.proprietary>([\s\S]*?)<\/cim:SynchronousMachineUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.SynchronousMachineUserDefined;
            if (null == bucket)
                context.parsed.SynchronousMachineUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Behaviour is based on proprietary model as opposed to detailed model.
             * true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes
             *
             * false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.
             *
             */
            base.parse_element (/<cim:DiscontinuousExcitationControlUserDefined.proprietary>([\s\S]*?)<\/cim:DiscontinuousExcitationControlUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);

            bucket = context.parsed.DiscontinuousExcitationControlUserDefined;
            if (null == bucket)
                context.parsed.DiscontinuousExcitationControlUserDefined = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_SynchronousMachineUserDefined: parse_SynchronousMachineUserDefined,
                parse_DiscontinuousExcitationControlUserDefined: parse_DiscontinuousExcitationControlUserDefined,
                parse_TurbineGovernorUserDefined: parse_TurbineGovernorUserDefined,
                parse_VoltageCompensatorUserDefined: parse_VoltageCompensatorUserDefined,
                parse_ExcitationSystemUserDefined: parse_ExcitationSystemUserDefined,
                parse_PFVArControllerType2UserDefined: parse_PFVArControllerType2UserDefined,
                parse_PFVArControllerType1UserDefined: parse_PFVArControllerType1UserDefined,
                parse_WindType1or2UserDefined: parse_WindType1or2UserDefined,
                parse_WindPlantUserDefined: parse_WindPlantUserDefined,
                parse_MechanicalLoadUserDefined: parse_MechanicalLoadUserDefined,
                parse_LoadUserDefined: parse_LoadUserDefined,
                parse_UnderexcitationLimiterUserDefined: parse_UnderexcitationLimiterUserDefined,
                parse_WindType3or4UserDefined: parse_WindType3or4UserDefined,
                parse_PowerSystemStabilizerUserDefined: parse_PowerSystemStabilizerUserDefined,
                parse_VoltageAdjusterUserDefined: parse_VoltageAdjusterUserDefined,
                parse_TurbineLoadControllerUserDefined: parse_TurbineLoadControllerUserDefined,
                parse_OverexcitationLimiterUserDefined: parse_OverexcitationLimiterUserDefined,
                parse_ProprietaryParameterDynamics: parse_ProprietaryParameterDynamics,
                parse_AsynchronousMachineUserDefined: parse_AsynchronousMachineUserDefined
            }
        );
    }
);