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
            obj["isCable"] = base.to_boolean (base.parse_element (/<cim:WireSpacingInfo.isCable>([\s\S]*?)<\/cim:WireSpacingInfo.isCable>/g, sub, context, true));
            /**
             * Number of wire sub-conductors in the symmetrical bundle (typically between 1 and 4).
             *
             */
            obj["phaseWireCount"] = base.parse_element (/<cim:WireSpacingInfo.phaseWireCount>([\s\S]*?)<\/cim:WireSpacingInfo.phaseWireCount>/g, sub, context, true);
            /**
             * Distance between wire sub-conductors in a symmetrical bundle.
             *
             */
            obj["phaseWireSpacing"] = base.parse_element (/<cim:WireSpacingInfo.phaseWireSpacing>([\s\S]*?)<\/cim:WireSpacingInfo.phaseWireSpacing>/g, sub, context, true);
            /**
             * Usage of the associated wires.
             *
             */
            obj["usage"] = base.parse_element (/<cim:WireSpacingInfo.usage>([\s\S]*?)<\/cim:WireSpacingInfo.usage>/g, sub, context, true);
            obj["DuctBank"] = base.parse_attribute (/<cim:WireSpacingInfo.DuctBank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["none"] = base.parse_element (/<cim:CableOuterJacketKind.none>([\s\S]*?)<\/cim:CableOuterJacketKind.none>/g, sub, context, true);
            /**
             * Linear low density polyethylene cable outer jacket.
             *
             */
            obj["linearLowDensityPolyethylene"] = base.parse_element (/<cim:CableOuterJacketKind.linearLowDensityPolyethylene>([\s\S]*?)<\/cim:CableOuterJacketKind.linearLowDensityPolyethylene>/g, sub, context, true);
            /**
             * PVC cable outer jacket.
             *
             */
            obj["pvc"] = base.parse_element (/<cim:CableOuterJacketKind.pvc>([\s\S]*?)<\/cim:CableOuterJacketKind.pvc>/g, sub, context, true);
            /**
             * Polyethylene cable outer jacket.
             *
             */
            obj["polyethylene"] = base.parse_element (/<cim:CableOuterJacketKind.polyethylene>([\s\S]*?)<\/cim:CableOuterJacketKind.polyethylene>/g, sub, context, true);
            /**
             * Insulating cable outer jacket.
             *
             */
            obj["insulating"] = base.parse_element (/<cim:CableOuterJacketKind.insulating>([\s\S]*?)<\/cim:CableOuterJacketKind.insulating>/g, sub, context, true);
            /**
             * Semiconducting cable outer jacket.
             *
             */
            obj["semiconducting"] = base.parse_element (/<cim:CableOuterJacketKind.semiconducting>([\s\S]*?)<\/cim:CableOuterJacketKind.semiconducting>/g, sub, context, true);
            /**
             * Pther kind of cable outer jacket.
             *
             */
            obj["other"] = base.parse_element (/<cim:CableOuterJacketKind.other>([\s\S]*?)<\/cim:CableOuterJacketKind.other>/g, sub, context, true);
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
            obj["bil"] = base.parse_element (/<cim:TapChangerInfo.bil>([\s\S]*?)<\/cim:TapChangerInfo.bil>/g, sub, context, true);
            /**
             * Built-in current transformer primary rating.
             *
             */
            obj["ctRating"] = base.parse_element (/<cim:TapChangerInfo.ctRating>([\s\S]*?)<\/cim:TapChangerInfo.ctRating>/g, sub, context, true);
            /**
             * Built-in current transducer ratio.
             *
             */
            obj["ctRatio"] = base.to_float (base.parse_element (/<cim:TapChangerInfo.ctRatio>([\s\S]*?)<\/cim:TapChangerInfo.ctRatio>/g, sub, context, true));
            /**
             * Frequency at which the ratings apply.
             *
             */
            obj["frequency"] = base.parse_element (/<cim:TapChangerInfo.frequency>([\s\S]*?)<\/cim:TapChangerInfo.frequency>/g, sub, context, true);
            /**
             * Highest possible tap step position, advance from neutral.
             *
             */
            obj["highStep"] = base.parse_element (/<cim:TapChangerInfo.highStep>([\s\S]*?)<\/cim:TapChangerInfo.highStep>/g, sub, context, true);
            /**
             * Whether this tap changer has under load tap changing capabilities.
             *
             */
            obj["isTcul"] = base.to_boolean (base.parse_element (/<cim:TapChangerInfo.isTcul>([\s\S]*?)<\/cim:TapChangerInfo.isTcul>/g, sub, context, true));
            /**
             * Lowest possible tap step position, retard from neutral.
             *
             */
            obj["lowStep"] = base.parse_element (/<cim:TapChangerInfo.lowStep>([\s\S]*?)<\/cim:TapChangerInfo.lowStep>/g, sub, context, true);
            /**
             * The neutral tap step position for the winding.
             *
             */
            obj["neutralStep"] = base.parse_element (/<cim:TapChangerInfo.neutralStep>([\s\S]*?)<\/cim:TapChangerInfo.neutralStep>/g, sub, context, true);
            /**
             * Voltage at which the winding operates at the neutral tap setting.
             *
             */
            obj["neutralU"] = base.parse_element (/<cim:TapChangerInfo.neutralU>([\s\S]*?)<\/cim:TapChangerInfo.neutralU>/g, sub, context, true);
            /**
             * Built-in voltage transducer ratio.
             *
             */
            obj["ptRatio"] = base.to_float (base.parse_element (/<cim:TapChangerInfo.ptRatio>([\s\S]*?)<\/cim:TapChangerInfo.ptRatio>/g, sub, context, true));
            /**
             * Rated apparent power.
             *
             */
            obj["ratedApparentPower"] = base.parse_element (/<cim:TapChangerInfo.ratedApparentPower>([\s\S]*?)<\/cim:TapChangerInfo.ratedApparentPower>/g, sub, context, true);
            /**
             * Rated current.
             *
             */
            obj["ratedCurrent"] = base.parse_element (/<cim:TapChangerInfo.ratedCurrent>([\s\S]*?)<\/cim:TapChangerInfo.ratedCurrent>/g, sub, context, true);
            /**
             * Rated voltage.
             *
             */
            obj["ratedVoltage"] = base.parse_element (/<cim:TapChangerInfo.ratedVoltage>([\s\S]*?)<\/cim:TapChangerInfo.ratedVoltage>/g, sub, context, true);
            /**
             * Phase shift per step position.
             *
             */
            obj["stepPhaseIncrement"] = base.parse_element (/<cim:TapChangerInfo.stepPhaseIncrement>([\s\S]*?)<\/cim:TapChangerInfo.stepPhaseIncrement>/g, sub, context, true);
            /**
             * Tap step increment, in per cent of rated voltage, per step position.
             *
             */
            obj["stepVoltageIncrement"] = base.parse_element (/<cim:TapChangerInfo.stepVoltageIncrement>([\s\S]*?)<\/cim:TapChangerInfo.stepVoltageIncrement>/g, sub, context, true);
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
            obj["energisedEndVoltage"] = base.parse_element (/<cim:NoLoadTest.energisedEndVoltage>([\s\S]*?)<\/cim:NoLoadTest.energisedEndVoltage>/g, sub, context, true);
            /**
             * Exciting current measured from a positive-sequence or single-phase excitation test.
             *
             */
            obj["excitingCurrent"] = base.parse_element (/<cim:NoLoadTest.excitingCurrent>([\s\S]*?)<\/cim:NoLoadTest.excitingCurrent>/g, sub, context, true);
            /**
             * Exciting current measured from a zero-sequence open-circuit excitation test.
             *
             */
            obj["excitingCurrentZero"] = base.parse_element (/<cim:NoLoadTest.excitingCurrentZero>([\s\S]*?)<\/cim:NoLoadTest.excitingCurrentZero>/g, sub, context, true);
            /**
             * Losses measured from a positive-sequence or single-phase excitation test.
             *
             */
            obj["loss"] = base.parse_element (/<cim:NoLoadTest.loss>([\s\S]*?)<\/cim:NoLoadTest.loss>/g, sub, context, true);
            /**
             * Losses measured from a zero-sequence excitation test.
             *
             */
            obj["lossZero"] = base.parse_element (/<cim:NoLoadTest.lossZero>([\s\S]*?)<\/cim:NoLoadTest.lossZero>/g, sub, context, true);
            /**
             * Transformer end that current is applied to in this no-load test.
             *
             */
            obj["EnergisedEnd"] = base.parse_attribute (/<cim:NoLoadTest.EnergisedEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["PowerTransformerInfo"] = base.parse_attribute (/<cim:TransformerTankInfo.PowerTransformerInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["asbestosAndVarnishedCambric"] = base.parse_element (/<cim:WireInsulationKind.asbestosAndVarnishedCambric>([\s\S]*?)<\/cim:WireInsulationKind.asbestosAndVarnishedCambric>/g, sub, context, true);
            /**
             * Butyl wire insulation.
             *
             */
            obj["butyl"] = base.parse_element (/<cim:WireInsulationKind.butyl>([\s\S]*?)<\/cim:WireInsulationKind.butyl>/g, sub, context, true);
            /**
             * Ethylene propylene rubber wire insulation.
             *
             */
            obj["ethylenePropyleneRubber"] = base.parse_element (/<cim:WireInsulationKind.ethylenePropyleneRubber>([\s\S]*?)<\/cim:WireInsulationKind.ethylenePropyleneRubber>/g, sub, context, true);
            /**
             * High nolecular weight polyethylene wire insulation.
             *
             */
            obj["highMolecularWeightPolyethylene"] = base.parse_element (/<cim:WireInsulationKind.highMolecularWeightPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.highMolecularWeightPolyethylene>/g, sub, context, true);
            /**
             * Tree resistant high molecular weight polyethylene wire insulation.
             *
             */
            obj["treeResistantHighMolecularWeightPolyethylene"] = base.parse_element (/<cim:WireInsulationKind.treeResistantHighMolecularWeightPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.treeResistantHighMolecularWeightPolyethylene>/g, sub, context, true);
            /**
             * Low capacitance rubber wire insulation.
             *
             */
            obj["lowCapacitanceRubber"] = base.parse_element (/<cim:WireInsulationKind.lowCapacitanceRubber>([\s\S]*?)<\/cim:WireInsulationKind.lowCapacitanceRubber>/g, sub, context, true);
            /**
             * Oil paper wire insulation.
             *
             */
            obj["oilPaper"] = base.parse_element (/<cim:WireInsulationKind.oilPaper>([\s\S]*?)<\/cim:WireInsulationKind.oilPaper>/g, sub, context, true);
            /**
             * Ozone resistant rubber wire insulation.
             *
             */
            obj["ozoneResistantRubber"] = base.parse_element (/<cim:WireInsulationKind.ozoneResistantRubber>([\s\S]*?)<\/cim:WireInsulationKind.ozoneResistantRubber>/g, sub, context, true);
            /**
             * Belted pilc wire insulation.
             *
             */
            obj["beltedPilc"] = base.parse_element (/<cim:WireInsulationKind.beltedPilc>([\s\S]*?)<\/cim:WireInsulationKind.beltedPilc>/g, sub, context, true);
            /**
             * Unbelted pilc wire insulation.
             *
             */
            obj["unbeltedPilc"] = base.parse_element (/<cim:WireInsulationKind.unbeltedPilc>([\s\S]*?)<\/cim:WireInsulationKind.unbeltedPilc>/g, sub, context, true);
            /**
             * Rubber wire insulation.
             *
             */
            obj["rubber"] = base.parse_element (/<cim:WireInsulationKind.rubber>([\s\S]*?)<\/cim:WireInsulationKind.rubber>/g, sub, context, true);
            /**
             * Silicon rubber wire insulation.
             *
             */
            obj["siliconRubber"] = base.parse_element (/<cim:WireInsulationKind.siliconRubber>([\s\S]*?)<\/cim:WireInsulationKind.siliconRubber>/g, sub, context, true);
            /**
             * Varnished cambric cloth wire insulation.
             *
             */
            obj["varnishedCambricCloth"] = base.parse_element (/<cim:WireInsulationKind.varnishedCambricCloth>([\s\S]*?)<\/cim:WireInsulationKind.varnishedCambricCloth>/g, sub, context, true);
            /**
             * Varnished dacron glass wire insulation.
             *
             */
            obj["varnishedDacronGlass"] = base.parse_element (/<cim:WireInsulationKind.varnishedDacronGlass>([\s\S]*?)<\/cim:WireInsulationKind.varnishedDacronGlass>/g, sub, context, true);
            /**
             * Crosslinked polyethylene wire insulation.
             *
             */
            obj["crosslinkedPolyethylene"] = base.parse_element (/<cim:WireInsulationKind.crosslinkedPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.crosslinkedPolyethylene>/g, sub, context, true);
            /**
             * Tree retardant crosslinked polyethylene wire insulation.
             *
             */
            obj["treeRetardantCrosslinkedPolyethylene"] = base.parse_element (/<cim:WireInsulationKind.treeRetardantCrosslinkedPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.treeRetardantCrosslinkedPolyethylene>/g, sub, context, true);
            /**
             * High pressure fluid filled wire insulation.
             *
             */
            obj["highPressureFluidFilled"] = base.parse_element (/<cim:WireInsulationKind.highPressureFluidFilled>([\s\S]*?)<\/cim:WireInsulationKind.highPressureFluidFilled>/g, sub, context, true);
            /**
             * Other kind of wire insulation.
             *
             */
            obj["other"] = base.parse_element (/<cim:WireInsulationKind.other>([\s\S]*?)<\/cim:WireInsulationKind.other>/g, sub, context, true);
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
            obj["ratedCurrent"] = base.parse_element (/<cim:BusbarSectionInfo.ratedCurrent>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedCurrent>/g, sub, context, true);
            /**
             * Rated voltage.
             *
             */
            obj["ratedVoltage"] = base.parse_element (/<cim:BusbarSectionInfo.ratedVoltage>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedVoltage>/g, sub, context, true);
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
            obj["coreRadius"] = base.parse_element (/<cim:WireInfo.coreRadius>([\s\S]*?)<\/cim:WireInfo.coreRadius>/g, sub, context, true);
            /**
             * (if used) Number of strands in the steel core.
             *
             */
            obj["coreStrandCount"] = base.parse_element (/<cim:WireInfo.coreStrandCount>([\s\S]*?)<\/cim:WireInfo.coreStrandCount>/g, sub, context, true);
            /**
             * Geometric mean radius.
             *
             * If we replace the conductor by a thin walled tube of radius GMR, then its reactance is identical to the reactance of the actual conductor.
             *
             */
            obj["gmr"] = base.parse_element (/<cim:WireInfo.gmr>([\s\S]*?)<\/cim:WireInfo.gmr>/g, sub, context, true);
            /**
             * True if conductor is insulated.
             *
             */
            obj["insulated"] = base.to_boolean (base.parse_element (/<cim:WireInfo.insulated>([\s\S]*?)<\/cim:WireInfo.insulated>/g, sub, context, true));
            /**
             * (if insulated conductor) Material used for insulation.
             *
             */
            obj["insulationMaterial"] = base.parse_element (/<cim:WireInfo.insulationMaterial>([\s\S]*?)<\/cim:WireInfo.insulationMaterial>/g, sub, context, true);
            /**
             * (if insulated conductor) Thickness of the insulation.
             *
             */
            obj["insulationThickness"] = base.parse_element (/<cim:WireInfo.insulationThickness>([\s\S]*?)<\/cim:WireInfo.insulationThickness>/g, sub, context, true);
            /**
             * Conductor material.
             *
             */
            obj["material"] = base.parse_element (/<cim:WireInfo.material>([\s\S]*?)<\/cim:WireInfo.material>/g, sub, context, true);
            /**
             * AC resistance per unit length of the conductor at 25 �C.
             *
             */
            obj["rAC25"] = base.parse_element (/<cim:WireInfo.rAC25>([\s\S]*?)<\/cim:WireInfo.rAC25>/g, sub, context, true);
            /**
             * AC resistance per unit length of the conductor at 50 �C.
             *
             */
            obj["rAC50"] = base.parse_element (/<cim:WireInfo.rAC50>([\s\S]*?)<\/cim:WireInfo.rAC50>/g, sub, context, true);
            /**
             * AC resistance per unit length of the conductor at 75 �C.
             *
             */
            obj["rAC75"] = base.parse_element (/<cim:WireInfo.rAC75>([\s\S]*?)<\/cim:WireInfo.rAC75>/g, sub, context, true);
            /**
             * Outside radius of the wire.
             *
             */
            obj["radius"] = base.parse_element (/<cim:WireInfo.radius>([\s\S]*?)<\/cim:WireInfo.radius>/g, sub, context, true);
            /**
             * Current carrying capacity of the wire under stated thermal conditions.
             *
             */
            obj["ratedCurrent"] = base.parse_element (/<cim:WireInfo.ratedCurrent>([\s\S]*?)<\/cim:WireInfo.ratedCurrent>/g, sub, context, true);
            /**
             * DC resistance per unit length of the conductor at 20 �C.
             *
             */
            obj["rDC20"] = base.parse_element (/<cim:WireInfo.rDC20>([\s\S]*?)<\/cim:WireInfo.rDC20>/g, sub, context, true);
            /**
             * Describes the wire gauge or cross section (e.g., 4/0, #2, 336.5).
             *
             */
            obj["sizeDescription"] = base.parse_element (/<cim:WireInfo.sizeDescription>([\s\S]*?)<\/cim:WireInfo.sizeDescription>/g, sub, context, true);
            /**
             * Number of strands in the conductor.
             *
             */
            obj["strandCount"] = base.parse_element (/<cim:WireInfo.strandCount>([\s\S]*?)<\/cim:WireInfo.strandCount>/g, sub, context, true);
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
            obj["maxPowerLoss"] = base.parse_element (/<cim:ShuntCompensatorInfo.maxPowerLoss>([\s\S]*?)<\/cim:ShuntCompensatorInfo.maxPowerLoss>/g, sub, context, true);
            /**
             * Rated current.
             *
             */
            obj["ratedCurrent"] = base.parse_element (/<cim:ShuntCompensatorInfo.ratedCurrent>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedCurrent>/g, sub, context, true);
            /**
             * Rated voltage.
             *
             */
            obj["ratedVoltage"] = base.parse_element (/<cim:ShuntCompensatorInfo.ratedVoltage>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedVoltage>/g, sub, context, true);
            /**
             * Rated reactive power.
             *
             */
            obj["ratedReactivePower"] = base.parse_element (/<cim:ShuntCompensatorInfo.ratedReactivePower>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedReactivePower>/g, sub, context, true);
            obj["ShuntCompensatorControl"] = base.parse_attribute (/<cim:ShuntCompensatorInfo.ShuntCompensatorControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["constructionKind"] = base.parse_element (/<cim:CableInfo.constructionKind>([\s\S]*?)<\/cim:CableInfo.constructionKind>/g, sub, context, true);
            /**
             * Diameter over the core, including any semi-con screen; should be the insulating layer's inside diameter.
             *
             */
            obj["diameterOverCore"] = base.parse_element (/<cim:CableInfo.diameterOverCore>([\s\S]*?)<\/cim:CableInfo.diameterOverCore>/g, sub, context, true);
            /**
             * Diameter over the insulating layer, excluding outer screen.
             *
             */
            obj["diameterOverInsulation"] = base.parse_element (/<cim:CableInfo.diameterOverInsulation>([\s\S]*?)<\/cim:CableInfo.diameterOverInsulation>/g, sub, context, true);
            /**
             * Diameter over the outermost jacketing layer.
             *
             */
            obj["diameterOverJacket"] = base.parse_element (/<cim:CableInfo.diameterOverJacket>([\s\S]*?)<\/cim:CableInfo.diameterOverJacket>/g, sub, context, true);
            /**
             * Diameter over the outer screen; should be the shield's inside diameter.
             *
             */
            obj["diameterOverScreen"] = base.parse_element (/<cim:CableInfo.diameterOverScreen>([\s\S]*?)<\/cim:CableInfo.diameterOverScreen>/g, sub, context, true);
            /**
             * True if wire strands are extruded in a way to fill the voids in the cable.
             *
             */
            obj["isStrandFill"] = base.to_boolean (base.parse_element (/<cim:CableInfo.isStrandFill>([\s\S]*?)<\/cim:CableInfo.isStrandFill>/g, sub, context, true));
            /**
             * Maximum nominal design operating temperature.
             *
             */
            obj["nominalTemperature"] = base.parse_element (/<cim:CableInfo.nominalTemperature>([\s\S]*?)<\/cim:CableInfo.nominalTemperature>/g, sub, context, true);
            /**
             * Kind of outer jacket of this cable.
             *
             */
            obj["outerJacketKind"] = base.parse_element (/<cim:CableInfo.outerJacketKind>([\s\S]*?)<\/cim:CableInfo.outerJacketKind>/g, sub, context, true);
            /**
             * True if sheath / shield is used as a neutral (i.e., bonded).
             *
             */
            obj["sheathAsNeutral"] = base.to_boolean (base.parse_element (/<cim:CableInfo.sheathAsNeutral>([\s\S]*?)<\/cim:CableInfo.sheathAsNeutral>/g, sub, context, true));
            /**
             * Material of the shield.
             *
             */
            obj["shieldMaterial"] = base.parse_element (/<cim:CableInfo.shieldMaterial>([\s\S]*?)<\/cim:CableInfo.shieldMaterial>/g, sub, context, true);
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
            obj["breakingCapacity"] = base.parse_element (/<cim:SwitchInfo.breakingCapacity>([\s\S]*?)<\/cim:SwitchInfo.breakingCapacity>/g, sub, context, true);
            /**
             * Rated current.
             *
             */
            obj["ratedCurrent"] = base.parse_element (/<cim:SwitchInfo.ratedCurrent>([\s\S]*?)<\/cim:SwitchInfo.ratedCurrent>/g, sub, context, true);
            /**
             * Rated voltage.
             *
             */
            obj["ratedVoltage"] = base.parse_element (/<cim:SwitchInfo.ratedVoltage>([\s\S]*?)<\/cim:SwitchInfo.ratedVoltage>/g, sub, context, true);
            /**
             * If true, it is a single phase switch.
             *
             */
            obj["isSinglePhase"] = base.to_boolean (base.parse_element (/<cim:SwitchInfo.isSinglePhase>([\s\S]*?)<\/cim:SwitchInfo.isSinglePhase>/g, sub, context, true));
            /**
             * If true, the switch is not ganged (i.e., a switch phase may be operated separately from other phases).
             *
             */
            obj["isUnganged"] = base.to_boolean (base.parse_element (/<cim:SwitchInfo.isUnganged>([\s\S]*?)<\/cim:SwitchInfo.isUnganged>/g, sub, context, true));
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
            obj["phase"] = base.parse_element (/<cim:WirePosition.phase>([\s\S]*?)<\/cim:WirePosition.phase>/g, sub, context, true);
            /**
             * Signed horizontal distance from the wire at this position to a common reference point.
             *
             */
            obj["xCoord"] = base.parse_element (/<cim:WirePosition.xCoord>([\s\S]*?)<\/cim:WirePosition.xCoord>/g, sub, context, true);
            /**
             * Signed vertical distance from the wire at this position: above ground (positive value) or burial depth below ground (negative value).
             *
             */
            obj["yCoord"] = base.parse_element (/<cim:WirePosition.yCoord>([\s\S]*?)<\/cim:WirePosition.yCoord>/g, sub, context, true);
            /**
             * Wire spacing data this wire position belongs to.
             *
             */
            obj["WireSpacingInfo"] = base.parse_attribute (/<cim:WirePosition.WireSpacingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["connectionKind"] = base.parse_element (/<cim:TransformerEndInfo.connectionKind>([\s\S]*?)<\/cim:TransformerEndInfo.connectionKind>/g, sub, context, true);
            /**
             * Apparent power that the winding can carry under emergency conditions (also called long-term emergency power).
             *
             */
            obj["emergencyS"] = base.parse_element (/<cim:TransformerEndInfo.emergencyS>([\s\S]*?)<\/cim:TransformerEndInfo.emergencyS>/g, sub, context, true);
            /**
             * Number for this transformer end, corresponding to the end's order in the PowerTransformer.vectorGroup attribute.
             *
             * Highest voltage winding should be 1.
             *
             */
            obj["endNumber"] = base.parse_element (/<cim:TransformerEndInfo.endNumber>([\s\S]*?)<\/cim:TransformerEndInfo.endNumber>/g, sub, context, true);
            /**
             * Basic insulation level voltage rating.
             *
             */
            obj["insulationU"] = base.parse_element (/<cim:TransformerEndInfo.insulationU>([\s\S]*?)<\/cim:TransformerEndInfo.insulationU>/g, sub, context, true);
            /**
             * Winding phase angle where 360 degrees are represented with clock hours, so the valid values are {0, ..., 11}.
             *
             * For example, to express the second winding in code 'Dyn11', set attributes as follows: 'endNumber'=2, 'connectionKind' = Yn and 'phaseAngleClock' = 11.
             *
             */
            obj["phaseAngleClock"] = base.parse_element (/<cim:TransformerEndInfo.phaseAngleClock>([\s\S]*?)<\/cim:TransformerEndInfo.phaseAngleClock>/g, sub, context, true);
            /**
             * DC resistance.
             *
             */
            obj["r"] = base.parse_element (/<cim:TransformerEndInfo.r>([\s\S]*?)<\/cim:TransformerEndInfo.r>/g, sub, context, true);
            /**
             * Normal apparent power rating.
             *
             */
            obj["ratedS"] = base.parse_element (/<cim:TransformerEndInfo.ratedS>([\s\S]*?)<\/cim:TransformerEndInfo.ratedS>/g, sub, context, true);
            /**
             * Rated voltage: phase-phase for three-phase windings, and either phase-phase or phase-neutral for single-phase windings.
             *
             */
            obj["ratedU"] = base.parse_element (/<cim:TransformerEndInfo.ratedU>([\s\S]*?)<\/cim:TransformerEndInfo.ratedU>/g, sub, context, true);
            /**
             * Apparent power that this winding can carry for a short period of time (in emergency).
             *
             */
            obj["shortTermS"] = base.parse_element (/<cim:TransformerEndInfo.shortTermS>([\s\S]*?)<\/cim:TransformerEndInfo.shortTermS>/g, sub, context, true);
            /**
             * Transformer star impedance calculated from this transformer end datasheet.
             *
             */
            obj["TransformerStarImpedance"] = base.parse_attribute (/<cim:TransformerEndInfo.TransformerStarImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Transformer tank data that this end description is part of.
             *
             */
            obj["TransformerTankInfo"] = base.parse_attribute (/<cim:TransformerEndInfo.TransformerTankInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Core admittance calculated from this transformer end datasheet, representing magnetising current and core losses.
             *
             * The full values of the transformer should be supplied for one transformer end info only.
             *
             */
            obj["CoreAdmittance"] = base.parse_attribute (/<cim:TransformerEndInfo.CoreAdmittance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["diameterOverNeutral"] = base.parse_element (/<cim:ConcentricNeutralCableInfo.diameterOverNeutral>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.diameterOverNeutral>/g, sub, context, true);
            /**
             * Number of concentric neutral strands.
             *
             */
            obj["neutralStrandCount"] = base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandCount>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandCount>/g, sub, context, true);
            /**
             * Geometric mean radius of the neutral strand.
             *
             */
            obj["neutralStrandGmr"] = base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandGmr>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandGmr>/g, sub, context, true);
            /**
             * Outside radius of the neutral strand.
             *
             */
            obj["neutralStrandRadius"] = base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandRadius>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandRadius>/g, sub, context, true);
            /**
             * DC resistance per unit length of the neutral strand at 20 �C.
             *
             */
            obj["neutralStrandRDC20"] = base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandRDC20>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandRDC20>/g, sub, context, true);
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
            obj["energisedEndStep"] = base.parse_element (/<cim:OpenCircuitTest.energisedEndStep>([\s\S]*?)<\/cim:OpenCircuitTest.energisedEndStep>/g, sub, context, true);
            /**
             * Voltage applied to the winding (end) during test.
             *
             */
            obj["energisedEndVoltage"] = base.parse_element (/<cim:OpenCircuitTest.energisedEndVoltage>([\s\S]*?)<\/cim:OpenCircuitTest.energisedEndVoltage>/g, sub, context, true);
            /**
             * Tap step number for the open end of the test pair.
             *
             */
            obj["openEndStep"] = base.parse_element (/<cim:OpenCircuitTest.openEndStep>([\s\S]*?)<\/cim:OpenCircuitTest.openEndStep>/g, sub, context, true);
            /**
             * Voltage measured at the open-circuited end, with the energised end set to rated voltage and all other ends open.
             *
             */
            obj["openEndVoltage"] = base.parse_element (/<cim:OpenCircuitTest.openEndVoltage>([\s\S]*?)<\/cim:OpenCircuitTest.openEndVoltage>/g, sub, context, true);
            /**
             * Phase shift measured at the open end with the energised end set to rated voltage and all other ends open.
             *
             */
            obj["phaseShift"] = base.parse_element (/<cim:OpenCircuitTest.phaseShift>([\s\S]*?)<\/cim:OpenCircuitTest.phaseShift>/g, sub, context, true);
            /**
             * Transformer end measured for induced voltage and angle in this open-circuit test.
             *
             */
            obj["OpenEnd"] = base.parse_attribute (/<cim:OpenCircuitTest.OpenEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Transformer end that current is applied to in this open-circuit test.
             *
             */
            obj["EnergisedEnd"] = base.parse_attribute (/<cim:OpenCircuitTest.EnergisedEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["basePower"] = base.parse_element (/<cim:TransformerTest.basePower>([\s\S]*?)<\/cim:TransformerTest.basePower>/g, sub, context, true);
            /**
             * Temperature at which the test is conducted.
             *
             */
            obj["temperature"] = base.parse_element (/<cim:TransformerTest.temperature>([\s\S]*?)<\/cim:TransformerTest.temperature>/g, sub, context, true);
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
            obj["copper"] = base.parse_element (/<cim:WireMaterialKind.copper>([\s\S]*?)<\/cim:WireMaterialKind.copper>/g, sub, context, true);
            /**
             * Steel wire.
             *
             */
            obj["steel"] = base.parse_element (/<cim:WireMaterialKind.steel>([\s\S]*?)<\/cim:WireMaterialKind.steel>/g, sub, context, true);
            /**
             * Aluminum wire.
             *
             */
            obj["aluminum"] = base.parse_element (/<cim:WireMaterialKind.aluminum>([\s\S]*?)<\/cim:WireMaterialKind.aluminum>/g, sub, context, true);
            /**
             * Aluminum-steel wire.
             *
             */
            obj["aluminumSteel"] = base.parse_element (/<cim:WireMaterialKind.aluminumSteel>([\s\S]*?)<\/cim:WireMaterialKind.aluminumSteel>/g, sub, context, true);
            /**
             * Aluminum conductor steel reinforced.
             *
             */
            obj["acsr"] = base.parse_element (/<cim:WireMaterialKind.acsr>([\s\S]*?)<\/cim:WireMaterialKind.acsr>/g, sub, context, true);
            /**
             * Aluminum-alloy wire.
             *
             */
            obj["aluminumAlloy"] = base.parse_element (/<cim:WireMaterialKind.aluminumAlloy>([\s\S]*?)<\/cim:WireMaterialKind.aluminumAlloy>/g, sub, context, true);
            /**
             * Aluminum-alloy-steel wire.
             *
             */
            obj["aluminumAlloySteel"] = base.parse_element (/<cim:WireMaterialKind.aluminumAlloySteel>([\s\S]*?)<\/cim:WireMaterialKind.aluminumAlloySteel>/g, sub, context, true);
            /**
             * Aluminum-alloy conductor steel reinforced.
             *
             */
            obj["aaac"] = base.parse_element (/<cim:WireMaterialKind.aaac>([\s\S]*?)<\/cim:WireMaterialKind.aaac>/g, sub, context, true);
            /**
             * Other wire material.
             *
             */
            obj["other"] = base.parse_element (/<cim:WireMaterialKind.other>([\s\S]*?)<\/cim:WireMaterialKind.other>/g, sub, context, true);
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
            obj["energisedEndStep"] = base.parse_element (/<cim:ShortCircuitTest.energisedEndStep>([\s\S]*?)<\/cim:ShortCircuitTest.energisedEndStep>/g, sub, context, true);
            /**
             * Tap step number for the grounded end of the test pair.
             *
             */
            obj["groundedEndStep"] = base.parse_element (/<cim:ShortCircuitTest.groundedEndStep>([\s\S]*?)<\/cim:ShortCircuitTest.groundedEndStep>/g, sub, context, true);
            /**
             * Leakage impedance measured from a positive-sequence or single-phase short-circuit test.
             *
             */
            obj["leakageImpedance"] = base.parse_element (/<cim:ShortCircuitTest.leakageImpedance>([\s\S]*?)<\/cim:ShortCircuitTest.leakageImpedance>/g, sub, context, true);
            /**
             * Leakage impedance measured from a zero-sequence short-circuit test.
             *
             */
            obj["leakageImpedanceZero"] = base.parse_element (/<cim:ShortCircuitTest.leakageImpedanceZero>([\s\S]*?)<\/cim:ShortCircuitTest.leakageImpedanceZero>/g, sub, context, true);
            /**
             * Load losses from a positive-sequence or single-phase short-circuit test.
             *
             */
            obj["loss"] = base.parse_element (/<cim:ShortCircuitTest.loss>([\s\S]*?)<\/cim:ShortCircuitTest.loss>/g, sub, context, true);
            /**
             * Load losses from a zero-sequence short-circuit test.
             *
             */
            obj["lossZero"] = base.parse_element (/<cim:ShortCircuitTest.lossZero>([\s\S]*?)<\/cim:ShortCircuitTest.lossZero>/g, sub, context, true);
            /**
             * Transformer end that voltage is applied to in this short-circuit test.
             *
             * The test voltage is chosen to induce rated current in the energised end.
             *
             */
            obj["EnergisedEnd"] = base.parse_attribute (/<cim:ShortCircuitTest.EnergisedEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["compacted"] = base.parse_element (/<cim:CableConstructionKind.compacted>([\s\S]*?)<\/cim:CableConstructionKind.compacted>/g, sub, context, true);
            /**
             * Compressed cable.
             *
             */
            obj["compressed"] = base.parse_element (/<cim:CableConstructionKind.compressed>([\s\S]*?)<\/cim:CableConstructionKind.compressed>/g, sub, context, true);
            /**
             * Sector cable.
             *
             */
            obj["sector"] = base.parse_element (/<cim:CableConstructionKind.sector>([\s\S]*?)<\/cim:CableConstructionKind.sector>/g, sub, context, true);
            /**
             * Segmental cable.
             *
             */
            obj["segmental"] = base.parse_element (/<cim:CableConstructionKind.segmental>([\s\S]*?)<\/cim:CableConstructionKind.segmental>/g, sub, context, true);
            /**
             * Solid cable.
             *
             */
            obj["solid"] = base.parse_element (/<cim:CableConstructionKind.solid>([\s\S]*?)<\/cim:CableConstructionKind.solid>/g, sub, context, true);
            /**
             * Stranded cable.
             *
             */
            obj["stranded"] = base.parse_element (/<cim:CableConstructionKind.stranded>([\s\S]*?)<\/cim:CableConstructionKind.stranded>/g, sub, context, true);
            /**
             * Other kind of cable construction.
             *
             */
            obj["other"] = base.parse_element (/<cim:CableConstructionKind.other>([\s\S]*?)<\/cim:CableConstructionKind.other>/g, sub, context, true);
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
            obj["lead"] = base.parse_element (/<cim:CableShieldMaterialKind.lead>([\s\S]*?)<\/cim:CableShieldMaterialKind.lead>/g, sub, context, true);
            /**
             * Copper cable shield.
             *
             */
            obj["copper"] = base.parse_element (/<cim:CableShieldMaterialKind.copper>([\s\S]*?)<\/cim:CableShieldMaterialKind.copper>/g, sub, context, true);
            /**
             * Steel cable shield.
             *
             */
            obj["steel"] = base.parse_element (/<cim:CableShieldMaterialKind.steel>([\s\S]*?)<\/cim:CableShieldMaterialKind.steel>/g, sub, context, true);
            /**
             * Aluminum cable shield.
             *
             */
            obj["aluminum"] = base.parse_element (/<cim:CableShieldMaterialKind.aluminum>([\s\S]*?)<\/cim:CableShieldMaterialKind.aluminum>/g, sub, context, true);
            /**
             * Other kind of cable shield material.
             *
             */
            obj["other"] = base.parse_element (/<cim:CableShieldMaterialKind.other>([\s\S]*?)<\/cim:CableShieldMaterialKind.other>/g, sub, context, true);
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
            obj["transmission"] = base.parse_element (/<cim:WireUsageKind.transmission>([\s\S]*?)<\/cim:WireUsageKind.transmission>/g, sub, context, true);
            /**
             * Wire is used in medium voltage network.
             *
             */
            obj["distribution"] = base.parse_element (/<cim:WireUsageKind.distribution>([\s\S]*?)<\/cim:WireUsageKind.distribution>/g, sub, context, true);
            /**
             * Wire is used in low voltage circuit.
             *
             */
            obj["secondary"] = base.parse_element (/<cim:WireUsageKind.secondary>([\s\S]*?)<\/cim:WireUsageKind.secondary>/g, sub, context, true);
            /**
             * Other kind of wire usage.
             *
             */
            obj["other"] = base.parse_element (/<cim:WireUsageKind.other>([\s\S]*?)<\/cim:WireUsageKind.other>/g, sub, context, true);
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
            obj["tapeLap"] = base.parse_element (/<cim:TapeShieldCableInfo.tapeLap>([\s\S]*?)<\/cim:TapeShieldCableInfo.tapeLap>/g, sub, context, true);
            /**
             * Thickness of the tape shield, before wrapping.
             *
             */
            obj["tapeThickness"] = base.parse_element (/<cim:TapeShieldCableInfo.tapeThickness>([\s\S]*?)<\/cim:TapeShieldCableInfo.tapeThickness>/g, sub, context, true);
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