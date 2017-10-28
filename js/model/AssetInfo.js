define
(
    ["model/base", "model/Assets", "model/Core"],
    /**
     * This package is an extension of Assets package and contains the core information classes that support asset management and different network and work planning applications with specialized AssetInfo subclasses.
     *
     * They hold attributes that can be referenced by not only Asset-s or AssetModel-s but also by ConductingEquipment-s.
     *
     */
    function (base, Assets, Core)
    {

        /**
         * Wire spacing data that associates multiple wire positions with the line segment, and allows to calculate line segment impedances.
         *
         * Number of phases can be derived from the number of associated wire positions whose phase is not neutral.
         *
         */
        function parse_WireSpacingInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "WireSpacingInfo";
            /**
             * If true, this spacing data describes a cable.
             *
             */
            base.parse_element (/<cim:WireSpacingInfo.isCable>([\s\S]*?)<\/cim:WireSpacingInfo.isCable>/g, obj, "isCable", base.to_boolean, sub, context);

            /**
             * Number of wire sub-conductors in the symmetrical bundle (typically between 1 and 4).
             *
             */
            base.parse_element (/<cim:WireSpacingInfo.phaseWireCount>([\s\S]*?)<\/cim:WireSpacingInfo.phaseWireCount>/g, obj, "phaseWireCount", base.to_string, sub, context);

            /**
             * Distance between wire sub-conductors in a symmetrical bundle.
             *
             */
            base.parse_element (/<cim:WireSpacingInfo.phaseWireSpacing>([\s\S]*?)<\/cim:WireSpacingInfo.phaseWireSpacing>/g, obj, "phaseWireSpacing", base.to_string, sub, context);

            /**
             * Usage of the associated wires.
             *
             */
            base.parse_element (/<cim:WireSpacingInfo.usage>([\s\S]*?)<\/cim:WireSpacingInfo.usage>/g, obj, "usage", base.to_string, sub, context);

            base.parse_attribute (/<cim:WireSpacingInfo.DuctBank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DuctBank", sub, context, true);

            bucket = context.parsed.WireSpacingInfo;
            if (null == bucket)
                context.parsed.WireSpacingInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of cable outer jacket.
         *
         */
        function parse_CableOuterJacketKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CableOuterJacketKind";
            /**
             * Cable has no outer jacket.
             *
             */
            base.parse_element (/<cim:CableOuterJacketKind.none>([\s\S]*?)<\/cim:CableOuterJacketKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * Linear low density polyethylene cable outer jacket.
             *
             */
            base.parse_element (/<cim:CableOuterJacketKind.linearLowDensityPolyethylene>([\s\S]*?)<\/cim:CableOuterJacketKind.linearLowDensityPolyethylene>/g, obj, "linearLowDensityPolyethylene", base.to_string, sub, context);

            /**
             * PVC cable outer jacket.
             *
             */
            base.parse_element (/<cim:CableOuterJacketKind.pvc>([\s\S]*?)<\/cim:CableOuterJacketKind.pvc>/g, obj, "pvc", base.to_string, sub, context);

            /**
             * Polyethylene cable outer jacket.
             *
             */
            base.parse_element (/<cim:CableOuterJacketKind.polyethylene>([\s\S]*?)<\/cim:CableOuterJacketKind.polyethylene>/g, obj, "polyethylene", base.to_string, sub, context);

            /**
             * Insulating cable outer jacket.
             *
             */
            base.parse_element (/<cim:CableOuterJacketKind.insulating>([\s\S]*?)<\/cim:CableOuterJacketKind.insulating>/g, obj, "insulating", base.to_string, sub, context);

            /**
             * Semiconducting cable outer jacket.
             *
             */
            base.parse_element (/<cim:CableOuterJacketKind.semiconducting>([\s\S]*?)<\/cim:CableOuterJacketKind.semiconducting>/g, obj, "semiconducting", base.to_string, sub, context);

            /**
             * Pther kind of cable outer jacket.
             *
             */
            base.parse_element (/<cim:CableOuterJacketKind.other>([\s\S]*?)<\/cim:CableOuterJacketKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.CableOuterJacketKind;
            if (null == bucket)
                context.parsed.CableOuterJacketKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Tap changer data.
         *
         */
        function parse_TapChangerInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "TapChangerInfo";
            /**
             * Basic Insulation Level (BIL) expressed as the impulse crest voltage of a nominal wave, typically 1.2 X 50 microsecond.
             *
             * This is a measure of the ability of the insulation to withstand very high voltage surges.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.bil>([\s\S]*?)<\/cim:TapChangerInfo.bil>/g, obj, "bil", base.to_string, sub, context);

            /**
             * Built-in current transformer primary rating.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.ctRating>([\s\S]*?)<\/cim:TapChangerInfo.ctRating>/g, obj, "ctRating", base.to_string, sub, context);

            /**
             * Built-in current transducer ratio.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.ctRatio>([\s\S]*?)<\/cim:TapChangerInfo.ctRatio>/g, obj, "ctRatio", base.to_float, sub, context);

            /**
             * Frequency at which the ratings apply.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.frequency>([\s\S]*?)<\/cim:TapChangerInfo.frequency>/g, obj, "frequency", base.to_string, sub, context);

            /**
             * Highest possible tap step position, advance from neutral.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.highStep>([\s\S]*?)<\/cim:TapChangerInfo.highStep>/g, obj, "highStep", base.to_string, sub, context);

            /**
             * Whether this tap changer has under load tap changing capabilities.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.isTcul>([\s\S]*?)<\/cim:TapChangerInfo.isTcul>/g, obj, "isTcul", base.to_boolean, sub, context);

            /**
             * Lowest possible tap step position, retard from neutral.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.lowStep>([\s\S]*?)<\/cim:TapChangerInfo.lowStep>/g, obj, "lowStep", base.to_string, sub, context);

            /**
             * The neutral tap step position for the winding.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.neutralStep>([\s\S]*?)<\/cim:TapChangerInfo.neutralStep>/g, obj, "neutralStep", base.to_string, sub, context);

            /**
             * Voltage at which the winding operates at the neutral tap setting.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.neutralU>([\s\S]*?)<\/cim:TapChangerInfo.neutralU>/g, obj, "neutralU", base.to_string, sub, context);

            /**
             * Built-in voltage transducer ratio.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.ptRatio>([\s\S]*?)<\/cim:TapChangerInfo.ptRatio>/g, obj, "ptRatio", base.to_float, sub, context);

            /**
             * Rated apparent power.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.ratedApparentPower>([\s\S]*?)<\/cim:TapChangerInfo.ratedApparentPower>/g, obj, "ratedApparentPower", base.to_string, sub, context);

            /**
             * Rated current.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.ratedCurrent>([\s\S]*?)<\/cim:TapChangerInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);

            /**
             * Rated voltage.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.ratedVoltage>([\s\S]*?)<\/cim:TapChangerInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);

            /**
             * Phase shift per step position.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.stepPhaseIncrement>([\s\S]*?)<\/cim:TapChangerInfo.stepPhaseIncrement>/g, obj, "stepPhaseIncrement", base.to_string, sub, context);

            /**
             * Tap step increment, in per cent of rated voltage, per step position.
             *
             */
            base.parse_element (/<cim:TapChangerInfo.stepVoltageIncrement>([\s\S]*?)<\/cim:TapChangerInfo.stepVoltageIncrement>/g, obj, "stepVoltageIncrement", base.to_string, sub, context);

            bucket = context.parsed.TapChangerInfo;
            if (null == bucket)
                context.parsed.TapChangerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * No-load test results determine core admittance parameters.
         *
         * They include exciting current and core loss measurements from applying voltage to one winding. The excitation may be positive sequence or zero sequence. The test may be repeated at different voltages to measure saturation.
         *
         */
        function parse_NoLoadTest (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TransformerTest (context, sub);
            obj.cls = "NoLoadTest";
            /**
             * Voltage applied to the winding (end) during test.
             *
             */
            base.parse_element (/<cim:NoLoadTest.energisedEndVoltage>([\s\S]*?)<\/cim:NoLoadTest.energisedEndVoltage>/g, obj, "energisedEndVoltage", base.to_string, sub, context);

            /**
             * Exciting current measured from a positive-sequence or single-phase excitation test.
             *
             */
            base.parse_element (/<cim:NoLoadTest.excitingCurrent>([\s\S]*?)<\/cim:NoLoadTest.excitingCurrent>/g, obj, "excitingCurrent", base.to_string, sub, context);

            /**
             * Exciting current measured from a zero-sequence open-circuit excitation test.
             *
             */
            base.parse_element (/<cim:NoLoadTest.excitingCurrentZero>([\s\S]*?)<\/cim:NoLoadTest.excitingCurrentZero>/g, obj, "excitingCurrentZero", base.to_string, sub, context);

            /**
             * Losses measured from a positive-sequence or single-phase excitation test.
             *
             */
            base.parse_element (/<cim:NoLoadTest.loss>([\s\S]*?)<\/cim:NoLoadTest.loss>/g, obj, "loss", base.to_string, sub, context);

            /**
             * Losses measured from a zero-sequence excitation test.
             *
             */
            base.parse_element (/<cim:NoLoadTest.lossZero>([\s\S]*?)<\/cim:NoLoadTest.lossZero>/g, obj, "lossZero", base.to_string, sub, context);

            /**
             * Transformer end that current is applied to in this no-load test.
             *
             */
            base.parse_attribute (/<cim:NoLoadTest.EnergisedEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEnd", sub, context, true);

            bucket = context.parsed.NoLoadTest;
            if (null == bucket)
                context.parsed.NoLoadTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Set of transformer tank data, from an equipment library.
         *
         */
        function parse_TransformerTankInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "TransformerTankInfo";
            /**
             * Power transformer data that this tank description is part of.
             *
             */
            base.parse_attribute (/<cim:TransformerTankInfo.PowerTransformerInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerTransformerInfo", sub, context, true);

            bucket = context.parsed.TransformerTankInfo;
            if (null == bucket)
                context.parsed.TransformerTankInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of wire insulation.
         *
         */
        function parse_WireInsulationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WireInsulationKind";
            /**
             * Asbestos and varnished cambric wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.asbestosAndVarnishedCambric>([\s\S]*?)<\/cim:WireInsulationKind.asbestosAndVarnishedCambric>/g, obj, "asbestosAndVarnishedCambric", base.to_string, sub, context);

            /**
             * Butyl wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.butyl>([\s\S]*?)<\/cim:WireInsulationKind.butyl>/g, obj, "butyl", base.to_string, sub, context);

            /**
             * Ethylene propylene rubber wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.ethylenePropyleneRubber>([\s\S]*?)<\/cim:WireInsulationKind.ethylenePropyleneRubber>/g, obj, "ethylenePropyleneRubber", base.to_string, sub, context);

            /**
             * High nolecular weight polyethylene wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.highMolecularWeightPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.highMolecularWeightPolyethylene>/g, obj, "highMolecularWeightPolyethylene", base.to_string, sub, context);

            /**
             * Tree resistant high molecular weight polyethylene wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.treeResistantHighMolecularWeightPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.treeResistantHighMolecularWeightPolyethylene>/g, obj, "treeResistantHighMolecularWeightPolyethylene", base.to_string, sub, context);

            /**
             * Low capacitance rubber wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.lowCapacitanceRubber>([\s\S]*?)<\/cim:WireInsulationKind.lowCapacitanceRubber>/g, obj, "lowCapacitanceRubber", base.to_string, sub, context);

            /**
             * Oil paper wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.oilPaper>([\s\S]*?)<\/cim:WireInsulationKind.oilPaper>/g, obj, "oilPaper", base.to_string, sub, context);

            /**
             * Ozone resistant rubber wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.ozoneResistantRubber>([\s\S]*?)<\/cim:WireInsulationKind.ozoneResistantRubber>/g, obj, "ozoneResistantRubber", base.to_string, sub, context);

            /**
             * Belted pilc wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.beltedPilc>([\s\S]*?)<\/cim:WireInsulationKind.beltedPilc>/g, obj, "beltedPilc", base.to_string, sub, context);

            /**
             * Unbelted pilc wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.unbeltedPilc>([\s\S]*?)<\/cim:WireInsulationKind.unbeltedPilc>/g, obj, "unbeltedPilc", base.to_string, sub, context);

            /**
             * Rubber wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.rubber>([\s\S]*?)<\/cim:WireInsulationKind.rubber>/g, obj, "rubber", base.to_string, sub, context);

            /**
             * Silicon rubber wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.siliconRubber>([\s\S]*?)<\/cim:WireInsulationKind.siliconRubber>/g, obj, "siliconRubber", base.to_string, sub, context);

            /**
             * Varnished cambric cloth wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.varnishedCambricCloth>([\s\S]*?)<\/cim:WireInsulationKind.varnishedCambricCloth>/g, obj, "varnishedCambricCloth", base.to_string, sub, context);

            /**
             * Varnished dacron glass wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.varnishedDacronGlass>([\s\S]*?)<\/cim:WireInsulationKind.varnishedDacronGlass>/g, obj, "varnishedDacronGlass", base.to_string, sub, context);

            /**
             * Crosslinked polyethylene wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.crosslinkedPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.crosslinkedPolyethylene>/g, obj, "crosslinkedPolyethylene", base.to_string, sub, context);

            /**
             * Tree retardant crosslinked polyethylene wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.treeRetardantCrosslinkedPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.treeRetardantCrosslinkedPolyethylene>/g, obj, "treeRetardantCrosslinkedPolyethylene", base.to_string, sub, context);

            /**
             * High pressure fluid filled wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.highPressureFluidFilled>([\s\S]*?)<\/cim:WireInsulationKind.highPressureFluidFilled>/g, obj, "highPressureFluidFilled", base.to_string, sub, context);

            /**
             * Other kind of wire insulation.
             *
             */
            base.parse_element (/<cim:WireInsulationKind.other>([\s\S]*?)<\/cim:WireInsulationKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.WireInsulationKind;
            if (null == bucket)
                context.parsed.WireInsulationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Busbar section data.
         *
         */
        function parse_BusbarSectionInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "BusbarSectionInfo";
            /**
             * Rated current.
             *
             */
            base.parse_element (/<cim:BusbarSectionInfo.ratedCurrent>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);

            /**
             * Rated voltage.
             *
             */
            base.parse_element (/<cim:BusbarSectionInfo.ratedVoltage>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);

            bucket = context.parsed.BusbarSectionInfo;
            if (null == bucket)
                context.parsed.BusbarSectionInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Set of power transformer data, from an equipment library.
         *
         */
        function parse_PowerTransformerInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "PowerTransformerInfo";
            bucket = context.parsed.PowerTransformerInfo;
            if (null == bucket)
                context.parsed.PowerTransformerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Wire data that can be specified per line segment phase, or for the line segment as a whole in case its phases all have the same wire characteristics.
         *
         */
        function parse_WireInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "WireInfo";
            /**
             * (if there is a different core material) Radius of the central core.
             *
             */
            base.parse_element (/<cim:WireInfo.coreRadius>([\s\S]*?)<\/cim:WireInfo.coreRadius>/g, obj, "coreRadius", base.to_string, sub, context);

            /**
             * (if used) Number of strands in the steel core.
             *
             */
            base.parse_element (/<cim:WireInfo.coreStrandCount>([\s\S]*?)<\/cim:WireInfo.coreStrandCount>/g, obj, "coreStrandCount", base.to_string, sub, context);

            /**
             * Geometric mean radius.
             *
             * If we replace the conductor by a thin walled tube of radius GMR, then its reactance is identical to the reactance of the actual conductor.
             *
             */
            base.parse_element (/<cim:WireInfo.gmr>([\s\S]*?)<\/cim:WireInfo.gmr>/g, obj, "gmr", base.to_string, sub, context);

            /**
             * True if conductor is insulated.
             *
             */
            base.parse_element (/<cim:WireInfo.insulated>([\s\S]*?)<\/cim:WireInfo.insulated>/g, obj, "insulated", base.to_boolean, sub, context);

            /**
             * (if insulated conductor) Material used for insulation.
             *
             */
            base.parse_element (/<cim:WireInfo.insulationMaterial>([\s\S]*?)<\/cim:WireInfo.insulationMaterial>/g, obj, "insulationMaterial", base.to_string, sub, context);

            /**
             * (if insulated conductor) Thickness of the insulation.
             *
             */
            base.parse_element (/<cim:WireInfo.insulationThickness>([\s\S]*?)<\/cim:WireInfo.insulationThickness>/g, obj, "insulationThickness", base.to_string, sub, context);

            /**
             * Conductor material.
             *
             */
            base.parse_element (/<cim:WireInfo.material>([\s\S]*?)<\/cim:WireInfo.material>/g, obj, "material", base.to_string, sub, context);

            /**
             * AC resistance per unit length of the conductor at 25 �C.
             *
             */
            base.parse_element (/<cim:WireInfo.rAC25>([\s\S]*?)<\/cim:WireInfo.rAC25>/g, obj, "rAC25", base.to_string, sub, context);

            /**
             * AC resistance per unit length of the conductor at 50 �C.
             *
             */
            base.parse_element (/<cim:WireInfo.rAC50>([\s\S]*?)<\/cim:WireInfo.rAC50>/g, obj, "rAC50", base.to_string, sub, context);

            /**
             * AC resistance per unit length of the conductor at 75 �C.
             *
             */
            base.parse_element (/<cim:WireInfo.rAC75>([\s\S]*?)<\/cim:WireInfo.rAC75>/g, obj, "rAC75", base.to_string, sub, context);

            /**
             * Outside radius of the wire.
             *
             */
            base.parse_element (/<cim:WireInfo.radius>([\s\S]*?)<\/cim:WireInfo.radius>/g, obj, "radius", base.to_string, sub, context);

            /**
             * Current carrying capacity of the wire under stated thermal conditions.
             *
             */
            base.parse_element (/<cim:WireInfo.ratedCurrent>([\s\S]*?)<\/cim:WireInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);

            /**
             * DC resistance per unit length of the conductor at 20 �C.
             *
             */
            base.parse_element (/<cim:WireInfo.rDC20>([\s\S]*?)<\/cim:WireInfo.rDC20>/g, obj, "rDC20", base.to_string, sub, context);

            /**
             * Describes the wire gauge or cross section (e.g., 4/0, #2, 336.5).
             *
             */
            base.parse_element (/<cim:WireInfo.sizeDescription>([\s\S]*?)<\/cim:WireInfo.sizeDescription>/g, obj, "sizeDescription", base.to_string, sub, context);

            /**
             * Number of strands in the conductor.
             *
             */
            base.parse_element (/<cim:WireInfo.strandCount>([\s\S]*?)<\/cim:WireInfo.strandCount>/g, obj, "strandCount", base.to_string, sub, context);

            bucket = context.parsed.WireInfo;
            if (null == bucket)
                context.parsed.WireInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of shunt capacitor, shunt reactor or switchable bank of shunt capacitor or reactor assets.
         *
         */
        function parse_ShuntCompensatorInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "ShuntCompensatorInfo";
            /**
             * Maximum allowed apparent power loss.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorInfo.maxPowerLoss>([\s\S]*?)<\/cim:ShuntCompensatorInfo.maxPowerLoss>/g, obj, "maxPowerLoss", base.to_string, sub, context);

            /**
             * Rated current.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorInfo.ratedCurrent>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);

            /**
             * Rated voltage.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorInfo.ratedVoltage>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);

            /**
             * Rated reactive power.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorInfo.ratedReactivePower>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedReactivePower>/g, obj, "ratedReactivePower", base.to_string, sub, context);

            base.parse_attribute (/<cim:ShuntCompensatorInfo.ShuntCompensatorControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensatorControl", sub, context, true);

            bucket = context.parsed.ShuntCompensatorInfo;
            if (null == bucket)
                context.parsed.ShuntCompensatorInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Cable data.
         *
         */
        function parse_CableInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WireInfo (context, sub);
            obj.cls = "CableInfo";
            /**
             * Kind of construction of this cable.
             *
             */
            base.parse_element (/<cim:CableInfo.constructionKind>([\s\S]*?)<\/cim:CableInfo.constructionKind>/g, obj, "constructionKind", base.to_string, sub, context);

            /**
             * Diameter over the core, including any semi-con screen; should be the insulating layer's inside diameter.
             *
             */
            base.parse_element (/<cim:CableInfo.diameterOverCore>([\s\S]*?)<\/cim:CableInfo.diameterOverCore>/g, obj, "diameterOverCore", base.to_string, sub, context);

            /**
             * Diameter over the insulating layer, excluding outer screen.
             *
             */
            base.parse_element (/<cim:CableInfo.diameterOverInsulation>([\s\S]*?)<\/cim:CableInfo.diameterOverInsulation>/g, obj, "diameterOverInsulation", base.to_string, sub, context);

            /**
             * Diameter over the outermost jacketing layer.
             *
             */
            base.parse_element (/<cim:CableInfo.diameterOverJacket>([\s\S]*?)<\/cim:CableInfo.diameterOverJacket>/g, obj, "diameterOverJacket", base.to_string, sub, context);

            /**
             * Diameter over the outer screen; should be the shield's inside diameter.
             *
             */
            base.parse_element (/<cim:CableInfo.diameterOverScreen>([\s\S]*?)<\/cim:CableInfo.diameterOverScreen>/g, obj, "diameterOverScreen", base.to_string, sub, context);

            /**
             * True if wire strands are extruded in a way to fill the voids in the cable.
             *
             */
            base.parse_element (/<cim:CableInfo.isStrandFill>([\s\S]*?)<\/cim:CableInfo.isStrandFill>/g, obj, "isStrandFill", base.to_boolean, sub, context);

            /**
             * Maximum nominal design operating temperature.
             *
             */
            base.parse_element (/<cim:CableInfo.nominalTemperature>([\s\S]*?)<\/cim:CableInfo.nominalTemperature>/g, obj, "nominalTemperature", base.to_string, sub, context);

            /**
             * Kind of outer jacket of this cable.
             *
             */
            base.parse_element (/<cim:CableInfo.outerJacketKind>([\s\S]*?)<\/cim:CableInfo.outerJacketKind>/g, obj, "outerJacketKind", base.to_string, sub, context);

            /**
             * True if sheath / shield is used as a neutral (i.e., bonded).
             *
             */
            base.parse_element (/<cim:CableInfo.sheathAsNeutral>([\s\S]*?)<\/cim:CableInfo.sheathAsNeutral>/g, obj, "sheathAsNeutral", base.to_boolean, sub, context);

            /**
             * Material of the shield.
             *
             */
            base.parse_element (/<cim:CableInfo.shieldMaterial>([\s\S]*?)<\/cim:CableInfo.shieldMaterial>/g, obj, "shieldMaterial", base.to_string, sub, context);

            bucket = context.parsed.CableInfo;
            if (null == bucket)
                context.parsed.CableInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Switch data.
         *
         */
        function parse_SwitchInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "SwitchInfo";
            /**
             * The maximum fault current a breaking device can break safely under prescribed conditions of use.
             *
             */
            base.parse_element (/<cim:SwitchInfo.breakingCapacity>([\s\S]*?)<\/cim:SwitchInfo.breakingCapacity>/g, obj, "breakingCapacity", base.to_string, sub, context);

            /**
             * Rated current.
             *
             */
            base.parse_element (/<cim:SwitchInfo.ratedCurrent>([\s\S]*?)<\/cim:SwitchInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);

            /**
             * Rated voltage.
             *
             */
            base.parse_element (/<cim:SwitchInfo.ratedVoltage>([\s\S]*?)<\/cim:SwitchInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);

            /**
             * If true, it is a single phase switch.
             *
             */
            base.parse_element (/<cim:SwitchInfo.isSinglePhase>([\s\S]*?)<\/cim:SwitchInfo.isSinglePhase>/g, obj, "isSinglePhase", base.to_boolean, sub, context);

            /**
             * If true, the switch is not ganged (i.e., a switch phase may be operated separately from other phases).
             *
             */
            base.parse_element (/<cim:SwitchInfo.isUnganged>([\s\S]*?)<\/cim:SwitchInfo.isUnganged>/g, obj, "isUnganged", base.to_boolean, sub, context);

            bucket = context.parsed.SwitchInfo;
            if (null == bucket)
                context.parsed.SwitchInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Identification, spacing and configuration of the wires of a conductor with respect to a structure.
         *
         */
        function parse_WirePosition (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WirePosition";
            /**
             * Single phase or neutral designation for the wire with this position.
             *
             */
            base.parse_element (/<cim:WirePosition.phase>([\s\S]*?)<\/cim:WirePosition.phase>/g, obj, "phase", base.to_string, sub, context);

            /**
             * Signed horizontal distance from the wire at this position to a common reference point.
             *
             */
            base.parse_element (/<cim:WirePosition.xCoord>([\s\S]*?)<\/cim:WirePosition.xCoord>/g, obj, "xCoord", base.to_string, sub, context);

            /**
             * Signed vertical distance from the wire at this position: above ground (positive value) or burial depth below ground (negative value).
             *
             */
            base.parse_element (/<cim:WirePosition.yCoord>([\s\S]*?)<\/cim:WirePosition.yCoord>/g, obj, "yCoord", base.to_string, sub, context);

            /**
             * Wire spacing data this wire position belongs to.
             *
             */
            base.parse_attribute (/<cim:WirePosition.WireSpacingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WireSpacingInfo", sub, context, true);

            bucket = context.parsed.WirePosition;
            if (null == bucket)
                context.parsed.WirePosition = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transformer end data.
         *
         */
        function parse_TransformerEndInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "TransformerEndInfo";
            /**
             * Kind of connection.
             *
             */
            base.parse_element (/<cim:TransformerEndInfo.connectionKind>([\s\S]*?)<\/cim:TransformerEndInfo.connectionKind>/g, obj, "connectionKind", base.to_string, sub, context);

            /**
             * Apparent power that the winding can carry under emergency conditions (also called long-term emergency power).
             *
             */
            base.parse_element (/<cim:TransformerEndInfo.emergencyS>([\s\S]*?)<\/cim:TransformerEndInfo.emergencyS>/g, obj, "emergencyS", base.to_string, sub, context);

            /**
             * Number for this transformer end, corresponding to the end's order in the PowerTransformer.vectorGroup attribute.
             *
             * Highest voltage winding should be 1.
             *
             */
            base.parse_element (/<cim:TransformerEndInfo.endNumber>([\s\S]*?)<\/cim:TransformerEndInfo.endNumber>/g, obj, "endNumber", base.to_string, sub, context);

            /**
             * Basic insulation level voltage rating.
             *
             */
            base.parse_element (/<cim:TransformerEndInfo.insulationU>([\s\S]*?)<\/cim:TransformerEndInfo.insulationU>/g, obj, "insulationU", base.to_string, sub, context);

            /**
             * Winding phase angle where 360 degrees are represented with clock hours, so the valid values are {0, ..., 11}.
             *
             * For example, to express the second winding in code 'Dyn11', set attributes as follows: 'endNumber'=2, 'connectionKind' = Yn and 'phaseAngleClock' = 11.
             *
             */
            base.parse_element (/<cim:TransformerEndInfo.phaseAngleClock>([\s\S]*?)<\/cim:TransformerEndInfo.phaseAngleClock>/g, obj, "phaseAngleClock", base.to_string, sub, context);

            /**
             * DC resistance.
             *
             */
            base.parse_element (/<cim:TransformerEndInfo.r>([\s\S]*?)<\/cim:TransformerEndInfo.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Normal apparent power rating.
             *
             */
            base.parse_element (/<cim:TransformerEndInfo.ratedS>([\s\S]*?)<\/cim:TransformerEndInfo.ratedS>/g, obj, "ratedS", base.to_string, sub, context);

            /**
             * Rated voltage: phase-phase for three-phase windings, and either phase-phase or phase-neutral for single-phase windings.
             *
             */
            base.parse_element (/<cim:TransformerEndInfo.ratedU>([\s\S]*?)<\/cim:TransformerEndInfo.ratedU>/g, obj, "ratedU", base.to_string, sub, context);

            /**
             * Apparent power that this winding can carry for a short period of time (in emergency).
             *
             */
            base.parse_element (/<cim:TransformerEndInfo.shortTermS>([\s\S]*?)<\/cim:TransformerEndInfo.shortTermS>/g, obj, "shortTermS", base.to_string, sub, context);

            /**
             * Transformer star impedance calculated from this transformer end datasheet.
             *
             */
            base.parse_attribute (/<cim:TransformerEndInfo.TransformerStarImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerStarImpedance", sub, context, true);

            /**
             * Transformer tank data that this end description is part of.
             *
             */
            base.parse_attribute (/<cim:TransformerEndInfo.TransformerTankInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerTankInfo", sub, context, true);

            /**
             * Core admittance calculated from this transformer end datasheet, representing magnetising current and core losses.
             *
             * The full values of the transformer should be supplied for one transformer end info only.
             *
             */
            base.parse_attribute (/<cim:TransformerEndInfo.CoreAdmittance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CoreAdmittance", sub, context, true);

            bucket = context.parsed.TransformerEndInfo;
            if (null == bucket)
                context.parsed.TransformerEndInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Concentric neutral cable data.
         *
         */
        function parse_ConcentricNeutralCableInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_CableInfo (context, sub);
            obj.cls = "ConcentricNeutralCableInfo";
            /**
             * Diameter over the concentric neutral strands.
             *
             */
            base.parse_element (/<cim:ConcentricNeutralCableInfo.diameterOverNeutral>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.diameterOverNeutral>/g, obj, "diameterOverNeutral", base.to_string, sub, context);

            /**
             * Number of concentric neutral strands.
             *
             */
            base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandCount>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandCount>/g, obj, "neutralStrandCount", base.to_string, sub, context);

            /**
             * Geometric mean radius of the neutral strand.
             *
             */
            base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandGmr>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandGmr>/g, obj, "neutralStrandGmr", base.to_string, sub, context);

            /**
             * Outside radius of the neutral strand.
             *
             */
            base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandRadius>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandRadius>/g, obj, "neutralStrandRadius", base.to_string, sub, context);

            /**
             * DC resistance per unit length of the neutral strand at 20 �C.
             *
             */
            base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandRDC20>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandRDC20>/g, obj, "neutralStrandRDC20", base.to_string, sub, context);

            bucket = context.parsed.ConcentricNeutralCableInfo;
            if (null == bucket)
                context.parsed.ConcentricNeutralCableInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Overhead wire data.
         *
         */
        function parse_OverheadWireInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WireInfo (context, sub);
            obj.cls = "OverheadWireInfo";
            bucket = context.parsed.OverheadWireInfo;
            if (null == bucket)
                context.parsed.OverheadWireInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Open-circuit test results verify winding turn ratios and phase shifts.
         *
         * They include induced voltage and phase shift measurements on open-circuit windings, with voltage applied to the energised end. For three-phase windings, the excitation can be a positive sequence (the default) or a zero sequence.
         *
         */
        function parse_OpenCircuitTest (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TransformerTest (context, sub);
            obj.cls = "OpenCircuitTest";
            /**
             * Tap step number for the energised end of the test pair.
             *
             */
            base.parse_element (/<cim:OpenCircuitTest.energisedEndStep>([\s\S]*?)<\/cim:OpenCircuitTest.energisedEndStep>/g, obj, "energisedEndStep", base.to_string, sub, context);

            /**
             * Voltage applied to the winding (end) during test.
             *
             */
            base.parse_element (/<cim:OpenCircuitTest.energisedEndVoltage>([\s\S]*?)<\/cim:OpenCircuitTest.energisedEndVoltage>/g, obj, "energisedEndVoltage", base.to_string, sub, context);

            /**
             * Tap step number for the open end of the test pair.
             *
             */
            base.parse_element (/<cim:OpenCircuitTest.openEndStep>([\s\S]*?)<\/cim:OpenCircuitTest.openEndStep>/g, obj, "openEndStep", base.to_string, sub, context);

            /**
             * Voltage measured at the open-circuited end, with the energised end set to rated voltage and all other ends open.
             *
             */
            base.parse_element (/<cim:OpenCircuitTest.openEndVoltage>([\s\S]*?)<\/cim:OpenCircuitTest.openEndVoltage>/g, obj, "openEndVoltage", base.to_string, sub, context);

            /**
             * Phase shift measured at the open end with the energised end set to rated voltage and all other ends open.
             *
             */
            base.parse_element (/<cim:OpenCircuitTest.phaseShift>([\s\S]*?)<\/cim:OpenCircuitTest.phaseShift>/g, obj, "phaseShift", base.to_string, sub, context);

            /**
             * Transformer end measured for induced voltage and angle in this open-circuit test.
             *
             */
            base.parse_attribute (/<cim:OpenCircuitTest.OpenEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OpenEnd", sub, context, true);

            /**
             * Transformer end that current is applied to in this open-circuit test.
             *
             */
            base.parse_attribute (/<cim:OpenCircuitTest.EnergisedEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEnd", sub, context, true);

            bucket = context.parsed.OpenCircuitTest;
            if (null == bucket)
                context.parsed.OpenCircuitTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Test result for transformer ends, such as short-circuit, open-circuit (excitation) or no-load test.
         *
         */
        function parse_TransformerTest (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerTest";
            /**
             * Base power at which the tests are conducted, usually equal to the rateds of one of the involved transformer ends.
             *
             */
            base.parse_element (/<cim:TransformerTest.basePower>([\s\S]*?)<\/cim:TransformerTest.basePower>/g, obj, "basePower", base.to_string, sub, context);

            /**
             * Temperature at which the test is conducted.
             *
             */
            base.parse_element (/<cim:TransformerTest.temperature>([\s\S]*?)<\/cim:TransformerTest.temperature>/g, obj, "temperature", base.to_string, sub, context);

            bucket = context.parsed.TransformerTest;
            if (null == bucket)
                context.parsed.TransformerTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of wire material.
         *
         */
        function parse_WireMaterialKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WireMaterialKind";
            /**
             * Copper wire.
             *
             */
            base.parse_element (/<cim:WireMaterialKind.copper>([\s\S]*?)<\/cim:WireMaterialKind.copper>/g, obj, "copper", base.to_string, sub, context);

            /**
             * Steel wire.
             *
             */
            base.parse_element (/<cim:WireMaterialKind.steel>([\s\S]*?)<\/cim:WireMaterialKind.steel>/g, obj, "steel", base.to_string, sub, context);

            /**
             * Aluminum wire.
             *
             */
            base.parse_element (/<cim:WireMaterialKind.aluminum>([\s\S]*?)<\/cim:WireMaterialKind.aluminum>/g, obj, "aluminum", base.to_string, sub, context);

            /**
             * Aluminum-steel wire.
             *
             */
            base.parse_element (/<cim:WireMaterialKind.aluminumSteel>([\s\S]*?)<\/cim:WireMaterialKind.aluminumSteel>/g, obj, "aluminumSteel", base.to_string, sub, context);

            /**
             * Aluminum conductor steel reinforced.
             *
             */
            base.parse_element (/<cim:WireMaterialKind.acsr>([\s\S]*?)<\/cim:WireMaterialKind.acsr>/g, obj, "acsr", base.to_string, sub, context);

            /**
             * Aluminum-alloy wire.
             *
             */
            base.parse_element (/<cim:WireMaterialKind.aluminumAlloy>([\s\S]*?)<\/cim:WireMaterialKind.aluminumAlloy>/g, obj, "aluminumAlloy", base.to_string, sub, context);

            /**
             * Aluminum-alloy-steel wire.
             *
             */
            base.parse_element (/<cim:WireMaterialKind.aluminumAlloySteel>([\s\S]*?)<\/cim:WireMaterialKind.aluminumAlloySteel>/g, obj, "aluminumAlloySteel", base.to_string, sub, context);

            /**
             * Aluminum-alloy conductor steel reinforced.
             *
             */
            base.parse_element (/<cim:WireMaterialKind.aaac>([\s\S]*?)<\/cim:WireMaterialKind.aaac>/g, obj, "aaac", base.to_string, sub, context);

            /**
             * Other wire material.
             *
             */
            base.parse_element (/<cim:WireMaterialKind.other>([\s\S]*?)<\/cim:WireMaterialKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.WireMaterialKind;
            if (null == bucket)
                context.parsed.WireMaterialKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Short-circuit test results determine mesh impedance parameters.
         *
         * They include load losses and leakage impedances. For three-phase windings, the excitation can be a positive sequence (the default) or a zero sequence. There shall be at least one grounded winding.
         *
         */
        function parse_ShortCircuitTest (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TransformerTest (context, sub);
            obj.cls = "ShortCircuitTest";
            /**
             * Tap step number for the energised end of the test pair.
             *
             */
            base.parse_element (/<cim:ShortCircuitTest.energisedEndStep>([\s\S]*?)<\/cim:ShortCircuitTest.energisedEndStep>/g, obj, "energisedEndStep", base.to_string, sub, context);

            /**
             * Tap step number for the grounded end of the test pair.
             *
             */
            base.parse_element (/<cim:ShortCircuitTest.groundedEndStep>([\s\S]*?)<\/cim:ShortCircuitTest.groundedEndStep>/g, obj, "groundedEndStep", base.to_string, sub, context);

            /**
             * Leakage impedance measured from a positive-sequence or single-phase short-circuit test.
             *
             */
            base.parse_element (/<cim:ShortCircuitTest.leakageImpedance>([\s\S]*?)<\/cim:ShortCircuitTest.leakageImpedance>/g, obj, "leakageImpedance", base.to_string, sub, context);

            /**
             * Leakage impedance measured from a zero-sequence short-circuit test.
             *
             */
            base.parse_element (/<cim:ShortCircuitTest.leakageImpedanceZero>([\s\S]*?)<\/cim:ShortCircuitTest.leakageImpedanceZero>/g, obj, "leakageImpedanceZero", base.to_string, sub, context);

            /**
             * Load losses from a positive-sequence or single-phase short-circuit test.
             *
             */
            base.parse_element (/<cim:ShortCircuitTest.loss>([\s\S]*?)<\/cim:ShortCircuitTest.loss>/g, obj, "loss", base.to_string, sub, context);

            /**
             * Load losses from a zero-sequence short-circuit test.
             *
             */
            base.parse_element (/<cim:ShortCircuitTest.lossZero>([\s\S]*?)<\/cim:ShortCircuitTest.lossZero>/g, obj, "lossZero", base.to_string, sub, context);

            /**
             * Transformer end that voltage is applied to in this short-circuit test.
             *
             * The test voltage is chosen to induce rated current in the energised end.
             *
             */
            base.parse_attribute (/<cim:ShortCircuitTest.EnergisedEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEnd", sub, context, true);

            bucket = context.parsed.ShortCircuitTest;
            if (null == bucket)
                context.parsed.ShortCircuitTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of cable construction.
         *
         */
        function parse_CableConstructionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CableConstructionKind";
            /**
             * Compacted cable.
             *
             */
            base.parse_element (/<cim:CableConstructionKind.compacted>([\s\S]*?)<\/cim:CableConstructionKind.compacted>/g, obj, "compacted", base.to_string, sub, context);

            /**
             * Compressed cable.
             *
             */
            base.parse_element (/<cim:CableConstructionKind.compressed>([\s\S]*?)<\/cim:CableConstructionKind.compressed>/g, obj, "compressed", base.to_string, sub, context);

            /**
             * Sector cable.
             *
             */
            base.parse_element (/<cim:CableConstructionKind.sector>([\s\S]*?)<\/cim:CableConstructionKind.sector>/g, obj, "sector", base.to_string, sub, context);

            /**
             * Segmental cable.
             *
             */
            base.parse_element (/<cim:CableConstructionKind.segmental>([\s\S]*?)<\/cim:CableConstructionKind.segmental>/g, obj, "segmental", base.to_string, sub, context);

            /**
             * Solid cable.
             *
             */
            base.parse_element (/<cim:CableConstructionKind.solid>([\s\S]*?)<\/cim:CableConstructionKind.solid>/g, obj, "solid", base.to_string, sub, context);

            /**
             * Stranded cable.
             *
             */
            base.parse_element (/<cim:CableConstructionKind.stranded>([\s\S]*?)<\/cim:CableConstructionKind.stranded>/g, obj, "stranded", base.to_string, sub, context);

            /**
             * Other kind of cable construction.
             *
             */
            base.parse_element (/<cim:CableConstructionKind.other>([\s\S]*?)<\/cim:CableConstructionKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.CableConstructionKind;
            if (null == bucket)
                context.parsed.CableConstructionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of cable shield material.
         *
         */
        function parse_CableShieldMaterialKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CableShieldMaterialKind";
            /**
             * Lead cable shield.
             *
             */
            base.parse_element (/<cim:CableShieldMaterialKind.lead>([\s\S]*?)<\/cim:CableShieldMaterialKind.lead>/g, obj, "lead", base.to_string, sub, context);

            /**
             * Copper cable shield.
             *
             */
            base.parse_element (/<cim:CableShieldMaterialKind.copper>([\s\S]*?)<\/cim:CableShieldMaterialKind.copper>/g, obj, "copper", base.to_string, sub, context);

            /**
             * Steel cable shield.
             *
             */
            base.parse_element (/<cim:CableShieldMaterialKind.steel>([\s\S]*?)<\/cim:CableShieldMaterialKind.steel>/g, obj, "steel", base.to_string, sub, context);

            /**
             * Aluminum cable shield.
             *
             */
            base.parse_element (/<cim:CableShieldMaterialKind.aluminum>([\s\S]*?)<\/cim:CableShieldMaterialKind.aluminum>/g, obj, "aluminum", base.to_string, sub, context);

            /**
             * Other kind of cable shield material.
             *
             */
            base.parse_element (/<cim:CableShieldMaterialKind.other>([\s\S]*?)<\/cim:CableShieldMaterialKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.CableShieldMaterialKind;
            if (null == bucket)
                context.parsed.CableShieldMaterialKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of wire usage.
         *
         */
        function parse_WireUsageKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WireUsageKind";
            /**
             * Wire is used in extra-high voltage or high voltage network.
             *
             */
            base.parse_element (/<cim:WireUsageKind.transmission>([\s\S]*?)<\/cim:WireUsageKind.transmission>/g, obj, "transmission", base.to_string, sub, context);

            /**
             * Wire is used in medium voltage network.
             *
             */
            base.parse_element (/<cim:WireUsageKind.distribution>([\s\S]*?)<\/cim:WireUsageKind.distribution>/g, obj, "distribution", base.to_string, sub, context);

            /**
             * Wire is used in low voltage circuit.
             *
             */
            base.parse_element (/<cim:WireUsageKind.secondary>([\s\S]*?)<\/cim:WireUsageKind.secondary>/g, obj, "secondary", base.to_string, sub, context);

            /**
             * Other kind of wire usage.
             *
             */
            base.parse_element (/<cim:WireUsageKind.other>([\s\S]*?)<\/cim:WireUsageKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.WireUsageKind;
            if (null == bucket)
                context.parsed.WireUsageKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Tape shield cable data.
         *
         */
        function parse_TapeShieldCableInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_CableInfo (context, sub);
            obj.cls = "TapeShieldCableInfo";
            /**
             * Percentage of the tape shield width that overlaps in each wrap, typically 10% to 25%.
             *
             */
            base.parse_element (/<cim:TapeShieldCableInfo.tapeLap>([\s\S]*?)<\/cim:TapeShieldCableInfo.tapeLap>/g, obj, "tapeLap", base.to_string, sub, context);

            /**
             * Thickness of the tape shield, before wrapping.
             *
             */
            base.parse_element (/<cim:TapeShieldCableInfo.tapeThickness>([\s\S]*?)<\/cim:TapeShieldCableInfo.tapeThickness>/g, obj, "tapeThickness", base.to_string, sub, context);

            bucket = context.parsed.TapeShieldCableInfo;
            if (null == bucket)
                context.parsed.TapeShieldCableInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_BusbarSectionInfo: parse_BusbarSectionInfo,
                parse_PowerTransformerInfo: parse_PowerTransformerInfo,
                parse_WireMaterialKind: parse_WireMaterialKind,
                parse_CableInfo: parse_CableInfo,
                parse_TapChangerInfo: parse_TapChangerInfo,
                parse_OverheadWireInfo: parse_OverheadWireInfo,
                parse_WireSpacingInfo: parse_WireSpacingInfo,
                parse_WireInfo: parse_WireInfo,
                parse_ConcentricNeutralCableInfo: parse_ConcentricNeutralCableInfo,
                parse_TransformerEndInfo: parse_TransformerEndInfo,
                parse_CableConstructionKind: parse_CableConstructionKind,
                parse_WireUsageKind: parse_WireUsageKind,
                parse_NoLoadTest: parse_NoLoadTest,
                parse_TapeShieldCableInfo: parse_TapeShieldCableInfo,
                parse_CableShieldMaterialKind: parse_CableShieldMaterialKind,
                parse_SwitchInfo: parse_SwitchInfo,
                parse_OpenCircuitTest: parse_OpenCircuitTest,
                parse_TransformerTest: parse_TransformerTest,
                parse_ShuntCompensatorInfo: parse_ShuntCompensatorInfo,
                parse_CableOuterJacketKind: parse_CableOuterJacketKind,
                parse_TransformerTankInfo: parse_TransformerTankInfo,
                parse_WireInsulationKind: parse_WireInsulationKind,
                parse_ShortCircuitTest: parse_ShortCircuitTest,
                parse_WirePosition: parse_WirePosition
            }
        );
    }
);