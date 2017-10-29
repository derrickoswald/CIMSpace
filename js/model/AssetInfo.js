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
            base.parse_element (/<cim:WireSpacingInfo.isCable>([\s\S]*?)<\/cim:WireSpacingInfo.isCable>/g, obj, "isCable", base.to_boolean, sub, context);
            base.parse_element (/<cim:WireSpacingInfo.phaseWireCount>([\s\S]*?)<\/cim:WireSpacingInfo.phaseWireCount>/g, obj, "phaseWireCount", base.to_string, sub, context);
            base.parse_element (/<cim:WireSpacingInfo.phaseWireSpacing>([\s\S]*?)<\/cim:WireSpacingInfo.phaseWireSpacing>/g, obj, "phaseWireSpacing", base.to_string, sub, context);
            base.parse_element (/<cim:WireSpacingInfo.usage>([\s\S]*?)<\/cim:WireSpacingInfo.usage>/g, obj, "usage", base.to_string, sub, context);
            base.parse_attribute (/<cim:WireSpacingInfo.DuctBank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DuctBank", sub, context);
            bucket = context.parsed.WireSpacingInfo;
            if (null == bucket)
                context.parsed.WireSpacingInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WireSpacingInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "WireSpacingInfo", "isCable", base.from_boolean, fields);
            base.export_element (obj, "WireSpacingInfo", "phaseWireCount", base.from_string, fields);
            base.export_element (obj, "WireSpacingInfo", "phaseWireSpacing", base.from_string, fields);
            base.export_element (obj, "WireSpacingInfo", "usage", base.from_string, fields);
            base.export_attribute (obj, "WireSpacingInfo", "DuctBank", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:CableOuterJacketKind.none>([\s\S]*?)<\/cim:CableOuterJacketKind.none>/g, obj, "none", base.to_string, sub, context);
            base.parse_element (/<cim:CableOuterJacketKind.linearLowDensityPolyethylene>([\s\S]*?)<\/cim:CableOuterJacketKind.linearLowDensityPolyethylene>/g, obj, "linearLowDensityPolyethylene", base.to_string, sub, context);
            base.parse_element (/<cim:CableOuterJacketKind.pvc>([\s\S]*?)<\/cim:CableOuterJacketKind.pvc>/g, obj, "pvc", base.to_string, sub, context);
            base.parse_element (/<cim:CableOuterJacketKind.polyethylene>([\s\S]*?)<\/cim:CableOuterJacketKind.polyethylene>/g, obj, "polyethylene", base.to_string, sub, context);
            base.parse_element (/<cim:CableOuterJacketKind.insulating>([\s\S]*?)<\/cim:CableOuterJacketKind.insulating>/g, obj, "insulating", base.to_string, sub, context);
            base.parse_element (/<cim:CableOuterJacketKind.semiconducting>([\s\S]*?)<\/cim:CableOuterJacketKind.semiconducting>/g, obj, "semiconducting", base.to_string, sub, context);
            base.parse_element (/<cim:CableOuterJacketKind.other>([\s\S]*?)<\/cim:CableOuterJacketKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.CableOuterJacketKind;
            if (null == bucket)
                context.parsed.CableOuterJacketKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CableOuterJacketKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CableOuterJacketKind", "none", base.from_string, fields);
            base.export_element (obj, "CableOuterJacketKind", "linearLowDensityPolyethylene", base.from_string, fields);
            base.export_element (obj, "CableOuterJacketKind", "pvc", base.from_string, fields);
            base.export_element (obj, "CableOuterJacketKind", "polyethylene", base.from_string, fields);
            base.export_element (obj, "CableOuterJacketKind", "insulating", base.from_string, fields);
            base.export_element (obj, "CableOuterJacketKind", "semiconducting", base.from_string, fields);
            base.export_element (obj, "CableOuterJacketKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:TapChangerInfo.bil>([\s\S]*?)<\/cim:TapChangerInfo.bil>/g, obj, "bil", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.ctRating>([\s\S]*?)<\/cim:TapChangerInfo.ctRating>/g, obj, "ctRating", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.ctRatio>([\s\S]*?)<\/cim:TapChangerInfo.ctRatio>/g, obj, "ctRatio", base.to_float, sub, context);
            base.parse_element (/<cim:TapChangerInfo.frequency>([\s\S]*?)<\/cim:TapChangerInfo.frequency>/g, obj, "frequency", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.highStep>([\s\S]*?)<\/cim:TapChangerInfo.highStep>/g, obj, "highStep", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.isTcul>([\s\S]*?)<\/cim:TapChangerInfo.isTcul>/g, obj, "isTcul", base.to_boolean, sub, context);
            base.parse_element (/<cim:TapChangerInfo.lowStep>([\s\S]*?)<\/cim:TapChangerInfo.lowStep>/g, obj, "lowStep", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.neutralStep>([\s\S]*?)<\/cim:TapChangerInfo.neutralStep>/g, obj, "neutralStep", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.neutralU>([\s\S]*?)<\/cim:TapChangerInfo.neutralU>/g, obj, "neutralU", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.ptRatio>([\s\S]*?)<\/cim:TapChangerInfo.ptRatio>/g, obj, "ptRatio", base.to_float, sub, context);
            base.parse_element (/<cim:TapChangerInfo.ratedApparentPower>([\s\S]*?)<\/cim:TapChangerInfo.ratedApparentPower>/g, obj, "ratedApparentPower", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.ratedCurrent>([\s\S]*?)<\/cim:TapChangerInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.ratedVoltage>([\s\S]*?)<\/cim:TapChangerInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.stepPhaseIncrement>([\s\S]*?)<\/cim:TapChangerInfo.stepPhaseIncrement>/g, obj, "stepPhaseIncrement", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerInfo.stepVoltageIncrement>([\s\S]*?)<\/cim:TapChangerInfo.stepVoltageIncrement>/g, obj, "stepVoltageIncrement", base.to_string, sub, context);
            bucket = context.parsed.TapChangerInfo;
            if (null == bucket)
                context.parsed.TapChangerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TapChangerInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "TapChangerInfo", "bil", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "ctRating", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "ctRatio", base.from_float, fields);
            base.export_element (obj, "TapChangerInfo", "frequency", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "highStep", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "isTcul", base.from_boolean, fields);
            base.export_element (obj, "TapChangerInfo", "lowStep", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "neutralStep", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "neutralU", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "ptRatio", base.from_float, fields);
            base.export_element (obj, "TapChangerInfo", "ratedApparentPower", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "ratedCurrent", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "ratedVoltage", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "stepPhaseIncrement", base.from_string, fields);
            base.export_element (obj, "TapChangerInfo", "stepVoltageIncrement", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:NoLoadTest.energisedEndVoltage>([\s\S]*?)<\/cim:NoLoadTest.energisedEndVoltage>/g, obj, "energisedEndVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:NoLoadTest.excitingCurrent>([\s\S]*?)<\/cim:NoLoadTest.excitingCurrent>/g, obj, "excitingCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:NoLoadTest.excitingCurrentZero>([\s\S]*?)<\/cim:NoLoadTest.excitingCurrentZero>/g, obj, "excitingCurrentZero", base.to_string, sub, context);
            base.parse_element (/<cim:NoLoadTest.loss>([\s\S]*?)<\/cim:NoLoadTest.loss>/g, obj, "loss", base.to_string, sub, context);
            base.parse_element (/<cim:NoLoadTest.lossZero>([\s\S]*?)<\/cim:NoLoadTest.lossZero>/g, obj, "lossZero", base.to_string, sub, context);
            base.parse_attribute (/<cim:NoLoadTest.EnergisedEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEnd", sub, context);
            bucket = context.parsed.NoLoadTest;
            if (null == bucket)
                context.parsed.NoLoadTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_NoLoadTest (obj, exporters, full)
        {
            var fields = exporters["TransformerTest"](obj, exporters, false);

            base.export_element (obj, "NoLoadTest", "energisedEndVoltage", base.from_string, fields);
            base.export_element (obj, "NoLoadTest", "excitingCurrent", base.from_string, fields);
            base.export_element (obj, "NoLoadTest", "excitingCurrentZero", base.from_string, fields);
            base.export_element (obj, "NoLoadTest", "loss", base.from_string, fields);
            base.export_element (obj, "NoLoadTest", "lossZero", base.from_string, fields);
            base.export_attribute (obj, "NoLoadTest", "EnergisedEnd", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_attribute (/<cim:TransformerTankInfo.PowerTransformerInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerTransformerInfo", sub, context);
            bucket = context.parsed.TransformerTankInfo;
            if (null == bucket)
                context.parsed.TransformerTankInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerTankInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_attribute (obj, "TransformerTankInfo", "PowerTransformerInfo", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:WireInsulationKind.asbestosAndVarnishedCambric>([\s\S]*?)<\/cim:WireInsulationKind.asbestosAndVarnishedCambric>/g, obj, "asbestosAndVarnishedCambric", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.butyl>([\s\S]*?)<\/cim:WireInsulationKind.butyl>/g, obj, "butyl", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.ethylenePropyleneRubber>([\s\S]*?)<\/cim:WireInsulationKind.ethylenePropyleneRubber>/g, obj, "ethylenePropyleneRubber", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.highMolecularWeightPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.highMolecularWeightPolyethylene>/g, obj, "highMolecularWeightPolyethylene", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.treeResistantHighMolecularWeightPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.treeResistantHighMolecularWeightPolyethylene>/g, obj, "treeResistantHighMolecularWeightPolyethylene", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.lowCapacitanceRubber>([\s\S]*?)<\/cim:WireInsulationKind.lowCapacitanceRubber>/g, obj, "lowCapacitanceRubber", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.oilPaper>([\s\S]*?)<\/cim:WireInsulationKind.oilPaper>/g, obj, "oilPaper", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.ozoneResistantRubber>([\s\S]*?)<\/cim:WireInsulationKind.ozoneResistantRubber>/g, obj, "ozoneResistantRubber", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.beltedPilc>([\s\S]*?)<\/cim:WireInsulationKind.beltedPilc>/g, obj, "beltedPilc", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.unbeltedPilc>([\s\S]*?)<\/cim:WireInsulationKind.unbeltedPilc>/g, obj, "unbeltedPilc", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.rubber>([\s\S]*?)<\/cim:WireInsulationKind.rubber>/g, obj, "rubber", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.siliconRubber>([\s\S]*?)<\/cim:WireInsulationKind.siliconRubber>/g, obj, "siliconRubber", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.varnishedCambricCloth>([\s\S]*?)<\/cim:WireInsulationKind.varnishedCambricCloth>/g, obj, "varnishedCambricCloth", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.varnishedDacronGlass>([\s\S]*?)<\/cim:WireInsulationKind.varnishedDacronGlass>/g, obj, "varnishedDacronGlass", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.crosslinkedPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.crosslinkedPolyethylene>/g, obj, "crosslinkedPolyethylene", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.treeRetardantCrosslinkedPolyethylene>([\s\S]*?)<\/cim:WireInsulationKind.treeRetardantCrosslinkedPolyethylene>/g, obj, "treeRetardantCrosslinkedPolyethylene", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.highPressureFluidFilled>([\s\S]*?)<\/cim:WireInsulationKind.highPressureFluidFilled>/g, obj, "highPressureFluidFilled", base.to_string, sub, context);
            base.parse_element (/<cim:WireInsulationKind.other>([\s\S]*?)<\/cim:WireInsulationKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.WireInsulationKind;
            if (null == bucket)
                context.parsed.WireInsulationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WireInsulationKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "WireInsulationKind", "asbestosAndVarnishedCambric", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "butyl", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "ethylenePropyleneRubber", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "highMolecularWeightPolyethylene", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "treeResistantHighMolecularWeightPolyethylene", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "lowCapacitanceRubber", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "oilPaper", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "ozoneResistantRubber", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "beltedPilc", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "unbeltedPilc", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "rubber", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "siliconRubber", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "varnishedCambricCloth", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "varnishedDacronGlass", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "crosslinkedPolyethylene", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "treeRetardantCrosslinkedPolyethylene", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "highPressureFluidFilled", base.from_string, fields);
            base.export_element (obj, "WireInsulationKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:BusbarSectionInfo.ratedCurrent>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:BusbarSectionInfo.ratedVoltage>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
            bucket = context.parsed.BusbarSectionInfo;
            if (null == bucket)
                context.parsed.BusbarSectionInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BusbarSectionInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "BusbarSectionInfo", "ratedCurrent", base.from_string, fields);
            base.export_element (obj, "BusbarSectionInfo", "ratedVoltage", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_PowerTransformerInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:WireInfo.coreRadius>([\s\S]*?)<\/cim:WireInfo.coreRadius>/g, obj, "coreRadius", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.coreStrandCount>([\s\S]*?)<\/cim:WireInfo.coreStrandCount>/g, obj, "coreStrandCount", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.gmr>([\s\S]*?)<\/cim:WireInfo.gmr>/g, obj, "gmr", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.insulated>([\s\S]*?)<\/cim:WireInfo.insulated>/g, obj, "insulated", base.to_boolean, sub, context);
            base.parse_element (/<cim:WireInfo.insulationMaterial>([\s\S]*?)<\/cim:WireInfo.insulationMaterial>/g, obj, "insulationMaterial", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.insulationThickness>([\s\S]*?)<\/cim:WireInfo.insulationThickness>/g, obj, "insulationThickness", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.material>([\s\S]*?)<\/cim:WireInfo.material>/g, obj, "material", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.rAC25>([\s\S]*?)<\/cim:WireInfo.rAC25>/g, obj, "rAC25", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.rAC50>([\s\S]*?)<\/cim:WireInfo.rAC50>/g, obj, "rAC50", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.rAC75>([\s\S]*?)<\/cim:WireInfo.rAC75>/g, obj, "rAC75", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.radius>([\s\S]*?)<\/cim:WireInfo.radius>/g, obj, "radius", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.ratedCurrent>([\s\S]*?)<\/cim:WireInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.rDC20>([\s\S]*?)<\/cim:WireInfo.rDC20>/g, obj, "rDC20", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.sizeDescription>([\s\S]*?)<\/cim:WireInfo.sizeDescription>/g, obj, "sizeDescription", base.to_string, sub, context);
            base.parse_element (/<cim:WireInfo.strandCount>([\s\S]*?)<\/cim:WireInfo.strandCount>/g, obj, "strandCount", base.to_string, sub, context);
            bucket = context.parsed.WireInfo;
            if (null == bucket)
                context.parsed.WireInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WireInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "WireInfo", "coreRadius", base.from_string, fields);
            base.export_element (obj, "WireInfo", "coreStrandCount", base.from_string, fields);
            base.export_element (obj, "WireInfo", "gmr", base.from_string, fields);
            base.export_element (obj, "WireInfo", "insulated", base.from_boolean, fields);
            base.export_element (obj, "WireInfo", "insulationMaterial", base.from_string, fields);
            base.export_element (obj, "WireInfo", "insulationThickness", base.from_string, fields);
            base.export_element (obj, "WireInfo", "material", base.from_string, fields);
            base.export_element (obj, "WireInfo", "rAC25", base.from_string, fields);
            base.export_element (obj, "WireInfo", "rAC50", base.from_string, fields);
            base.export_element (obj, "WireInfo", "rAC75", base.from_string, fields);
            base.export_element (obj, "WireInfo", "radius", base.from_string, fields);
            base.export_element (obj, "WireInfo", "ratedCurrent", base.from_string, fields);
            base.export_element (obj, "WireInfo", "rDC20", base.from_string, fields);
            base.export_element (obj, "WireInfo", "sizeDescription", base.from_string, fields);
            base.export_element (obj, "WireInfo", "strandCount", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:ShuntCompensatorInfo.maxPowerLoss>([\s\S]*?)<\/cim:ShuntCompensatorInfo.maxPowerLoss>/g, obj, "maxPowerLoss", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensatorInfo.ratedCurrent>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensatorInfo.ratedVoltage>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensatorInfo.ratedReactivePower>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedReactivePower>/g, obj, "ratedReactivePower", base.to_string, sub, context);
            base.parse_attribute (/<cim:ShuntCompensatorInfo.ShuntCompensatorControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensatorControl", sub, context);
            bucket = context.parsed.ShuntCompensatorInfo;
            if (null == bucket)
                context.parsed.ShuntCompensatorInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ShuntCompensatorInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "ShuntCompensatorInfo", "maxPowerLoss", base.from_string, fields);
            base.export_element (obj, "ShuntCompensatorInfo", "ratedCurrent", base.from_string, fields);
            base.export_element (obj, "ShuntCompensatorInfo", "ratedVoltage", base.from_string, fields);
            base.export_element (obj, "ShuntCompensatorInfo", "ratedReactivePower", base.from_string, fields);
            base.export_attribute (obj, "ShuntCompensatorInfo", "ShuntCompensatorControl", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:CableInfo.constructionKind>([\s\S]*?)<\/cim:CableInfo.constructionKind>/g, obj, "constructionKind", base.to_string, sub, context);
            base.parse_element (/<cim:CableInfo.diameterOverCore>([\s\S]*?)<\/cim:CableInfo.diameterOverCore>/g, obj, "diameterOverCore", base.to_string, sub, context);
            base.parse_element (/<cim:CableInfo.diameterOverInsulation>([\s\S]*?)<\/cim:CableInfo.diameterOverInsulation>/g, obj, "diameterOverInsulation", base.to_string, sub, context);
            base.parse_element (/<cim:CableInfo.diameterOverJacket>([\s\S]*?)<\/cim:CableInfo.diameterOverJacket>/g, obj, "diameterOverJacket", base.to_string, sub, context);
            base.parse_element (/<cim:CableInfo.diameterOverScreen>([\s\S]*?)<\/cim:CableInfo.diameterOverScreen>/g, obj, "diameterOverScreen", base.to_string, sub, context);
            base.parse_element (/<cim:CableInfo.isStrandFill>([\s\S]*?)<\/cim:CableInfo.isStrandFill>/g, obj, "isStrandFill", base.to_boolean, sub, context);
            base.parse_element (/<cim:CableInfo.nominalTemperature>([\s\S]*?)<\/cim:CableInfo.nominalTemperature>/g, obj, "nominalTemperature", base.to_string, sub, context);
            base.parse_element (/<cim:CableInfo.outerJacketKind>([\s\S]*?)<\/cim:CableInfo.outerJacketKind>/g, obj, "outerJacketKind", base.to_string, sub, context);
            base.parse_element (/<cim:CableInfo.sheathAsNeutral>([\s\S]*?)<\/cim:CableInfo.sheathAsNeutral>/g, obj, "sheathAsNeutral", base.to_boolean, sub, context);
            base.parse_element (/<cim:CableInfo.shieldMaterial>([\s\S]*?)<\/cim:CableInfo.shieldMaterial>/g, obj, "shieldMaterial", base.to_string, sub, context);
            bucket = context.parsed.CableInfo;
            if (null == bucket)
                context.parsed.CableInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CableInfo (obj, exporters, full)
        {
            var fields = exporters["WireInfo"](obj, exporters, false);

            base.export_element (obj, "CableInfo", "constructionKind", base.from_string, fields);
            base.export_element (obj, "CableInfo", "diameterOverCore", base.from_string, fields);
            base.export_element (obj, "CableInfo", "diameterOverInsulation", base.from_string, fields);
            base.export_element (obj, "CableInfo", "diameterOverJacket", base.from_string, fields);
            base.export_element (obj, "CableInfo", "diameterOverScreen", base.from_string, fields);
            base.export_element (obj, "CableInfo", "isStrandFill", base.from_boolean, fields);
            base.export_element (obj, "CableInfo", "nominalTemperature", base.from_string, fields);
            base.export_element (obj, "CableInfo", "outerJacketKind", base.from_string, fields);
            base.export_element (obj, "CableInfo", "sheathAsNeutral", base.from_boolean, fields);
            base.export_element (obj, "CableInfo", "shieldMaterial", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:SwitchInfo.breakingCapacity>([\s\S]*?)<\/cim:SwitchInfo.breakingCapacity>/g, obj, "breakingCapacity", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchInfo.ratedCurrent>([\s\S]*?)<\/cim:SwitchInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchInfo.ratedVoltage>([\s\S]*?)<\/cim:SwitchInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchInfo.isSinglePhase>([\s\S]*?)<\/cim:SwitchInfo.isSinglePhase>/g, obj, "isSinglePhase", base.to_boolean, sub, context);
            base.parse_element (/<cim:SwitchInfo.isUnganged>([\s\S]*?)<\/cim:SwitchInfo.isUnganged>/g, obj, "isUnganged", base.to_boolean, sub, context);
            bucket = context.parsed.SwitchInfo;
            if (null == bucket)
                context.parsed.SwitchInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SwitchInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "SwitchInfo", "breakingCapacity", base.from_string, fields);
            base.export_element (obj, "SwitchInfo", "ratedCurrent", base.from_string, fields);
            base.export_element (obj, "SwitchInfo", "ratedVoltage", base.from_string, fields);
            base.export_element (obj, "SwitchInfo", "isSinglePhase", base.from_boolean, fields);
            base.export_element (obj, "SwitchInfo", "isUnganged", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:WirePosition.phase>([\s\S]*?)<\/cim:WirePosition.phase>/g, obj, "phase", base.to_string, sub, context);
            base.parse_element (/<cim:WirePosition.xCoord>([\s\S]*?)<\/cim:WirePosition.xCoord>/g, obj, "xCoord", base.to_string, sub, context);
            base.parse_element (/<cim:WirePosition.yCoord>([\s\S]*?)<\/cim:WirePosition.yCoord>/g, obj, "yCoord", base.to_string, sub, context);
            base.parse_attribute (/<cim:WirePosition.WireSpacingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WireSpacingInfo", sub, context);
            bucket = context.parsed.WirePosition;
            if (null == bucket)
                context.parsed.WirePosition = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WirePosition (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "WirePosition", "phase", base.from_string, fields);
            base.export_element (obj, "WirePosition", "xCoord", base.from_string, fields);
            base.export_element (obj, "WirePosition", "yCoord", base.from_string, fields);
            base.export_attribute (obj, "WirePosition", "WireSpacingInfo", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:TransformerEndInfo.connectionKind>([\s\S]*?)<\/cim:TransformerEndInfo.connectionKind>/g, obj, "connectionKind", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEndInfo.emergencyS>([\s\S]*?)<\/cim:TransformerEndInfo.emergencyS>/g, obj, "emergencyS", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEndInfo.endNumber>([\s\S]*?)<\/cim:TransformerEndInfo.endNumber>/g, obj, "endNumber", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEndInfo.insulationU>([\s\S]*?)<\/cim:TransformerEndInfo.insulationU>/g, obj, "insulationU", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEndInfo.phaseAngleClock>([\s\S]*?)<\/cim:TransformerEndInfo.phaseAngleClock>/g, obj, "phaseAngleClock", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEndInfo.r>([\s\S]*?)<\/cim:TransformerEndInfo.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEndInfo.ratedS>([\s\S]*?)<\/cim:TransformerEndInfo.ratedS>/g, obj, "ratedS", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEndInfo.ratedU>([\s\S]*?)<\/cim:TransformerEndInfo.ratedU>/g, obj, "ratedU", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEndInfo.shortTermS>([\s\S]*?)<\/cim:TransformerEndInfo.shortTermS>/g, obj, "shortTermS", base.to_string, sub, context);
            base.parse_attribute (/<cim:TransformerEndInfo.TransformerStarImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerStarImpedance", sub, context);
            base.parse_attribute (/<cim:TransformerEndInfo.TransformerTankInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerTankInfo", sub, context);
            base.parse_attribute (/<cim:TransformerEndInfo.CoreAdmittance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CoreAdmittance", sub, context);
            bucket = context.parsed.TransformerEndInfo;
            if (null == bucket)
                context.parsed.TransformerEndInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerEndInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "TransformerEndInfo", "connectionKind", base.from_string, fields);
            base.export_element (obj, "TransformerEndInfo", "emergencyS", base.from_string, fields);
            base.export_element (obj, "TransformerEndInfo", "endNumber", base.from_string, fields);
            base.export_element (obj, "TransformerEndInfo", "insulationU", base.from_string, fields);
            base.export_element (obj, "TransformerEndInfo", "phaseAngleClock", base.from_string, fields);
            base.export_element (obj, "TransformerEndInfo", "r", base.from_string, fields);
            base.export_element (obj, "TransformerEndInfo", "ratedS", base.from_string, fields);
            base.export_element (obj, "TransformerEndInfo", "ratedU", base.from_string, fields);
            base.export_element (obj, "TransformerEndInfo", "shortTermS", base.from_string, fields);
            base.export_attribute (obj, "TransformerEndInfo", "TransformerStarImpedance", fields);
            base.export_attribute (obj, "TransformerEndInfo", "TransformerTankInfo", fields);
            base.export_attribute (obj, "TransformerEndInfo", "CoreAdmittance", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:ConcentricNeutralCableInfo.diameterOverNeutral>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.diameterOverNeutral>/g, obj, "diameterOverNeutral", base.to_string, sub, context);
            base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandCount>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandCount>/g, obj, "neutralStrandCount", base.to_string, sub, context);
            base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandGmr>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandGmr>/g, obj, "neutralStrandGmr", base.to_string, sub, context);
            base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandRadius>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandRadius>/g, obj, "neutralStrandRadius", base.to_string, sub, context);
            base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandRDC20>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandRDC20>/g, obj, "neutralStrandRDC20", base.to_string, sub, context);
            bucket = context.parsed.ConcentricNeutralCableInfo;
            if (null == bucket)
                context.parsed.ConcentricNeutralCableInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ConcentricNeutralCableInfo (obj, exporters, full)
        {
            var fields = exporters["CableInfo"](obj, exporters, false);

            base.export_element (obj, "ConcentricNeutralCableInfo", "diameterOverNeutral", base.from_string, fields);
            base.export_element (obj, "ConcentricNeutralCableInfo", "neutralStrandCount", base.from_string, fields);
            base.export_element (obj, "ConcentricNeutralCableInfo", "neutralStrandGmr", base.from_string, fields);
            base.export_element (obj, "ConcentricNeutralCableInfo", "neutralStrandRadius", base.from_string, fields);
            base.export_element (obj, "ConcentricNeutralCableInfo", "neutralStrandRDC20", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_OverheadWireInfo (obj, exporters, full)
        {
            var fields = exporters["WireInfo"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:OpenCircuitTest.energisedEndStep>([\s\S]*?)<\/cim:OpenCircuitTest.energisedEndStep>/g, obj, "energisedEndStep", base.to_string, sub, context);
            base.parse_element (/<cim:OpenCircuitTest.energisedEndVoltage>([\s\S]*?)<\/cim:OpenCircuitTest.energisedEndVoltage>/g, obj, "energisedEndVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:OpenCircuitTest.openEndStep>([\s\S]*?)<\/cim:OpenCircuitTest.openEndStep>/g, obj, "openEndStep", base.to_string, sub, context);
            base.parse_element (/<cim:OpenCircuitTest.openEndVoltage>([\s\S]*?)<\/cim:OpenCircuitTest.openEndVoltage>/g, obj, "openEndVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:OpenCircuitTest.phaseShift>([\s\S]*?)<\/cim:OpenCircuitTest.phaseShift>/g, obj, "phaseShift", base.to_string, sub, context);
            base.parse_attribute (/<cim:OpenCircuitTest.OpenEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OpenEnd", sub, context);
            base.parse_attribute (/<cim:OpenCircuitTest.EnergisedEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEnd", sub, context);
            bucket = context.parsed.OpenCircuitTest;
            if (null == bucket)
                context.parsed.OpenCircuitTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OpenCircuitTest (obj, exporters, full)
        {
            var fields = exporters["TransformerTest"](obj, exporters, false);

            base.export_element (obj, "OpenCircuitTest", "energisedEndStep", base.from_string, fields);
            base.export_element (obj, "OpenCircuitTest", "energisedEndVoltage", base.from_string, fields);
            base.export_element (obj, "OpenCircuitTest", "openEndStep", base.from_string, fields);
            base.export_element (obj, "OpenCircuitTest", "openEndVoltage", base.from_string, fields);
            base.export_element (obj, "OpenCircuitTest", "phaseShift", base.from_string, fields);
            base.export_attribute (obj, "OpenCircuitTest", "OpenEnd", fields);
            base.export_attribute (obj, "OpenCircuitTest", "EnergisedEnd", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:TransformerTest.basePower>([\s\S]*?)<\/cim:TransformerTest.basePower>/g, obj, "basePower", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerTest.temperature>([\s\S]*?)<\/cim:TransformerTest.temperature>/g, obj, "temperature", base.to_string, sub, context);
            bucket = context.parsed.TransformerTest;
            if (null == bucket)
                context.parsed.TransformerTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerTest (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TransformerTest", "basePower", base.from_string, fields);
            base.export_element (obj, "TransformerTest", "temperature", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:WireMaterialKind.copper>([\s\S]*?)<\/cim:WireMaterialKind.copper>/g, obj, "copper", base.to_string, sub, context);
            base.parse_element (/<cim:WireMaterialKind.steel>([\s\S]*?)<\/cim:WireMaterialKind.steel>/g, obj, "steel", base.to_string, sub, context);
            base.parse_element (/<cim:WireMaterialKind.aluminum>([\s\S]*?)<\/cim:WireMaterialKind.aluminum>/g, obj, "aluminum", base.to_string, sub, context);
            base.parse_element (/<cim:WireMaterialKind.aluminumSteel>([\s\S]*?)<\/cim:WireMaterialKind.aluminumSteel>/g, obj, "aluminumSteel", base.to_string, sub, context);
            base.parse_element (/<cim:WireMaterialKind.acsr>([\s\S]*?)<\/cim:WireMaterialKind.acsr>/g, obj, "acsr", base.to_string, sub, context);
            base.parse_element (/<cim:WireMaterialKind.aluminumAlloy>([\s\S]*?)<\/cim:WireMaterialKind.aluminumAlloy>/g, obj, "aluminumAlloy", base.to_string, sub, context);
            base.parse_element (/<cim:WireMaterialKind.aluminumAlloySteel>([\s\S]*?)<\/cim:WireMaterialKind.aluminumAlloySteel>/g, obj, "aluminumAlloySteel", base.to_string, sub, context);
            base.parse_element (/<cim:WireMaterialKind.aaac>([\s\S]*?)<\/cim:WireMaterialKind.aaac>/g, obj, "aaac", base.to_string, sub, context);
            base.parse_element (/<cim:WireMaterialKind.other>([\s\S]*?)<\/cim:WireMaterialKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.WireMaterialKind;
            if (null == bucket)
                context.parsed.WireMaterialKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WireMaterialKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "WireMaterialKind", "copper", base.from_string, fields);
            base.export_element (obj, "WireMaterialKind", "steel", base.from_string, fields);
            base.export_element (obj, "WireMaterialKind", "aluminum", base.from_string, fields);
            base.export_element (obj, "WireMaterialKind", "aluminumSteel", base.from_string, fields);
            base.export_element (obj, "WireMaterialKind", "acsr", base.from_string, fields);
            base.export_element (obj, "WireMaterialKind", "aluminumAlloy", base.from_string, fields);
            base.export_element (obj, "WireMaterialKind", "aluminumAlloySteel", base.from_string, fields);
            base.export_element (obj, "WireMaterialKind", "aaac", base.from_string, fields);
            base.export_element (obj, "WireMaterialKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:ShortCircuitTest.energisedEndStep>([\s\S]*?)<\/cim:ShortCircuitTest.energisedEndStep>/g, obj, "energisedEndStep", base.to_string, sub, context);
            base.parse_element (/<cim:ShortCircuitTest.groundedEndStep>([\s\S]*?)<\/cim:ShortCircuitTest.groundedEndStep>/g, obj, "groundedEndStep", base.to_string, sub, context);
            base.parse_element (/<cim:ShortCircuitTest.leakageImpedance>([\s\S]*?)<\/cim:ShortCircuitTest.leakageImpedance>/g, obj, "leakageImpedance", base.to_string, sub, context);
            base.parse_element (/<cim:ShortCircuitTest.leakageImpedanceZero>([\s\S]*?)<\/cim:ShortCircuitTest.leakageImpedanceZero>/g, obj, "leakageImpedanceZero", base.to_string, sub, context);
            base.parse_element (/<cim:ShortCircuitTest.loss>([\s\S]*?)<\/cim:ShortCircuitTest.loss>/g, obj, "loss", base.to_string, sub, context);
            base.parse_element (/<cim:ShortCircuitTest.lossZero>([\s\S]*?)<\/cim:ShortCircuitTest.lossZero>/g, obj, "lossZero", base.to_string, sub, context);
            base.parse_attribute (/<cim:ShortCircuitTest.EnergisedEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEnd", sub, context);
            bucket = context.parsed.ShortCircuitTest;
            if (null == bucket)
                context.parsed.ShortCircuitTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ShortCircuitTest (obj, exporters, full)
        {
            var fields = exporters["TransformerTest"](obj, exporters, false);

            base.export_element (obj, "ShortCircuitTest", "energisedEndStep", base.from_string, fields);
            base.export_element (obj, "ShortCircuitTest", "groundedEndStep", base.from_string, fields);
            base.export_element (obj, "ShortCircuitTest", "leakageImpedance", base.from_string, fields);
            base.export_element (obj, "ShortCircuitTest", "leakageImpedanceZero", base.from_string, fields);
            base.export_element (obj, "ShortCircuitTest", "loss", base.from_string, fields);
            base.export_element (obj, "ShortCircuitTest", "lossZero", base.from_string, fields);
            base.export_attribute (obj, "ShortCircuitTest", "EnergisedEnd", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:CableConstructionKind.compacted>([\s\S]*?)<\/cim:CableConstructionKind.compacted>/g, obj, "compacted", base.to_string, sub, context);
            base.parse_element (/<cim:CableConstructionKind.compressed>([\s\S]*?)<\/cim:CableConstructionKind.compressed>/g, obj, "compressed", base.to_string, sub, context);
            base.parse_element (/<cim:CableConstructionKind.sector>([\s\S]*?)<\/cim:CableConstructionKind.sector>/g, obj, "sector", base.to_string, sub, context);
            base.parse_element (/<cim:CableConstructionKind.segmental>([\s\S]*?)<\/cim:CableConstructionKind.segmental>/g, obj, "segmental", base.to_string, sub, context);
            base.parse_element (/<cim:CableConstructionKind.solid>([\s\S]*?)<\/cim:CableConstructionKind.solid>/g, obj, "solid", base.to_string, sub, context);
            base.parse_element (/<cim:CableConstructionKind.stranded>([\s\S]*?)<\/cim:CableConstructionKind.stranded>/g, obj, "stranded", base.to_string, sub, context);
            base.parse_element (/<cim:CableConstructionKind.other>([\s\S]*?)<\/cim:CableConstructionKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.CableConstructionKind;
            if (null == bucket)
                context.parsed.CableConstructionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CableConstructionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CableConstructionKind", "compacted", base.from_string, fields);
            base.export_element (obj, "CableConstructionKind", "compressed", base.from_string, fields);
            base.export_element (obj, "CableConstructionKind", "sector", base.from_string, fields);
            base.export_element (obj, "CableConstructionKind", "segmental", base.from_string, fields);
            base.export_element (obj, "CableConstructionKind", "solid", base.from_string, fields);
            base.export_element (obj, "CableConstructionKind", "stranded", base.from_string, fields);
            base.export_element (obj, "CableConstructionKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:CableShieldMaterialKind.lead>([\s\S]*?)<\/cim:CableShieldMaterialKind.lead>/g, obj, "lead", base.to_string, sub, context);
            base.parse_element (/<cim:CableShieldMaterialKind.copper>([\s\S]*?)<\/cim:CableShieldMaterialKind.copper>/g, obj, "copper", base.to_string, sub, context);
            base.parse_element (/<cim:CableShieldMaterialKind.steel>([\s\S]*?)<\/cim:CableShieldMaterialKind.steel>/g, obj, "steel", base.to_string, sub, context);
            base.parse_element (/<cim:CableShieldMaterialKind.aluminum>([\s\S]*?)<\/cim:CableShieldMaterialKind.aluminum>/g, obj, "aluminum", base.to_string, sub, context);
            base.parse_element (/<cim:CableShieldMaterialKind.other>([\s\S]*?)<\/cim:CableShieldMaterialKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.CableShieldMaterialKind;
            if (null == bucket)
                context.parsed.CableShieldMaterialKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CableShieldMaterialKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CableShieldMaterialKind", "lead", base.from_string, fields);
            base.export_element (obj, "CableShieldMaterialKind", "copper", base.from_string, fields);
            base.export_element (obj, "CableShieldMaterialKind", "steel", base.from_string, fields);
            base.export_element (obj, "CableShieldMaterialKind", "aluminum", base.from_string, fields);
            base.export_element (obj, "CableShieldMaterialKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:WireUsageKind.transmission>([\s\S]*?)<\/cim:WireUsageKind.transmission>/g, obj, "transmission", base.to_string, sub, context);
            base.parse_element (/<cim:WireUsageKind.distribution>([\s\S]*?)<\/cim:WireUsageKind.distribution>/g, obj, "distribution", base.to_string, sub, context);
            base.parse_element (/<cim:WireUsageKind.secondary>([\s\S]*?)<\/cim:WireUsageKind.secondary>/g, obj, "secondary", base.to_string, sub, context);
            base.parse_element (/<cim:WireUsageKind.other>([\s\S]*?)<\/cim:WireUsageKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.WireUsageKind;
            if (null == bucket)
                context.parsed.WireUsageKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WireUsageKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "WireUsageKind", "transmission", base.from_string, fields);
            base.export_element (obj, "WireUsageKind", "distribution", base.from_string, fields);
            base.export_element (obj, "WireUsageKind", "secondary", base.from_string, fields);
            base.export_element (obj, "WireUsageKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:TapeShieldCableInfo.tapeLap>([\s\S]*?)<\/cim:TapeShieldCableInfo.tapeLap>/g, obj, "tapeLap", base.to_string, sub, context);
            base.parse_element (/<cim:TapeShieldCableInfo.tapeThickness>([\s\S]*?)<\/cim:TapeShieldCableInfo.tapeThickness>/g, obj, "tapeThickness", base.to_string, sub, context);
            bucket = context.parsed.TapeShieldCableInfo;
            if (null == bucket)
                context.parsed.TapeShieldCableInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TapeShieldCableInfo (obj, exporters, full)
        {
            var fields = exporters["CableInfo"](obj, exporters, false);

            base.export_element (obj, "TapeShieldCableInfo", "tapeLap", base.from_string, fields);
            base.export_element (obj, "TapeShieldCableInfo", "tapeThickness", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_TransformerTest: export_TransformerTest,
                export_WireInfo: export_WireInfo,
                export_TransformerEndInfo: export_TransformerEndInfo,
                parse_PowerTransformerInfo: parse_PowerTransformerInfo,
                parse_CableInfo: parse_CableInfo,
                parse_WireMaterialKind: parse_WireMaterialKind,
                export_CableConstructionKind: export_CableConstructionKind,
                parse_TapChangerInfo: parse_TapChangerInfo,
                export_WirePosition: export_WirePosition,
                export_PowerTransformerInfo: export_PowerTransformerInfo,
                export_CableOuterJacketKind: export_CableOuterJacketKind,
                parse_ConcentricNeutralCableInfo: parse_ConcentricNeutralCableInfo,
                export_WireMaterialKind: export_WireMaterialKind,
                export_NoLoadTest: export_NoLoadTest,
                export_OpenCircuitTest: export_OpenCircuitTest,
                export_WireSpacingInfo: export_WireSpacingInfo,
                parse_WireUsageKind: parse_WireUsageKind,
                parse_TapeShieldCableInfo: parse_TapeShieldCableInfo,
                parse_CableShieldMaterialKind: parse_CableShieldMaterialKind,
                parse_SwitchInfo: parse_SwitchInfo,
                parse_TransformerTest: parse_TransformerTest,
                export_WireInsulationKind: export_WireInsulationKind,
                parse_CableOuterJacketKind: parse_CableOuterJacketKind,
                parse_TransformerTankInfo: parse_TransformerTankInfo,
                parse_ShortCircuitTest: parse_ShortCircuitTest,
                export_CableShieldMaterialKind: export_CableShieldMaterialKind,
                export_TapChangerInfo: export_TapChangerInfo,
                parse_BusbarSectionInfo: parse_BusbarSectionInfo,
                parse_OverheadWireInfo: parse_OverheadWireInfo,
                export_OverheadWireInfo: export_OverheadWireInfo,
                export_CableInfo: export_CableInfo,
                parse_WireInfo: parse_WireInfo,
                parse_WireSpacingInfo: parse_WireSpacingInfo,
                export_BusbarSectionInfo: export_BusbarSectionInfo,
                parse_TransformerEndInfo: parse_TransformerEndInfo,
                export_TransformerTankInfo: export_TransformerTankInfo,
                export_ShuntCompensatorInfo: export_ShuntCompensatorInfo,
                parse_CableConstructionKind: parse_CableConstructionKind,
                parse_NoLoadTest: parse_NoLoadTest,
                export_ShortCircuitTest: export_ShortCircuitTest,
                parse_OpenCircuitTest: parse_OpenCircuitTest,
                parse_WireInsulationKind: parse_WireInsulationKind,
                parse_ShuntCompensatorInfo: parse_ShuntCompensatorInfo,
                export_ConcentricNeutralCableInfo: export_ConcentricNeutralCableInfo,
                export_SwitchInfo: export_SwitchInfo,
                export_WireUsageKind: export_WireUsageKind,
                export_TapeShieldCableInfo: export_TapeShieldCableInfo,
                parse_WirePosition: parse_WirePosition
            }
        );
    }
);