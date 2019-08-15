define
(
    ["model/base", "model/Common", "model/Core", "model/InfAssets"],
    /**
     * This package contains the core information classes that support asset management applications that deal with the physical and lifecycle aspects of various network resources (as opposed to power system resource models defined in IEC61970::Wires package, which support network applications).
     *
     */
    function (base, Common, Core, InfAssets)
    {

        /**
         * Possible 'in use' states that an asset can be in.
         *
         */
        let InUseStateKind =
        {
            "inUse": "inUse",
            "readyForUse": "readyForUse",
            "notReadyForUse": "notReadyForUse"
        };
        Object.freeze (InUseStateKind);

        /**
         * List of editions of ASTM standards.
         *
         */
        let ASTMStandardEditionKind =
        {
            "_00(2005)": "00(2005)",
            "_00(2005)e1": "00(2005)e1",
            "_00(2010)": "00(2010)",
            "_01": "01",
            "_01a(2007)": "01a(2007)",
            "_01e1": "01e1",
            "_02": "02",
            "_02(2007)": "02(2007)",
            "_02(2008)": "02(2008)",
            "_02(2009)": "02(2009)",
            "_02(2012)": "02(2012)",
            "_02(2014)": "02(2014)",
            "_02a": "02a",
            "_02b": "02b",
            "_02e1": "02e1",
            "_03": "03",
            "_03(2008)": "03(2008)",
            "_03(2014)": "03(2014)",
            "_03a": "03a",
            "_04": "04",
            "_04a": "04a",
            "_04ae1": "04ae1",
            "_04e1": "04e1",
            "_04e2": "04e2",
            "_05": "05",
            "_05(2010)": "05(2010)",
            "_05a": "05a",
            "_05a(2010)": "05a(2010)",
            "_06": "06",
            "_07": "07",
            "_07(2013)": "07(2013)",
            "_08": "08",
            "_08e1": "08e1",
            "_09": "09",
            "_09(2013)": "09(2013)",
            "_10": "10",
            "_10a": "10a",
            "_11": "11",
            "_11a": "11a",
            "_12": "12",
            "_12a": "12a",
            "_12b": "12b",
            "_13": "13",
            "_13e1": "13e1",
            "_14": "14",
            "_14a": "14a",
            "_14e1": "14e1",
            "_14e2": "14e2",
            "_15": "15",
            "_15a": "15a",
            "_65": "65",
            "_71": "71",
            "_74": "74",
            "_80e1": "80e1",
            "_82": "82",
            "_83(1996)e1": "83(1996)e1",
            "_85": "85",
            "_85(1990)e1": "85(1990)e1",
            "_87(1995)": "87(1995)",
            "_87e1": "87e1",
            "_88": "88",
            "_90e1": "90e1",
            "_91": "91",
            "_92": "92",
            "_94": "94",
            "_94(1999)": "94(1999)",
            "_94(2004)": "94(2004)",
            "_94(2010)": "94(2010)",
            "_94e1": "94e1",
            "_95": "95",
            "_95(2000)e1": "95(2000)e1",
            "_96": "96",
            "_96(2002)e1": "96(2002)e1",
            "_96a": "96a",
            "_96e1": "96e1",
            "_97": "97",
            "_97(2002)": "97(2002)",
            "_97(2003)": "97(2003)",
            "_97(2008)": "97(2008)",
            "_97a": "97a",
            "_97a(2004)": "97a(2004)",
            "_98": "98",
            "_98a": "98a",
            "_99": "99",
            "_99(2004)e1": "99(2004)e1",
            "_99(2005)": "99(2005)",
            "_99(2009)": "99(2009)",
            "_99a": "99a",
            "_99a(2004)": "99a(2004)",
            "_99e1": "99e1",
            "_99e2": "99e2",
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (ASTMStandardEditionKind);

        /**
         * Kind of medium.
         *
         */
        let MediumKind =
        {
            "air": "air",
            "gas": "gas",
            "liquid": "liquid",
            "mineralOil": "mineralOil",
            "SF6": "SF6",
            "SF6CF4": "SF6CF4",
            "SF6N2": "SF6N2",
            "solid": "solid"
        };
        Object.freeze (MediumKind);

        /**
         * List of CIGRE standards.
         *
         */
        let CIGREStandardKind =
        {
            "TB_170": "TB 170"
        };
        Object.freeze (CIGREStandardKind);

        /**
         * Possible test methods.
         *
         */
        let TestMethod =
        {
            "D1275A": "D1275A",
            "D1275B": "D1275B",
            "D3612A": "D3612A",
            "D3612B": "D3612B",
            "D3612C": "D3612C",
            "_60567ByDisplacement": "60567ByDisplacement",
            "_60567ByPartition": "60567ByPartition",
            "_60567ByVacuum": "60567ByVacuum",
            "_60970Automatic": "60970Automatic",
            "_60970Manual1": "60970Manual1",
            "_60970Manual2": "60970Manual2",
            "_62535Main": "62535Main",
            "_62535AnnexA": "62535AnnexA",
            "_61125A": "61125A",
            "_61125B": "61125B",
            "_61125C": "61125C",
            "_62270AnnexA": "62270AnnexA"
        };
        Object.freeze (TestMethod);

        /**
         * List of IEEE standards.
         *
         */
        let IEEEStandardKind =
        {
            "_62": "62"
        };
        Object.freeze (IEEEStandardKind);

        /**
         * Types of sample containers.
         *
         */
        let SampleContainerType =
        {
            "glassCan": "glassCan",
            "metalCan": "metalCan",
            "syringe": "syringe"
        };
        Object.freeze (SampleContainerType);

        /**
         * Kind of seal.
         *
         */
        let SealKind =
        {
            "steel": "steel",
            "lead": "lead",
            "lock": "lock",
            "other": "other"
        };
        Object.freeze (SealKind);

        /**
         * List of editions for UK Ministry of Defence standards.
         *
         */
        let UKMinistryOfDefenceStandardEditionKind =
        {
            "Issue_1": "Issue 1",
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (UKMinistryOfDefenceStandardEditionKind);

        /**
         * List of editions for WEP standards.
         *
         */
        let WEPStandardEditionKind =
        {
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (WEPStandardEditionKind);

        /**
         * Types of facilities at which an asset can be deployed.
         *
         */
        let FacilityKind =
        {
            "substationHydroPlant": "substationHydroPlant",
            "substationFossilPlant": "substationFossilPlant",
            "substationNuclearPlant": "substationNuclearPlant",
            "substationTransmission": "substationTransmission",
            "substationSubTransmission": "substationSubTransmission",
            "substationDistribution": "substationDistribution",
            "distributionPoleTop": "distributionPoleTop"
        };
        Object.freeze (FacilityKind);

        /**
         * Type of hazard that is posed to asset in this location.
         *
         * Note: This enumeration provides essential information to asset health analytics. The existing list is a starting point and is anticipated to be fleshed out further as requirements are better understood (PAB 2016/01/09).
         *
         */
        let AssetHazardKind =
        {
            "ambientTempBelowMinus12": "ambientTempBelowMinus12",
            "ambientTempAbove38": "ambientTempAbove38",
            "vegetation": "vegetation",
            "childrenAtPlay": "childrenAtPlay",
            "fishingArea": "fishingArea",
            "other": "other"
        };
        Object.freeze (AssetHazardKind);

        /**
         * List of editions for ISO standards.
         *
         */
        let ISOStandardEditionKind =
        {
            "_1973": "1973",
            "_1974": "1974",
            "_1976": "1976",
            "_1983": "1983",
            "_1985": "1985",
            "_1988": "1988",
            "_1992": "1992",
            "_1993": "1993",
            "_1994": "1994",
            "_1994_Cor1:1997": "1994/Cor1:1997",
            "_1998": "1998",
            "_2000": "2000",
            "_2002": "2002",
            "_2005": "2005",
            "_2008": "2008",
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (ISOStandardEditionKind);

        /**
         * List of editions for Doble standards.
         *
         */
        let DobleStandardEditionKind =
        {
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (DobleStandardEditionKind);

        /**
         * Classifications of network roles in which breakers can be deployed.
         *
         * The classifications are intended to reflect both criticality of breaker in network operations and typical usage experienced by breaker.
         * Note: This enumeration provides essential information to asset health analytics. The existing list is a starting point and is anticipated to be fleshed out further as requirements are better understood (PAB 2016/01/09).
         *
         */
        let BreakerApplicationKind =
        {
            "stepUpTransformerBreakerHydro": "stepUpTransformerBreakerHydro",
            "stepUpTransformerBreakerFossil": "stepUpTransformerBreakerFossil",
            "stepUpTransformerBreakerNuclear": "stepUpTransformerBreakerNuclear",
            "stepUpTransformerBreakerPumpedStorage": "stepUpTransformerBreakerPumpedStorage",
            "substationTransformerBreaker": "substationTransformerBreaker",
            "transmissionFlowGateLineBreaker": "transmissionFlowGateLineBreaker",
            "transmissionLineBreaker": "transmissionLineBreaker",
            "transmissionTieLineBreaker": "transmissionTieLineBreaker",
            "spare": "spare",
            "capacitorOrReactorBankBreaker": "capacitorOrReactorBankBreaker",
            "busBreaker": "busBreaker",
            "busTieBreaker": "busTieBreaker",
            "feederBreaker": "feederBreaker",
            "other": "other"
        };
        Object.freeze (BreakerApplicationKind);

        /**
         * Test variants.
         *
         */
        let TestVariantKind =
        {
            "_1mm": "1mm",
            "_2mm": "2mm",
            "minus40C": "minus40C",
            "minus30C": "minus30C",
            "_0C": "0C",
            "_25C": "25C",
            "_30C": "30C",
            "_40C": "40C",
            "_100C": "100C",
            "_72hours": "72hours",
            "_164hours": "164hours"
        };
        Object.freeze (TestVariantKind);

        /**
         * List of editions for IEEE standards.
         *
         */
        let IEEEStandardEditionKind =
        {
            "_1978": "1978",
            "_1995": "1995",
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (IEEEStandardEditionKind);

        /**
         * Types of risk scores.
         *
         */
        let RiskScoreKind =
        {
            "customerRisk": "customerRisk",
            "financialRisk": "financialRisk",
            "safetyRisk": "safetyRisk"
        };
        Object.freeze (RiskScoreKind);

        /**
         * What asset has failed to be able to do.
         *
         * Reason for breaker failure.
         * Note: This enumeration provides essential information to asset health analytics. The existing list is a starting point and is anticipated to be fleshed out further as requirements are better understood (PAB 2016/01/09).
         *
         */
        let AssetFailureMode =
        {
            "failToCarryLoad": "failToCarryLoad",
            "failToClose": "failToClose",
            "failToInterrupt": "failToInterrupt",
            "failToOpen": "failToOpen",
            "failToProvideInsulationLevel": "failToProvideInsulationLevel"
        };
        Object.freeze (AssetFailureMode);

        /**
         * List of EPA standards.
         *
         */
        let EPAStandardKind =
        {
            "_8082": "8082"
        };
        Object.freeze (EPAStandardKind);

        /**
         * List of WEP standards.
         *
         */
        let WEPStandardKind =
        {
            "_12__1254E": "12, 1254E"
        };
        Object.freeze (WEPStandardKind);

        /**
         * Usage for an asset model.
         *
         */
        let AssetModelUsageKind =
        {
            "distributionOverhead": "distributionOverhead",
            "distributionUnderground": "distributionUnderground",
            "transmission": "transmission",
            "substation": "substation",
            "streetlight": "streetlight",
            "customerSubstation": "customerSubstation",
            "unknown": "unknown",
            "other": "other"
        };
        Object.freeze (AssetModelUsageKind);

        /**
         * List of TAPPI  standards.
         *
         */
        let TAPPIStandardKind =
        {
            "T494": "T494"
        };
        Object.freeze (TAPPIStandardKind);

        /**
         * List of DIN standards.
         *
         */
        let DINStandardKind =
        {
            "_51353": "51353"
        };
        Object.freeze (DINStandardKind);

        /**
         * Sources for oil temperature.
         *
         */
        let OilTemperatureSource =
        {
            "topOilTemperatureGauge": "topOilTemperatureGauge",
            "infraredGun": "infraredGun",
            "other": "other"
        };
        Object.freeze (OilTemperatureSource);

        /**
         * Reason for breaker failure.
         *
         * Note: This enumeration provides essential information to asset health analytics. The existing list is a starting point and is anticipated to be fleshed out further as requirements are better understood (PAB 2016/01/09).
         *
         */
        let BreakerFailureReasonKind =
        {
            "blastValveFailure": "blastValveFailure",
            "bushingFailure": "bushingFailure",
            "closeCoilOpenShortedFailed": "closeCoilOpenShortedFailed",
            "contaminatedAir": "contaminatedAir",
            "contaminatedArcChutes": "contaminatedArcChutes",
            "contaminatedGas": "contaminatedGas",
            "contaminatedGasAir": "contaminatedGasAir",
            "controlCircuitFailure": "controlCircuitFailure",
            "degradedLubrication": "degradedLubrication",
            "externalOrInternalContamination": "externalOrInternalContamination",
            "highPressureAirPlant": "highPressureAirPlant",
            "highResistanceLoadPath": "highResistanceLoadPath",
            "highResistancePath": "highResistancePath",
            "interrupterContactFailure": "interrupterContactFailure",
            "interrupterFailure": "interrupterFailure",
            "linkageFailure": "linkageFailure",
            "lossOfOil": "lossOfOil",
            "lossOfVacuum": "lossOfVacuum",
            "lowGasPressure": "lowGasPressure",
            "mechanismFailure": "mechanismFailure",
            "mechanismOrLinkageFailure": "mechanismOrLinkageFailure",
            "oilRelatedFailure": "oilRelatedFailure",
            "poorOilQuality": "poorOilQuality",
            "rackingMechanismFailure": "rackingMechanismFailure",
            "resistorFailure": "resistorFailure",
            "resistorGradingCapacitorFailure": "resistorGradingCapacitorFailure",
            "SF6BlastValveFailure": "SF6BlastValveFailure",
            "SF6PufferFailure": "SF6PufferFailure",
            "solidDielectricFailure": "solidDielectricFailure",
            "storedEnergyFailure": "storedEnergyFailure",
            "tripCoilOpenShortedFailed": "tripCoilOpenShortedFailed"
        };
        Object.freeze (BreakerFailureReasonKind);

        /**
         * List of ISO standards.
         *
         */
        let ISOStandardKind =
        {
            "_2592": "2592",
            "_2719": "2719",
            "_3016": "3016",
            "_3104": "3104",
            "_3675": "3675",
            "_1924": "1924",
            "_1924_1": "1924-1",
            "_1924_2": "1924-2",
            "_1924_3": "1924-3"
        };
        Object.freeze (ISOStandardKind);

        /**
         * Kind of corporate standard.
         *
         */
        let CorporateStandardKind =
        {
            "standard": "standard",
            "experimental": "experimental",
            "underEvaluation": "underEvaluation",
            "other": "other"
        };
        Object.freeze (CorporateStandardKind);

        /**
         * Possible states of asset deployment.
         *
         */
        let DeploymentStateKind =
        {
            "notYetInstalled": "notYetInstalled",
            "installed": "installed",
            "inService": "inService",
            "outOfService": "outOfService",
            "removed": "removed"
        };
        Object.freeze (DeploymentStateKind);

        /**
         * Classifications of network roles in which transformers can be deployed.
         *
         * The classifications are intended to reflect both criticality of transformer in network operations and typical usage experienced by transformer.
         * Note: This enumeration provides essential information to asset health analytics. The existing list is a starting point and is anticipated to be fleshed out further as requirements are better understood (PAB 2016/01/09).
         *
         */
        let TransformerApplicationKind =
        {
            "transmissionBusToBus": "transmissionBusToBus",
            "transmissionBusToDistribution": "transmissionBusToDistribution",
            "generatorStepUp": "generatorStepUp",
            "distribution": "distribution"
        };
        Object.freeze (TransformerApplicationKind);

        /**
         * List of editions for EPA standards.
         *
         */
        let EPAStandardEditionKind =
        {
            "A": "A",
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (EPAStandardEditionKind);

        /**
         * Reason asset retired.
         *
         */
        let RetiredReasonKind =
        {
            "environmental": "environmental",
            "excessiveMaintenance": "excessiveMaintenance",
            "facilitiesUpgrade": "facilitiesUpgrade",
            "failed": "failed",
            "obsolescence": "obsolescence",
            "other": "other",
            "sold": "sold"
        };
        Object.freeze (RetiredReasonKind);

        /**
         * Classifications of asset failures.
         *
         */
        let AssetFailureClassification =
        {
            "major": "major",
            "minor": "minor",
            "defect": "defect",
            "majorNeedsReplacement": "majorNeedsReplacement"
        };
        Object.freeze (AssetFailureClassification);

        /**
         * Kind of seal condition.
         *
         */
        let SealConditionKind =
        {
            "locked": "locked",
            "open": "open",
            "broken": "broken",
            "missing": "missing",
            "other": "other"
        };
        Object.freeze (SealConditionKind);

        /**
         * List of editions for TAPPI standards.
         *
         */
        let TAPPIStandardEditionKind =
        {
            "_2009": "2009",
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (TAPPIStandardEditionKind);

        /**
         * List of IEC standards.
         *
         */
        let IECStandardKind =
        {
            "_60156": "60156",
            "_60243_1": "60243-1",
            "_60243_2": "60243-2",
            "_60243_3": "60243-3",
            "_60247": "60247",
            "_60422": "60422",
            "_60450": "60450",
            "_60567": "60567",
            "_60666": "60666",
            "_60814": "60814",
            "_60970": "60970",
            "_60997": "60997",
            "_61125": "61125",
            "_61198": "61198",
            "_61619": "61619",
            "_61868": "61868",
            "_62535": "62535",
            "_62697_1": "62697-1",
            "_62770": "62770"
        };
        Object.freeze (IECStandardKind);

        /**
         * How the failure has been isolated.
         *
         */
        let FailureIsolationMethodKind =
        {
            "breakerOperation": "breakerOperation",
            "fuse": "fuse",
            "burnedInTheClear": "burnedInTheClear",
            "manuallyIsolated": "manuallyIsolated",
            "other": "other"
        };
        Object.freeze (FailureIsolationMethodKind);

        /**
         * Lifecycle states an asset can be in.
         *
         * While the possible lifecycle states are standardized, the allowed transitions are not - they are intended to be defined by the business process requirements of local implementations.
         *
         */
        let AssetLifecycleStateKind =
        {
            "manufactured": "manufactured",
            "purchased": "purchased",
            "received": "received",
            "retired": "retired",
            "disposedOf": "disposedOf"
        };
        Object.freeze (AssetLifecycleStateKind);

        /**
         * Locations where oil can be sampled.
         *
         */
        let OilSampleLocation =
        {
            "oilSampleValve": "oilSampleValve",
            "oilDrainageDevice": "oilDrainageDevice",
            "other": "other"
        };
        Object.freeze (OilSampleLocation);

        /**
         * Possible kinds of asset groups.
         *
         */
        let AssetGroupKind =
        {
            "analysisGroup": "analysisGroup",
            "inventoryGroup": "inventoryGroup",
            "complianceGroup": "complianceGroup",
            "functionalGroup": "functionalGroup",
            "other": "other"
        };
        Object.freeze (AssetGroupKind);

        /**
         * List of editions for CIGRE standards.
         *
         */
        let CIGREStandardEditionKind =
        {
            "_2000": "2000",
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (CIGREStandardEditionKind);

        /**
         * Kind of procedure.
         *
         */
        let ProcedureKind =
        {
            "inspection": "inspection",
            "diagnosis": "diagnosis",
            "maintenance": "maintenance",
            "test": "test",
            "other": "other"
        };
        Object.freeze (ProcedureKind);

        /**
         * List of editions for DIN standards.
         *
         */
        let DINStandardEditionKind =
        {
            "_1985": "1985",
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (DINStandardEditionKind);

        /**
         * List of Laborelec standards.
         *
         */
        let LaborelecStandardKind =
        {
            "methanol": "methanol"
        };
        Object.freeze (LaborelecStandardKind);

        /**
         * Reason for test.
         *
         */
        let TestReason =
        {
            "postOperationFault": "postOperationFault",
            "postRepair": "postRepair",
            "postOilTreatment": "postOilTreatment",
            "routine": "routine"
        };
        Object.freeze (TestReason);

        /**
         * List of editions for Laborelec standards.
         *
         */
        let LaborelecStandardEditionKind =
        {
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (LaborelecStandardEditionKind);

        /**
         * List of ASTM standards.
         *
         */
        let ASTMStandardKind =
        {
            "D1169": "D1169",
            "D1275": "D1275",
            "D1298": "D1298",
            "D149": "D149",
            "D1500": "D1500",
            "D1524": "D1524",
            "D1533": "D1533",
            "D1816": "D1816",
            "D2029": "D2029",
            "D2112": "D2112",
            "D2129": "D2129",
            "D2140": "D2140",
            "D2144": "D2144",
            "D2668": "D2668",
            "D3612": "D3612",
            "D4052": "D4052",
            "D4059": "D4059",
            "D4230": "D4230",
            "D4243": "D4243",
            "D445": "D445",
            "D4768": "D4768",
            "D5837": "D5837",
            "D5853": "D5853",
            "D5949": "D5949",
            "D5950": "D5950",
            "D5985": "D5985",
            "D6304": "D6304",
            "D6749": "D6749",
            "D6786": "D6786",
            "D6892": "D6892",
            "D7151": "D7151",
            "D7346": "D7346",
            "D828": "D828",
            "D877": "D877",
            "D877_D877M": "D877/D877M",
            "D92": "D92",
            "D924": "D924",
            "D93": "D93",
            "D97": "D97",
            "D974": "D974"
        };
        Object.freeze (ASTMStandardKind);

        /**
         * List of Doble standards.
         *
         */
        let DobleStandardKind =
        {
            "methanol": "methanol"
        };
        Object.freeze (DobleStandardKind);

        /**
         * Kinds of assets or asset components.
         *
         */
        let AssetKind =
        {
            "breakerAirBlastBreaker": "breakerAirBlastBreaker",
            "breakerBulkOilBreaker": "breakerBulkOilBreaker",
            "breakerMinimumOilBreaker": "breakerMinimumOilBreaker",
            "breakerSF6DeadTankBreaker": "breakerSF6DeadTankBreaker",
            "breakerSF6LiveTankBreaker": "breakerSF6LiveTankBreaker",
            "breakerTankAssembly": "breakerTankAssembly",
            "breakerInsulatingStackAssembly": "breakerInsulatingStackAssembly",
            "transformer": "transformer",
            "transformerTank": "transformerTank",
            "other": "other"
        };
        Object.freeze (AssetKind);

        /**
         * List of editions for IEC standards.
         *
         */
        let IECStandardEditionKind =
        {
            "_1963": "1963",
            "_1967": "1967",
            "_1973": "1973",
            "_1974": "1974",
            "_1977": "1977",
            "_1978": "1978",
            "_1979": "1979",
            "_1985": "1985",
            "_1989": "1989",
            "_1992": "1992",
            "_1992_AMD1:2004": "1992/AMD1:2004",
            "_1992_COR1:1992": "1992/COR1:1992",
            "_1993": "1993",
            "_1995": "1995",
            "_1997": "1997",
            "_1998": "1998",
            "_2004": "2004",
            "_2004_AMD1:2007": "2004/AMD1:2007",
            "_2004_AMD1:2007CSV": "2004/AMD1:2007CSV",
            "_2005": "2005",
            "_2007": "2007",
            "_2008": "2008",
            "_2010": "2010",
            "_2011": "2011",
            "_2012": "2012",
            "_2013": "2013",
            "_2013_COR:2013": "2013/COR:2013",
            "none": "none",
            "unknown": "unknown"
        };
        Object.freeze (IECStandardEditionKind);

        /**
         * Kinds of scaling.
         *
         */
        let ScaleKind =
        {
            "linear": "linear",
            "exponential": "exponential"
        };
        Object.freeze (ScaleKind);

        /**
         * Possible kinds of analytics.
         *
         */
        let AnalyticKind =
        {
            "riskAnalytic": "riskAnalytic",
            "faultAnalytic": "faultAnalytic",
            "agingAnalytic": "agingAnalytic",
            "healthAnalytic": "healthAnalytic",
            "replacementAnalytic": "replacementAnalytic",
            "other": "other"
        };
        Object.freeze (AnalyticKind);

        /**
         * List of UK Ministry of Defence standards.
         *
         */
        let UKMinistryofDefenceStandardKind =
        {
            "_05_50_(Part_65)": "05-50 (Part 65)"
        };
        Object.freeze (UKMinistryofDefenceStandardKind);

        /**
         * Reason for transformer failure.
         *
         * Note: This enumeration provides essential information to asset health analytics. The existing list is a starting point and is anticipated to be fleshed out further as requirements are better understood. (PAB 2016/01/09).
         *
         */
        let TransformerFailureReasonKind =
        {
            "bushingFailure": "bushingFailure",
            "lossOfOil": "lossOfOil",
            "oilRelatedFailure": "oilRelatedFailure",
            "poorOilQuality": "poorOilQuality"
        };
        Object.freeze (TransformerFailureReasonKind);

        /**
         * Function performed by an asset.
         *
         */
        class AssetFunction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetFunction;
                if (null == bucket)
                   cim_data.AssetFunction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetFunction[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetFunction";
                base.parse_element (/<cim:AssetFunction.programID>([\s\S]*?)<\/cim:AssetFunction.programID>/g, obj, "programID", base.to_string, sub, context);
                base.parse_element (/<cim:AssetFunction.firmwareID>([\s\S]*?)<\/cim:AssetFunction.firmwareID>/g, obj, "firmwareID", base.to_string, sub, context);
                base.parse_element (/<cim:AssetFunction.hardwareID>([\s\S]*?)<\/cim:AssetFunction.hardwareID>/g, obj, "hardwareID", base.to_string, sub, context);
                base.parse_element (/<cim:AssetFunction.password>([\s\S]*?)<\/cim:AssetFunction.password>/g, obj, "password", base.to_string, sub, context);
                base.parse_element (/<cim:AssetFunction.configID>([\s\S]*?)<\/cim:AssetFunction.configID>/g, obj, "configID", base.to_string, sub, context);
                base.parse_attribute (/<cim:AssetFunction.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                let bucket = context.parsed.AssetFunction;
                if (null == bucket)
                   context.parsed.AssetFunction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AssetFunction", "programID", "programID",  base.from_string, fields);
                base.export_element (obj, "AssetFunction", "firmwareID", "firmwareID",  base.from_string, fields);
                base.export_element (obj, "AssetFunction", "hardwareID", "hardwareID",  base.from_string, fields);
                base.export_element (obj, "AssetFunction", "password", "password",  base.from_string, fields);
                base.export_element (obj, "AssetFunction", "configID", "configID",  base.from_string, fields);
                base.export_attribute (obj, "AssetFunction", "Asset", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetFunction_collapse" aria-expanded="true" aria-controls="AssetFunction_collapse" style="margin-left: 10px;">AssetFunction</a></legend>
                    <div id="AssetFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#programID}}<div><b>programID</b>: {{programID}}</div>{{/programID}}
                    {{#firmwareID}}<div><b>firmwareID</b>: {{firmwareID}}</div>{{/firmwareID}}
                    {{#hardwareID}}<div><b>hardwareID</b>: {{hardwareID}}</div>{{/hardwareID}}
                    {{#password}}<div><b>password</b>: {{password}}</div>{{/password}}
                    {{#configID}}<div><b>configID</b>: {{configID}}</div>{{/configID}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Asset}}");}); return false;'>{{Asset}}</a></div>{{/Asset}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetFunction_collapse" aria-expanded="true" aria-controls="{{id}}_AssetFunction_collapse" style="margin-left: 10px;">AssetFunction</a></legend>
                    <div id="{{id}}_AssetFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_programID'>programID: </label><div class='col-sm-8'><input id='{{id}}_programID' class='form-control' type='text'{{#programID}} value='{{programID}}'{{/programID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_firmwareID'>firmwareID: </label><div class='col-sm-8'><input id='{{id}}_firmwareID' class='form-control' type='text'{{#firmwareID}} value='{{firmwareID}}'{{/firmwareID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hardwareID'>hardwareID: </label><div class='col-sm-8'><input id='{{id}}_hardwareID' class='form-control' type='text'{{#hardwareID}} value='{{hardwareID}}'{{/hardwareID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_password'>password: </label><div class='col-sm-8'><input id='{{id}}_password' class='form-control' type='text'{{#password}} value='{{password}}'{{/password}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_configID'>configID: </label><div class='col-sm-8'><input id='{{id}}_configID' class='form-control' type='text'{{#configID}} value='{{configID}}'{{/configID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetFunction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_programID").value; if ("" !== temp) obj["programID"] = temp;
                temp = document.getElementById (id + "_firmwareID").value; if ("" !== temp) obj["firmwareID"] = temp;
                temp = document.getElementById (id + "_hardwareID").value; if ("" !== temp) obj["hardwareID"] = temp;
                temp = document.getElementById (id + "_password").value; if ("" !== temp) obj["password"] = temp;
                temp = document.getElementById (id + "_configID").value; if ("" !== temp) obj["configID"] = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Asset", "0..1", "0..*", "Asset", "AssetFunction"]
                        ]
                    )
                );
            }
        }

        /**
         * The precise standard used in executing a lab test, including the standard, and standard version, test method and variant, if needed.
         *
         */
        class TestStandard extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TestStandard;
                if (null == bucket)
                   cim_data.TestStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TestStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TestStandard";
                base.parse_attribute (/<cim:TestStandard.testStandardASTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardASTM", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardCIGRE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardCIGRE", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardDIN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardDIN", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardDoble\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardDoble", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardEPA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardEPA", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardIEC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardIEC", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardIEEE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardIEEE", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardISO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardISO", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardLaborelec\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardLaborelec", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardTAPPI\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardTAPPI", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardUKMinistryOfDefence\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardUKMinistryOfDefence", sub, context);
                base.parse_attribute (/<cim:TestStandard.testStandardWEP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testStandardWEP", sub, context);
                base.parse_attribute (/<cim:TestStandard.testMethod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testMethod", sub, context);
                base.parse_attribute (/<cim:TestStandard.testVariant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testVariant", sub, context);
                base.parse_attributes (/<cim:TestStandard.AssetString\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetString", sub, context);
                base.parse_attributes (/<cim:TestStandard.AssetAnalog\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetAnalog", sub, context);
                base.parse_attributes (/<cim:TestStandard.AssetDiscrete\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetDiscrete", sub, context);
                let bucket = context.parsed.TestStandard;
                if (null == bucket)
                   context.parsed.TestStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TestStandard", "testStandardASTM", "testStandardASTM", fields);
                base.export_attribute (obj, "TestStandard", "testStandardCIGRE", "testStandardCIGRE", fields);
                base.export_attribute (obj, "TestStandard", "testStandardDIN", "testStandardDIN", fields);
                base.export_attribute (obj, "TestStandard", "testStandardDoble", "testStandardDoble", fields);
                base.export_attribute (obj, "TestStandard", "testStandardEPA", "testStandardEPA", fields);
                base.export_attribute (obj, "TestStandard", "testStandardIEC", "testStandardIEC", fields);
                base.export_attribute (obj, "TestStandard", "testStandardIEEE", "testStandardIEEE", fields);
                base.export_attribute (obj, "TestStandard", "testStandardISO", "testStandardISO", fields);
                base.export_attribute (obj, "TestStandard", "testStandardLaborelec", "testStandardLaborelec", fields);
                base.export_attribute (obj, "TestStandard", "testStandardTAPPI", "testStandardTAPPI", fields);
                base.export_attribute (obj, "TestStandard", "testStandardUKMinistryOfDefence", "testStandardUKMinistryOfDefence", fields);
                base.export_attribute (obj, "TestStandard", "testStandardWEP", "testStandardWEP", fields);
                base.export_attribute (obj, "TestStandard", "testMethod", "testMethod", fields);
                base.export_attribute (obj, "TestStandard", "testVariant", "testVariant", fields);
                base.export_attributes (obj, "TestStandard", "AssetString", "AssetString", fields);
                base.export_attributes (obj, "TestStandard", "AssetAnalog", "AssetAnalog", fields);
                base.export_attributes (obj, "TestStandard", "AssetDiscrete", "AssetDiscrete", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TestStandard_collapse" aria-expanded="true" aria-controls="TestStandard_collapse" style="margin-left: 10px;">TestStandard</a></legend>
                    <div id="TestStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#testStandardASTM}}<div><b>testStandardASTM</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardASTM}}");}); return false;'>{{testStandardASTM}}</a></div>{{/testStandardASTM}}
                    {{#testStandardCIGRE}}<div><b>testStandardCIGRE</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardCIGRE}}");}); return false;'>{{testStandardCIGRE}}</a></div>{{/testStandardCIGRE}}
                    {{#testStandardDIN}}<div><b>testStandardDIN</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardDIN}}");}); return false;'>{{testStandardDIN}}</a></div>{{/testStandardDIN}}
                    {{#testStandardDoble}}<div><b>testStandardDoble</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardDoble}}");}); return false;'>{{testStandardDoble}}</a></div>{{/testStandardDoble}}
                    {{#testStandardEPA}}<div><b>testStandardEPA</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardEPA}}");}); return false;'>{{testStandardEPA}}</a></div>{{/testStandardEPA}}
                    {{#testStandardIEC}}<div><b>testStandardIEC</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardIEC}}");}); return false;'>{{testStandardIEC}}</a></div>{{/testStandardIEC}}
                    {{#testStandardIEEE}}<div><b>testStandardIEEE</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardIEEE}}");}); return false;'>{{testStandardIEEE}}</a></div>{{/testStandardIEEE}}
                    {{#testStandardISO}}<div><b>testStandardISO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardISO}}");}); return false;'>{{testStandardISO}}</a></div>{{/testStandardISO}}
                    {{#testStandardLaborelec}}<div><b>testStandardLaborelec</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardLaborelec}}");}); return false;'>{{testStandardLaborelec}}</a></div>{{/testStandardLaborelec}}
                    {{#testStandardTAPPI}}<div><b>testStandardTAPPI</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardTAPPI}}");}); return false;'>{{testStandardTAPPI}}</a></div>{{/testStandardTAPPI}}
                    {{#testStandardUKMinistryOfDefence}}<div><b>testStandardUKMinistryOfDefence</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardUKMinistryOfDefence}}");}); return false;'>{{testStandardUKMinistryOfDefence}}</a></div>{{/testStandardUKMinistryOfDefence}}
                    {{#testStandardWEP}}<div><b>testStandardWEP</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{testStandardWEP}}");}); return false;'>{{testStandardWEP}}</a></div>{{/testStandardWEP}}
                    {{#testMethod}}<div><b>testMethod</b>: {{testMethod}}</div>{{/testMethod}}
                    {{#testVariant}}<div><b>testVariant</b>: {{testVariant}}</div>{{/testVariant}}
                    {{#AssetString}}<div><b>AssetString</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetString}}
                    {{#AssetAnalog}}<div><b>AssetAnalog</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetAnalog}}
                    {{#AssetDiscrete}}<div><b>AssetDiscrete</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetDiscrete}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["testMethodTestMethod"] = [{ id: '', selected: (!obj["testMethod"])}]; for (let property in TestMethod) obj["testMethodTestMethod"].push ({ id: property, selected: obj["testMethod"] && obj["testMethod"].endsWith ('.' + property)});
                obj["testVariantTestVariantKind"] = [{ id: '', selected: (!obj["testVariant"])}]; for (let property in TestVariantKind) obj["testVariantTestVariantKind"].push ({ id: property, selected: obj["testVariant"] && obj["testVariant"].endsWith ('.' + property)});
                if (obj["AssetString"]) obj["AssetString_string"] = obj["AssetString"].join ();
                if (obj["AssetAnalog"]) obj["AssetAnalog_string"] = obj["AssetAnalog"].join ();
                if (obj["AssetDiscrete"]) obj["AssetDiscrete_string"] = obj["AssetDiscrete"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["testMethodTestMethod"];
                delete obj["testVariantTestVariantKind"];
                delete obj["AssetString_string"];
                delete obj["AssetAnalog_string"];
                delete obj["AssetDiscrete_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TestStandard_collapse" aria-expanded="true" aria-controls="{{id}}_TestStandard_collapse" style="margin-left: 10px;">TestStandard</a></legend>
                    <div id="{{id}}_TestStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardASTM'>testStandardASTM: </label><div class='col-sm-8'><input id='{{id}}_testStandardASTM' class='form-control' type='text'{{#testStandardASTM}} value='{{testStandardASTM}}'{{/testStandardASTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardCIGRE'>testStandardCIGRE: </label><div class='col-sm-8'><input id='{{id}}_testStandardCIGRE' class='form-control' type='text'{{#testStandardCIGRE}} value='{{testStandardCIGRE}}'{{/testStandardCIGRE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardDIN'>testStandardDIN: </label><div class='col-sm-8'><input id='{{id}}_testStandardDIN' class='form-control' type='text'{{#testStandardDIN}} value='{{testStandardDIN}}'{{/testStandardDIN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardDoble'>testStandardDoble: </label><div class='col-sm-8'><input id='{{id}}_testStandardDoble' class='form-control' type='text'{{#testStandardDoble}} value='{{testStandardDoble}}'{{/testStandardDoble}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardEPA'>testStandardEPA: </label><div class='col-sm-8'><input id='{{id}}_testStandardEPA' class='form-control' type='text'{{#testStandardEPA}} value='{{testStandardEPA}}'{{/testStandardEPA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardIEC'>testStandardIEC: </label><div class='col-sm-8'><input id='{{id}}_testStandardIEC' class='form-control' type='text'{{#testStandardIEC}} value='{{testStandardIEC}}'{{/testStandardIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardIEEE'>testStandardIEEE: </label><div class='col-sm-8'><input id='{{id}}_testStandardIEEE' class='form-control' type='text'{{#testStandardIEEE}} value='{{testStandardIEEE}}'{{/testStandardIEEE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardISO'>testStandardISO: </label><div class='col-sm-8'><input id='{{id}}_testStandardISO' class='form-control' type='text'{{#testStandardISO}} value='{{testStandardISO}}'{{/testStandardISO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardLaborelec'>testStandardLaborelec: </label><div class='col-sm-8'><input id='{{id}}_testStandardLaborelec' class='form-control' type='text'{{#testStandardLaborelec}} value='{{testStandardLaborelec}}'{{/testStandardLaborelec}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardTAPPI'>testStandardTAPPI: </label><div class='col-sm-8'><input id='{{id}}_testStandardTAPPI' class='form-control' type='text'{{#testStandardTAPPI}} value='{{testStandardTAPPI}}'{{/testStandardTAPPI}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardUKMinistryOfDefence'>testStandardUKMinistryOfDefence: </label><div class='col-sm-8'><input id='{{id}}_testStandardUKMinistryOfDefence' class='form-control' type='text'{{#testStandardUKMinistryOfDefence}} value='{{testStandardUKMinistryOfDefence}}'{{/testStandardUKMinistryOfDefence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testStandardWEP'>testStandardWEP: </label><div class='col-sm-8'><input id='{{id}}_testStandardWEP' class='form-control' type='text'{{#testStandardWEP}} value='{{testStandardWEP}}'{{/testStandardWEP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testMethod'>testMethod: </label><div class='col-sm-8'><select id='{{id}}_testMethod' class='form-control custom-select'>{{#testMethodTestMethod}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/testMethodTestMethod}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testVariant'>testVariant: </label><div class='col-sm-8'><select id='{{id}}_testVariant' class='form-control custom-select'>{{#testVariantTestVariantKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/testVariantTestVariantKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TestStandard" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_testStandardASTM").value; if ("" !== temp) obj["testStandardASTM"] = temp;
                temp = document.getElementById (id + "_testStandardCIGRE").value; if ("" !== temp) obj["testStandardCIGRE"] = temp;
                temp = document.getElementById (id + "_testStandardDIN").value; if ("" !== temp) obj["testStandardDIN"] = temp;
                temp = document.getElementById (id + "_testStandardDoble").value; if ("" !== temp) obj["testStandardDoble"] = temp;
                temp = document.getElementById (id + "_testStandardEPA").value; if ("" !== temp) obj["testStandardEPA"] = temp;
                temp = document.getElementById (id + "_testStandardIEC").value; if ("" !== temp) obj["testStandardIEC"] = temp;
                temp = document.getElementById (id + "_testStandardIEEE").value; if ("" !== temp) obj["testStandardIEEE"] = temp;
                temp = document.getElementById (id + "_testStandardISO").value; if ("" !== temp) obj["testStandardISO"] = temp;
                temp = document.getElementById (id + "_testStandardLaborelec").value; if ("" !== temp) obj["testStandardLaborelec"] = temp;
                temp = document.getElementById (id + "_testStandardTAPPI").value; if ("" !== temp) obj["testStandardTAPPI"] = temp;
                temp = document.getElementById (id + "_testStandardUKMinistryOfDefence").value; if ("" !== temp) obj["testStandardUKMinistryOfDefence"] = temp;
                temp = document.getElementById (id + "_testStandardWEP").value; if ("" !== temp) obj["testStandardWEP"] = temp;
                temp = TestMethod[document.getElementById (id + "_testMethod").value]; if (temp) obj["testMethod"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TestMethod." + temp; else delete obj["testMethod"];
                temp = TestVariantKind[document.getElementById (id + "_testVariant").value]; if (temp) obj["testVariant"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TestVariantKind." + temp; else delete obj["testVariant"];

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetString", "0..*", "0..1", "AssetStringMeasurement", "TestStandard"],
                            ["AssetAnalog", "0..*", "0..1", "AssetAnalog", "TestStandard"],
                            ["AssetDiscrete", "0..*", "0..1", "AssetDiscrete", "TestStandard"]
                        ]
                    )
                );
            }
        }

        /**
         * Potential hazard related to the location of an asset.
         *
         * Examples are trees growing under overhead power lines, a park being located by a substation (i.e., children climb fence to recover a ball), a lake near an overhead distribution line (fishing pole/line contacting power lines), dangerous neighbour, etc.
         *
         */
        class AssetLocationHazard extends Common.Hazard
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetLocationHazard;
                if (null == bucket)
                   cim_data.AssetLocationHazard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetLocationHazard[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Hazard.prototype.parse.call (this, context, sub);
                obj.cls = "AssetLocationHazard";
                base.parse_attribute (/<cim:AssetLocationHazard.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:AssetLocationHazard.Locations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Locations", sub, context);
                let bucket = context.parsed.AssetLocationHazard;
                if (null == bucket)
                   context.parsed.AssetLocationHazard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Hazard.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AssetLocationHazard", "kind", "kind", fields);
                base.export_attributes (obj, "AssetLocationHazard", "Locations", "Locations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetLocationHazard_collapse" aria-expanded="true" aria-controls="AssetLocationHazard_collapse" style="margin-left: 10px;">AssetLocationHazard</a></legend>
                    <div id="AssetLocationHazard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Locations}}<div><b>Locations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Locations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindAssetHazardKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in AssetHazardKind) obj["kindAssetHazardKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["Locations"]) obj["Locations_string"] = obj["Locations"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindAssetHazardKind"];
                delete obj["Locations_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetLocationHazard_collapse" aria-expanded="true" aria-controls="{{id}}_AssetLocationHazard_collapse" style="margin-left: 10px;">AssetLocationHazard</a></legend>
                    <div id="{{id}}_AssetLocationHazard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindAssetHazardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindAssetHazardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Locations'>Locations: </label><div class='col-sm-8'><input id='{{id}}_Locations' class='form-control' type='text'{{#Locations}} value='{{Locations_string}}'{{/Locations}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetLocationHazard" };
                super.submit (id, obj);
                temp = AssetHazardKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AssetHazardKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_Locations").value; if ("" !== temp) obj["Locations"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Locations", "0..*", "0..*", "Location", "Hazards"]
                        ]
                    )
                );
            }
        }

        /**
         * A substance that either (1) provides the means of transmission of a force or effect, such as hydraulic fluid, or (2) is used for a surrounding or enveloping substance, such as oil in a transformer or circuit breaker.
         *
         */
        class Medium extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Medium;
                if (null == bucket)
                   cim_data.Medium = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Medium[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Medium";
                base.parse_attribute (/<cim:Medium.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Medium.volumeSpec>([\s\S]*?)<\/cim:Medium.volumeSpec>/g, obj, "volumeSpec", base.to_string, sub, context);
                base.parse_attribute (/<cim:Medium.Specification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context);
                base.parse_attributes (/<cim:Medium.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                let bucket = context.parsed.Medium;
                if (null == bucket)
                   context.parsed.Medium = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Medium", "kind", "kind", fields);
                base.export_element (obj, "Medium", "volumeSpec", "volumeSpec",  base.from_string, fields);
                base.export_attribute (obj, "Medium", "Specification", "Specification", fields);
                base.export_attributes (obj, "Medium", "Asset", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Medium_collapse" aria-expanded="true" aria-controls="Medium_collapse" style="margin-left: 10px;">Medium</a></legend>
                    <div id="Medium_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#volumeSpec}}<div><b>volumeSpec</b>: {{volumeSpec}}</div>{{/volumeSpec}}
                    {{#Specification}}<div><b>Specification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Specification}}");}); return false;'>{{Specification}}</a></div>{{/Specification}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Asset}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindMediumKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in MediumKind) obj["kindMediumKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["Asset"]) obj["Asset_string"] = obj["Asset"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindMediumKind"];
                delete obj["Asset_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Medium_collapse" aria-expanded="true" aria-controls="{{id}}_Medium_collapse" style="margin-left: 10px;">Medium</a></legend>
                    <div id="{{id}}_Medium_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindMediumKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindMediumKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_volumeSpec'>volumeSpec: </label><div class='col-sm-8'><input id='{{id}}_volumeSpec' class='form-control' type='text'{{#volumeSpec}} value='{{volumeSpec}}'{{/volumeSpec}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Specification'>Specification: </label><div class='col-sm-8'><input id='{{id}}_Specification' class='form-control' type='text'{{#Specification}} value='{{Specification}}'{{/Specification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset_string}}'{{/Asset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Medium" };
                super.submit (id, obj);
                temp = MediumKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#MediumKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_volumeSpec").value; if ("" !== temp) obj["volumeSpec"] = temp;
                temp = document.getElementById (id + "_Specification").value; if ("" !== temp) obj["Specification"] = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Specification", "0..1", "0..*", "Specification", "Mediums"],
                            ["Asset", "0..*", "0..*", "Asset", "Medium"]
                        ]
                    )
                );
            }
        }

        /**
         * Dates associated with asset 'in use' status.
         *
         * May have multiple in use dates for this device and a compound type allows a query to return multiple dates.
         *
         */
        class InUseDate extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.InUseDate;
                if (null == bucket)
                   cim_data.InUseDate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InUseDate[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InUseDate";
                base.parse_element (/<cim:InUseDate.inUseDate>([\s\S]*?)<\/cim:InUseDate.inUseDate>/g, obj, "inUseDate", base.to_string, sub, context);
                base.parse_element (/<cim:InUseDate.readyForUseDate>([\s\S]*?)<\/cim:InUseDate.readyForUseDate>/g, obj, "readyForUseDate", base.to_string, sub, context);
                base.parse_element (/<cim:InUseDate.notReadyForUseDate>([\s\S]*?)<\/cim:InUseDate.notReadyForUseDate>/g, obj, "notReadyForUseDate", base.to_string, sub, context);
                let bucket = context.parsed.InUseDate;
                if (null == bucket)
                   context.parsed.InUseDate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "InUseDate", "inUseDate", "inUseDate",  base.from_string, fields);
                base.export_element (obj, "InUseDate", "readyForUseDate", "readyForUseDate",  base.from_string, fields);
                base.export_element (obj, "InUseDate", "notReadyForUseDate", "notReadyForUseDate",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InUseDate_collapse" aria-expanded="true" aria-controls="InUseDate_collapse" style="margin-left: 10px;">InUseDate</a></legend>
                    <div id="InUseDate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#inUseDate}}<div><b>inUseDate</b>: {{inUseDate}}</div>{{/inUseDate}}
                    {{#readyForUseDate}}<div><b>readyForUseDate</b>: {{readyForUseDate}}</div>{{/readyForUseDate}}
                    {{#notReadyForUseDate}}<div><b>notReadyForUseDate</b>: {{notReadyForUseDate}}</div>{{/notReadyForUseDate}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InUseDate_collapse" aria-expanded="true" aria-controls="{{id}}_InUseDate_collapse" style="margin-left: 10px;">InUseDate</a></legend>
                    <div id="{{id}}_InUseDate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inUseDate'>inUseDate: </label><div class='col-sm-8'><input id='{{id}}_inUseDate' class='form-control' type='text'{{#inUseDate}} value='{{inUseDate}}'{{/inUseDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_readyForUseDate'>readyForUseDate: </label><div class='col-sm-8'><input id='{{id}}_readyForUseDate' class='form-control' type='text'{{#readyForUseDate}} value='{{readyForUseDate}}'{{/readyForUseDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_notReadyForUseDate'>notReadyForUseDate: </label><div class='col-sm-8'><input id='{{id}}_notReadyForUseDate' class='form-control' type='text'{{#notReadyForUseDate}} value='{{notReadyForUseDate}}'{{/notReadyForUseDate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InUseDate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_inUseDate").value; if ("" !== temp) obj["inUseDate"] = temp;
                temp = document.getElementById (id + "_readyForUseDate").value; if ("" !== temp) obj["readyForUseDate"] = temp;
                temp = document.getElementById (id + "_notReadyForUseDate").value; if ("" !== temp) obj["notReadyForUseDate"] = temp;

                return (obj);
            }
        }

        /**
         * An algorithm or calculation for making an assessment about an asset or asset grouping for lifecycle decision making.
         *
         */
        class Analytic extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Analytic;
                if (null == bucket)
                   cim_data.Analytic = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Analytic[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Analytic";
                base.parse_attribute (/<cim:Analytic.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Analytic.bestValue>([\s\S]*?)<\/cim:Analytic.bestValue>/g, obj, "bestValue", base.to_float, sub, context);
                base.parse_element (/<cim:Analytic.worstValue>([\s\S]*?)<\/cim:Analytic.worstValue>/g, obj, "worstValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:Analytic.scaleKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "scaleKind", sub, context);
                base.parse_attributes (/<cim:Analytic.AssetGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetGroup", sub, context);
                base.parse_attributes (/<cim:Analytic.AssetHealthEvent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetHealthEvent", sub, context);
                base.parse_attributes (/<cim:Analytic.AnalyticScore\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AnalyticScore", sub, context);
                base.parse_attributes (/<cim:Analytic.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                let bucket = context.parsed.Analytic;
                if (null == bucket)
                   context.parsed.Analytic = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Analytic", "kind", "kind", fields);
                base.export_element (obj, "Analytic", "bestValue", "bestValue",  base.from_float, fields);
                base.export_element (obj, "Analytic", "worstValue", "worstValue",  base.from_float, fields);
                base.export_attribute (obj, "Analytic", "scaleKind", "scaleKind", fields);
                base.export_attributes (obj, "Analytic", "AssetGroup", "AssetGroup", fields);
                base.export_attributes (obj, "Analytic", "AssetHealthEvent", "AssetHealthEvent", fields);
                base.export_attributes (obj, "Analytic", "AnalyticScore", "AnalyticScore", fields);
                base.export_attributes (obj, "Analytic", "Asset", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Analytic_collapse" aria-expanded="true" aria-controls="Analytic_collapse" style="margin-left: 10px;">Analytic</a></legend>
                    <div id="Analytic_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#bestValue}}<div><b>bestValue</b>: {{bestValue}}</div>{{/bestValue}}
                    {{#worstValue}}<div><b>worstValue</b>: {{worstValue}}</div>{{/worstValue}}
                    {{#scaleKind}}<div><b>scaleKind</b>: {{scaleKind}}</div>{{/scaleKind}}
                    {{#AssetGroup}}<div><b>AssetGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetGroup}}
                    {{#AssetHealthEvent}}<div><b>AssetHealthEvent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetHealthEvent}}
                    {{#AnalyticScore}}<div><b>AnalyticScore</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AnalyticScore}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Asset}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindAnalyticKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in AnalyticKind) obj["kindAnalyticKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                obj["scaleKindScaleKind"] = [{ id: '', selected: (!obj["scaleKind"])}]; for (let property in ScaleKind) obj["scaleKindScaleKind"].push ({ id: property, selected: obj["scaleKind"] && obj["scaleKind"].endsWith ('.' + property)});
                if (obj["AssetGroup"]) obj["AssetGroup_string"] = obj["AssetGroup"].join ();
                if (obj["AssetHealthEvent"]) obj["AssetHealthEvent_string"] = obj["AssetHealthEvent"].join ();
                if (obj["AnalyticScore"]) obj["AnalyticScore_string"] = obj["AnalyticScore"].join ();
                if (obj["Asset"]) obj["Asset_string"] = obj["Asset"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindAnalyticKind"];
                delete obj["scaleKindScaleKind"];
                delete obj["AssetGroup_string"];
                delete obj["AssetHealthEvent_string"];
                delete obj["AnalyticScore_string"];
                delete obj["Asset_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Analytic_collapse" aria-expanded="true" aria-controls="{{id}}_Analytic_collapse" style="margin-left: 10px;">Analytic</a></legend>
                    <div id="{{id}}_Analytic_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindAnalyticKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindAnalyticKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bestValue'>bestValue: </label><div class='col-sm-8'><input id='{{id}}_bestValue' class='form-control' type='text'{{#bestValue}} value='{{bestValue}}'{{/bestValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_worstValue'>worstValue: </label><div class='col-sm-8'><input id='{{id}}_worstValue' class='form-control' type='text'{{#worstValue}} value='{{worstValue}}'{{/worstValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scaleKind'>scaleKind: </label><div class='col-sm-8'><select id='{{id}}_scaleKind' class='form-control custom-select'>{{#scaleKindScaleKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/scaleKindScaleKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetGroup'>AssetGroup: </label><div class='col-sm-8'><input id='{{id}}_AssetGroup' class='form-control' type='text'{{#AssetGroup}} value='{{AssetGroup_string}}'{{/AssetGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset_string}}'{{/Asset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Analytic" };
                super.submit (id, obj);
                temp = AnalyticKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AnalyticKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_bestValue").value; if ("" !== temp) obj["bestValue"] = temp;
                temp = document.getElementById (id + "_worstValue").value; if ("" !== temp) obj["worstValue"] = temp;
                temp = ScaleKind[document.getElementById (id + "_scaleKind").value]; if (temp) obj["scaleKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ScaleKind." + temp; else delete obj["scaleKind"];
                temp = document.getElementById (id + "_AssetGroup").value; if ("" !== temp) obj["AssetGroup"] = temp.split (",");
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetGroup", "0..*", "0..*", "AssetGroup", "Analytic"],
                            ["AssetHealthEvent", "0..*", "1", "AssetHealthEvent", "Analytic"],
                            ["AnalyticScore", "0..*", "0..1", "AnalyticScore", "Analytic"],
                            ["Asset", "0..*", "0..*", "Asset", "Analytic"]
                        ]
                    )
                );
            }
        }

        /**
         * Various current financial properties associated with a particular asset.
         *
         * Historical properties may be determined by ActivityRecords associated with the asset.
         *
         */
        class FinancialInfo extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FinancialInfo;
                if (null == bucket)
                   cim_data.FinancialInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FinancialInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FinancialInfo";
                base.parse_element (/<cim:FinancialInfo.financialValue>([\s\S]*?)<\/cim:FinancialInfo.financialValue>/g, obj, "financialValue", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.valueDateTime>([\s\S]*?)<\/cim:FinancialInfo.valueDateTime>/g, obj, "valueDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:FinancialInfo.plantTransferDateTime>([\s\S]*?)<\/cim:FinancialInfo.plantTransferDateTime>/g, obj, "plantTransferDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:FinancialInfo.warrantyEndDateTime>([\s\S]*?)<\/cim:FinancialInfo.warrantyEndDateTime>/g, obj, "warrantyEndDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:FinancialInfo.purchaseDateTime>([\s\S]*?)<\/cim:FinancialInfo.purchaseDateTime>/g, obj, "purchaseDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:FinancialInfo.purchaseOrderNumber>([\s\S]*?)<\/cim:FinancialInfo.purchaseOrderNumber>/g, obj, "purchaseOrderNumber", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.actualPurchaseCost>([\s\S]*?)<\/cim:FinancialInfo.actualPurchaseCost>/g, obj, "actualPurchaseCost", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.account>([\s\S]*?)<\/cim:FinancialInfo.account>/g, obj, "account", base.to_string, sub, context);
                base.parse_attribute (/<cim:FinancialInfo.quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "quantity", sub, context);
                base.parse_element (/<cim:FinancialInfo.costDescription>([\s\S]*?)<\/cim:FinancialInfo.costDescription>/g, obj, "costDescription", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.costType>([\s\S]*?)<\/cim:FinancialInfo.costType>/g, obj, "costType", base.to_string, sub, context);
                base.parse_attribute (/<cim:FinancialInfo.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                let bucket = context.parsed.FinancialInfo;
                if (null == bucket)
                   context.parsed.FinancialInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "FinancialInfo", "financialValue", "financialValue",  base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "valueDateTime", "valueDateTime",  base.from_datetime, fields);
                base.export_element (obj, "FinancialInfo", "plantTransferDateTime", "plantTransferDateTime",  base.from_datetime, fields);
                base.export_element (obj, "FinancialInfo", "warrantyEndDateTime", "warrantyEndDateTime",  base.from_datetime, fields);
                base.export_element (obj, "FinancialInfo", "purchaseDateTime", "purchaseDateTime",  base.from_datetime, fields);
                base.export_element (obj, "FinancialInfo", "purchaseOrderNumber", "purchaseOrderNumber",  base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "actualPurchaseCost", "actualPurchaseCost",  base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "account", "account",  base.from_string, fields);
                base.export_attribute (obj, "FinancialInfo", "quantity", "quantity", fields);
                base.export_element (obj, "FinancialInfo", "costDescription", "costDescription",  base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "costType", "costType",  base.from_string, fields);
                base.export_attribute (obj, "FinancialInfo", "Asset", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FinancialInfo_collapse" aria-expanded="true" aria-controls="FinancialInfo_collapse" style="margin-left: 10px;">FinancialInfo</a></legend>
                    <div id="FinancialInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#financialValue}}<div><b>financialValue</b>: {{financialValue}}</div>{{/financialValue}}
                    {{#valueDateTime}}<div><b>valueDateTime</b>: {{valueDateTime}}</div>{{/valueDateTime}}
                    {{#plantTransferDateTime}}<div><b>plantTransferDateTime</b>: {{plantTransferDateTime}}</div>{{/plantTransferDateTime}}
                    {{#warrantyEndDateTime}}<div><b>warrantyEndDateTime</b>: {{warrantyEndDateTime}}</div>{{/warrantyEndDateTime}}
                    {{#purchaseDateTime}}<div><b>purchaseDateTime</b>: {{purchaseDateTime}}</div>{{/purchaseDateTime}}
                    {{#purchaseOrderNumber}}<div><b>purchaseOrderNumber</b>: {{purchaseOrderNumber}}</div>{{/purchaseOrderNumber}}
                    {{#actualPurchaseCost}}<div><b>actualPurchaseCost</b>: {{actualPurchaseCost}}</div>{{/actualPurchaseCost}}
                    {{#account}}<div><b>account</b>: {{account}}</div>{{/account}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#costDescription}}<div><b>costDescription</b>: {{costDescription}}</div>{{/costDescription}}
                    {{#costType}}<div><b>costType</b>: {{costType}}</div>{{/costType}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Asset}}");}); return false;'>{{Asset}}</a></div>{{/Asset}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FinancialInfo_collapse" aria-expanded="true" aria-controls="{{id}}_FinancialInfo_collapse" style="margin-left: 10px;">FinancialInfo</a></legend>
                    <div id="{{id}}_FinancialInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_financialValue'>financialValue: </label><div class='col-sm-8'><input id='{{id}}_financialValue' class='form-control' type='text'{{#financialValue}} value='{{financialValue}}'{{/financialValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_valueDateTime'>valueDateTime: </label><div class='col-sm-8'><input id='{{id}}_valueDateTime' class='form-control' type='text'{{#valueDateTime}} value='{{valueDateTime}}'{{/valueDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plantTransferDateTime'>plantTransferDateTime: </label><div class='col-sm-8'><input id='{{id}}_plantTransferDateTime' class='form-control' type='text'{{#plantTransferDateTime}} value='{{plantTransferDateTime}}'{{/plantTransferDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_warrantyEndDateTime'>warrantyEndDateTime: </label><div class='col-sm-8'><input id='{{id}}_warrantyEndDateTime' class='form-control' type='text'{{#warrantyEndDateTime}} value='{{warrantyEndDateTime}}'{{/warrantyEndDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purchaseDateTime'>purchaseDateTime: </label><div class='col-sm-8'><input id='{{id}}_purchaseDateTime' class='form-control' type='text'{{#purchaseDateTime}} value='{{purchaseDateTime}}'{{/purchaseDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purchaseOrderNumber'>purchaseOrderNumber: </label><div class='col-sm-8'><input id='{{id}}_purchaseOrderNumber' class='form-control' type='text'{{#purchaseOrderNumber}} value='{{purchaseOrderNumber}}'{{/purchaseOrderNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualPurchaseCost'>actualPurchaseCost: </label><div class='col-sm-8'><input id='{{id}}_actualPurchaseCost' class='form-control' type='text'{{#actualPurchaseCost}} value='{{actualPurchaseCost}}'{{/actualPurchaseCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_account'>account: </label><div class='col-sm-8'><input id='{{id}}_account' class='form-control' type='text'{{#account}} value='{{account}}'{{/account}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_costDescription'>costDescription: </label><div class='col-sm-8'><input id='{{id}}_costDescription' class='form-control' type='text'{{#costDescription}} value='{{costDescription}}'{{/costDescription}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_costType'>costType: </label><div class='col-sm-8'><input id='{{id}}_costType' class='form-control' type='text'{{#costType}} value='{{costType}}'{{/costType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FinancialInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_financialValue").value; if ("" !== temp) obj["financialValue"] = temp;
                temp = document.getElementById (id + "_valueDateTime").value; if ("" !== temp) obj["valueDateTime"] = temp;
                temp = document.getElementById (id + "_plantTransferDateTime").value; if ("" !== temp) obj["plantTransferDateTime"] = temp;
                temp = document.getElementById (id + "_warrantyEndDateTime").value; if ("" !== temp) obj["warrantyEndDateTime"] = temp;
                temp = document.getElementById (id + "_purchaseDateTime").value; if ("" !== temp) obj["purchaseDateTime"] = temp;
                temp = document.getElementById (id + "_purchaseOrderNumber").value; if ("" !== temp) obj["purchaseOrderNumber"] = temp;
                temp = document.getElementById (id + "_actualPurchaseCost").value; if ("" !== temp) obj["actualPurchaseCost"] = temp;
                temp = document.getElementById (id + "_account").value; if ("" !== temp) obj["account"] = temp;
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_costDescription").value; if ("" !== temp) obj["costDescription"] = temp;
                temp = document.getElementById (id + "_costType").value; if ("" !== temp) obj["costType"] = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Asset", "0..1", "0..1", "Asset", "FinancialInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by Doble.
         *
         */
        class DobleStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DobleStandard;
                if (null == bucket)
                   cim_data.DobleStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DobleStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DobleStandard";
                base.parse_attribute (/<cim:DobleStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:DobleStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.DobleStandard;
                if (null == bucket)
                   context.parsed.DobleStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "DobleStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "DobleStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DobleStandard_collapse" aria-expanded="true" aria-controls="DobleStandard_collapse" style="margin-left: 10px;">DobleStandard</a></legend>
                    <div id="DobleStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberDobleStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in DobleStandardKind) obj["standardNumberDobleStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionDobleStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in DobleStandardEditionKind) obj["standardEditionDobleStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberDobleStandardKind"];
                delete obj["standardEditionDobleStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DobleStandard_collapse" aria-expanded="true" aria-controls="{{id}}_DobleStandard_collapse" style="margin-left: 10px;">DobleStandard</a></legend>
                    <div id="{{id}}_DobleStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberDobleStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberDobleStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionDobleStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionDobleStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DobleStandard" };
                super.submit (id, obj);
                temp = DobleStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DobleStandardKind." + temp; else delete obj["standardNumber"];
                temp = DobleStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DobleStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * Standard published by ASTM (ASTM International).
         *
         */
        class ASTMStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ASTMStandard;
                if (null == bucket)
                   cim_data.ASTMStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ASTMStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ASTMStandard";
                base.parse_attribute (/<cim:ASTMStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:ASTMStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.ASTMStandard;
                if (null == bucket)
                   context.parsed.ASTMStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ASTMStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "ASTMStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ASTMStandard_collapse" aria-expanded="true" aria-controls="ASTMStandard_collapse" style="margin-left: 10px;">ASTMStandard</a></legend>
                    <div id="ASTMStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberASTMStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in ASTMStandardKind) obj["standardNumberASTMStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionASTMStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in ASTMStandardEditionKind) obj["standardEditionASTMStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberASTMStandardKind"];
                delete obj["standardEditionASTMStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ASTMStandard_collapse" aria-expanded="true" aria-controls="{{id}}_ASTMStandard_collapse" style="margin-left: 10px;">ASTMStandard</a></legend>
                    <div id="{{id}}_ASTMStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberASTMStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberASTMStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionASTMStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionASTMStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ASTMStandard" };
                super.submit (id, obj);
                temp = ASTMStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ASTMStandardKind." + temp; else delete obj["standardNumber"];
                temp = ASTMStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ASTMStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * Deployment of asset deployment in a power system resource role.
         *
         */
        class AssetDeployment extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetDeployment;
                if (null == bucket)
                   cim_data.AssetDeployment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetDeployment[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetDeployment";
                base.parse_attribute (/<cim:AssetDeployment.deploymentState\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "deploymentState", sub, context);
                base.parse_attribute (/<cim:AssetDeployment.deploymentDate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "deploymentDate", sub, context);
                base.parse_attribute (/<cim:AssetDeployment.breakerApplication\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "breakerApplication", sub, context);
                base.parse_attribute (/<cim:AssetDeployment.transformerApplication\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "transformerApplication", sub, context);
                base.parse_element (/<cim:AssetDeployment.likelihoodOfFailure>([\s\S]*?)<\/cim:AssetDeployment.likelihoodOfFailure>/g, obj, "likelihoodOfFailure", base.to_string, sub, context);
                base.parse_attribute (/<cim:AssetDeployment.facilityKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "facilityKind", sub, context);
                base.parse_attribute (/<cim:AssetDeployment.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attribute (/<cim:AssetDeployment.BaseVoltage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BaseVoltage", sub, context);
                let bucket = context.parsed.AssetDeployment;
                if (null == bucket)
                   context.parsed.AssetDeployment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AssetDeployment", "deploymentState", "deploymentState", fields);
                base.export_attribute (obj, "AssetDeployment", "deploymentDate", "deploymentDate", fields);
                base.export_attribute (obj, "AssetDeployment", "breakerApplication", "breakerApplication", fields);
                base.export_attribute (obj, "AssetDeployment", "transformerApplication", "transformerApplication", fields);
                base.export_element (obj, "AssetDeployment", "likelihoodOfFailure", "likelihoodOfFailure",  base.from_string, fields);
                base.export_attribute (obj, "AssetDeployment", "facilityKind", "facilityKind", fields);
                base.export_attribute (obj, "AssetDeployment", "Asset", "Asset", fields);
                base.export_attribute (obj, "AssetDeployment", "BaseVoltage", "BaseVoltage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetDeployment_collapse" aria-expanded="true" aria-controls="AssetDeployment_collapse" style="margin-left: 10px;">AssetDeployment</a></legend>
                    <div id="AssetDeployment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#deploymentState}}<div><b>deploymentState</b>: {{deploymentState}}</div>{{/deploymentState}}
                    {{#deploymentDate}}<div><b>deploymentDate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{deploymentDate}}");}); return false;'>{{deploymentDate}}</a></div>{{/deploymentDate}}
                    {{#breakerApplication}}<div><b>breakerApplication</b>: {{breakerApplication}}</div>{{/breakerApplication}}
                    {{#transformerApplication}}<div><b>transformerApplication</b>: {{transformerApplication}}</div>{{/transformerApplication}}
                    {{#likelihoodOfFailure}}<div><b>likelihoodOfFailure</b>: {{likelihoodOfFailure}}</div>{{/likelihoodOfFailure}}
                    {{#facilityKind}}<div><b>facilityKind</b>: {{facilityKind}}</div>{{/facilityKind}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Asset}}");}); return false;'>{{Asset}}</a></div>{{/Asset}}
                    {{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BaseVoltage}}");}); return false;'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["deploymentStateDeploymentStateKind"] = [{ id: '', selected: (!obj["deploymentState"])}]; for (let property in DeploymentStateKind) obj["deploymentStateDeploymentStateKind"].push ({ id: property, selected: obj["deploymentState"] && obj["deploymentState"].endsWith ('.' + property)});
                obj["breakerApplicationBreakerApplicationKind"] = [{ id: '', selected: (!obj["breakerApplication"])}]; for (let property in BreakerApplicationKind) obj["breakerApplicationBreakerApplicationKind"].push ({ id: property, selected: obj["breakerApplication"] && obj["breakerApplication"].endsWith ('.' + property)});
                obj["transformerApplicationTransformerApplicationKind"] = [{ id: '', selected: (!obj["transformerApplication"])}]; for (let property in TransformerApplicationKind) obj["transformerApplicationTransformerApplicationKind"].push ({ id: property, selected: obj["transformerApplication"] && obj["transformerApplication"].endsWith ('.' + property)});
                obj["facilityKindFacilityKind"] = [{ id: '', selected: (!obj["facilityKind"])}]; for (let property in FacilityKind) obj["facilityKindFacilityKind"].push ({ id: property, selected: obj["facilityKind"] && obj["facilityKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["deploymentStateDeploymentStateKind"];
                delete obj["breakerApplicationBreakerApplicationKind"];
                delete obj["transformerApplicationTransformerApplicationKind"];
                delete obj["facilityKindFacilityKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetDeployment_collapse" aria-expanded="true" aria-controls="{{id}}_AssetDeployment_collapse" style="margin-left: 10px;">AssetDeployment</a></legend>
                    <div id="{{id}}_AssetDeployment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_deploymentState'>deploymentState: </label><div class='col-sm-8'><select id='{{id}}_deploymentState' class='form-control custom-select'>{{#deploymentStateDeploymentStateKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/deploymentStateDeploymentStateKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_deploymentDate'>deploymentDate: </label><div class='col-sm-8'><input id='{{id}}_deploymentDate' class='form-control' type='text'{{#deploymentDate}} value='{{deploymentDate}}'{{/deploymentDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_breakerApplication'>breakerApplication: </label><div class='col-sm-8'><select id='{{id}}_breakerApplication' class='form-control custom-select'>{{#breakerApplicationBreakerApplicationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/breakerApplicationBreakerApplicationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transformerApplication'>transformerApplication: </label><div class='col-sm-8'><select id='{{id}}_transformerApplication' class='form-control custom-select'>{{#transformerApplicationTransformerApplicationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/transformerApplicationTransformerApplicationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_likelihoodOfFailure'>likelihoodOfFailure: </label><div class='col-sm-8'><input id='{{id}}_likelihoodOfFailure' class='form-control' type='text'{{#likelihoodOfFailure}} value='{{likelihoodOfFailure}}'{{/likelihoodOfFailure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_facilityKind'>facilityKind: </label><div class='col-sm-8'><select id='{{id}}_facilityKind' class='form-control custom-select'>{{#facilityKindFacilityKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/facilityKindFacilityKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BaseVoltage'>BaseVoltage: </label><div class='col-sm-8'><input id='{{id}}_BaseVoltage' class='form-control' type='text'{{#BaseVoltage}} value='{{BaseVoltage}}'{{/BaseVoltage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetDeployment" };
                super.submit (id, obj);
                temp = DeploymentStateKind[document.getElementById (id + "_deploymentState").value]; if (temp) obj["deploymentState"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DeploymentStateKind." + temp; else delete obj["deploymentState"];
                temp = document.getElementById (id + "_deploymentDate").value; if ("" !== temp) obj["deploymentDate"] = temp;
                temp = BreakerApplicationKind[document.getElementById (id + "_breakerApplication").value]; if (temp) obj["breakerApplication"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#BreakerApplicationKind." + temp; else delete obj["breakerApplication"];
                temp = TransformerApplicationKind[document.getElementById (id + "_transformerApplication").value]; if (temp) obj["transformerApplication"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TransformerApplicationKind." + temp; else delete obj["transformerApplication"];
                temp = document.getElementById (id + "_likelihoodOfFailure").value; if ("" !== temp) obj["likelihoodOfFailure"] = temp;
                temp = FacilityKind[document.getElementById (id + "_facilityKind").value]; if (temp) obj["facilityKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#FacilityKind." + temp; else delete obj["facilityKind"];
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp;
                temp = document.getElementById (id + "_BaseVoltage").value; if ("" !== temp) obj["BaseVoltage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Asset", "0..1", "0..1", "Asset", "AssetDeployment"],
                            ["BaseVoltage", "1", "0..*", "BaseVoltage", "NetworkAssetDeployment"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by ISO (International Organization for Standardization).
         *
         */
        class ISOStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ISOStandard;
                if (null == bucket)
                   cim_data.ISOStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ISOStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ISOStandard";
                base.parse_attribute (/<cim:ISOStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:ISOStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.ISOStandard;
                if (null == bucket)
                   context.parsed.ISOStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ISOStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "ISOStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ISOStandard_collapse" aria-expanded="true" aria-controls="ISOStandard_collapse" style="margin-left: 10px;">ISOStandard</a></legend>
                    <div id="ISOStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberISOStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in ISOStandardKind) obj["standardNumberISOStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionISOStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in ISOStandardEditionKind) obj["standardEditionISOStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberISOStandardKind"];
                delete obj["standardEditionISOStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ISOStandard_collapse" aria-expanded="true" aria-controls="{{id}}_ISOStandard_collapse" style="margin-left: 10px;">ISOStandard</a></legend>
                    <div id="{{id}}_ISOStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberISOStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberISOStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionISOStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionISOStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ISOStandard" };
                super.submit (id, obj);
                temp = ISOStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ISOStandardKind." + temp; else delete obj["standardNumber"];
                temp = ISOStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ISOStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * Asset model by a specific manufacturer.
         *
         */
        class ProductAssetModel extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ProductAssetModel;
                if (null == bucket)
                   cim_data.ProductAssetModel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProductAssetModel[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ProductAssetModel";
                base.parse_element (/<cim:ProductAssetModel.modelNumber>([\s\S]*?)<\/cim:ProductAssetModel.modelNumber>/g, obj, "modelNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ProductAssetModel.modelVersion>([\s\S]*?)<\/cim:ProductAssetModel.modelVersion>/g, obj, "modelVersion", base.to_string, sub, context);
                base.parse_element (/<cim:ProductAssetModel.styleNumber>([\s\S]*?)<\/cim:ProductAssetModel.styleNumber>/g, obj, "styleNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.corporateStandardKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "corporateStandardKind", sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.usageKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "usageKind", sub, context);
                base.parse_element (/<cim:ProductAssetModel.catalogueNumber>([\s\S]*?)<\/cim:ProductAssetModel.catalogueNumber>/g, obj, "catalogueNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ProductAssetModel.drawingNumber>([\s\S]*?)<\/cim:ProductAssetModel.drawingNumber>/g, obj, "drawingNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ProductAssetModel.instructionManual>([\s\S]*?)<\/cim:ProductAssetModel.instructionManual>/g, obj, "instructionManual", base.to_string, sub, context);
                base.parse_element (/<cim:ProductAssetModel.overallLength>([\s\S]*?)<\/cim:ProductAssetModel.overallLength>/g, obj, "overallLength", base.to_string, sub, context);
                base.parse_element (/<cim:ProductAssetModel.weightTotal>([\s\S]*?)<\/cim:ProductAssetModel.weightTotal>/g, obj, "weightTotal", base.to_string, sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.Manufacturer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Manufacturer", sub, context);
                base.parse_attributes (/<cim:ProductAssetModel.OperationalRestrictions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationalRestrictions", sub, context);
                base.parse_attributes (/<cim:ProductAssetModel.AssetModelCatalogueItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogueItems", sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.CatalogAssetType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CatalogAssetType", sub, context);
                base.parse_attributes (/<cim:ProductAssetModel.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.AssetInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetInfo", sub, context);
                let bucket = context.parsed.ProductAssetModel;
                if (null == bucket)
                   context.parsed.ProductAssetModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProductAssetModel", "modelNumber", "modelNumber",  base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "modelVersion", "modelVersion",  base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "styleNumber", "styleNumber",  base.from_string, fields);
                base.export_attribute (obj, "ProductAssetModel", "corporateStandardKind", "corporateStandardKind", fields);
                base.export_attribute (obj, "ProductAssetModel", "usageKind", "usageKind", fields);
                base.export_element (obj, "ProductAssetModel", "catalogueNumber", "catalogueNumber",  base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "drawingNumber", "drawingNumber",  base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "instructionManual", "instructionManual",  base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "overallLength", "overallLength",  base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "weightTotal", "weightTotal",  base.from_string, fields);
                base.export_attribute (obj, "ProductAssetModel", "Manufacturer", "Manufacturer", fields);
                base.export_attributes (obj, "ProductAssetModel", "OperationalRestrictions", "OperationalRestrictions", fields);
                base.export_attributes (obj, "ProductAssetModel", "AssetModelCatalogueItems", "AssetModelCatalogueItems", fields);
                base.export_attribute (obj, "ProductAssetModel", "CatalogAssetType", "CatalogAssetType", fields);
                base.export_attributes (obj, "ProductAssetModel", "Asset", "Asset", fields);
                base.export_attribute (obj, "ProductAssetModel", "AssetInfo", "AssetInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProductAssetModel_collapse" aria-expanded="true" aria-controls="ProductAssetModel_collapse" style="margin-left: 10px;">ProductAssetModel</a></legend>
                    <div id="ProductAssetModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#modelNumber}}<div><b>modelNumber</b>: {{modelNumber}}</div>{{/modelNumber}}
                    {{#modelVersion}}<div><b>modelVersion</b>: {{modelVersion}}</div>{{/modelVersion}}
                    {{#styleNumber}}<div><b>styleNumber</b>: {{styleNumber}}</div>{{/styleNumber}}
                    {{#corporateStandardKind}}<div><b>corporateStandardKind</b>: {{corporateStandardKind}}</div>{{/corporateStandardKind}}
                    {{#usageKind}}<div><b>usageKind</b>: {{usageKind}}</div>{{/usageKind}}
                    {{#catalogueNumber}}<div><b>catalogueNumber</b>: {{catalogueNumber}}</div>{{/catalogueNumber}}
                    {{#drawingNumber}}<div><b>drawingNumber</b>: {{drawingNumber}}</div>{{/drawingNumber}}
                    {{#instructionManual}}<div><b>instructionManual</b>: {{instructionManual}}</div>{{/instructionManual}}
                    {{#overallLength}}<div><b>overallLength</b>: {{overallLength}}</div>{{/overallLength}}
                    {{#weightTotal}}<div><b>weightTotal</b>: {{weightTotal}}</div>{{/weightTotal}}
                    {{#Manufacturer}}<div><b>Manufacturer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Manufacturer}}");}); return false;'>{{Manufacturer}}</a></div>{{/Manufacturer}}
                    {{#OperationalRestrictions}}<div><b>OperationalRestrictions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperationalRestrictions}}
                    {{#AssetModelCatalogueItems}}<div><b>AssetModelCatalogueItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetModelCatalogueItems}}
                    {{#CatalogAssetType}}<div><b>CatalogAssetType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CatalogAssetType}}");}); return false;'>{{CatalogAssetType}}</a></div>{{/CatalogAssetType}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Asset}}
                    {{#AssetInfo}}<div><b>AssetInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetInfo}}");}); return false;'>{{AssetInfo}}</a></div>{{/AssetInfo}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["corporateStandardKindCorporateStandardKind"] = [{ id: '', selected: (!obj["corporateStandardKind"])}]; for (let property in CorporateStandardKind) obj["corporateStandardKindCorporateStandardKind"].push ({ id: property, selected: obj["corporateStandardKind"] && obj["corporateStandardKind"].endsWith ('.' + property)});
                obj["usageKindAssetModelUsageKind"] = [{ id: '', selected: (!obj["usageKind"])}]; for (let property in AssetModelUsageKind) obj["usageKindAssetModelUsageKind"].push ({ id: property, selected: obj["usageKind"] && obj["usageKind"].endsWith ('.' + property)});
                if (obj["OperationalRestrictions"]) obj["OperationalRestrictions_string"] = obj["OperationalRestrictions"].join ();
                if (obj["AssetModelCatalogueItems"]) obj["AssetModelCatalogueItems_string"] = obj["AssetModelCatalogueItems"].join ();
                if (obj["Asset"]) obj["Asset_string"] = obj["Asset"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["corporateStandardKindCorporateStandardKind"];
                delete obj["usageKindAssetModelUsageKind"];
                delete obj["OperationalRestrictions_string"];
                delete obj["AssetModelCatalogueItems_string"];
                delete obj["Asset_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProductAssetModel_collapse" aria-expanded="true" aria-controls="{{id}}_ProductAssetModel_collapse" style="margin-left: 10px;">ProductAssetModel</a></legend>
                    <div id="{{id}}_ProductAssetModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_modelNumber'>modelNumber: </label><div class='col-sm-8'><input id='{{id}}_modelNumber' class='form-control' type='text'{{#modelNumber}} value='{{modelNumber}}'{{/modelNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_modelVersion'>modelVersion: </label><div class='col-sm-8'><input id='{{id}}_modelVersion' class='form-control' type='text'{{#modelVersion}} value='{{modelVersion}}'{{/modelVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_styleNumber'>styleNumber: </label><div class='col-sm-8'><input id='{{id}}_styleNumber' class='form-control' type='text'{{#styleNumber}} value='{{styleNumber}}'{{/styleNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_corporateStandardKind'>corporateStandardKind: </label><div class='col-sm-8'><select id='{{id}}_corporateStandardKind' class='form-control custom-select'>{{#corporateStandardKindCorporateStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/corporateStandardKindCorporateStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_usageKind'>usageKind: </label><div class='col-sm-8'><select id='{{id}}_usageKind' class='form-control custom-select'>{{#usageKindAssetModelUsageKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/usageKindAssetModelUsageKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_catalogueNumber'>catalogueNumber: </label><div class='col-sm-8'><input id='{{id}}_catalogueNumber' class='form-control' type='text'{{#catalogueNumber}} value='{{catalogueNumber}}'{{/catalogueNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_drawingNumber'>drawingNumber: </label><div class='col-sm-8'><input id='{{id}}_drawingNumber' class='form-control' type='text'{{#drawingNumber}} value='{{drawingNumber}}'{{/drawingNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_instructionManual'>instructionManual: </label><div class='col-sm-8'><input id='{{id}}_instructionManual' class='form-control' type='text'{{#instructionManual}} value='{{instructionManual}}'{{/instructionManual}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_overallLength'>overallLength: </label><div class='col-sm-8'><input id='{{id}}_overallLength' class='form-control' type='text'{{#overallLength}} value='{{overallLength}}'{{/overallLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_weightTotal'>weightTotal: </label><div class='col-sm-8'><input id='{{id}}_weightTotal' class='form-control' type='text'{{#weightTotal}} value='{{weightTotal}}'{{/weightTotal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Manufacturer'>Manufacturer: </label><div class='col-sm-8'><input id='{{id}}_Manufacturer' class='form-control' type='text'{{#Manufacturer}} value='{{Manufacturer}}'{{/Manufacturer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CatalogAssetType'>CatalogAssetType: </label><div class='col-sm-8'><input id='{{id}}_CatalogAssetType' class='form-control' type='text'{{#CatalogAssetType}} value='{{CatalogAssetType}}'{{/CatalogAssetType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetInfo'>AssetInfo: </label><div class='col-sm-8'><input id='{{id}}_AssetInfo' class='form-control' type='text'{{#AssetInfo}} value='{{AssetInfo}}'{{/AssetInfo}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ProductAssetModel" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_modelNumber").value; if ("" !== temp) obj["modelNumber"] = temp;
                temp = document.getElementById (id + "_modelVersion").value; if ("" !== temp) obj["modelVersion"] = temp;
                temp = document.getElementById (id + "_styleNumber").value; if ("" !== temp) obj["styleNumber"] = temp;
                temp = CorporateStandardKind[document.getElementById (id + "_corporateStandardKind").value]; if (temp) obj["corporateStandardKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CorporateStandardKind." + temp; else delete obj["corporateStandardKind"];
                temp = AssetModelUsageKind[document.getElementById (id + "_usageKind").value]; if (temp) obj["usageKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AssetModelUsageKind." + temp; else delete obj["usageKind"];
                temp = document.getElementById (id + "_catalogueNumber").value; if ("" !== temp) obj["catalogueNumber"] = temp;
                temp = document.getElementById (id + "_drawingNumber").value; if ("" !== temp) obj["drawingNumber"] = temp;
                temp = document.getElementById (id + "_instructionManual").value; if ("" !== temp) obj["instructionManual"] = temp;
                temp = document.getElementById (id + "_overallLength").value; if ("" !== temp) obj["overallLength"] = temp;
                temp = document.getElementById (id + "_weightTotal").value; if ("" !== temp) obj["weightTotal"] = temp;
                temp = document.getElementById (id + "_Manufacturer").value; if ("" !== temp) obj["Manufacturer"] = temp;
                temp = document.getElementById (id + "_CatalogAssetType").value; if ("" !== temp) obj["CatalogAssetType"] = temp;
                temp = document.getElementById (id + "_AssetInfo").value; if ("" !== temp) obj["AssetInfo"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Manufacturer", "0..1", "0..*", "Manufacturer", "ProductAssetModels"],
                            ["OperationalRestrictions", "0..*", "0..1", "OperationalRestriction", "ProductAssetModel"],
                            ["AssetModelCatalogueItems", "0..*", "0..1", "AssetModelCatalogueItem", "AssetModel"],
                            ["CatalogAssetType", "0..1", "0..*", "CatalogAssetType", "ProductAssetModel"],
                            ["Asset", "0..*", "0..1", "Asset", "ProductAssetModel"],
                            ["AssetInfo", "0..1", "0..1", "AssetInfo", "ProductAssetModel"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by United Kingdom Ministry of Defence.
         *
         */
        class UKMinistryOfDefenceStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.UKMinistryOfDefenceStandard;
                if (null == bucket)
                   cim_data.UKMinistryOfDefenceStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UKMinistryOfDefenceStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "UKMinistryOfDefenceStandard";
                base.parse_attribute (/<cim:UKMinistryOfDefenceStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:UKMinistryOfDefenceStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.UKMinistryOfDefenceStandard;
                if (null == bucket)
                   context.parsed.UKMinistryOfDefenceStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "UKMinistryOfDefenceStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "UKMinistryOfDefenceStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UKMinistryOfDefenceStandard_collapse" aria-expanded="true" aria-controls="UKMinistryOfDefenceStandard_collapse" style="margin-left: 10px;">UKMinistryOfDefenceStandard</a></legend>
                    <div id="UKMinistryOfDefenceStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberUKMinistryofDefenceStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in UKMinistryofDefenceStandardKind) obj["standardNumberUKMinistryofDefenceStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionUKMinistryOfDefenceStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in UKMinistryOfDefenceStandardEditionKind) obj["standardEditionUKMinistryOfDefenceStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberUKMinistryofDefenceStandardKind"];
                delete obj["standardEditionUKMinistryOfDefenceStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UKMinistryOfDefenceStandard_collapse" aria-expanded="true" aria-controls="{{id}}_UKMinistryOfDefenceStandard_collapse" style="margin-left: 10px;">UKMinistryOfDefenceStandard</a></legend>
                    <div id="{{id}}_UKMinistryOfDefenceStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberUKMinistryofDefenceStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberUKMinistryofDefenceStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionUKMinistryOfDefenceStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionUKMinistryOfDefenceStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "UKMinistryOfDefenceStandard" };
                super.submit (id, obj);
                temp = UKMinistryofDefenceStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UKMinistryofDefenceStandardKind." + temp; else delete obj["standardNumber"];
                temp = UKMinistryOfDefenceStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UKMinistryOfDefenceStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * A data set recorded each time a procedure is executed.
         *
         * Observed results are captured in associated measurement values and/or values for properties relevant to the type of procedure performed.
         *
         */
        class ProcedureDataSet extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ProcedureDataSet;
                if (null == bucket)
                   cim_data.ProcedureDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProcedureDataSet[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "ProcedureDataSet";
                base.parse_element (/<cim:ProcedureDataSet.completedDateTime>([\s\S]*?)<\/cim:ProcedureDataSet.completedDateTime>/g, obj, "completedDateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:ProcedureDataSet.Properties\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Properties", sub, context);
                base.parse_attribute (/<cim:ProcedureDataSet.WorkTask\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attribute (/<cim:ProcedureDataSet.Procedure\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Procedure", sub, context);
                base.parse_attribute (/<cim:ProcedureDataSet.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attributes (/<cim:ProcedureDataSet.TransformerObservations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservations", sub, context);
                base.parse_attributes (/<cim:ProcedureDataSet.MeasurementValue\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValue", sub, context);
                let bucket = context.parsed.ProcedureDataSet;
                if (null == bucket)
                   context.parsed.ProcedureDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProcedureDataSet", "completedDateTime", "completedDateTime",  base.from_datetime, fields);
                base.export_attributes (obj, "ProcedureDataSet", "Properties", "Properties", fields);
                base.export_attribute (obj, "ProcedureDataSet", "WorkTask", "WorkTask", fields);
                base.export_attribute (obj, "ProcedureDataSet", "Procedure", "Procedure", fields);
                base.export_attribute (obj, "ProcedureDataSet", "Asset", "Asset", fields);
                base.export_attributes (obj, "ProcedureDataSet", "TransformerObservations", "TransformerObservations", fields);
                base.export_attributes (obj, "ProcedureDataSet", "MeasurementValue", "MeasurementValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProcedureDataSet_collapse" aria-expanded="true" aria-controls="ProcedureDataSet_collapse" style="margin-left: 10px;">ProcedureDataSet</a></legend>
                    <div id="ProcedureDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#completedDateTime}}<div><b>completedDateTime</b>: {{completedDateTime}}</div>{{/completedDateTime}}
                    {{#Properties}}<div><b>Properties</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Properties}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkTask}}");}); return false;'>{{WorkTask}}</a></div>{{/WorkTask}}
                    {{#Procedure}}<div><b>Procedure</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Procedure}}");}); return false;'>{{Procedure}}</a></div>{{/Procedure}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Asset}}");}); return false;'>{{Asset}}</a></div>{{/Asset}}
                    {{#TransformerObservations}}<div><b>TransformerObservations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransformerObservations}}
                    {{#MeasurementValue}}<div><b>MeasurementValue</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MeasurementValue}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Properties"]) obj["Properties_string"] = obj["Properties"].join ();
                if (obj["TransformerObservations"]) obj["TransformerObservations_string"] = obj["TransformerObservations"].join ();
                if (obj["MeasurementValue"]) obj["MeasurementValue_string"] = obj["MeasurementValue"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Properties_string"];
                delete obj["TransformerObservations_string"];
                delete obj["MeasurementValue_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProcedureDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_ProcedureDataSet_collapse" style="margin-left: 10px;">ProcedureDataSet</a></legend>
                    <div id="{{id}}_ProcedureDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_completedDateTime'>completedDateTime: </label><div class='col-sm-8'><input id='{{id}}_completedDateTime' class='form-control' type='text'{{#completedDateTime}} value='{{completedDateTime}}'{{/completedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Properties'>Properties: </label><div class='col-sm-8'><input id='{{id}}_Properties' class='form-control' type='text'{{#Properties}} value='{{Properties_string}}'{{/Properties}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='{{id}}_WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Procedure'>Procedure: </label><div class='col-sm-8'><input id='{{id}}_Procedure' class='form-control' type='text'{{#Procedure}} value='{{Procedure}}'{{/Procedure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerObservations'>TransformerObservations: </label><div class='col-sm-8'><input id='{{id}}_TransformerObservations' class='form-control' type='text'{{#TransformerObservations}} value='{{TransformerObservations_string}}'{{/TransformerObservations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeasurementValue'>MeasurementValue: </label><div class='col-sm-8'><input id='{{id}}_MeasurementValue' class='form-control' type='text'{{#MeasurementValue}} value='{{MeasurementValue_string}}'{{/MeasurementValue}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ProcedureDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_completedDateTime").value; if ("" !== temp) obj["completedDateTime"] = temp;
                temp = document.getElementById (id + "_Properties").value; if ("" !== temp) obj["Properties"] = temp.split (",");
                temp = document.getElementById (id + "_WorkTask").value; if ("" !== temp) obj["WorkTask"] = temp;
                temp = document.getElementById (id + "_Procedure").value; if ("" !== temp) obj["Procedure"] = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp;
                temp = document.getElementById (id + "_TransformerObservations").value; if ("" !== temp) obj["TransformerObservations"] = temp.split (",");
                temp = document.getElementById (id + "_MeasurementValue").value; if ("" !== temp) obj["MeasurementValue"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Properties", "0..*", "0..*", "UserAttribute", "ProcedureDataSets"],
                            ["WorkTask", "0..1", "0..*", "WorkTask", "ProcedureDataSet"],
                            ["Procedure", "0..1", "0..*", "Procedure", "ProcedureDataSets"],
                            ["Asset", "0..1", "0..*", "Asset", "ProcedureDataSet"],
                            ["TransformerObservations", "0..*", "0..*", "TransformerObservation", "ProcedureDataSets"],
                            ["MeasurementValue", "0..*", "0..*", "MeasurementValue", "ProcedureDataSet"]
                        ]
                    )
                );
            }
        }

        /**
         * Dates for asset lifecycle state changes.
         *
         * May have multiple lifecycle dates for this device and a compound type allows a query to return multiple dates.
         *
         */
        class LifecycleDate extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LifecycleDate;
                if (null == bucket)
                   cim_data.LifecycleDate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LifecycleDate[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LifecycleDate";
                base.parse_element (/<cim:LifecycleDate.manufacturedDate>([\s\S]*?)<\/cim:LifecycleDate.manufacturedDate>/g, obj, "manufacturedDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.purchaseDate>([\s\S]*?)<\/cim:LifecycleDate.purchaseDate>/g, obj, "purchaseDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.receivedDate>([\s\S]*?)<\/cim:LifecycleDate.receivedDate>/g, obj, "receivedDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.installationDate>([\s\S]*?)<\/cim:LifecycleDate.installationDate>/g, obj, "installationDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.removalDate>([\s\S]*?)<\/cim:LifecycleDate.removalDate>/g, obj, "removalDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.retiredDate>([\s\S]*?)<\/cim:LifecycleDate.retiredDate>/g, obj, "retiredDate", base.to_string, sub, context);
                let bucket = context.parsed.LifecycleDate;
                if (null == bucket)
                   context.parsed.LifecycleDate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "LifecycleDate", "manufacturedDate", "manufacturedDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "purchaseDate", "purchaseDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "receivedDate", "receivedDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "installationDate", "installationDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "removalDate", "removalDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "retiredDate", "retiredDate",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LifecycleDate_collapse" aria-expanded="true" aria-controls="LifecycleDate_collapse" style="margin-left: 10px;">LifecycleDate</a></legend>
                    <div id="LifecycleDate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#manufacturedDate}}<div><b>manufacturedDate</b>: {{manufacturedDate}}</div>{{/manufacturedDate}}
                    {{#purchaseDate}}<div><b>purchaseDate</b>: {{purchaseDate}}</div>{{/purchaseDate}}
                    {{#receivedDate}}<div><b>receivedDate</b>: {{receivedDate}}</div>{{/receivedDate}}
                    {{#installationDate}}<div><b>installationDate</b>: {{installationDate}}</div>{{/installationDate}}
                    {{#removalDate}}<div><b>removalDate</b>: {{removalDate}}</div>{{/removalDate}}
                    {{#retiredDate}}<div><b>retiredDate</b>: {{retiredDate}}</div>{{/retiredDate}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LifecycleDate_collapse" aria-expanded="true" aria-controls="{{id}}_LifecycleDate_collapse" style="margin-left: 10px;">LifecycleDate</a></legend>
                    <div id="{{id}}_LifecycleDate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_manufacturedDate'>manufacturedDate: </label><div class='col-sm-8'><input id='{{id}}_manufacturedDate' class='form-control' type='text'{{#manufacturedDate}} value='{{manufacturedDate}}'{{/manufacturedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purchaseDate'>purchaseDate: </label><div class='col-sm-8'><input id='{{id}}_purchaseDate' class='form-control' type='text'{{#purchaseDate}} value='{{purchaseDate}}'{{/purchaseDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_receivedDate'>receivedDate: </label><div class='col-sm-8'><input id='{{id}}_receivedDate' class='form-control' type='text'{{#receivedDate}} value='{{receivedDate}}'{{/receivedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_installationDate'>installationDate: </label><div class='col-sm-8'><input id='{{id}}_installationDate' class='form-control' type='text'{{#installationDate}} value='{{installationDate}}'{{/installationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_removalDate'>removalDate: </label><div class='col-sm-8'><input id='{{id}}_removalDate' class='form-control' type='text'{{#removalDate}} value='{{removalDate}}'{{/removalDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_retiredDate'>retiredDate: </label><div class='col-sm-8'><input id='{{id}}_retiredDate' class='form-control' type='text'{{#retiredDate}} value='{{retiredDate}}'{{/retiredDate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LifecycleDate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_manufacturedDate").value; if ("" !== temp) obj["manufacturedDate"] = temp;
                temp = document.getElementById (id + "_purchaseDate").value; if ("" !== temp) obj["purchaseDate"] = temp;
                temp = document.getElementById (id + "_receivedDate").value; if ("" !== temp) obj["receivedDate"] = temp;
                temp = document.getElementById (id + "_installationDate").value; if ("" !== temp) obj["installationDate"] = temp;
                temp = document.getElementById (id + "_removalDate").value; if ("" !== temp) obj["removalDate"] = temp;
                temp = document.getElementById (id + "_retiredDate").value; if ("" !== temp) obj["retiredDate"] = temp;

                return (obj);
            }
        }

        /**
         * Standard published by IEEE (Institute of Electrical and Electronics Engineers).
         *
         */
        class IEEEStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.IEEEStandard;
                if (null == bucket)
                   cim_data.IEEEStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IEEEStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IEEEStandard";
                base.parse_attribute (/<cim:IEEEStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:IEEEStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.IEEEStandard;
                if (null == bucket)
                   context.parsed.IEEEStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "IEEEStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "IEEEStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IEEEStandard_collapse" aria-expanded="true" aria-controls="IEEEStandard_collapse" style="margin-left: 10px;">IEEEStandard</a></legend>
                    <div id="IEEEStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberIEEEStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in IEEEStandardKind) obj["standardNumberIEEEStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionIEEEStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in IEEEStandardEditionKind) obj["standardEditionIEEEStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberIEEEStandardKind"];
                delete obj["standardEditionIEEEStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IEEEStandard_collapse" aria-expanded="true" aria-controls="{{id}}_IEEEStandard_collapse" style="margin-left: 10px;">IEEEStandard</a></legend>
                    <div id="{{id}}_IEEEStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberIEEEStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberIEEEStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionIEEEStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionIEEEStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "IEEEStandard" };
                super.submit (id, obj);
                temp = IEEEStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#IEEEStandardKind." + temp; else delete obj["standardNumber"];
                temp = IEEEStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#IEEEStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * Acceptance test for assets.
         *
         */
        class AcceptanceTest extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AcceptanceTest;
                if (null == bucket)
                   cim_data.AcceptanceTest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AcceptanceTest[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AcceptanceTest";
                base.parse_element (/<cim:AcceptanceTest.type>([\s\S]*?)<\/cim:AcceptanceTest.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:AcceptanceTest.success>([\s\S]*?)<\/cim:AcceptanceTest.success>/g, obj, "success", base.to_boolean, sub, context);
                base.parse_element (/<cim:AcceptanceTest.dateTime>([\s\S]*?)<\/cim:AcceptanceTest.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                let bucket = context.parsed.AcceptanceTest;
                if (null == bucket)
                   context.parsed.AcceptanceTest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "AcceptanceTest", "type", "type",  base.from_string, fields);
                base.export_element (obj, "AcceptanceTest", "success", "success",  base.from_boolean, fields);
                base.export_element (obj, "AcceptanceTest", "dateTime", "dateTime",  base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AcceptanceTest_collapse" aria-expanded="true" aria-controls="AcceptanceTest_collapse" style="margin-left: 10px;">AcceptanceTest</a></legend>
                    <div id="AcceptanceTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#success}}<div><b>success</b>: {{success}}</div>{{/success}}
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AcceptanceTest_collapse" aria-expanded="true" aria-controls="{{id}}_AcceptanceTest_collapse" style="margin-left: 10px;">AcceptanceTest</a></legend>
                    <div id="{{id}}_AcceptanceTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_success'>success: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_success' class='form-check-input' type='checkbox'{{#success}} checked{{/success}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dateTime'>dateTime: </label><div class='col-sm-8'><input id='{{id}}_dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AcceptanceTest" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_success").checked; if (temp) obj["success"] = true;
                temp = document.getElementById (id + "_dateTime").value; if ("" !== temp) obj["dateTime"] = temp;

                return (obj);
            }
        }

        /**
         * Tangible resource of the utility, including power system equipment, various end devices, cabinets, buildings, etc.
         *
         * For electrical network equipment, the role of the asset is defined through PowerSystemResource and its subclasses, defined mainly in the Wires model (refer to IEC61970-301 and model package IEC61970::Wires). Asset description places emphasis on the physical characteristics of the equipment fulfilling that role.
         *
         */
        class Asset extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Asset;
                if (null == bucket)
                   cim_data.Asset = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Asset[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Asset";
                base.parse_attribute (/<cim:Asset.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Asset.type>([\s\S]*?)<\/cim:Asset.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.utcNumber>([\s\S]*?)<\/cim:Asset.utcNumber>/g, obj, "utcNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.serialNumber>([\s\S]*?)<\/cim:Asset.serialNumber>/g, obj, "serialNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.lotNumber>([\s\S]*?)<\/cim:Asset.lotNumber>/g, obj, "lotNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.purchasePrice>([\s\S]*?)<\/cim:Asset.purchasePrice>/g, obj, "purchasePrice", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.critical>([\s\S]*?)<\/cim:Asset.critical>/g, obj, "critical", base.to_boolean, sub, context);
                base.parse_element (/<cim:Asset.position>([\s\S]*?)<\/cim:Asset.position>/g, obj, "position", base.to_string, sub, context);
                base.parse_attribute (/<cim:Asset.electronicAddress\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "electronicAddress", sub, context);
                base.parse_attribute (/<cim:Asset.lifecycleState\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "lifecycleState", sub, context);
                base.parse_attribute (/<cim:Asset.lifecycleDate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "lifecycleDate", sub, context);
                base.parse_attribute (/<cim:Asset.inUseState\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inUseState", sub, context);
                base.parse_attribute (/<cim:Asset.inUseDate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inUseDate", sub, context);
                base.parse_attribute (/<cim:Asset.acceptanceTest\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "acceptanceTest", sub, context);
                base.parse_element (/<cim:Asset.baselineCondition>([\s\S]*?)<\/cim:Asset.baselineCondition>/g, obj, "baselineCondition", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.baselineLossOfLife>([\s\S]*?)<\/cim:Asset.baselineLossOfLife>/g, obj, "baselineLossOfLife", base.to_string, sub, context);
                base.parse_attribute (/<cim:Asset.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:Asset.retiredReason\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "retiredReason", sub, context);
                base.parse_attributes (/<cim:Asset.ConfigurationEvents\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvents", sub, context);
                base.parse_attribute (/<cim:Asset.AssetDeployment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetDeployment", sub, context);
                base.parse_attributes (/<cim:Asset.AssetPropertyCurves\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetPropertyCurves", sub, context);
                base.parse_attributes (/<cim:Asset.ProcedureDataSet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProcedureDataSet", sub, context);
                base.parse_attributes (/<cim:Asset.OrganisationRoles\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OrganisationRoles", sub, context);
                base.parse_attributes (/<cim:Asset.ScheduledEvents\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledEvents", sub, context);
                base.parse_attributes (/<cim:Asset.ErpRecDeliveryItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecDeliveryItems", sub, context);
                base.parse_attributes (/<cim:Asset.ReplacementWorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReplacementWorkTasks", sub, context);
                base.parse_attribute (/<cim:Asset.ErpInventory\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInventory", sub, context);
                base.parse_attributes (/<cim:Asset.Medium\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Medium", sub, context);
                base.parse_attributes (/<cim:Asset.AssetGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetGroup", sub, context);
                base.parse_attributes (/<cim:Asset.AnalyticScore\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AnalyticScore", sub, context);
                base.parse_attributes (/<cim:Asset.Reconditionings\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reconditionings", sub, context);
                base.parse_attributes (/<cim:Asset.PowerSystemResources\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResources", sub, context);
                base.parse_attributes (/<cim:Asset.Measurements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Measurements", sub, context);
                base.parse_attribute (/<cim:Asset.ErpItemMaster\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpItemMaster", sub, context);
                base.parse_attribute (/<cim:Asset.AssetContainer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetContainer", sub, context);
                base.parse_attributes (/<cim:Asset.Procedures\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Procedures", sub, context);
                base.parse_attributes (/<cim:Asset.ReliabilityInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReliabilityInfos", sub, context);
                base.parse_attribute (/<cim:Asset.FinancialInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FinancialInfo", sub, context);
                base.parse_attributes (/<cim:Asset.WorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attributes (/<cim:Asset.Ownerships\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Ownerships", sub, context);
                base.parse_attribute (/<cim:Asset.ProductAssetModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModel", sub, context);
                base.parse_attribute (/<cim:Asset.AssetInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetInfo", sub, context);
                base.parse_attributes (/<cim:Asset.OperationalTags\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationalTags", sub, context);
                base.parse_attribute (/<cim:Asset.BreakerOperation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BreakerOperation", sub, context);
                base.parse_attributes (/<cim:Asset.AssetFunction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetFunction", sub, context);
                base.parse_attribute (/<cim:Asset.Location\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                base.parse_attributes (/<cim:Asset.ActivityRecords\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ActivityRecords", sub, context);
                base.parse_attributes (/<cim:Asset.Analytic\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Analytic", sub, context);
                let bucket = context.parsed.Asset;
                if (null == bucket)
                   context.parsed.Asset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Asset", "kind", "kind", fields);
                base.export_element (obj, "Asset", "type", "type",  base.from_string, fields);
                base.export_element (obj, "Asset", "utcNumber", "utcNumber",  base.from_string, fields);
                base.export_element (obj, "Asset", "serialNumber", "serialNumber",  base.from_string, fields);
                base.export_element (obj, "Asset", "lotNumber", "lotNumber",  base.from_string, fields);
                base.export_element (obj, "Asset", "purchasePrice", "purchasePrice",  base.from_string, fields);
                base.export_element (obj, "Asset", "critical", "critical",  base.from_boolean, fields);
                base.export_element (obj, "Asset", "position", "position",  base.from_string, fields);
                base.export_attribute (obj, "Asset", "electronicAddress", "electronicAddress", fields);
                base.export_attribute (obj, "Asset", "lifecycleState", "lifecycleState", fields);
                base.export_attribute (obj, "Asset", "lifecycleDate", "lifecycleDate", fields);
                base.export_attribute (obj, "Asset", "inUseState", "inUseState", fields);
                base.export_attribute (obj, "Asset", "inUseDate", "inUseDate", fields);
                base.export_attribute (obj, "Asset", "acceptanceTest", "acceptanceTest", fields);
                base.export_element (obj, "Asset", "baselineCondition", "baselineCondition",  base.from_string, fields);
                base.export_element (obj, "Asset", "baselineLossOfLife", "baselineLossOfLife",  base.from_string, fields);
                base.export_attribute (obj, "Asset", "status", "status", fields);
                base.export_attribute (obj, "Asset", "retiredReason", "retiredReason", fields);
                base.export_attributes (obj, "Asset", "ConfigurationEvents", "ConfigurationEvents", fields);
                base.export_attribute (obj, "Asset", "AssetDeployment", "AssetDeployment", fields);
                base.export_attributes (obj, "Asset", "AssetPropertyCurves", "AssetPropertyCurves", fields);
                base.export_attributes (obj, "Asset", "ProcedureDataSet", "ProcedureDataSet", fields);
                base.export_attributes (obj, "Asset", "OrganisationRoles", "OrganisationRoles", fields);
                base.export_attributes (obj, "Asset", "ScheduledEvents", "ScheduledEvents", fields);
                base.export_attributes (obj, "Asset", "ErpRecDeliveryItems", "ErpRecDeliveryItems", fields);
                base.export_attributes (obj, "Asset", "ReplacementWorkTasks", "ReplacementWorkTasks", fields);
                base.export_attribute (obj, "Asset", "ErpInventory", "ErpInventory", fields);
                base.export_attributes (obj, "Asset", "Medium", "Medium", fields);
                base.export_attributes (obj, "Asset", "AssetGroup", "AssetGroup", fields);
                base.export_attributes (obj, "Asset", "AnalyticScore", "AnalyticScore", fields);
                base.export_attributes (obj, "Asset", "Reconditionings", "Reconditionings", fields);
                base.export_attributes (obj, "Asset", "PowerSystemResources", "PowerSystemResources", fields);
                base.export_attributes (obj, "Asset", "Measurements", "Measurements", fields);
                base.export_attribute (obj, "Asset", "ErpItemMaster", "ErpItemMaster", fields);
                base.export_attribute (obj, "Asset", "AssetContainer", "AssetContainer", fields);
                base.export_attributes (obj, "Asset", "Procedures", "Procedures", fields);
                base.export_attributes (obj, "Asset", "ReliabilityInfos", "ReliabilityInfos", fields);
                base.export_attribute (obj, "Asset", "FinancialInfo", "FinancialInfo", fields);
                base.export_attributes (obj, "Asset", "WorkTasks", "WorkTasks", fields);
                base.export_attributes (obj, "Asset", "Ownerships", "Ownerships", fields);
                base.export_attribute (obj, "Asset", "ProductAssetModel", "ProductAssetModel", fields);
                base.export_attribute (obj, "Asset", "AssetInfo", "AssetInfo", fields);
                base.export_attributes (obj, "Asset", "OperationalTags", "OperationalTags", fields);
                base.export_attribute (obj, "Asset", "BreakerOperation", "BreakerOperation", fields);
                base.export_attributes (obj, "Asset", "AssetFunction", "AssetFunction", fields);
                base.export_attribute (obj, "Asset", "Location", "Location", fields);
                base.export_attributes (obj, "Asset", "ActivityRecords", "ActivityRecords", fields);
                base.export_attributes (obj, "Asset", "Analytic", "Analytic", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Asset_collapse" aria-expanded="true" aria-controls="Asset_collapse" style="margin-left: 10px;">Asset</a></legend>
                    <div id="Asset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#utcNumber}}<div><b>utcNumber</b>: {{utcNumber}}</div>{{/utcNumber}}
                    {{#serialNumber}}<div><b>serialNumber</b>: {{serialNumber}}</div>{{/serialNumber}}
                    {{#lotNumber}}<div><b>lotNumber</b>: {{lotNumber}}</div>{{/lotNumber}}
                    {{#purchasePrice}}<div><b>purchasePrice</b>: {{purchasePrice}}</div>{{/purchasePrice}}
                    {{#critical}}<div><b>critical</b>: {{critical}}</div>{{/critical}}
                    {{#position}}<div><b>position</b>: {{position}}</div>{{/position}}
                    {{#electronicAddress}}<div><b>electronicAddress</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{electronicAddress}}");}); return false;'>{{electronicAddress}}</a></div>{{/electronicAddress}}
                    {{#lifecycleState}}<div><b>lifecycleState</b>: {{lifecycleState}}</div>{{/lifecycleState}}
                    {{#lifecycleDate}}<div><b>lifecycleDate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{lifecycleDate}}");}); return false;'>{{lifecycleDate}}</a></div>{{/lifecycleDate}}
                    {{#inUseState}}<div><b>inUseState</b>: {{inUseState}}</div>{{/inUseState}}
                    {{#inUseDate}}<div><b>inUseDate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{inUseDate}}");}); return false;'>{{inUseDate}}</a></div>{{/inUseDate}}
                    {{#acceptanceTest}}<div><b>acceptanceTest</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{acceptanceTest}}");}); return false;'>{{acceptanceTest}}</a></div>{{/acceptanceTest}}
                    {{#baselineCondition}}<div><b>baselineCondition</b>: {{baselineCondition}}</div>{{/baselineCondition}}
                    {{#baselineLossOfLife}}<div><b>baselineLossOfLife</b>: {{baselineLossOfLife}}</div>{{/baselineLossOfLife}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#retiredReason}}<div><b>retiredReason</b>: {{retiredReason}}</div>{{/retiredReason}}
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#AssetDeployment}}<div><b>AssetDeployment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetDeployment}}");}); return false;'>{{AssetDeployment}}</a></div>{{/AssetDeployment}}
                    {{#AssetPropertyCurves}}<div><b>AssetPropertyCurves</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetPropertyCurves}}
                    {{#ProcedureDataSet}}<div><b>ProcedureDataSet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProcedureDataSet}}
                    {{#OrganisationRoles}}<div><b>OrganisationRoles</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OrganisationRoles}}
                    {{#ScheduledEvents}}<div><b>ScheduledEvents</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ScheduledEvents}}
                    {{#ErpRecDeliveryItems}}<div><b>ErpRecDeliveryItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpRecDeliveryItems}}
                    {{#ReplacementWorkTasks}}<div><b>ReplacementWorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReplacementWorkTasks}}
                    {{#ErpInventory}}<div><b>ErpInventory</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ErpInventory}}");}); return false;'>{{ErpInventory}}</a></div>{{/ErpInventory}}
                    {{#Medium}}<div><b>Medium</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Medium}}
                    {{#AssetGroup}}<div><b>AssetGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetGroup}}
                    {{#AnalyticScore}}<div><b>AnalyticScore</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AnalyticScore}}
                    {{#Reconditionings}}<div><b>Reconditionings</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Reconditionings}}
                    {{#PowerSystemResources}}<div><b>PowerSystemResources</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PowerSystemResources}}
                    {{#Measurements}}<div><b>Measurements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Measurements}}
                    {{#ErpItemMaster}}<div><b>ErpItemMaster</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ErpItemMaster}}");}); return false;'>{{ErpItemMaster}}</a></div>{{/ErpItemMaster}}
                    {{#AssetContainer}}<div><b>AssetContainer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetContainer}}");}); return false;'>{{AssetContainer}}</a></div>{{/AssetContainer}}
                    {{#Procedures}}<div><b>Procedures</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Procedures}}
                    {{#ReliabilityInfos}}<div><b>ReliabilityInfos</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReliabilityInfos}}
                    {{#FinancialInfo}}<div><b>FinancialInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FinancialInfo}}");}); return false;'>{{FinancialInfo}}</a></div>{{/FinancialInfo}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    {{#Ownerships}}<div><b>Ownerships</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Ownerships}}
                    {{#ProductAssetModel}}<div><b>ProductAssetModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ProductAssetModel}}");}); return false;'>{{ProductAssetModel}}</a></div>{{/ProductAssetModel}}
                    {{#AssetInfo}}<div><b>AssetInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetInfo}}");}); return false;'>{{AssetInfo}}</a></div>{{/AssetInfo}}
                    {{#OperationalTags}}<div><b>OperationalTags</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperationalTags}}
                    {{#BreakerOperation}}<div><b>BreakerOperation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BreakerOperation}}");}); return false;'>{{BreakerOperation}}</a></div>{{/BreakerOperation}}
                    {{#AssetFunction}}<div><b>AssetFunction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetFunction}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Location}}");}); return false;'>{{Location}}</a></div>{{/Location}}
                    {{#ActivityRecords}}<div><b>ActivityRecords</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ActivityRecords}}
                    {{#Analytic}}<div><b>Analytic</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Analytic}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindAssetKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in AssetKind) obj["kindAssetKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                obj["lifecycleStateAssetLifecycleStateKind"] = [{ id: '', selected: (!obj["lifecycleState"])}]; for (let property in AssetLifecycleStateKind) obj["lifecycleStateAssetLifecycleStateKind"].push ({ id: property, selected: obj["lifecycleState"] && obj["lifecycleState"].endsWith ('.' + property)});
                obj["inUseStateInUseStateKind"] = [{ id: '', selected: (!obj["inUseState"])}]; for (let property in InUseStateKind) obj["inUseStateInUseStateKind"].push ({ id: property, selected: obj["inUseState"] && obj["inUseState"].endsWith ('.' + property)});
                obj["retiredReasonRetiredReasonKind"] = [{ id: '', selected: (!obj["retiredReason"])}]; for (let property in RetiredReasonKind) obj["retiredReasonRetiredReasonKind"].push ({ id: property, selected: obj["retiredReason"] && obj["retiredReason"].endsWith ('.' + property)});
                if (obj["ConfigurationEvents"]) obj["ConfigurationEvents_string"] = obj["ConfigurationEvents"].join ();
                if (obj["AssetPropertyCurves"]) obj["AssetPropertyCurves_string"] = obj["AssetPropertyCurves"].join ();
                if (obj["ProcedureDataSet"]) obj["ProcedureDataSet_string"] = obj["ProcedureDataSet"].join ();
                if (obj["OrganisationRoles"]) obj["OrganisationRoles_string"] = obj["OrganisationRoles"].join ();
                if (obj["ScheduledEvents"]) obj["ScheduledEvents_string"] = obj["ScheduledEvents"].join ();
                if (obj["ErpRecDeliveryItems"]) obj["ErpRecDeliveryItems_string"] = obj["ErpRecDeliveryItems"].join ();
                if (obj["ReplacementWorkTasks"]) obj["ReplacementWorkTasks_string"] = obj["ReplacementWorkTasks"].join ();
                if (obj["Medium"]) obj["Medium_string"] = obj["Medium"].join ();
                if (obj["AssetGroup"]) obj["AssetGroup_string"] = obj["AssetGroup"].join ();
                if (obj["AnalyticScore"]) obj["AnalyticScore_string"] = obj["AnalyticScore"].join ();
                if (obj["Reconditionings"]) obj["Reconditionings_string"] = obj["Reconditionings"].join ();
                if (obj["PowerSystemResources"]) obj["PowerSystemResources_string"] = obj["PowerSystemResources"].join ();
                if (obj["Measurements"]) obj["Measurements_string"] = obj["Measurements"].join ();
                if (obj["Procedures"]) obj["Procedures_string"] = obj["Procedures"].join ();
                if (obj["ReliabilityInfos"]) obj["ReliabilityInfos_string"] = obj["ReliabilityInfos"].join ();
                if (obj["WorkTasks"]) obj["WorkTasks_string"] = obj["WorkTasks"].join ();
                if (obj["Ownerships"]) obj["Ownerships_string"] = obj["Ownerships"].join ();
                if (obj["OperationalTags"]) obj["OperationalTags_string"] = obj["OperationalTags"].join ();
                if (obj["AssetFunction"]) obj["AssetFunction_string"] = obj["AssetFunction"].join ();
                if (obj["ActivityRecords"]) obj["ActivityRecords_string"] = obj["ActivityRecords"].join ();
                if (obj["Analytic"]) obj["Analytic_string"] = obj["Analytic"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindAssetKind"];
                delete obj["lifecycleStateAssetLifecycleStateKind"];
                delete obj["inUseStateInUseStateKind"];
                delete obj["retiredReasonRetiredReasonKind"];
                delete obj["ConfigurationEvents_string"];
                delete obj["AssetPropertyCurves_string"];
                delete obj["ProcedureDataSet_string"];
                delete obj["OrganisationRoles_string"];
                delete obj["ScheduledEvents_string"];
                delete obj["ErpRecDeliveryItems_string"];
                delete obj["ReplacementWorkTasks_string"];
                delete obj["Medium_string"];
                delete obj["AssetGroup_string"];
                delete obj["AnalyticScore_string"];
                delete obj["Reconditionings_string"];
                delete obj["PowerSystemResources_string"];
                delete obj["Measurements_string"];
                delete obj["Procedures_string"];
                delete obj["ReliabilityInfos_string"];
                delete obj["WorkTasks_string"];
                delete obj["Ownerships_string"];
                delete obj["OperationalTags_string"];
                delete obj["AssetFunction_string"];
                delete obj["ActivityRecords_string"];
                delete obj["Analytic_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Asset_collapse" aria-expanded="true" aria-controls="{{id}}_Asset_collapse" style="margin-left: 10px;">Asset</a></legend>
                    <div id="{{id}}_Asset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindAssetKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindAssetKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_utcNumber'>utcNumber: </label><div class='col-sm-8'><input id='{{id}}_utcNumber' class='form-control' type='text'{{#utcNumber}} value='{{utcNumber}}'{{/utcNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_serialNumber'>serialNumber: </label><div class='col-sm-8'><input id='{{id}}_serialNumber' class='form-control' type='text'{{#serialNumber}} value='{{serialNumber}}'{{/serialNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lotNumber'>lotNumber: </label><div class='col-sm-8'><input id='{{id}}_lotNumber' class='form-control' type='text'{{#lotNumber}} value='{{lotNumber}}'{{/lotNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purchasePrice'>purchasePrice: </label><div class='col-sm-8'><input id='{{id}}_purchasePrice' class='form-control' type='text'{{#purchasePrice}} value='{{purchasePrice}}'{{/purchasePrice}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_critical'>critical: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_critical' class='form-check-input' type='checkbox'{{#critical}} checked{{/critical}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_position'>position: </label><div class='col-sm-8'><input id='{{id}}_position' class='form-control' type='text'{{#position}} value='{{position}}'{{/position}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_electronicAddress'>electronicAddress: </label><div class='col-sm-8'><input id='{{id}}_electronicAddress' class='form-control' type='text'{{#electronicAddress}} value='{{electronicAddress}}'{{/electronicAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lifecycleState'>lifecycleState: </label><div class='col-sm-8'><select id='{{id}}_lifecycleState' class='form-control custom-select'>{{#lifecycleStateAssetLifecycleStateKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/lifecycleStateAssetLifecycleStateKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lifecycleDate'>lifecycleDate: </label><div class='col-sm-8'><input id='{{id}}_lifecycleDate' class='form-control' type='text'{{#lifecycleDate}} value='{{lifecycleDate}}'{{/lifecycleDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inUseState'>inUseState: </label><div class='col-sm-8'><select id='{{id}}_inUseState' class='form-control custom-select'>{{#inUseStateInUseStateKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/inUseStateInUseStateKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inUseDate'>inUseDate: </label><div class='col-sm-8'><input id='{{id}}_inUseDate' class='form-control' type='text'{{#inUseDate}} value='{{inUseDate}}'{{/inUseDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_acceptanceTest'>acceptanceTest: </label><div class='col-sm-8'><input id='{{id}}_acceptanceTest' class='form-control' type='text'{{#acceptanceTest}} value='{{acceptanceTest}}'{{/acceptanceTest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_baselineCondition'>baselineCondition: </label><div class='col-sm-8'><input id='{{id}}_baselineCondition' class='form-control' type='text'{{#baselineCondition}} value='{{baselineCondition}}'{{/baselineCondition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_baselineLossOfLife'>baselineLossOfLife: </label><div class='col-sm-8'><input id='{{id}}_baselineLossOfLife' class='form-control' type='text'{{#baselineLossOfLife}} value='{{baselineLossOfLife}}'{{/baselineLossOfLife}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_retiredReason'>retiredReason: </label><div class='col-sm-8'><select id='{{id}}_retiredReason' class='form-control custom-select'>{{#retiredReasonRetiredReasonKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/retiredReasonRetiredReasonKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetDeployment'>AssetDeployment: </label><div class='col-sm-8'><input id='{{id}}_AssetDeployment' class='form-control' type='text'{{#AssetDeployment}} value='{{AssetDeployment}}'{{/AssetDeployment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetPropertyCurves'>AssetPropertyCurves: </label><div class='col-sm-8'><input id='{{id}}_AssetPropertyCurves' class='form-control' type='text'{{#AssetPropertyCurves}} value='{{AssetPropertyCurves_string}}'{{/AssetPropertyCurves}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OrganisationRoles'>OrganisationRoles: </label><div class='col-sm-8'><input id='{{id}}_OrganisationRoles' class='form-control' type='text'{{#OrganisationRoles}} value='{{OrganisationRoles_string}}'{{/OrganisationRoles}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ScheduledEvents'>ScheduledEvents: </label><div class='col-sm-8'><input id='{{id}}_ScheduledEvents' class='form-control' type='text'{{#ScheduledEvents}} value='{{ScheduledEvents_string}}'{{/ScheduledEvents}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpRecDeliveryItems'>ErpRecDeliveryItems: </label><div class='col-sm-8'><input id='{{id}}_ErpRecDeliveryItems' class='form-control' type='text'{{#ErpRecDeliveryItems}} value='{{ErpRecDeliveryItems_string}}'{{/ErpRecDeliveryItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInventory'>ErpInventory: </label><div class='col-sm-8'><input id='{{id}}_ErpInventory' class='form-control' type='text'{{#ErpInventory}} value='{{ErpInventory}}'{{/ErpInventory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Medium'>Medium: </label><div class='col-sm-8'><input id='{{id}}_Medium' class='form-control' type='text'{{#Medium}} value='{{Medium_string}}'{{/Medium}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetGroup'>AssetGroup: </label><div class='col-sm-8'><input id='{{id}}_AssetGroup' class='form-control' type='text'{{#AssetGroup}} value='{{AssetGroup_string}}'{{/AssetGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResources'>PowerSystemResources: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResources' class='form-control' type='text'{{#PowerSystemResources}} value='{{PowerSystemResources_string}}'{{/PowerSystemResources}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpItemMaster'>ErpItemMaster: </label><div class='col-sm-8'><input id='{{id}}_ErpItemMaster' class='form-control' type='text'{{#ErpItemMaster}} value='{{ErpItemMaster}}'{{/ErpItemMaster}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetContainer'>AssetContainer: </label><div class='col-sm-8'><input id='{{id}}_AssetContainer' class='form-control' type='text'{{#AssetContainer}} value='{{AssetContainer}}'{{/AssetContainer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Procedures'>Procedures: </label><div class='col-sm-8'><input id='{{id}}_Procedures' class='form-control' type='text'{{#Procedures}} value='{{Procedures_string}}'{{/Procedures}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReliabilityInfos'>ReliabilityInfos: </label><div class='col-sm-8'><input id='{{id}}_ReliabilityInfos' class='form-control' type='text'{{#ReliabilityInfos}} value='{{ReliabilityInfos_string}}'{{/ReliabilityInfos}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FinancialInfo'>FinancialInfo: </label><div class='col-sm-8'><input id='{{id}}_FinancialInfo' class='form-control' type='text'{{#FinancialInfo}} value='{{FinancialInfo}}'{{/FinancialInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='{{id}}_WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks_string}}'{{/WorkTasks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProductAssetModel'>ProductAssetModel: </label><div class='col-sm-8'><input id='{{id}}_ProductAssetModel' class='form-control' type='text'{{#ProductAssetModel}} value='{{ProductAssetModel}}'{{/ProductAssetModel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetInfo'>AssetInfo: </label><div class='col-sm-8'><input id='{{id}}_AssetInfo' class='form-control' type='text'{{#AssetInfo}} value='{{AssetInfo}}'{{/AssetInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BreakerOperation'>BreakerOperation: </label><div class='col-sm-8'><input id='{{id}}_BreakerOperation' class='form-control' type='text'{{#BreakerOperation}} value='{{BreakerOperation}}'{{/BreakerOperation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Location'>Location: </label><div class='col-sm-8'><input id='{{id}}_Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ActivityRecords'>ActivityRecords: </label><div class='col-sm-8'><input id='{{id}}_ActivityRecords' class='form-control' type='text'{{#ActivityRecords}} value='{{ActivityRecords_string}}'{{/ActivityRecords}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Analytic'>Analytic: </label><div class='col-sm-8'><input id='{{id}}_Analytic' class='form-control' type='text'{{#Analytic}} value='{{Analytic_string}}'{{/Analytic}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Asset" };
                super.submit (id, obj);
                temp = AssetKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AssetKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_utcNumber").value; if ("" !== temp) obj["utcNumber"] = temp;
                temp = document.getElementById (id + "_serialNumber").value; if ("" !== temp) obj["serialNumber"] = temp;
                temp = document.getElementById (id + "_lotNumber").value; if ("" !== temp) obj["lotNumber"] = temp;
                temp = document.getElementById (id + "_purchasePrice").value; if ("" !== temp) obj["purchasePrice"] = temp;
                temp = document.getElementById (id + "_critical").checked; if (temp) obj["critical"] = true;
                temp = document.getElementById (id + "_position").value; if ("" !== temp) obj["position"] = temp;
                temp = document.getElementById (id + "_electronicAddress").value; if ("" !== temp) obj["electronicAddress"] = temp;
                temp = AssetLifecycleStateKind[document.getElementById (id + "_lifecycleState").value]; if (temp) obj["lifecycleState"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AssetLifecycleStateKind." + temp; else delete obj["lifecycleState"];
                temp = document.getElementById (id + "_lifecycleDate").value; if ("" !== temp) obj["lifecycleDate"] = temp;
                temp = InUseStateKind[document.getElementById (id + "_inUseState").value]; if (temp) obj["inUseState"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#InUseStateKind." + temp; else delete obj["inUseState"];
                temp = document.getElementById (id + "_inUseDate").value; if ("" !== temp) obj["inUseDate"] = temp;
                temp = document.getElementById (id + "_acceptanceTest").value; if ("" !== temp) obj["acceptanceTest"] = temp;
                temp = document.getElementById (id + "_baselineCondition").value; if ("" !== temp) obj["baselineCondition"] = temp;
                temp = document.getElementById (id + "_baselineLossOfLife").value; if ("" !== temp) obj["baselineLossOfLife"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = RetiredReasonKind[document.getElementById (id + "_retiredReason").value]; if (temp) obj["retiredReason"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#RetiredReasonKind." + temp; else delete obj["retiredReason"];
                temp = document.getElementById (id + "_AssetDeployment").value; if ("" !== temp) obj["AssetDeployment"] = temp;
                temp = document.getElementById (id + "_AssetPropertyCurves").value; if ("" !== temp) obj["AssetPropertyCurves"] = temp.split (",");
                temp = document.getElementById (id + "_OrganisationRoles").value; if ("" !== temp) obj["OrganisationRoles"] = temp.split (",");
                temp = document.getElementById (id + "_ScheduledEvents").value; if ("" !== temp) obj["ScheduledEvents"] = temp.split (",");
                temp = document.getElementById (id + "_ErpRecDeliveryItems").value; if ("" !== temp) obj["ErpRecDeliveryItems"] = temp.split (",");
                temp = document.getElementById (id + "_ErpInventory").value; if ("" !== temp) obj["ErpInventory"] = temp;
                temp = document.getElementById (id + "_Medium").value; if ("" !== temp) obj["Medium"] = temp.split (",");
                temp = document.getElementById (id + "_AssetGroup").value; if ("" !== temp) obj["AssetGroup"] = temp.split (",");
                temp = document.getElementById (id + "_PowerSystemResources").value; if ("" !== temp) obj["PowerSystemResources"] = temp.split (",");
                temp = document.getElementById (id + "_ErpItemMaster").value; if ("" !== temp) obj["ErpItemMaster"] = temp;
                temp = document.getElementById (id + "_AssetContainer").value; if ("" !== temp) obj["AssetContainer"] = temp;
                temp = document.getElementById (id + "_Procedures").value; if ("" !== temp) obj["Procedures"] = temp.split (",");
                temp = document.getElementById (id + "_ReliabilityInfos").value; if ("" !== temp) obj["ReliabilityInfos"] = temp.split (",");
                temp = document.getElementById (id + "_FinancialInfo").value; if ("" !== temp) obj["FinancialInfo"] = temp;
                temp = document.getElementById (id + "_WorkTasks").value; if ("" !== temp) obj["WorkTasks"] = temp.split (",");
                temp = document.getElementById (id + "_ProductAssetModel").value; if ("" !== temp) obj["ProductAssetModel"] = temp;
                temp = document.getElementById (id + "_AssetInfo").value; if ("" !== temp) obj["AssetInfo"] = temp;
                temp = document.getElementById (id + "_BreakerOperation").value; if ("" !== temp) obj["BreakerOperation"] = temp;
                temp = document.getElementById (id + "_Location").value; if ("" !== temp) obj["Location"] = temp;
                temp = document.getElementById (id + "_ActivityRecords").value; if ("" !== temp) obj["ActivityRecords"] = temp.split (",");
                temp = document.getElementById (id + "_Analytic").value; if ("" !== temp) obj["Analytic"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ConfigurationEvents", "0..*", "0..1", "ConfigurationEvent", "ChangedAsset"],
                            ["AssetDeployment", "0..1", "0..1", "AssetDeployment", "Asset"],
                            ["AssetPropertyCurves", "0..*", "0..*", "AssetPropertyCurve", "Assets"],
                            ["ProcedureDataSet", "0..*", "0..1", "ProcedureDataSet", "Asset"],
                            ["OrganisationRoles", "0..*", "0..*", "AssetOrganisationRole", "Assets"],
                            ["ScheduledEvents", "0..*", "0..*", "ScheduledEvent", "Assets"],
                            ["ErpRecDeliveryItems", "0..*", "0..*", "ErpRecDelvLineItem", "Assets"],
                            ["ReplacementWorkTasks", "0..*", "0..1", "WorkTask", "OldAsset"],
                            ["ErpInventory", "0..1", "0..1", "ErpInventory", "Asset"],
                            ["Medium", "0..*", "0..*", "Medium", "Asset"],
                            ["AssetGroup", "0..*", "0..*", "AssetGroup", "Asset"],
                            ["AnalyticScore", "0..*", "0..1", "AnalyticScore", "Asset"],
                            ["Reconditionings", "0..*", "0..1", "Reconditioning", "Asset"],
                            ["PowerSystemResources", "0..*", "0..*", "PowerSystemResource", "Assets"],
                            ["Measurements", "0..*", "0..1", "Measurement", "Asset"],
                            ["ErpItemMaster", "0..1", "0..1", "ErpItemMaster", "Asset"],
                            ["AssetContainer", "0..1", "0..*", "AssetContainer", "Assets"],
                            ["Procedures", "0..*", "0..*", "Procedure", "Assets"],
                            ["ReliabilityInfos", "0..*", "0..*", "ReliabilityInfo", "Assets"],
                            ["FinancialInfo", "0..1", "0..1", "FinancialInfo", "Asset"],
                            ["WorkTasks", "0..*", "0..*", "WorkTask", "Assets"],
                            ["Ownerships", "0..*", "0..1", "Ownership", "Asset"],
                            ["ProductAssetModel", "0..1", "0..*", "ProductAssetModel", "Asset"],
                            ["AssetInfo", "0..1", "0..*", "AssetInfo", "Assets"],
                            ["OperationalTags", "0..*", "0..1", "OperationalTag", "Asset"],
                            ["BreakerOperation", "0..1", "1", "SwitchOperationSummary", "Breaker"],
                            ["AssetFunction", "0..*", "0..1", "AssetFunction", "Asset"],
                            ["Location", "0..1", "0..*", "Location", "Assets"],
                            ["ActivityRecords", "0..*", "0..*", "ActivityRecord", "Assets"],
                            ["Analytic", "0..*", "0..*", "Analytic", "Asset"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by DIN (German Institute of Standards).
         *
         */
        class DINStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DINStandard;
                if (null == bucket)
                   cim_data.DINStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DINStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DINStandard";
                base.parse_attribute (/<cim:DINStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:DINStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.DINStandard;
                if (null == bucket)
                   context.parsed.DINStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "DINStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "DINStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DINStandard_collapse" aria-expanded="true" aria-controls="DINStandard_collapse" style="margin-left: 10px;">DINStandard</a></legend>
                    <div id="DINStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberDINStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in DINStandardKind) obj["standardNumberDINStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionDINStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in DINStandardEditionKind) obj["standardEditionDINStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberDINStandardKind"];
                delete obj["standardEditionDINStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DINStandard_collapse" aria-expanded="true" aria-controls="{{id}}_DINStandard_collapse" style="margin-left: 10px;">DINStandard</a></legend>
                    <div id="{{id}}_DINStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberDINStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberDINStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionDINStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionDINStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DINStandard" };
                super.submit (id, obj);
                temp = DINStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DINStandardKind." + temp; else delete obj["standardNumber"];
                temp = DINStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DINStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * Documented procedure for various types of work or work tasks on assets.
         *
         */
        class Procedure extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Procedure;
                if (null == bucket)
                   cim_data.Procedure = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Procedure[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Procedure";
                base.parse_attribute (/<cim:Procedure.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Procedure.sequenceNumber>([\s\S]*?)<\/cim:Procedure.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Procedure.instruction>([\s\S]*?)<\/cim:Procedure.instruction>/g, obj, "instruction", base.to_string, sub, context);
                base.parse_attributes (/<cim:Procedure.ProcedureDataSets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProcedureDataSets", sub, context);
                base.parse_attributes (/<cim:Procedure.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attributes (/<cim:Procedure.Assets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attributes (/<cim:Procedure.Limits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Limits", sub, context);
                base.parse_attributes (/<cim:Procedure.Measurements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Measurements", sub, context);
                let bucket = context.parsed.Procedure;
                if (null == bucket)
                   context.parsed.Procedure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Procedure", "kind", "kind", fields);
                base.export_element (obj, "Procedure", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "Procedure", "instruction", "instruction",  base.from_string, fields);
                base.export_attributes (obj, "Procedure", "ProcedureDataSets", "ProcedureDataSets", fields);
                base.export_attributes (obj, "Procedure", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attributes (obj, "Procedure", "Assets", "Assets", fields);
                base.export_attributes (obj, "Procedure", "Limits", "Limits", fields);
                base.export_attributes (obj, "Procedure", "Measurements", "Measurements", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Procedure_collapse" aria-expanded="true" aria-controls="Procedure_collapse" style="margin-left: 10px;">Procedure</a></legend>
                    <div id="Procedure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#instruction}}<div><b>instruction</b>: {{instruction}}</div>{{/instruction}}
                    {{#ProcedureDataSets}}<div><b>ProcedureDataSets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProcedureDataSets}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#Limits}}<div><b>Limits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Limits}}
                    {{#Measurements}}<div><b>Measurements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Measurements}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindProcedureKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ProcedureKind) obj["kindProcedureKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["ProcedureDataSets"]) obj["ProcedureDataSets_string"] = obj["ProcedureDataSets"].join ();
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
                if (obj["Assets"]) obj["Assets_string"] = obj["Assets"].join ();
                if (obj["Limits"]) obj["Limits_string"] = obj["Limits"].join ();
                if (obj["Measurements"]) obj["Measurements_string"] = obj["Measurements"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindProcedureKind"];
                delete obj["ProcedureDataSets_string"];
                delete obj["CompatibleUnits_string"];
                delete obj["Assets_string"];
                delete obj["Limits_string"];
                delete obj["Measurements_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Procedure_collapse" aria-expanded="true" aria-controls="{{id}}_Procedure_collapse" style="margin-left: 10px;">Procedure</a></legend>
                    <div id="{{id}}_Procedure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindProcedureKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindProcedureKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_instruction'>instruction: </label><div class='col-sm-8'><input id='{{id}}_instruction' class='form-control' type='text'{{#instruction}} value='{{instruction}}'{{/instruction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='{{id}}_CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits_string}}'{{/CompatibleUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Limits'>Limits: </label><div class='col-sm-8'><input id='{{id}}_Limits' class='form-control' type='text'{{#Limits}} value='{{Limits_string}}'{{/Limits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Measurements'>Measurements: </label><div class='col-sm-8'><input id='{{id}}_Measurements' class='form-control' type='text'{{#Measurements}} value='{{Measurements_string}}'{{/Measurements}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Procedure" };
                super.submit (id, obj);
                temp = ProcedureKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ProcedureKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_instruction").value; if ("" !== temp) obj["instruction"] = temp;
                temp = document.getElementById (id + "_CompatibleUnits").value; if ("" !== temp) obj["CompatibleUnits"] = temp.split (",");
                temp = document.getElementById (id + "_Assets").value; if ("" !== temp) obj["Assets"] = temp.split (",");
                temp = document.getElementById (id + "_Limits").value; if ("" !== temp) obj["Limits"] = temp.split (",");
                temp = document.getElementById (id + "_Measurements").value; if ("" !== temp) obj["Measurements"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProcedureDataSets", "0..*", "0..1", "ProcedureDataSet", "Procedure"],
                            ["CompatibleUnits", "0..*", "0..*", "CompatibleUnit", "Procedures"],
                            ["Assets", "0..*", "0..*", "Asset", "Procedures"],
                            ["Limits", "0..*", "0..*", "Limit", "Procedures"],
                            ["Measurements", "0..*", "0..*", "Measurement", "Procedures"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by Westinghouse - a WEP (Westinghouse Engineering Procedure).
         *
         */
        class WEPStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WEPStandard;
                if (null == bucket)
                   cim_data.WEPStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WEPStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WEPStandard";
                base.parse_attribute (/<cim:WEPStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:WEPStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.WEPStandard;
                if (null == bucket)
                   context.parsed.WEPStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "WEPStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "WEPStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WEPStandard_collapse" aria-expanded="true" aria-controls="WEPStandard_collapse" style="margin-left: 10px;">WEPStandard</a></legend>
                    <div id="WEPStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberWEPStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in WEPStandardKind) obj["standardNumberWEPStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionWEPStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in WEPStandardEditionKind) obj["standardEditionWEPStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberWEPStandardKind"];
                delete obj["standardEditionWEPStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WEPStandard_collapse" aria-expanded="true" aria-controls="{{id}}_WEPStandard_collapse" style="margin-left: 10px;">WEPStandard</a></legend>
                    <div id="{{id}}_WEPStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberWEPStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberWEPStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionWEPStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionWEPStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WEPStandard" };
                super.submit (id, obj);
                temp = WEPStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#WEPStandardKind." + temp; else delete obj["standardNumber"];
                temp = WEPStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#WEPStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * Set of attributes of an asset, representing typical datasheet information of a physical device that can be instantiated and shared in different data exchange contexts:
         * - as attributes of an asset instance (installed or in stock)
         * - as attributes of an asset model (product by a manufacturer)
         *
         * - as attributes of a type asset (generic type of an asset as used in designs/extension planning).
         *
         */
        class AssetInfo extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetInfo;
                if (null == bucket)
                   cim_data.AssetInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetInfo";
                base.parse_attribute (/<cim:AssetInfo.CatalogAssetType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CatalogAssetType", sub, context);
                base.parse_attributes (/<cim:AssetInfo.PowerSystemResources\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResources", sub, context);
                base.parse_attributes (/<cim:AssetInfo.Assets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:AssetInfo.ProductAssetModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModel", sub, context);
                let bucket = context.parsed.AssetInfo;
                if (null == bucket)
                   context.parsed.AssetInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AssetInfo", "CatalogAssetType", "CatalogAssetType", fields);
                base.export_attributes (obj, "AssetInfo", "PowerSystemResources", "PowerSystemResources", fields);
                base.export_attributes (obj, "AssetInfo", "Assets", "Assets", fields);
                base.export_attribute (obj, "AssetInfo", "ProductAssetModel", "ProductAssetModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetInfo_collapse" aria-expanded="true" aria-controls="AssetInfo_collapse" style="margin-left: 10px;">AssetInfo</a></legend>
                    <div id="AssetInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#CatalogAssetType}}<div><b>CatalogAssetType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CatalogAssetType}}");}); return false;'>{{CatalogAssetType}}</a></div>{{/CatalogAssetType}}
                    {{#PowerSystemResources}}<div><b>PowerSystemResources</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PowerSystemResources}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#ProductAssetModel}}<div><b>ProductAssetModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ProductAssetModel}}");}); return false;'>{{ProductAssetModel}}</a></div>{{/ProductAssetModel}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PowerSystemResources"]) obj["PowerSystemResources_string"] = obj["PowerSystemResources"].join ();
                if (obj["Assets"]) obj["Assets_string"] = obj["Assets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PowerSystemResources_string"];
                delete obj["Assets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetInfo_collapse" aria-expanded="true" aria-controls="{{id}}_AssetInfo_collapse" style="margin-left: 10px;">AssetInfo</a></legend>
                    <div id="{{id}}_AssetInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CatalogAssetType'>CatalogAssetType: </label><div class='col-sm-8'><input id='{{id}}_CatalogAssetType' class='form-control' type='text'{{#CatalogAssetType}} value='{{CatalogAssetType}}'{{/CatalogAssetType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProductAssetModel'>ProductAssetModel: </label><div class='col-sm-8'><input id='{{id}}_ProductAssetModel' class='form-control' type='text'{{#ProductAssetModel}} value='{{ProductAssetModel}}'{{/ProductAssetModel}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CatalogAssetType").value; if ("" !== temp) obj["CatalogAssetType"] = temp;
                temp = document.getElementById (id + "_ProductAssetModel").value; if ("" !== temp) obj["ProductAssetModel"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CatalogAssetType", "0..1", "0..1", "CatalogAssetType", "AssetInfo"],
                            ["PowerSystemResources", "0..*", "0..1", "PowerSystemResource", "AssetDatasheet"],
                            ["Assets", "0..*", "0..1", "Asset", "AssetInfo"],
                            ["ProductAssetModel", "0..1", "0..1", "ProductAssetModel", "AssetInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * Sample or specimen of a material (fluid or solid).
         *
         */
        class Specimen extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Specimen;
                if (null == bucket)
                   cim_data.Specimen = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Specimen[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Specimen";
                base.parse_element (/<cim:Specimen.specimenID>([\s\S]*?)<\/cim:Specimen.specimenID>/g, obj, "specimenID", base.to_string, sub, context);
                base.parse_element (/<cim:Specimen.specimenSampleDateTime>([\s\S]*?)<\/cim:Specimen.specimenSampleDateTime>/g, obj, "specimenSampleDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Specimen.ambientTemperatureAtSampling>([\s\S]*?)<\/cim:Specimen.ambientTemperatureAtSampling>/g, obj, "ambientTemperatureAtSampling", base.to_string, sub, context);
                base.parse_element (/<cim:Specimen.humidityAtSampling>([\s\S]*?)<\/cim:Specimen.humidityAtSampling>/g, obj, "humidityAtSampling", base.to_string, sub, context);
                base.parse_element (/<cim:Specimen.specimenToLabDateTime>([\s\S]*?)<\/cim:Specimen.specimenToLabDateTime>/g, obj, "specimenToLabDateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:Specimen.LabTestDataSet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LabTestDataSet", sub, context);
                base.parse_attribute (/<cim:Specimen.AssetTestSampleTaker\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetTestSampleTaker", sub, context);
                let bucket = context.parsed.Specimen;
                if (null == bucket)
                   context.parsed.Specimen = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Specimen", "specimenID", "specimenID",  base.from_string, fields);
                base.export_element (obj, "Specimen", "specimenSampleDateTime", "specimenSampleDateTime",  base.from_datetime, fields);
                base.export_element (obj, "Specimen", "ambientTemperatureAtSampling", "ambientTemperatureAtSampling",  base.from_string, fields);
                base.export_element (obj, "Specimen", "humidityAtSampling", "humidityAtSampling",  base.from_string, fields);
                base.export_element (obj, "Specimen", "specimenToLabDateTime", "specimenToLabDateTime",  base.from_datetime, fields);
                base.export_attributes (obj, "Specimen", "LabTestDataSet", "LabTestDataSet", fields);
                base.export_attribute (obj, "Specimen", "AssetTestSampleTaker", "AssetTestSampleTaker", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Specimen_collapse" aria-expanded="true" aria-controls="Specimen_collapse" style="margin-left: 10px;">Specimen</a></legend>
                    <div id="Specimen_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#specimenID}}<div><b>specimenID</b>: {{specimenID}}</div>{{/specimenID}}
                    {{#specimenSampleDateTime}}<div><b>specimenSampleDateTime</b>: {{specimenSampleDateTime}}</div>{{/specimenSampleDateTime}}
                    {{#ambientTemperatureAtSampling}}<div><b>ambientTemperatureAtSampling</b>: {{ambientTemperatureAtSampling}}</div>{{/ambientTemperatureAtSampling}}
                    {{#humidityAtSampling}}<div><b>humidityAtSampling</b>: {{humidityAtSampling}}</div>{{/humidityAtSampling}}
                    {{#specimenToLabDateTime}}<div><b>specimenToLabDateTime</b>: {{specimenToLabDateTime}}</div>{{/specimenToLabDateTime}}
                    {{#LabTestDataSet}}<div><b>LabTestDataSet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LabTestDataSet}}
                    {{#AssetTestSampleTaker}}<div><b>AssetTestSampleTaker</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetTestSampleTaker}}");}); return false;'>{{AssetTestSampleTaker}}</a></div>{{/AssetTestSampleTaker}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["LabTestDataSet"]) obj["LabTestDataSet_string"] = obj["LabTestDataSet"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["LabTestDataSet_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Specimen_collapse" aria-expanded="true" aria-controls="{{id}}_Specimen_collapse" style="margin-left: 10px;">Specimen</a></legend>
                    <div id="{{id}}_Specimen_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specimenID'>specimenID: </label><div class='col-sm-8'><input id='{{id}}_specimenID' class='form-control' type='text'{{#specimenID}} value='{{specimenID}}'{{/specimenID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specimenSampleDateTime'>specimenSampleDateTime: </label><div class='col-sm-8'><input id='{{id}}_specimenSampleDateTime' class='form-control' type='text'{{#specimenSampleDateTime}} value='{{specimenSampleDateTime}}'{{/specimenSampleDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ambientTemperatureAtSampling'>ambientTemperatureAtSampling: </label><div class='col-sm-8'><input id='{{id}}_ambientTemperatureAtSampling' class='form-control' type='text'{{#ambientTemperatureAtSampling}} value='{{ambientTemperatureAtSampling}}'{{/ambientTemperatureAtSampling}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_humidityAtSampling'>humidityAtSampling: </label><div class='col-sm-8'><input id='{{id}}_humidityAtSampling' class='form-control' type='text'{{#humidityAtSampling}} value='{{humidityAtSampling}}'{{/humidityAtSampling}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specimenToLabDateTime'>specimenToLabDateTime: </label><div class='col-sm-8'><input id='{{id}}_specimenToLabDateTime' class='form-control' type='text'{{#specimenToLabDateTime}} value='{{specimenToLabDateTime}}'{{/specimenToLabDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetTestSampleTaker'>AssetTestSampleTaker: </label><div class='col-sm-8'><input id='{{id}}_AssetTestSampleTaker' class='form-control' type='text'{{#AssetTestSampleTaker}} value='{{AssetTestSampleTaker}}'{{/AssetTestSampleTaker}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Specimen" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_specimenID").value; if ("" !== temp) obj["specimenID"] = temp;
                temp = document.getElementById (id + "_specimenSampleDateTime").value; if ("" !== temp) obj["specimenSampleDateTime"] = temp;
                temp = document.getElementById (id + "_ambientTemperatureAtSampling").value; if ("" !== temp) obj["ambientTemperatureAtSampling"] = temp;
                temp = document.getElementById (id + "_humidityAtSampling").value; if ("" !== temp) obj["humidityAtSampling"] = temp;
                temp = document.getElementById (id + "_specimenToLabDateTime").value; if ("" !== temp) obj["specimenToLabDateTime"] = temp;
                temp = document.getElementById (id + "_AssetTestSampleTaker").value; if ("" !== temp) obj["AssetTestSampleTaker"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LabTestDataSet", "0..*", "0..1", "LabTestDataSet", "Specimen"],
                            ["AssetTestSampleTaker", "0..1", "0..*", "AssetTestSampleTaker", "Specimen"]
                        ]
                    )
                );
            }
        }

        /**
         * a Assets that may be used for planning, work or design purposes.
         *
         */
        class CatalogAssetType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CatalogAssetType;
                if (null == bucket)
                   cim_data.CatalogAssetType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CatalogAssetType[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CatalogAssetType";
                base.parse_element (/<cim:CatalogAssetType.estimatedUnitCost>([\s\S]*?)<\/cim:CatalogAssetType.estimatedUnitCost>/g, obj, "estimatedUnitCost", base.to_string, sub, context);
                base.parse_attribute (/<cim:CatalogAssetType.quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "quantity", sub, context);
                base.parse_attribute (/<cim:CatalogAssetType.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:CatalogAssetType.stockItem>([\s\S]*?)<\/cim:CatalogAssetType.stockItem>/g, obj, "stockItem", base.to_boolean, sub, context);
                base.parse_element (/<cim:CatalogAssetType.type>([\s\S]*?)<\/cim:CatalogAssetType.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:CatalogAssetType.ErpInventoryIssues\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInventoryIssues", sub, context);
                base.parse_attributes (/<cim:CatalogAssetType.ErpBomItemDatas\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpBomItemDatas", sub, context);
                base.parse_attribute (/<cim:CatalogAssetType.TypeAssetCatalogue\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeAssetCatalogue", sub, context);
                base.parse_attribute (/<cim:CatalogAssetType.AssetInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetInfo", sub, context);
                base.parse_attributes (/<cim:CatalogAssetType.ErpReqLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItems", sub, context);
                base.parse_attributes (/<cim:CatalogAssetType.ProductAssetModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModel", sub, context);
                base.parse_attributes (/<cim:CatalogAssetType.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                let bucket = context.parsed.CatalogAssetType;
                if (null == bucket)
                   context.parsed.CatalogAssetType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CatalogAssetType", "estimatedUnitCost", "estimatedUnitCost",  base.from_string, fields);
                base.export_attribute (obj, "CatalogAssetType", "quantity", "quantity", fields);
                base.export_attribute (obj, "CatalogAssetType", "kind", "kind", fields);
                base.export_element (obj, "CatalogAssetType", "stockItem", "stockItem",  base.from_boolean, fields);
                base.export_element (obj, "CatalogAssetType", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "CatalogAssetType", "ErpInventoryIssues", "ErpInventoryIssues", fields);
                base.export_attributes (obj, "CatalogAssetType", "ErpBomItemDatas", "ErpBomItemDatas", fields);
                base.export_attribute (obj, "CatalogAssetType", "TypeAssetCatalogue", "TypeAssetCatalogue", fields);
                base.export_attribute (obj, "CatalogAssetType", "AssetInfo", "AssetInfo", fields);
                base.export_attributes (obj, "CatalogAssetType", "ErpReqLineItems", "ErpReqLineItems", fields);
                base.export_attributes (obj, "CatalogAssetType", "ProductAssetModel", "ProductAssetModel", fields);
                base.export_attributes (obj, "CatalogAssetType", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CatalogAssetType_collapse" aria-expanded="true" aria-controls="CatalogAssetType_collapse" style="margin-left: 10px;">CatalogAssetType</a></legend>
                    <div id="CatalogAssetType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#estimatedUnitCost}}<div><b>estimatedUnitCost</b>: {{estimatedUnitCost}}</div>{{/estimatedUnitCost}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#stockItem}}<div><b>stockItem</b>: {{stockItem}}</div>{{/stockItem}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#ErpInventoryIssues}}<div><b>ErpInventoryIssues</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpInventoryIssues}}
                    {{#ErpBomItemDatas}}<div><b>ErpBomItemDatas</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpBomItemDatas}}
                    {{#TypeAssetCatalogue}}<div><b>TypeAssetCatalogue</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TypeAssetCatalogue}}");}); return false;'>{{TypeAssetCatalogue}}</a></div>{{/TypeAssetCatalogue}}
                    {{#AssetInfo}}<div><b>AssetInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetInfo}}");}); return false;'>{{AssetInfo}}</a></div>{{/AssetInfo}}
                    {{#ErpReqLineItems}}<div><b>ErpReqLineItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpReqLineItems}}
                    {{#ProductAssetModel}}<div><b>ProductAssetModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProductAssetModel}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindAssetKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in AssetKind) obj["kindAssetKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["ErpInventoryIssues"]) obj["ErpInventoryIssues_string"] = obj["ErpInventoryIssues"].join ();
                if (obj["ErpBomItemDatas"]) obj["ErpBomItemDatas_string"] = obj["ErpBomItemDatas"].join ();
                if (obj["ErpReqLineItems"]) obj["ErpReqLineItems_string"] = obj["ErpReqLineItems"].join ();
                if (obj["ProductAssetModel"]) obj["ProductAssetModel_string"] = obj["ProductAssetModel"].join ();
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindAssetKind"];
                delete obj["ErpInventoryIssues_string"];
                delete obj["ErpBomItemDatas_string"];
                delete obj["ErpReqLineItems_string"];
                delete obj["ProductAssetModel_string"];
                delete obj["CompatibleUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CatalogAssetType_collapse" aria-expanded="true" aria-controls="{{id}}_CatalogAssetType_collapse" style="margin-left: 10px;">CatalogAssetType</a></legend>
                    <div id="{{id}}_CatalogAssetType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_estimatedUnitCost'>estimatedUnitCost: </label><div class='col-sm-8'><input id='{{id}}_estimatedUnitCost' class='form-control' type='text'{{#estimatedUnitCost}} value='{{estimatedUnitCost}}'{{/estimatedUnitCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindAssetKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindAssetKind}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_stockItem'>stockItem: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_stockItem' class='form-check-input' type='checkbox'{{#stockItem}} checked{{/stockItem}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeAssetCatalogue'>TypeAssetCatalogue: </label><div class='col-sm-8'><input id='{{id}}_TypeAssetCatalogue' class='form-control' type='text'{{#TypeAssetCatalogue}} value='{{TypeAssetCatalogue}}'{{/TypeAssetCatalogue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetInfo'>AssetInfo: </label><div class='col-sm-8'><input id='{{id}}_AssetInfo' class='form-control' type='text'{{#AssetInfo}} value='{{AssetInfo}}'{{/AssetInfo}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CatalogAssetType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_estimatedUnitCost").value; if ("" !== temp) obj["estimatedUnitCost"] = temp;
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = AssetKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AssetKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_stockItem").checked; if (temp) obj["stockItem"] = true;
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_TypeAssetCatalogue").value; if ("" !== temp) obj["TypeAssetCatalogue"] = temp;
                temp = document.getElementById (id + "_AssetInfo").value; if ("" !== temp) obj["AssetInfo"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpInventoryIssues", "0..*", "0..1", "ErpIssueInventory", "TypeAsset"],
                            ["ErpBomItemDatas", "0..*", "0..1", "ErpBomItemData", "TypeAsset"],
                            ["TypeAssetCatalogue", "0..1", "0..*", "TypeAssetCatalogue", "TypeAssets"],
                            ["AssetInfo", "0..1", "0..1", "AssetInfo", "CatalogAssetType"],
                            ["ErpReqLineItems", "0..*", "0..1", "ErpReqLineItem", "TypeAsset"],
                            ["ProductAssetModel", "0..*", "0..1", "ProductAssetModel", "CatalogAssetType"],
                            ["CompatibleUnits", "0..*", "0..1", "CompatibleUnit", "GenericAssetModel"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by Laborelec.
         *
         */
        class LaborelecStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LaborelecStandard;
                if (null == bucket)
                   cim_data.LaborelecStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LaborelecStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LaborelecStandard";
                base.parse_attribute (/<cim:LaborelecStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:LaborelecStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.LaborelecStandard;
                if (null == bucket)
                   context.parsed.LaborelecStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "LaborelecStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "LaborelecStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LaborelecStandard_collapse" aria-expanded="true" aria-controls="LaborelecStandard_collapse" style="margin-left: 10px;">LaborelecStandard</a></legend>
                    <div id="LaborelecStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberLaborelecStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in LaborelecStandardKind) obj["standardNumberLaborelecStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionLaborelecStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in LaborelecStandardEditionKind) obj["standardEditionLaborelecStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberLaborelecStandardKind"];
                delete obj["standardEditionLaborelecStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LaborelecStandard_collapse" aria-expanded="true" aria-controls="{{id}}_LaborelecStandard_collapse" style="margin-left: 10px;">LaborelecStandard</a></legend>
                    <div id="{{id}}_LaborelecStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberLaborelecStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberLaborelecStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionLaborelecStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionLaborelecStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LaborelecStandard" };
                super.submit (id, obj);
                temp = LaborelecStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#LaborelecStandardKind." + temp; else delete obj["standardNumber"];
                temp = LaborelecStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#LaborelecStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * Dates for deployment events of an asset.
         *
         * May have multiple deployment type dates for this device and a compound type allows a query to return multiple dates.
         *
         */
        class DeploymentDate extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DeploymentDate;
                if (null == bucket)
                   cim_data.DeploymentDate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DeploymentDate[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DeploymentDate";
                base.parse_element (/<cim:DeploymentDate.notYetInstalledDate>([\s\S]*?)<\/cim:DeploymentDate.notYetInstalledDate>/g, obj, "notYetInstalledDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:DeploymentDate.installedDate>([\s\S]*?)<\/cim:DeploymentDate.installedDate>/g, obj, "installedDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:DeploymentDate.inServiceDate>([\s\S]*?)<\/cim:DeploymentDate.inServiceDate>/g, obj, "inServiceDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:DeploymentDate.outOfServiceDate>([\s\S]*?)<\/cim:DeploymentDate.outOfServiceDate>/g, obj, "outOfServiceDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:DeploymentDate.removedDate>([\s\S]*?)<\/cim:DeploymentDate.removedDate>/g, obj, "removedDate", base.to_datetime, sub, context);
                let bucket = context.parsed.DeploymentDate;
                if (null == bucket)
                   context.parsed.DeploymentDate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "DeploymentDate", "notYetInstalledDate", "notYetInstalledDate",  base.from_datetime, fields);
                base.export_element (obj, "DeploymentDate", "installedDate", "installedDate",  base.from_datetime, fields);
                base.export_element (obj, "DeploymentDate", "inServiceDate", "inServiceDate",  base.from_datetime, fields);
                base.export_element (obj, "DeploymentDate", "outOfServiceDate", "outOfServiceDate",  base.from_datetime, fields);
                base.export_element (obj, "DeploymentDate", "removedDate", "removedDate",  base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DeploymentDate_collapse" aria-expanded="true" aria-controls="DeploymentDate_collapse" style="margin-left: 10px;">DeploymentDate</a></legend>
                    <div id="DeploymentDate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#notYetInstalledDate}}<div><b>notYetInstalledDate</b>: {{notYetInstalledDate}}</div>{{/notYetInstalledDate}}
                    {{#installedDate}}<div><b>installedDate</b>: {{installedDate}}</div>{{/installedDate}}
                    {{#inServiceDate}}<div><b>inServiceDate</b>: {{inServiceDate}}</div>{{/inServiceDate}}
                    {{#outOfServiceDate}}<div><b>outOfServiceDate</b>: {{outOfServiceDate}}</div>{{/outOfServiceDate}}
                    {{#removedDate}}<div><b>removedDate</b>: {{removedDate}}</div>{{/removedDate}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DeploymentDate_collapse" aria-expanded="true" aria-controls="{{id}}_DeploymentDate_collapse" style="margin-left: 10px;">DeploymentDate</a></legend>
                    <div id="{{id}}_DeploymentDate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_notYetInstalledDate'>notYetInstalledDate: </label><div class='col-sm-8'><input id='{{id}}_notYetInstalledDate' class='form-control' type='text'{{#notYetInstalledDate}} value='{{notYetInstalledDate}}'{{/notYetInstalledDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_installedDate'>installedDate: </label><div class='col-sm-8'><input id='{{id}}_installedDate' class='form-control' type='text'{{#installedDate}} value='{{installedDate}}'{{/installedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inServiceDate'>inServiceDate: </label><div class='col-sm-8'><input id='{{id}}_inServiceDate' class='form-control' type='text'{{#inServiceDate}} value='{{inServiceDate}}'{{/inServiceDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_outOfServiceDate'>outOfServiceDate: </label><div class='col-sm-8'><input id='{{id}}_outOfServiceDate' class='form-control' type='text'{{#outOfServiceDate}} value='{{outOfServiceDate}}'{{/outOfServiceDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_removedDate'>removedDate: </label><div class='col-sm-8'><input id='{{id}}_removedDate' class='form-control' type='text'{{#removedDate}} value='{{removedDate}}'{{/removedDate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DeploymentDate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_notYetInstalledDate").value; if ("" !== temp) obj["notYetInstalledDate"] = temp;
                temp = document.getElementById (id + "_installedDate").value; if ("" !== temp) obj["installedDate"] = temp;
                temp = document.getElementById (id + "_inServiceDate").value; if ("" !== temp) obj["inServiceDate"] = temp;
                temp = document.getElementById (id + "_outOfServiceDate").value; if ("" !== temp) obj["outOfServiceDate"] = temp;
                temp = document.getElementById (id + "_removedDate").value; if ("" !== temp) obj["removedDate"] = temp;

                return (obj);
            }
        }

        /**
         * An asset health-related event that is created by an analytic.
         *
         * The event is a record of a change in asset health.
         *
         */
        class AssetHealthEvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetHealthEvent;
                if (null == bucket)
                   cim_data.AssetHealthEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetHealthEvent[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "AssetHealthEvent";
                base.parse_element (/<cim:AssetHealthEvent.actionRecommendation>([\s\S]*?)<\/cim:AssetHealthEvent.actionRecommendation>/g, obj, "actionRecommendation", base.to_string, sub, context);
                base.parse_element (/<cim:AssetHealthEvent.actionTimeline>([\s\S]*?)<\/cim:AssetHealthEvent.actionTimeline>/g, obj, "actionTimeline", base.to_string, sub, context);
                base.parse_element (/<cim:AssetHealthEvent.effectiveDateTime>([\s\S]*?)<\/cim:AssetHealthEvent.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:AssetHealthEvent.Analytic\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Analytic", sub, context);
                let bucket = context.parsed.AssetHealthEvent;
                if (null == bucket)
                   context.parsed.AssetHealthEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_element (obj, "AssetHealthEvent", "actionRecommendation", "actionRecommendation",  base.from_string, fields);
                base.export_element (obj, "AssetHealthEvent", "actionTimeline", "actionTimeline",  base.from_string, fields);
                base.export_element (obj, "AssetHealthEvent", "effectiveDateTime", "effectiveDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "AssetHealthEvent", "Analytic", "Analytic", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetHealthEvent_collapse" aria-expanded="true" aria-controls="AssetHealthEvent_collapse" style="margin-left: 10px;">AssetHealthEvent</a></legend>
                    <div id="AssetHealthEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#actionRecommendation}}<div><b>actionRecommendation</b>: {{actionRecommendation}}</div>{{/actionRecommendation}}
                    {{#actionTimeline}}<div><b>actionTimeline</b>: {{actionTimeline}}</div>{{/actionTimeline}}
                    {{#effectiveDateTime}}<div><b>effectiveDateTime</b>: {{effectiveDateTime}}</div>{{/effectiveDateTime}}
                    {{#Analytic}}<div><b>Analytic</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Analytic}}");}); return false;'>{{Analytic}}</a></div>{{/Analytic}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetHealthEvent_collapse" aria-expanded="true" aria-controls="{{id}}_AssetHealthEvent_collapse" style="margin-left: 10px;">AssetHealthEvent</a></legend>
                    <div id="{{id}}_AssetHealthEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actionRecommendation'>actionRecommendation: </label><div class='col-sm-8'><input id='{{id}}_actionRecommendation' class='form-control' type='text'{{#actionRecommendation}} value='{{actionRecommendation}}'{{/actionRecommendation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actionTimeline'>actionTimeline: </label><div class='col-sm-8'><input id='{{id}}_actionTimeline' class='form-control' type='text'{{#actionTimeline}} value='{{actionTimeline}}'{{/actionTimeline}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDateTime'>effectiveDateTime: </label><div class='col-sm-8'><input id='{{id}}_effectiveDateTime' class='form-control' type='text'{{#effectiveDateTime}} value='{{effectiveDateTime}}'{{/effectiveDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Analytic'>Analytic: </label><div class='col-sm-8'><input id='{{id}}_Analytic' class='form-control' type='text'{{#Analytic}} value='{{Analytic}}'{{/Analytic}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetHealthEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_actionRecommendation").value; if ("" !== temp) obj["actionRecommendation"] = temp;
                temp = document.getElementById (id + "_actionTimeline").value; if ("" !== temp) obj["actionTimeline"] = temp;
                temp = document.getElementById (id + "_effectiveDateTime").value; if ("" !== temp) obj["effectiveDateTime"] = temp;
                temp = document.getElementById (id + "_Analytic").value; if ("" !== temp) obj["Analytic"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Analytic", "1", "0..*", "Analytic", "AssetHealthEvent"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by IEC (International Electrotechnical Commission).
         *
         */
        class IECStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.IECStandard;
                if (null == bucket)
                   cim_data.IECStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IECStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IECStandard";
                base.parse_attribute (/<cim:IECStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:IECStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.IECStandard;
                if (null == bucket)
                   context.parsed.IECStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "IECStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "IECStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IECStandard_collapse" aria-expanded="true" aria-controls="IECStandard_collapse" style="margin-left: 10px;">IECStandard</a></legend>
                    <div id="IECStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberIECStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in IECStandardKind) obj["standardNumberIECStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionIECStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in IECStandardEditionKind) obj["standardEditionIECStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberIECStandardKind"];
                delete obj["standardEditionIECStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IECStandard_collapse" aria-expanded="true" aria-controls="{{id}}_IECStandard_collapse" style="margin-left: 10px;">IECStandard</a></legend>
                    <div id="{{id}}_IECStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberIECStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberIECStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionIECStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionIECStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "IECStandard" };
                super.submit (id, obj);
                temp = IECStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#IECStandardKind." + temp; else delete obj["standardNumber"];
                temp = IECStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#IECStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * A grouping of assets created for a purpose such as fleet analytics, inventory or compliance management.
         *
         */
        class AssetGroup extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetGroup;
                if (null == bucket)
                   cim_data.AssetGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetGroup[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "AssetGroup";
                base.parse_attribute (/<cim:AssetGroup.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:AssetGroup.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attributes (/<cim:AssetGroup.Analytic\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Analytic", sub, context);
                base.parse_attributes (/<cim:AssetGroup.AnalyticScore\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AnalyticScore", sub, context);
                let bucket = context.parsed.AssetGroup;
                if (null == bucket)
                   context.parsed.AssetGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AssetGroup", "kind", "kind", fields);
                base.export_attributes (obj, "AssetGroup", "Asset", "Asset", fields);
                base.export_attributes (obj, "AssetGroup", "Analytic", "Analytic", fields);
                base.export_attributes (obj, "AssetGroup", "AnalyticScore", "AnalyticScore", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetGroup_collapse" aria-expanded="true" aria-controls="AssetGroup_collapse" style="margin-left: 10px;">AssetGroup</a></legend>
                    <div id="AssetGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Asset}}
                    {{#Analytic}}<div><b>Analytic</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Analytic}}
                    {{#AnalyticScore}}<div><b>AnalyticScore</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AnalyticScore}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindAssetGroupKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in AssetGroupKind) obj["kindAssetGroupKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["Asset"]) obj["Asset_string"] = obj["Asset"].join ();
                if (obj["Analytic"]) obj["Analytic_string"] = obj["Analytic"].join ();
                if (obj["AnalyticScore"]) obj["AnalyticScore_string"] = obj["AnalyticScore"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindAssetGroupKind"];
                delete obj["Asset_string"];
                delete obj["Analytic_string"];
                delete obj["AnalyticScore_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetGroup_collapse" aria-expanded="true" aria-controls="{{id}}_AssetGroup_collapse" style="margin-left: 10px;">AssetGroup</a></legend>
                    <div id="{{id}}_AssetGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindAssetGroupKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindAssetGroupKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset_string}}'{{/Asset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Analytic'>Analytic: </label><div class='col-sm-8'><input id='{{id}}_Analytic' class='form-control' type='text'{{#Analytic}} value='{{Analytic_string}}'{{/Analytic}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetGroup" };
                super.submit (id, obj);
                temp = AssetGroupKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AssetGroupKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp.split (",");
                temp = document.getElementById (id + "_Analytic").value; if ("" !== temp) obj["Analytic"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Asset", "0..*", "0..*", "Asset", "AssetGroup"],
                            ["Analytic", "0..*", "0..*", "Analytic", "AssetGroup"],
                            ["AnalyticScore", "0..*", "0..1", "AnalyticScore", "AssetGroup"]
                        ]
                    )
                );
            }
        }

        /**
         * Physically controls access to AssetContainers.
         *
         */
        class Seal extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Seal;
                if (null == bucket)
                   cim_data.Seal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Seal[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Seal";
                base.parse_element (/<cim:Seal.sealNumber>([\s\S]*?)<\/cim:Seal.sealNumber>/g, obj, "sealNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:Seal.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:Seal.condition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "condition", sub, context);
                base.parse_element (/<cim:Seal.appliedDateTime>([\s\S]*?)<\/cim:Seal.appliedDateTime>/g, obj, "appliedDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Seal.AssetContainer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetContainer", sub, context);
                let bucket = context.parsed.Seal;
                if (null == bucket)
                   context.parsed.Seal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Seal", "sealNumber", "sealNumber",  base.from_string, fields);
                base.export_attribute (obj, "Seal", "kind", "kind", fields);
                base.export_attribute (obj, "Seal", "condition", "condition", fields);
                base.export_element (obj, "Seal", "appliedDateTime", "appliedDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "Seal", "AssetContainer", "AssetContainer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Seal_collapse" aria-expanded="true" aria-controls="Seal_collapse" style="margin-left: 10px;">Seal</a></legend>
                    <div id="Seal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#sealNumber}}<div><b>sealNumber</b>: {{sealNumber}}</div>{{/sealNumber}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#condition}}<div><b>condition</b>: {{condition}}</div>{{/condition}}
                    {{#appliedDateTime}}<div><b>appliedDateTime</b>: {{appliedDateTime}}</div>{{/appliedDateTime}}
                    {{#AssetContainer}}<div><b>AssetContainer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetContainer}}");}); return false;'>{{AssetContainer}}</a></div>{{/AssetContainer}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindSealKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in SealKind) obj["kindSealKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                obj["conditionSealConditionKind"] = [{ id: '', selected: (!obj["condition"])}]; for (let property in SealConditionKind) obj["conditionSealConditionKind"].push ({ id: property, selected: obj["condition"] && obj["condition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindSealKind"];
                delete obj["conditionSealConditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Seal_collapse" aria-expanded="true" aria-controls="{{id}}_Seal_collapse" style="margin-left: 10px;">Seal</a></legend>
                    <div id="{{id}}_Seal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sealNumber'>sealNumber: </label><div class='col-sm-8'><input id='{{id}}_sealNumber' class='form-control' type='text'{{#sealNumber}} value='{{sealNumber}}'{{/sealNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindSealKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindSealKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_condition'>condition: </label><div class='col-sm-8'><select id='{{id}}_condition' class='form-control custom-select'>{{#conditionSealConditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/conditionSealConditionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_appliedDateTime'>appliedDateTime: </label><div class='col-sm-8'><input id='{{id}}_appliedDateTime' class='form-control' type='text'{{#appliedDateTime}} value='{{appliedDateTime}}'{{/appliedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetContainer'>AssetContainer: </label><div class='col-sm-8'><input id='{{id}}_AssetContainer' class='form-control' type='text'{{#AssetContainer}} value='{{AssetContainer}}'{{/AssetContainer}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Seal" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sealNumber").value; if ("" !== temp) obj["sealNumber"] = temp;
                temp = SealKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#SealKind." + temp; else delete obj["kind"];
                temp = SealConditionKind[document.getElementById (id + "_condition").value]; if (temp) obj["condition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#SealConditionKind." + temp; else delete obj["condition"];
                temp = document.getElementById (id + "_appliedDateTime").value; if ("" !== temp) obj["appliedDateTime"] = temp;
                temp = document.getElementById (id + "_AssetContainer").value; if ("" !== temp) obj["AssetContainer"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetContainer", "0..1", "0..*", "AssetContainer", "Seals"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by TAPPI.
         *
         */
        class TAPPIStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TAPPIStandard;
                if (null == bucket)
                   cim_data.TAPPIStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TAPPIStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TAPPIStandard";
                base.parse_attribute (/<cim:TAPPIStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:TAPPIStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.TAPPIStandard;
                if (null == bucket)
                   context.parsed.TAPPIStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "TAPPIStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "TAPPIStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TAPPIStandard_collapse" aria-expanded="true" aria-controls="TAPPIStandard_collapse" style="margin-left: 10px;">TAPPIStandard</a></legend>
                    <div id="TAPPIStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberTAPPIStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in TAPPIStandardKind) obj["standardNumberTAPPIStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionTAPPIStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in TAPPIStandardEditionKind) obj["standardEditionTAPPIStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberTAPPIStandardKind"];
                delete obj["standardEditionTAPPIStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TAPPIStandard_collapse" aria-expanded="true" aria-controls="{{id}}_TAPPIStandard_collapse" style="margin-left: 10px;">TAPPIStandard</a></legend>
                    <div id="{{id}}_TAPPIStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberTAPPIStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberTAPPIStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionTAPPIStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionTAPPIStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TAPPIStandard" };
                super.submit (id, obj);
                temp = TAPPIStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TAPPIStandardKind." + temp; else delete obj["standardNumber"];
                temp = TAPPIStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TAPPIStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * Up-to-date, of-record summary of switch operation information, distilled from a variety of sources (real-time data or real-time data historian, field inspections, etc.) of use to asset health analytics.
         *
         */
        class SwitchOperationSummary extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchOperationSummary;
                if (null == bucket)
                   cim_data.SwitchOperationSummary = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchOperationSummary[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchOperationSummary";
                base.parse_element (/<cim:SwitchOperationSummary.lifetimeTotalOperations>([\s\S]*?)<\/cim:SwitchOperationSummary.lifetimeTotalOperations>/g, obj, "lifetimeTotalOperations", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchOperationSummary.lifetimeFaultOperations>([\s\S]*?)<\/cim:SwitchOperationSummary.lifetimeFaultOperations>/g, obj, "lifetimeFaultOperations", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchOperationSummary.lifetimeMotorStarts>([\s\S]*?)<\/cim:SwitchOperationSummary.lifetimeMotorStarts>/g, obj, "lifetimeMotorStarts", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchOperationSummary.mostRecentOperationDate>([\s\S]*?)<\/cim:SwitchOperationSummary.mostRecentOperationDate>/g, obj, "mostRecentOperationDate", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchOperationSummary.mostRecentFaultOperationDate>([\s\S]*?)<\/cim:SwitchOperationSummary.mostRecentFaultOperationDate>/g, obj, "mostRecentFaultOperationDate", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchOperationSummary.mostRecentMotorStartDate>([\s\S]*?)<\/cim:SwitchOperationSummary.mostRecentMotorStartDate>/g, obj, "mostRecentMotorStartDate", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchOperationSummary.Breaker\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Breaker", sub, context);
                let bucket = context.parsed.SwitchOperationSummary;
                if (null == bucket)
                   context.parsed.SwitchOperationSummary = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchOperationSummary", "lifetimeTotalOperations", "lifetimeTotalOperations",  base.from_string, fields);
                base.export_element (obj, "SwitchOperationSummary", "lifetimeFaultOperations", "lifetimeFaultOperations",  base.from_string, fields);
                base.export_element (obj, "SwitchOperationSummary", "lifetimeMotorStarts", "lifetimeMotorStarts",  base.from_string, fields);
                base.export_element (obj, "SwitchOperationSummary", "mostRecentOperationDate", "mostRecentOperationDate",  base.from_string, fields);
                base.export_element (obj, "SwitchOperationSummary", "mostRecentFaultOperationDate", "mostRecentFaultOperationDate",  base.from_string, fields);
                base.export_element (obj, "SwitchOperationSummary", "mostRecentMotorStartDate", "mostRecentMotorStartDate",  base.from_string, fields);
                base.export_attribute (obj, "SwitchOperationSummary", "Breaker", "Breaker", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchOperationSummary_collapse" aria-expanded="true" aria-controls="SwitchOperationSummary_collapse" style="margin-left: 10px;">SwitchOperationSummary</a></legend>
                    <div id="SwitchOperationSummary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#lifetimeTotalOperations}}<div><b>lifetimeTotalOperations</b>: {{lifetimeTotalOperations}}</div>{{/lifetimeTotalOperations}}
                    {{#lifetimeFaultOperations}}<div><b>lifetimeFaultOperations</b>: {{lifetimeFaultOperations}}</div>{{/lifetimeFaultOperations}}
                    {{#lifetimeMotorStarts}}<div><b>lifetimeMotorStarts</b>: {{lifetimeMotorStarts}}</div>{{/lifetimeMotorStarts}}
                    {{#mostRecentOperationDate}}<div><b>mostRecentOperationDate</b>: {{mostRecentOperationDate}}</div>{{/mostRecentOperationDate}}
                    {{#mostRecentFaultOperationDate}}<div><b>mostRecentFaultOperationDate</b>: {{mostRecentFaultOperationDate}}</div>{{/mostRecentFaultOperationDate}}
                    {{#mostRecentMotorStartDate}}<div><b>mostRecentMotorStartDate</b>: {{mostRecentMotorStartDate}}</div>{{/mostRecentMotorStartDate}}
                    {{#Breaker}}<div><b>Breaker</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Breaker}}");}); return false;'>{{Breaker}}</a></div>{{/Breaker}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchOperationSummary_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchOperationSummary_collapse" style="margin-left: 10px;">SwitchOperationSummary</a></legend>
                    <div id="{{id}}_SwitchOperationSummary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lifetimeTotalOperations'>lifetimeTotalOperations: </label><div class='col-sm-8'><input id='{{id}}_lifetimeTotalOperations' class='form-control' type='text'{{#lifetimeTotalOperations}} value='{{lifetimeTotalOperations}}'{{/lifetimeTotalOperations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lifetimeFaultOperations'>lifetimeFaultOperations: </label><div class='col-sm-8'><input id='{{id}}_lifetimeFaultOperations' class='form-control' type='text'{{#lifetimeFaultOperations}} value='{{lifetimeFaultOperations}}'{{/lifetimeFaultOperations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lifetimeMotorStarts'>lifetimeMotorStarts: </label><div class='col-sm-8'><input id='{{id}}_lifetimeMotorStarts' class='form-control' type='text'{{#lifetimeMotorStarts}} value='{{lifetimeMotorStarts}}'{{/lifetimeMotorStarts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mostRecentOperationDate'>mostRecentOperationDate: </label><div class='col-sm-8'><input id='{{id}}_mostRecentOperationDate' class='form-control' type='text'{{#mostRecentOperationDate}} value='{{mostRecentOperationDate}}'{{/mostRecentOperationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mostRecentFaultOperationDate'>mostRecentFaultOperationDate: </label><div class='col-sm-8'><input id='{{id}}_mostRecentFaultOperationDate' class='form-control' type='text'{{#mostRecentFaultOperationDate}} value='{{mostRecentFaultOperationDate}}'{{/mostRecentFaultOperationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mostRecentMotorStartDate'>mostRecentMotorStartDate: </label><div class='col-sm-8'><input id='{{id}}_mostRecentMotorStartDate' class='form-control' type='text'{{#mostRecentMotorStartDate}} value='{{mostRecentMotorStartDate}}'{{/mostRecentMotorStartDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Breaker'>Breaker: </label><div class='col-sm-8'><input id='{{id}}_Breaker' class='form-control' type='text'{{#Breaker}} value='{{Breaker}}'{{/Breaker}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchOperationSummary" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lifetimeTotalOperations").value; if ("" !== temp) obj["lifetimeTotalOperations"] = temp;
                temp = document.getElementById (id + "_lifetimeFaultOperations").value; if ("" !== temp) obj["lifetimeFaultOperations"] = temp;
                temp = document.getElementById (id + "_lifetimeMotorStarts").value; if ("" !== temp) obj["lifetimeMotorStarts"] = temp;
                temp = document.getElementById (id + "_mostRecentOperationDate").value; if ("" !== temp) obj["mostRecentOperationDate"] = temp;
                temp = document.getElementById (id + "_mostRecentFaultOperationDate").value; if ("" !== temp) obj["mostRecentFaultOperationDate"] = temp;
                temp = document.getElementById (id + "_mostRecentMotorStartDate").value; if ("" !== temp) obj["mostRecentMotorStartDate"] = temp;
                temp = document.getElementById (id + "_Breaker").value; if ("" !== temp) obj["Breaker"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Breaker", "1", "0..1", "Asset", "BreakerOperation"]
                        ]
                    )
                );
            }
        }

        /**
         * Role an organisation plays with respect to asset.
         *
         */
        class AssetOrganisationRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetOrganisationRole;
                if (null == bucket)
                   cim_data.AssetOrganisationRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetOrganisationRole[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetOrganisationRole";
                base.parse_attributes (/<cim:AssetOrganisationRole.Assets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                let bucket = context.parsed.AssetOrganisationRole;
                if (null == bucket)
                   context.parsed.AssetOrganisationRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetOrganisationRole", "Assets", "Assets", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetOrganisationRole_collapse" aria-expanded="true" aria-controls="AssetOrganisationRole_collapse" style="margin-left: 10px;">AssetOrganisationRole</a></legend>
                    <div id="AssetOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Assets}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Assets"]) obj["Assets_string"] = obj["Assets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Assets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetOrganisationRole_collapse" aria-expanded="true" aria-controls="{{id}}_AssetOrganisationRole_collapse" style="margin-left: 10px;">AssetOrganisationRole</a></legend>
                    <div id="{{id}}_AssetOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetOrganisationRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Assets").value; if ("" !== temp) obj["Assets"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Assets", "0..*", "0..*", "Asset", "OrganisationRoles"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by CIGRE (Council on Large Electric Systems).
         *
         */
        class CIGREStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CIGREStandard;
                if (null == bucket)
                   cim_data.CIGREStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CIGREStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CIGREStandard";
                base.parse_attribute (/<cim:CIGREStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:CIGREStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.CIGREStandard;
                if (null == bucket)
                   context.parsed.CIGREStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "CIGREStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "CIGREStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CIGREStandard_collapse" aria-expanded="true" aria-controls="CIGREStandard_collapse" style="margin-left: 10px;">CIGREStandard</a></legend>
                    <div id="CIGREStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberCIGREStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in CIGREStandardKind) obj["standardNumberCIGREStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionCIGREStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in CIGREStandardEditionKind) obj["standardEditionCIGREStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberCIGREStandardKind"];
                delete obj["standardEditionCIGREStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CIGREStandard_collapse" aria-expanded="true" aria-controls="{{id}}_CIGREStandard_collapse" style="margin-left: 10px;">CIGREStandard</a></legend>
                    <div id="{{id}}_CIGREStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberCIGREStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberCIGREStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionCIGREStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionCIGREStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CIGREStandard" };
                super.submit (id, obj);
                temp = CIGREStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CIGREStandardKind." + temp; else delete obj["standardNumber"];
                temp = CIGREStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CIGREStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * Organisation that manufactures asset products.
         *
         */
        class Manufacturer extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Manufacturer;
                if (null == bucket)
                   cim_data.Manufacturer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Manufacturer[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "Manufacturer";
                base.parse_attributes (/<cim:Manufacturer.ProductAssetModels\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModels", sub, context);
                let bucket = context.parsed.Manufacturer;
                if (null == bucket)
                   context.parsed.Manufacturer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Manufacturer", "ProductAssetModels", "ProductAssetModels", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Manufacturer_collapse" aria-expanded="true" aria-controls="Manufacturer_collapse" style="margin-left: 10px;">Manufacturer</a></legend>
                    <div id="Manufacturer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#ProductAssetModels}}<div><b>ProductAssetModels</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProductAssetModels}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ProductAssetModels"]) obj["ProductAssetModels_string"] = obj["ProductAssetModels"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ProductAssetModels_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Manufacturer_collapse" aria-expanded="true" aria-controls="{{id}}_Manufacturer_collapse" style="margin-left: 10px;">Manufacturer</a></legend>
                    <div id="{{id}}_Manufacturer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Manufacturer" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProductAssetModels", "0..*", "0..1", "ProductAssetModel", "Manufacturer"]
                        ]
                    )
                );
            }
        }

        /**
         * An indicative scoring by an analytic that can be used to characterize the health of or the risk associated with one or more assets.
         *
         * The analytic score reflects the results of an execution of an analytic against an asset or group of assets.
         *
         */
        class AnalyticScore extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AnalyticScore;
                if (null == bucket)
                   cim_data.AnalyticScore = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AnalyticScore[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AnalyticScore";
                base.parse_element (/<cim:AnalyticScore.value>([\s\S]*?)<\/cim:AnalyticScore.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_element (/<cim:AnalyticScore.calculationDateTime>([\s\S]*?)<\/cim:AnalyticScore.calculationDateTime>/g, obj, "calculationDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:AnalyticScore.effectiveDateTime>([\s\S]*?)<\/cim:AnalyticScore.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:AnalyticScore.AssetAggregateScore\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetAggregateScore", sub, context);
                base.parse_attribute (/<cim:AnalyticScore.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attribute (/<cim:AnalyticScore.Analytic\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Analytic", sub, context);
                base.parse_attribute (/<cim:AnalyticScore.AssetGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetGroup", sub, context);
                let bucket = context.parsed.AnalyticScore;
                if (null == bucket)
                   context.parsed.AnalyticScore = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AnalyticScore", "value", "value",  base.from_float, fields);
                base.export_element (obj, "AnalyticScore", "calculationDateTime", "calculationDateTime",  base.from_datetime, fields);
                base.export_element (obj, "AnalyticScore", "effectiveDateTime", "effectiveDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "AnalyticScore", "AssetAggregateScore", "AssetAggregateScore", fields);
                base.export_attribute (obj, "AnalyticScore", "Asset", "Asset", fields);
                base.export_attribute (obj, "AnalyticScore", "Analytic", "Analytic", fields);
                base.export_attribute (obj, "AnalyticScore", "AssetGroup", "AssetGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AnalyticScore_collapse" aria-expanded="true" aria-controls="AnalyticScore_collapse" style="margin-left: 10px;">AnalyticScore</a></legend>
                    <div id="AnalyticScore_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#calculationDateTime}}<div><b>calculationDateTime</b>: {{calculationDateTime}}</div>{{/calculationDateTime}}
                    {{#effectiveDateTime}}<div><b>effectiveDateTime</b>: {{effectiveDateTime}}</div>{{/effectiveDateTime}}
                    {{#AssetAggregateScore}}<div><b>AssetAggregateScore</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetAggregateScore}}");}); return false;'>{{AssetAggregateScore}}</a></div>{{/AssetAggregateScore}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Asset}}");}); return false;'>{{Asset}}</a></div>{{/Asset}}
                    {{#Analytic}}<div><b>Analytic</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Analytic}}");}); return false;'>{{Analytic}}</a></div>{{/Analytic}}
                    {{#AssetGroup}}<div><b>AssetGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetGroup}}");}); return false;'>{{AssetGroup}}</a></div>{{/AssetGroup}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AnalyticScore_collapse" aria-expanded="true" aria-controls="{{id}}_AnalyticScore_collapse" style="margin-left: 10px;">AnalyticScore</a></legend>
                    <div id="{{id}}_AnalyticScore_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_calculationDateTime'>calculationDateTime: </label><div class='col-sm-8'><input id='{{id}}_calculationDateTime' class='form-control' type='text'{{#calculationDateTime}} value='{{calculationDateTime}}'{{/calculationDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDateTime'>effectiveDateTime: </label><div class='col-sm-8'><input id='{{id}}_effectiveDateTime' class='form-control' type='text'{{#effectiveDateTime}} value='{{effectiveDateTime}}'{{/effectiveDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetAggregateScore'>AssetAggregateScore: </label><div class='col-sm-8'><input id='{{id}}_AssetAggregateScore' class='form-control' type='text'{{#AssetAggregateScore}} value='{{AssetAggregateScore}}'{{/AssetAggregateScore}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Analytic'>Analytic: </label><div class='col-sm-8'><input id='{{id}}_Analytic' class='form-control' type='text'{{#Analytic}} value='{{Analytic}}'{{/Analytic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetGroup'>AssetGroup: </label><div class='col-sm-8'><input id='{{id}}_AssetGroup' class='form-control' type='text'{{#AssetGroup}} value='{{AssetGroup}}'{{/AssetGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AnalyticScore" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" !== temp) obj["value"] = temp;
                temp = document.getElementById (id + "_calculationDateTime").value; if ("" !== temp) obj["calculationDateTime"] = temp;
                temp = document.getElementById (id + "_effectiveDateTime").value; if ("" !== temp) obj["effectiveDateTime"] = temp;
                temp = document.getElementById (id + "_AssetAggregateScore").value; if ("" !== temp) obj["AssetAggregateScore"] = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp;
                temp = document.getElementById (id + "_Analytic").value; if ("" !== temp) obj["Analytic"] = temp;
                temp = document.getElementById (id + "_AssetGroup").value; if ("" !== temp) obj["AssetGroup"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetAggregateScore", "0..1", "1..*", "AggregateScore", "AnalyticScore"],
                            ["Asset", "0..1", "0..*", "Asset", "AnalyticScore"],
                            ["Analytic", "0..1", "0..*", "Analytic", "AnalyticScore"],
                            ["AssetGroup", "0..1", "0..*", "AssetGroup", "AnalyticScore"]
                        ]
                    )
                );
            }
        }

        /**
         * Standard published by EPA (United States Environmental Protection Agency).
         *
         */
        class EPAStandard extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EPAStandard;
                if (null == bucket)
                   cim_data.EPAStandard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EPAStandard[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EPAStandard";
                base.parse_attribute (/<cim:EPAStandard.standardNumber\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardNumber", sub, context);
                base.parse_attribute (/<cim:EPAStandard.standardEdition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardEdition", sub, context);
                let bucket = context.parsed.EPAStandard;
                if (null == bucket)
                   context.parsed.EPAStandard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "EPAStandard", "standardNumber", "standardNumber", fields);
                base.export_attribute (obj, "EPAStandard", "standardEdition", "standardEdition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EPAStandard_collapse" aria-expanded="true" aria-controls="EPAStandard_collapse" style="margin-left: 10px;">EPAStandard</a></legend>
                    <div id="EPAStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#standardNumber}}<div><b>standardNumber</b>: {{standardNumber}}</div>{{/standardNumber}}
                    {{#standardEdition}}<div><b>standardEdition</b>: {{standardEdition}}</div>{{/standardEdition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["standardNumberEPAStandardKind"] = [{ id: '', selected: (!obj["standardNumber"])}]; for (let property in EPAStandardKind) obj["standardNumberEPAStandardKind"].push ({ id: property, selected: obj["standardNumber"] && obj["standardNumber"].endsWith ('.' + property)});
                obj["standardEditionEPAStandardEditionKind"] = [{ id: '', selected: (!obj["standardEdition"])}]; for (let property in EPAStandardEditionKind) obj["standardEditionEPAStandardEditionKind"].push ({ id: property, selected: obj["standardEdition"] && obj["standardEdition"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["standardNumberEPAStandardKind"];
                delete obj["standardEditionEPAStandardEditionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EPAStandard_collapse" aria-expanded="true" aria-controls="{{id}}_EPAStandard_collapse" style="margin-left: 10px;">EPAStandard</a></legend>
                    <div id="{{id}}_EPAStandard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardNumber'>standardNumber: </label><div class='col-sm-8'><select id='{{id}}_standardNumber' class='form-control custom-select'>{{#standardNumberEPAStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardNumberEPAStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardEdition'>standardEdition: </label><div class='col-sm-8'><select id='{{id}}_standardEdition' class='form-control custom-select'>{{#standardEditionEPAStandardEditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/standardEditionEPAStandardEditionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EPAStandard" };
                super.submit (id, obj);
                temp = EPAStandardKind[document.getElementById (id + "_standardNumber").value]; if (temp) obj["standardNumber"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#EPAStandardKind." + temp; else delete obj["standardNumber"];
                temp = EPAStandardEditionKind[document.getElementById (id + "_standardEdition").value]; if (temp) obj["standardEdition"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#EPAStandardEditionKind." + temp; else delete obj["standardEdition"];

                return (obj);
            }
        }

        /**
         * An event where an asset has failed to perform its functions within specified parameters.
         *
         * This class is intended to reflect the failure itself. Additional information resulting from forensic analysis could be captured by a diagnosis data set.
         *
         */
        class FailureEvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FailureEvent;
                if (null == bucket)
                   cim_data.FailureEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FailureEvent[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "FailureEvent";
                base.parse_element (/<cim:FailureEvent.failureDateTime>([\s\S]*?)<\/cim:FailureEvent.failureDateTime>/g, obj, "failureDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:FailureEvent.failureClassification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "failureClassification", sub, context);
                base.parse_element (/<cim:FailureEvent.corporateCode>([\s\S]*?)<\/cim:FailureEvent.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);
                base.parse_attribute (/<cim:FailureEvent.failureMode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "failureMode", sub, context);
                base.parse_attribute (/<cim:FailureEvent.breakerFailureReason\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "breakerFailureReason", sub, context);
                base.parse_attribute (/<cim:FailureEvent.transformerFailureReason\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "transformerFailureReason", sub, context);
                base.parse_element (/<cim:FailureEvent.rootCause>([\s\S]*?)<\/cim:FailureEvent.rootCause>/g, obj, "rootCause", base.to_string, sub, context);
                base.parse_attribute (/<cim:FailureEvent.failureIsolationMethod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "failureIsolationMethod", sub, context);
                base.parse_element (/<cim:FailureEvent.faultLocatingMethod>([\s\S]*?)<\/cim:FailureEvent.faultLocatingMethod>/g, obj, "faultLocatingMethod", base.to_string, sub, context);
                base.parse_element (/<cim:FailureEvent.location>([\s\S]*?)<\/cim:FailureEvent.location>/g, obj, "location", base.to_string, sub, context);
                let bucket = context.parsed.FailureEvent;
                if (null == bucket)
                   context.parsed.FailureEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_element (obj, "FailureEvent", "failureDateTime", "failureDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "FailureEvent", "failureClassification", "failureClassification", fields);
                base.export_element (obj, "FailureEvent", "corporateCode", "corporateCode",  base.from_string, fields);
                base.export_attribute (obj, "FailureEvent", "failureMode", "failureMode", fields);
                base.export_attribute (obj, "FailureEvent", "breakerFailureReason", "breakerFailureReason", fields);
                base.export_attribute (obj, "FailureEvent", "transformerFailureReason", "transformerFailureReason", fields);
                base.export_element (obj, "FailureEvent", "rootCause", "rootCause",  base.from_string, fields);
                base.export_attribute (obj, "FailureEvent", "failureIsolationMethod", "failureIsolationMethod", fields);
                base.export_element (obj, "FailureEvent", "faultLocatingMethod", "faultLocatingMethod",  base.from_string, fields);
                base.export_element (obj, "FailureEvent", "location", "location",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FailureEvent_collapse" aria-expanded="true" aria-controls="FailureEvent_collapse" style="margin-left: 10px;">FailureEvent</a></legend>
                    <div id="FailureEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#failureDateTime}}<div><b>failureDateTime</b>: {{failureDateTime}}</div>{{/failureDateTime}}
                    {{#failureClassification}}<div><b>failureClassification</b>: {{failureClassification}}</div>{{/failureClassification}}
                    {{#corporateCode}}<div><b>corporateCode</b>: {{corporateCode}}</div>{{/corporateCode}}
                    {{#failureMode}}<div><b>failureMode</b>: {{failureMode}}</div>{{/failureMode}}
                    {{#breakerFailureReason}}<div><b>breakerFailureReason</b>: {{breakerFailureReason}}</div>{{/breakerFailureReason}}
                    {{#transformerFailureReason}}<div><b>transformerFailureReason</b>: {{transformerFailureReason}}</div>{{/transformerFailureReason}}
                    {{#rootCause}}<div><b>rootCause</b>: {{rootCause}}</div>{{/rootCause}}
                    {{#failureIsolationMethod}}<div><b>failureIsolationMethod</b>: {{failureIsolationMethod}}</div>{{/failureIsolationMethod}}
                    {{#faultLocatingMethod}}<div><b>faultLocatingMethod</b>: {{faultLocatingMethod}}</div>{{/faultLocatingMethod}}
                    {{#location}}<div><b>location</b>: {{location}}</div>{{/location}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["failureClassificationAssetFailureClassification"] = [{ id: '', selected: (!obj["failureClassification"])}]; for (let property in AssetFailureClassification) obj["failureClassificationAssetFailureClassification"].push ({ id: property, selected: obj["failureClassification"] && obj["failureClassification"].endsWith ('.' + property)});
                obj["failureModeAssetFailureMode"] = [{ id: '', selected: (!obj["failureMode"])}]; for (let property in AssetFailureMode) obj["failureModeAssetFailureMode"].push ({ id: property, selected: obj["failureMode"] && obj["failureMode"].endsWith ('.' + property)});
                obj["breakerFailureReasonBreakerFailureReasonKind"] = [{ id: '', selected: (!obj["breakerFailureReason"])}]; for (let property in BreakerFailureReasonKind) obj["breakerFailureReasonBreakerFailureReasonKind"].push ({ id: property, selected: obj["breakerFailureReason"] && obj["breakerFailureReason"].endsWith ('.' + property)});
                obj["transformerFailureReasonTransformerFailureReasonKind"] = [{ id: '', selected: (!obj["transformerFailureReason"])}]; for (let property in TransformerFailureReasonKind) obj["transformerFailureReasonTransformerFailureReasonKind"].push ({ id: property, selected: obj["transformerFailureReason"] && obj["transformerFailureReason"].endsWith ('.' + property)});
                obj["failureIsolationMethodFailureIsolationMethodKind"] = [{ id: '', selected: (!obj["failureIsolationMethod"])}]; for (let property in FailureIsolationMethodKind) obj["failureIsolationMethodFailureIsolationMethodKind"].push ({ id: property, selected: obj["failureIsolationMethod"] && obj["failureIsolationMethod"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["failureClassificationAssetFailureClassification"];
                delete obj["failureModeAssetFailureMode"];
                delete obj["breakerFailureReasonBreakerFailureReasonKind"];
                delete obj["transformerFailureReasonTransformerFailureReasonKind"];
                delete obj["failureIsolationMethodFailureIsolationMethodKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FailureEvent_collapse" aria-expanded="true" aria-controls="{{id}}_FailureEvent_collapse" style="margin-left: 10px;">FailureEvent</a></legend>
                    <div id="{{id}}_FailureEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_failureDateTime'>failureDateTime: </label><div class='col-sm-8'><input id='{{id}}_failureDateTime' class='form-control' type='text'{{#failureDateTime}} value='{{failureDateTime}}'{{/failureDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_failureClassification'>failureClassification: </label><div class='col-sm-8'><select id='{{id}}_failureClassification' class='form-control custom-select'>{{#failureClassificationAssetFailureClassification}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/failureClassificationAssetFailureClassification}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_corporateCode'>corporateCode: </label><div class='col-sm-8'><input id='{{id}}_corporateCode' class='form-control' type='text'{{#corporateCode}} value='{{corporateCode}}'{{/corporateCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_failureMode'>failureMode: </label><div class='col-sm-8'><select id='{{id}}_failureMode' class='form-control custom-select'>{{#failureModeAssetFailureMode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/failureModeAssetFailureMode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_breakerFailureReason'>breakerFailureReason: </label><div class='col-sm-8'><select id='{{id}}_breakerFailureReason' class='form-control custom-select'>{{#breakerFailureReasonBreakerFailureReasonKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/breakerFailureReasonBreakerFailureReasonKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transformerFailureReason'>transformerFailureReason: </label><div class='col-sm-8'><select id='{{id}}_transformerFailureReason' class='form-control custom-select'>{{#transformerFailureReasonTransformerFailureReasonKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/transformerFailureReasonTransformerFailureReasonKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rootCause'>rootCause: </label><div class='col-sm-8'><input id='{{id}}_rootCause' class='form-control' type='text'{{#rootCause}} value='{{rootCause}}'{{/rootCause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_failureIsolationMethod'>failureIsolationMethod: </label><div class='col-sm-8'><select id='{{id}}_failureIsolationMethod' class='form-control custom-select'>{{#failureIsolationMethodFailureIsolationMethodKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/failureIsolationMethodFailureIsolationMethodKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_faultLocatingMethod'>faultLocatingMethod: </label><div class='col-sm-8'><input id='{{id}}_faultLocatingMethod' class='form-control' type='text'{{#faultLocatingMethod}} value='{{faultLocatingMethod}}'{{/faultLocatingMethod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_location'>location: </label><div class='col-sm-8'><input id='{{id}}_location' class='form-control' type='text'{{#location}} value='{{location}}'{{/location}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FailureEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_failureDateTime").value; if ("" !== temp) obj["failureDateTime"] = temp;
                temp = AssetFailureClassification[document.getElementById (id + "_failureClassification").value]; if (temp) obj["failureClassification"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AssetFailureClassification." + temp; else delete obj["failureClassification"];
                temp = document.getElementById (id + "_corporateCode").value; if ("" !== temp) obj["corporateCode"] = temp;
                temp = AssetFailureMode[document.getElementById (id + "_failureMode").value]; if (temp) obj["failureMode"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AssetFailureMode." + temp; else delete obj["failureMode"];
                temp = BreakerFailureReasonKind[document.getElementById (id + "_breakerFailureReason").value]; if (temp) obj["breakerFailureReason"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#BreakerFailureReasonKind." + temp; else delete obj["breakerFailureReason"];
                temp = TransformerFailureReasonKind[document.getElementById (id + "_transformerFailureReason").value]; if (temp) obj["transformerFailureReason"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TransformerFailureReasonKind." + temp; else delete obj["transformerFailureReason"];
                temp = document.getElementById (id + "_rootCause").value; if ("" !== temp) obj["rootCause"] = temp;
                temp = FailureIsolationMethodKind[document.getElementById (id + "_failureIsolationMethod").value]; if (temp) obj["failureIsolationMethod"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#FailureIsolationMethodKind." + temp; else delete obj["failureIsolationMethod"];
                temp = document.getElementById (id + "_faultLocatingMethod").value; if ("" !== temp) obj["faultLocatingMethod"] = temp;
                temp = document.getElementById (id + "_location").value; if ("" !== temp) obj["location"] = temp;

                return (obj);
            }
        }

        /**
         * Results of testing done by a lab.
         *
         */
        class LabTestDataSet extends ProcedureDataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LabTestDataSet;
                if (null == bucket)
                   cim_data.LabTestDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LabTestDataSet[obj.id];
            }

            parse (context, sub)
            {
                let obj = ProcedureDataSet.prototype.parse.call (this, context, sub);
                obj.cls = "LabTestDataSet";
                base.parse_attribute (/<cim:LabTestDataSet.reasonForTest\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "reasonForTest", sub, context);
                base.parse_element (/<cim:LabTestDataSet.testEquipmentID>([\s\S]*?)<\/cim:LabTestDataSet.testEquipmentID>/g, obj, "testEquipmentID", base.to_string, sub, context);
                base.parse_element (/<cim:LabTestDataSet.conclusion>([\s\S]*?)<\/cim:LabTestDataSet.conclusion>/g, obj, "conclusion", base.to_string, sub, context);
                base.parse_element (/<cim:LabTestDataSet.conclusionConfidence>([\s\S]*?)<\/cim:LabTestDataSet.conclusionConfidence>/g, obj, "conclusionConfidence", base.to_string, sub, context);
                base.parse_attribute (/<cim:LabTestDataSet.Specimen\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Specimen", sub, context);
                base.parse_attribute (/<cim:LabTestDataSet.AssetTestLab\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetTestLab", sub, context);
                let bucket = context.parsed.LabTestDataSet;
                if (null == bucket)
                   context.parsed.LabTestDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ProcedureDataSet.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LabTestDataSet", "reasonForTest", "reasonForTest", fields);
                base.export_element (obj, "LabTestDataSet", "testEquipmentID", "testEquipmentID",  base.from_string, fields);
                base.export_element (obj, "LabTestDataSet", "conclusion", "conclusion",  base.from_string, fields);
                base.export_element (obj, "LabTestDataSet", "conclusionConfidence", "conclusionConfidence",  base.from_string, fields);
                base.export_attribute (obj, "LabTestDataSet", "Specimen", "Specimen", fields);
                base.export_attribute (obj, "LabTestDataSet", "AssetTestLab", "AssetTestLab", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LabTestDataSet_collapse" aria-expanded="true" aria-controls="LabTestDataSet_collapse" style="margin-left: 10px;">LabTestDataSet</a></legend>
                    <div id="LabTestDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.template.call (this) +
                    `
                    {{#reasonForTest}}<div><b>reasonForTest</b>: {{reasonForTest}}</div>{{/reasonForTest}}
                    {{#testEquipmentID}}<div><b>testEquipmentID</b>: {{testEquipmentID}}</div>{{/testEquipmentID}}
                    {{#conclusion}}<div><b>conclusion</b>: {{conclusion}}</div>{{/conclusion}}
                    {{#conclusionConfidence}}<div><b>conclusionConfidence</b>: {{conclusionConfidence}}</div>{{/conclusionConfidence}}
                    {{#Specimen}}<div><b>Specimen</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Specimen}}");}); return false;'>{{Specimen}}</a></div>{{/Specimen}}
                    {{#AssetTestLab}}<div><b>AssetTestLab</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetTestLab}}");}); return false;'>{{AssetTestLab}}</a></div>{{/AssetTestLab}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["reasonForTestTestReason"] = [{ id: '', selected: (!obj["reasonForTest"])}]; for (let property in TestReason) obj["reasonForTestTestReason"].push ({ id: property, selected: obj["reasonForTest"] && obj["reasonForTest"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["reasonForTestTestReason"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LabTestDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_LabTestDataSet_collapse" style="margin-left: 10px;">LabTestDataSet</a></legend>
                    <div id="{{id}}_LabTestDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reasonForTest'>reasonForTest: </label><div class='col-sm-8'><select id='{{id}}_reasonForTest' class='form-control custom-select'>{{#reasonForTestTestReason}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/reasonForTestTestReason}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testEquipmentID'>testEquipmentID: </label><div class='col-sm-8'><input id='{{id}}_testEquipmentID' class='form-control' type='text'{{#testEquipmentID}} value='{{testEquipmentID}}'{{/testEquipmentID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_conclusion'>conclusion: </label><div class='col-sm-8'><input id='{{id}}_conclusion' class='form-control' type='text'{{#conclusion}} value='{{conclusion}}'{{/conclusion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_conclusionConfidence'>conclusionConfidence: </label><div class='col-sm-8'><input id='{{id}}_conclusionConfidence' class='form-control' type='text'{{#conclusionConfidence}} value='{{conclusionConfidence}}'{{/conclusionConfidence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Specimen'>Specimen: </label><div class='col-sm-8'><input id='{{id}}_Specimen' class='form-control' type='text'{{#Specimen}} value='{{Specimen}}'{{/Specimen}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetTestLab'>AssetTestLab: </label><div class='col-sm-8'><input id='{{id}}_AssetTestLab' class='form-control' type='text'{{#AssetTestLab}} value='{{AssetTestLab}}'{{/AssetTestLab}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LabTestDataSet" };
                super.submit (id, obj);
                temp = TestReason[document.getElementById (id + "_reasonForTest").value]; if (temp) obj["reasonForTest"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TestReason." + temp; else delete obj["reasonForTest"];
                temp = document.getElementById (id + "_testEquipmentID").value; if ("" !== temp) obj["testEquipmentID"] = temp;
                temp = document.getElementById (id + "_conclusion").value; if ("" !== temp) obj["conclusion"] = temp;
                temp = document.getElementById (id + "_conclusionConfidence").value; if ("" !== temp) obj["conclusionConfidence"] = temp;
                temp = document.getElementById (id + "_Specimen").value; if ("" !== temp) obj["Specimen"] = temp;
                temp = document.getElementById (id + "_AssetTestLab").value; if ("" !== temp) obj["AssetTestLab"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Specimen", "0..1", "0..*", "Specimen", "LabTestDataSet"],
                            ["AssetTestLab", "0..1", "0..*", "AssetTestLab", "LabTestDataSet"]
                        ]
                    )
                );
            }
        }

        /**
         * The result of a problem (typically an asset failure) diagnosis.
         *
         * Contains complete information like what might be received from a lab doing forensic analysis of a failed asset.
         *
         */
        class DiagnosisDataSet extends ProcedureDataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DiagnosisDataSet;
                if (null == bucket)
                   cim_data.DiagnosisDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiagnosisDataSet[obj.id];
            }

            parse (context, sub)
            {
                let obj = ProcedureDataSet.prototype.parse.call (this, context, sub);
                obj.cls = "DiagnosisDataSet";
                base.parse_element (/<cim:DiagnosisDataSet.preliminaryCode>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryCode>/g, obj, "preliminaryCode", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.preliminaryRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryRemark>/g, obj, "preliminaryRemark", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.preliminaryDateTime>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryDateTime>/g, obj, "preliminaryDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.finalCode>([\s\S]*?)<\/cim:DiagnosisDataSet.finalCode>/g, obj, "finalCode", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.finalRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.finalRemark>/g, obj, "finalRemark", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.finalCause>([\s\S]*?)<\/cim:DiagnosisDataSet.finalCause>/g, obj, "finalCause", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.finalOrigin>([\s\S]*?)<\/cim:DiagnosisDataSet.finalOrigin>/g, obj, "finalOrigin", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.rootCause>([\s\S]*?)<\/cim:DiagnosisDataSet.rootCause>/g, obj, "rootCause", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.rootOrigin>([\s\S]*?)<\/cim:DiagnosisDataSet.rootOrigin>/g, obj, "rootOrigin", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.rootRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.rootRemark>/g, obj, "rootRemark", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.effect>([\s\S]*?)<\/cim:DiagnosisDataSet.effect>/g, obj, "effect", base.to_string, sub, context);
                base.parse_attribute (/<cim:DiagnosisDataSet.phaseCode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "phaseCode", sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.failureMode>([\s\S]*?)<\/cim:DiagnosisDataSet.failureMode>/g, obj, "failureMode", base.to_string, sub, context);
                let bucket = context.parsed.DiagnosisDataSet;
                if (null == bucket)
                   context.parsed.DiagnosisDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ProcedureDataSet.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiagnosisDataSet", "preliminaryCode", "preliminaryCode",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "preliminaryRemark", "preliminaryRemark",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "preliminaryDateTime", "preliminaryDateTime",  base.from_datetime, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalCode", "finalCode",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalRemark", "finalRemark",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalCause", "finalCause",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalOrigin", "finalOrigin",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "rootCause", "rootCause",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "rootOrigin", "rootOrigin",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "rootRemark", "rootRemark",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "effect", "effect",  base.from_string, fields);
                base.export_attribute (obj, "DiagnosisDataSet", "phaseCode", "phaseCode", fields);
                base.export_element (obj, "DiagnosisDataSet", "failureMode", "failureMode",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DiagnosisDataSet_collapse" aria-expanded="true" aria-controls="DiagnosisDataSet_collapse" style="margin-left: 10px;">DiagnosisDataSet</a></legend>
                    <div id="DiagnosisDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.template.call (this) +
                    `
                    {{#preliminaryCode}}<div><b>preliminaryCode</b>: {{preliminaryCode}}</div>{{/preliminaryCode}}
                    {{#preliminaryRemark}}<div><b>preliminaryRemark</b>: {{preliminaryRemark}}</div>{{/preliminaryRemark}}
                    {{#preliminaryDateTime}}<div><b>preliminaryDateTime</b>: {{preliminaryDateTime}}</div>{{/preliminaryDateTime}}
                    {{#finalCode}}<div><b>finalCode</b>: {{finalCode}}</div>{{/finalCode}}
                    {{#finalRemark}}<div><b>finalRemark</b>: {{finalRemark}}</div>{{/finalRemark}}
                    {{#finalCause}}<div><b>finalCause</b>: {{finalCause}}</div>{{/finalCause}}
                    {{#finalOrigin}}<div><b>finalOrigin</b>: {{finalOrigin}}</div>{{/finalOrigin}}
                    {{#rootCause}}<div><b>rootCause</b>: {{rootCause}}</div>{{/rootCause}}
                    {{#rootOrigin}}<div><b>rootOrigin</b>: {{rootOrigin}}</div>{{/rootOrigin}}
                    {{#rootRemark}}<div><b>rootRemark</b>: {{rootRemark}}</div>{{/rootRemark}}
                    {{#effect}}<div><b>effect</b>: {{effect}}</div>{{/effect}}
                    {{#phaseCode}}<div><b>phaseCode</b>: {{phaseCode}}</div>{{/phaseCode}}
                    {{#failureMode}}<div><b>failureMode</b>: {{failureMode}}</div>{{/failureMode}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["phaseCodePhaseCode"] = [{ id: '', selected: (!obj["phaseCode"])}]; for (let property in Core.PhaseCode) obj["phaseCodePhaseCode"].push ({ id: property, selected: obj["phaseCode"] && obj["phaseCode"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["phaseCodePhaseCode"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DiagnosisDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_DiagnosisDataSet_collapse" style="margin-left: 10px;">DiagnosisDataSet</a></legend>
                    <div id="{{id}}_DiagnosisDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_preliminaryCode'>preliminaryCode: </label><div class='col-sm-8'><input id='{{id}}_preliminaryCode' class='form-control' type='text'{{#preliminaryCode}} value='{{preliminaryCode}}'{{/preliminaryCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_preliminaryRemark'>preliminaryRemark: </label><div class='col-sm-8'><input id='{{id}}_preliminaryRemark' class='form-control' type='text'{{#preliminaryRemark}} value='{{preliminaryRemark}}'{{/preliminaryRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_preliminaryDateTime'>preliminaryDateTime: </label><div class='col-sm-8'><input id='{{id}}_preliminaryDateTime' class='form-control' type='text'{{#preliminaryDateTime}} value='{{preliminaryDateTime}}'{{/preliminaryDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_finalCode'>finalCode: </label><div class='col-sm-8'><input id='{{id}}_finalCode' class='form-control' type='text'{{#finalCode}} value='{{finalCode}}'{{/finalCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_finalRemark'>finalRemark: </label><div class='col-sm-8'><input id='{{id}}_finalRemark' class='form-control' type='text'{{#finalRemark}} value='{{finalRemark}}'{{/finalRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_finalCause'>finalCause: </label><div class='col-sm-8'><input id='{{id}}_finalCause' class='form-control' type='text'{{#finalCause}} value='{{finalCause}}'{{/finalCause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_finalOrigin'>finalOrigin: </label><div class='col-sm-8'><input id='{{id}}_finalOrigin' class='form-control' type='text'{{#finalOrigin}} value='{{finalOrigin}}'{{/finalOrigin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rootCause'>rootCause: </label><div class='col-sm-8'><input id='{{id}}_rootCause' class='form-control' type='text'{{#rootCause}} value='{{rootCause}}'{{/rootCause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rootOrigin'>rootOrigin: </label><div class='col-sm-8'><input id='{{id}}_rootOrigin' class='form-control' type='text'{{#rootOrigin}} value='{{rootOrigin}}'{{/rootOrigin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rootRemark'>rootRemark: </label><div class='col-sm-8'><input id='{{id}}_rootRemark' class='form-control' type='text'{{#rootRemark}} value='{{rootRemark}}'{{/rootRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effect'>effect: </label><div class='col-sm-8'><input id='{{id}}_effect' class='form-control' type='text'{{#effect}} value='{{effect}}'{{/effect}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseCode'>phaseCode: </label><div class='col-sm-8'><select id='{{id}}_phaseCode' class='form-control custom-select'>{{#phaseCodePhaseCode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/phaseCodePhaseCode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_failureMode'>failureMode: </label><div class='col-sm-8'><input id='{{id}}_failureMode' class='form-control' type='text'{{#failureMode}} value='{{failureMode}}'{{/failureMode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DiagnosisDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_preliminaryCode").value; if ("" !== temp) obj["preliminaryCode"] = temp;
                temp = document.getElementById (id + "_preliminaryRemark").value; if ("" !== temp) obj["preliminaryRemark"] = temp;
                temp = document.getElementById (id + "_preliminaryDateTime").value; if ("" !== temp) obj["preliminaryDateTime"] = temp;
                temp = document.getElementById (id + "_finalCode").value; if ("" !== temp) obj["finalCode"] = temp;
                temp = document.getElementById (id + "_finalRemark").value; if ("" !== temp) obj["finalRemark"] = temp;
                temp = document.getElementById (id + "_finalCause").value; if ("" !== temp) obj["finalCause"] = temp;
                temp = document.getElementById (id + "_finalOrigin").value; if ("" !== temp) obj["finalOrigin"] = temp;
                temp = document.getElementById (id + "_rootCause").value; if ("" !== temp) obj["rootCause"] = temp;
                temp = document.getElementById (id + "_rootOrigin").value; if ("" !== temp) obj["rootOrigin"] = temp;
                temp = document.getElementById (id + "_rootRemark").value; if ("" !== temp) obj["rootRemark"] = temp;
                temp = document.getElementById (id + "_effect").value; if ("" !== temp) obj["effect"] = temp;
                temp = Core.PhaseCode[document.getElementById (id + "_phaseCode").value]; if (temp) obj["phaseCode"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode." + temp; else delete obj["phaseCode"];
                temp = document.getElementById (id + "_failureMode").value; if ("" !== temp) obj["failureMode"] = temp;

                return (obj);
            }
        }

        /**
         * Test results, usually obtained by a lab or other independent organisation.
         *
         */
        class TestDataSet extends ProcedureDataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TestDataSet;
                if (null == bucket)
                   cim_data.TestDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TestDataSet[obj.id];
            }

            parse (context, sub)
            {
                let obj = ProcedureDataSet.prototype.parse.call (this, context, sub);
                obj.cls = "TestDataSet";
                base.parse_element (/<cim:TestDataSet.specimenID>([\s\S]*?)<\/cim:TestDataSet.specimenID>/g, obj, "specimenID", base.to_string, sub, context);
                base.parse_element (/<cim:TestDataSet.specimenToLabDateTime>([\s\S]*?)<\/cim:TestDataSet.specimenToLabDateTime>/g, obj, "specimenToLabDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TestDataSet.conclusion>([\s\S]*?)<\/cim:TestDataSet.conclusion>/g, obj, "conclusion", base.to_string, sub, context);
                let bucket = context.parsed.TestDataSet;
                if (null == bucket)
                   context.parsed.TestDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ProcedureDataSet.prototype.export.call (this, obj, false);

                base.export_element (obj, "TestDataSet", "specimenID", "specimenID",  base.from_string, fields);
                base.export_element (obj, "TestDataSet", "specimenToLabDateTime", "specimenToLabDateTime",  base.from_datetime, fields);
                base.export_element (obj, "TestDataSet", "conclusion", "conclusion",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TestDataSet_collapse" aria-expanded="true" aria-controls="TestDataSet_collapse" style="margin-left: 10px;">TestDataSet</a></legend>
                    <div id="TestDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.template.call (this) +
                    `
                    {{#specimenID}}<div><b>specimenID</b>: {{specimenID}}</div>{{/specimenID}}
                    {{#specimenToLabDateTime}}<div><b>specimenToLabDateTime</b>: {{specimenToLabDateTime}}</div>{{/specimenToLabDateTime}}
                    {{#conclusion}}<div><b>conclusion</b>: {{conclusion}}</div>{{/conclusion}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TestDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_TestDataSet_collapse" style="margin-left: 10px;">TestDataSet</a></legend>
                    <div id="{{id}}_TestDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specimenID'>specimenID: </label><div class='col-sm-8'><input id='{{id}}_specimenID' class='form-control' type='text'{{#specimenID}} value='{{specimenID}}'{{/specimenID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specimenToLabDateTime'>specimenToLabDateTime: </label><div class='col-sm-8'><input id='{{id}}_specimenToLabDateTime' class='form-control' type='text'{{#specimenToLabDateTime}} value='{{specimenToLabDateTime}}'{{/specimenToLabDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_conclusion'>conclusion: </label><div class='col-sm-8'><input id='{{id}}_conclusion' class='form-control' type='text'{{#conclusion}} value='{{conclusion}}'{{/conclusion}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TestDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_specimenID").value; if ("" !== temp) obj["specimenID"] = temp;
                temp = document.getElementById (id + "_specimenToLabDateTime").value; if ("" !== temp) obj["specimenToLabDateTime"] = temp;
                temp = document.getElementById (id + "_conclusion").value; if ("" !== temp) obj["conclusion"] = temp;

                return (obj);
            }
        }

        /**
         * Documents the result of one inspection, for a given attribute of an asset.
         *
         */
        class InspectionDataSet extends ProcedureDataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.InspectionDataSet;
                if (null == bucket)
                   cim_data.InspectionDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InspectionDataSet[obj.id];
            }

            parse (context, sub)
            {
                let obj = ProcedureDataSet.prototype.parse.call (this, context, sub);
                obj.cls = "InspectionDataSet";
                base.parse_element (/<cim:InspectionDataSet.locationCondition>([\s\S]*?)<\/cim:InspectionDataSet.locationCondition>/g, obj, "locationCondition", base.to_string, sub, context);
                base.parse_attributes (/<cim:InspectionDataSet.AccordingToSchedules\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AccordingToSchedules", sub, context);
                let bucket = context.parsed.InspectionDataSet;
                if (null == bucket)
                   context.parsed.InspectionDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ProcedureDataSet.prototype.export.call (this, obj, false);

                base.export_element (obj, "InspectionDataSet", "locationCondition", "locationCondition",  base.from_string, fields);
                base.export_attributes (obj, "InspectionDataSet", "AccordingToSchedules", "AccordingToSchedules", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InspectionDataSet_collapse" aria-expanded="true" aria-controls="InspectionDataSet_collapse" style="margin-left: 10px;">InspectionDataSet</a></legend>
                    <div id="InspectionDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.template.call (this) +
                    `
                    {{#locationCondition}}<div><b>locationCondition</b>: {{locationCondition}}</div>{{/locationCondition}}
                    {{#AccordingToSchedules}}<div><b>AccordingToSchedules</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AccordingToSchedules}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["AccordingToSchedules"]) obj["AccordingToSchedules_string"] = obj["AccordingToSchedules"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["AccordingToSchedules_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InspectionDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_InspectionDataSet_collapse" style="margin-left: 10px;">InspectionDataSet</a></legend>
                    <div id="{{id}}_InspectionDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_locationCondition'>locationCondition: </label><div class='col-sm-8'><input id='{{id}}_locationCondition' class='form-control' type='text'{{#locationCondition}} value='{{locationCondition}}'{{/locationCondition}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InspectionDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_locationCondition").value; if ("" !== temp) obj["locationCondition"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AccordingToSchedules", "0..*", "1", "ScheduledEventData", "InspectionDataSet"]
                        ]
                    )
                );
            }
        }

        /**
         * The result of a maintenance activity, a type of Procedure, for a given attribute of an asset.
         *
         */
        class MaintenanceDataSet extends ProcedureDataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MaintenanceDataSet;
                if (null == bucket)
                   cim_data.MaintenanceDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MaintenanceDataSet[obj.id];
            }

            parse (context, sub)
            {
                let obj = ProcedureDataSet.prototype.parse.call (this, context, sub);
                obj.cls = "MaintenanceDataSet";
                base.parse_element (/<cim:MaintenanceDataSet.maintCode>([\s\S]*?)<\/cim:MaintenanceDataSet.maintCode>/g, obj, "maintCode", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceDataSet.conditionBefore>([\s\S]*?)<\/cim:MaintenanceDataSet.conditionBefore>/g, obj, "conditionBefore", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceDataSet.conditionAfter>([\s\S]*?)<\/cim:MaintenanceDataSet.conditionAfter>/g, obj, "conditionAfter", base.to_string, sub, context);
                let bucket = context.parsed.MaintenanceDataSet;
                if (null == bucket)
                   context.parsed.MaintenanceDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ProcedureDataSet.prototype.export.call (this, obj, false);

                base.export_element (obj, "MaintenanceDataSet", "maintCode", "maintCode",  base.from_string, fields);
                base.export_element (obj, "MaintenanceDataSet", "conditionBefore", "conditionBefore",  base.from_string, fields);
                base.export_element (obj, "MaintenanceDataSet", "conditionAfter", "conditionAfter",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MaintenanceDataSet_collapse" aria-expanded="true" aria-controls="MaintenanceDataSet_collapse" style="margin-left: 10px;">MaintenanceDataSet</a></legend>
                    <div id="MaintenanceDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.template.call (this) +
                    `
                    {{#maintCode}}<div><b>maintCode</b>: {{maintCode}}</div>{{/maintCode}}
                    {{#conditionBefore}}<div><b>conditionBefore</b>: {{conditionBefore}}</div>{{/conditionBefore}}
                    {{#conditionAfter}}<div><b>conditionAfter</b>: {{conditionAfter}}</div>{{/conditionAfter}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MaintenanceDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_MaintenanceDataSet_collapse" style="margin-left: 10px;">MaintenanceDataSet</a></legend>
                    <div id="{{id}}_MaintenanceDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maintCode'>maintCode: </label><div class='col-sm-8'><input id='{{id}}_maintCode' class='form-control' type='text'{{#maintCode}} value='{{maintCode}}'{{/maintCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_conditionBefore'>conditionBefore: </label><div class='col-sm-8'><input id='{{id}}_conditionBefore' class='form-control' type='text'{{#conditionBefore}} value='{{conditionBefore}}'{{/conditionBefore}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_conditionAfter'>conditionAfter: </label><div class='col-sm-8'><input id='{{id}}_conditionAfter' class='form-control' type='text'{{#conditionAfter}} value='{{conditionAfter}}'{{/conditionAfter}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MaintenanceDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_maintCode").value; if ("" !== temp) obj["maintCode"] = temp;
                temp = document.getElementById (id + "_conditionBefore").value; if ("" !== temp) obj["conditionBefore"] = temp;
                temp = document.getElementById (id + "_conditionAfter").value; if ("" !== temp) obj["conditionAfter"] = temp;

                return (obj);
            }
        }

        /**
         * FACTS device asset.
         *
         */
        class FACTSDevice extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FACTSDevice;
                if (null == bucket)
                   cim_data.FACTSDevice = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FACTSDevice[obj.id];
            }

            parse (context, sub)
            {
                let obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "FACTSDevice";
                base.parse_attribute (/<cim:FACTSDevice.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.FACTSDevice;
                if (null == bucket)
                   context.parsed.FACTSDevice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Asset.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "FACTSDevice", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FACTSDevice_collapse" aria-expanded="true" aria-controls="FACTSDevice_collapse" style="margin-left: 10px;">FACTSDevice</a></legend>
                    <div id="FACTSDevice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindFACTSDeviceKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in InfAssets.FACTSDeviceKind) obj["kindFACTSDeviceKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindFACTSDeviceKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FACTSDevice_collapse" aria-expanded="true" aria-controls="{{id}}_FACTSDevice_collapse" style="margin-left: 10px;">FACTSDevice</a></legend>
                    <div id="{{id}}_FACTSDevice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindFACTSDeviceKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindFACTSDeviceKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FACTSDevice" };
                super.submit (id, obj);
                temp = InfAssets.FACTSDeviceKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#FACTSDeviceKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset that is aggregation of other assets such as conductors, transformers, switchgear, land, fences, buildings, equipment, vehicles, etc.
         *
         */
        class AssetContainer extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetContainer;
                if (null == bucket)
                   cim_data.AssetContainer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetContainer[obj.id];
            }

            parse (context, sub)
            {
                let obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "AssetContainer";
                base.parse_attributes (/<cim:AssetContainer.Seals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Seals", sub, context);
                base.parse_attributes (/<cim:AssetContainer.Assets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attributes (/<cim:AssetContainer.LandProperties\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LandProperties", sub, context);
                let bucket = context.parsed.AssetContainer;
                if (null == bucket)
                   context.parsed.AssetContainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Asset.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetContainer", "Seals", "Seals", fields);
                base.export_attributes (obj, "AssetContainer", "Assets", "Assets", fields);
                base.export_attributes (obj, "AssetContainer", "LandProperties", "LandProperties", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetContainer_collapse" aria-expanded="true" aria-controls="AssetContainer_collapse" style="margin-left: 10px;">AssetContainer</a></legend>
                    <div id="AssetContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    {{#Seals}}<div><b>Seals</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Seals}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#LandProperties}}<div><b>LandProperties</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LandProperties}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Seals"]) obj["Seals_string"] = obj["Seals"].join ();
                if (obj["Assets"]) obj["Assets_string"] = obj["Assets"].join ();
                if (obj["LandProperties"]) obj["LandProperties_string"] = obj["LandProperties"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Seals_string"];
                delete obj["Assets_string"];
                delete obj["LandProperties_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetContainer_collapse" aria-expanded="true" aria-controls="{{id}}_AssetContainer_collapse" style="margin-left: 10px;">AssetContainer</a></legend>
                    <div id="{{id}}_AssetContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LandProperties'>LandProperties: </label><div class='col-sm-8'><input id='{{id}}_LandProperties' class='form-control' type='text'{{#LandProperties}} value='{{LandProperties_string}}'{{/LandProperties}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetContainer" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_LandProperties").value; if ("" !== temp) obj["LandProperties"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Seals", "0..*", "0..1", "Seal", "AssetContainer"],
                            ["Assets", "0..*", "0..1", "Asset", "AssetContainer"],
                            ["LandProperties", "0..*", "0..*", "LandProperty", "AssetContainers"]
                        ]
                    )
                );
            }
        }

        /**
         * Joint connects two or more cables.
         *
         * It includes the portion of cable under wipes, welds, or other seals.
         *
         */
        class Joint extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Joint;
                if (null == bucket)
                   cim_data.Joint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Joint[obj.id];
            }

            parse (context, sub)
            {
                let obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "Joint";
                base.parse_attribute (/<cim:Joint.configurationKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "configurationKind", sub, context);
                base.parse_attribute (/<cim:Joint.fillKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "fillKind", sub, context);
                base.parse_element (/<cim:Joint.insulation>([\s\S]*?)<\/cim:Joint.insulation>/g, obj, "insulation", base.to_string, sub, context);
                let bucket = context.parsed.Joint;
                if (null == bucket)
                   context.parsed.Joint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Asset.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Joint", "configurationKind", "configurationKind", fields);
                base.export_attribute (obj, "Joint", "fillKind", "fillKind", fields);
                base.export_element (obj, "Joint", "insulation", "insulation",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Joint_collapse" aria-expanded="true" aria-controls="Joint_collapse" style="margin-left: 10px;">Joint</a></legend>
                    <div id="Joint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    {{#configurationKind}}<div><b>configurationKind</b>: {{configurationKind}}</div>{{/configurationKind}}
                    {{#fillKind}}<div><b>fillKind</b>: {{fillKind}}</div>{{/fillKind}}
                    {{#insulation}}<div><b>insulation</b>: {{insulation}}</div>{{/insulation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["configurationKindJointConfigurationKind"] = [{ id: '', selected: (!obj["configurationKind"])}]; for (let property in InfAssets.JointConfigurationKind) obj["configurationKindJointConfigurationKind"].push ({ id: property, selected: obj["configurationKind"] && obj["configurationKind"].endsWith ('.' + property)});
                obj["fillKindJointFillKind"] = [{ id: '', selected: (!obj["fillKind"])}]; for (let property in InfAssets.JointFillKind) obj["fillKindJointFillKind"].push ({ id: property, selected: obj["fillKind"] && obj["fillKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["configurationKindJointConfigurationKind"];
                delete obj["fillKindJointFillKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Joint_collapse" aria-expanded="true" aria-controls="{{id}}_Joint_collapse" style="margin-left: 10px;">Joint</a></legend>
                    <div id="{{id}}_Joint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_configurationKind'>configurationKind: </label><div class='col-sm-8'><select id='{{id}}_configurationKind' class='form-control custom-select'>{{#configurationKindJointConfigurationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/configurationKindJointConfigurationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fillKind'>fillKind: </label><div class='col-sm-8'><select id='{{id}}_fillKind' class='form-control custom-select'>{{#fillKindJointFillKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/fillKindJointFillKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_insulation'>insulation: </label><div class='col-sm-8'><input id='{{id}}_insulation' class='form-control' type='text'{{#insulation}} value='{{insulation}}'{{/insulation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Joint" };
                super.submit (id, obj);
                temp = InfAssets.JointConfigurationKind[document.getElementById (id + "_configurationKind").value]; if (temp) obj["configurationKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#JointConfigurationKind." + temp; else delete obj["configurationKind"];
                temp = InfAssets.JointFillKind[document.getElementById (id + "_fillKind").value]; if (temp) obj["fillKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#JointFillKind." + temp; else delete obj["fillKind"];
                temp = document.getElementById (id + "_insulation").value; if ("" !== temp) obj["insulation"] = temp;

                return (obj);
            }
        }

        /**
         * Communication media such as fibre optic cable, power-line, telephone, etc.
         *
         */
        class ComMedia extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ComMedia;
                if (null == bucket)
                   cim_data.ComMedia = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ComMedia[obj.id];
            }

            parse (context, sub)
            {
                let obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "ComMedia";
                let bucket = context.parsed.ComMedia;
                if (null == bucket)
                   context.parsed.ComMedia = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Asset.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ComMedia_collapse" aria-expanded="true" aria-controls="ComMedia_collapse" style="margin-left: 10px;">ComMedia</a></legend>
                    <div id="ComMedia_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ComMedia_collapse" aria-expanded="true" aria-controls="{{id}}_ComMedia_collapse" style="margin-left: 10px;">ComMedia</a></legend>
                    <div id="{{id}}_ComMedia_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ComMedia" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Construction holding assets such as conductors, transformers, switchgear, etc.
         *
         * Where applicable, number of conductors can be derived from the number of associated wire spacing instances.
         *
         */
        class Structure extends AssetContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Structure;
                if (null == bucket)
                   cim_data.Structure = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Structure[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Structure";
                base.parse_attribute (/<cim:Structure.materialKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "materialKind", sub, context);
                base.parse_element (/<cim:Structure.height>([\s\S]*?)<\/cim:Structure.height>/g, obj, "height", base.to_string, sub, context);
                base.parse_element (/<cim:Structure.ratedVoltage>([\s\S]*?)<\/cim:Structure.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:Structure.removeWeed>([\s\S]*?)<\/cim:Structure.removeWeed>/g, obj, "removeWeed", base.to_boolean, sub, context);
                base.parse_element (/<cim:Structure.weedRemovedDate>([\s\S]*?)<\/cim:Structure.weedRemovedDate>/g, obj, "weedRemovedDate", base.to_string, sub, context);
                base.parse_element (/<cim:Structure.fumigantName>([\s\S]*?)<\/cim:Structure.fumigantName>/g, obj, "fumigantName", base.to_string, sub, context);
                base.parse_element (/<cim:Structure.fumigantAppliedDate>([\s\S]*?)<\/cim:Structure.fumigantAppliedDate>/g, obj, "fumigantAppliedDate", base.to_string, sub, context);
                base.parse_attributes (/<cim:Structure.WireSpacingInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WireSpacingInfos", sub, context);
                base.parse_attributes (/<cim:Structure.StructureSupports\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StructureSupports", sub, context);
                let bucket = context.parsed.Structure;
                if (null == bucket)
                   context.parsed.Structure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetContainer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Structure", "materialKind", "materialKind", fields);
                base.export_element (obj, "Structure", "height", "height",  base.from_string, fields);
                base.export_element (obj, "Structure", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_element (obj, "Structure", "removeWeed", "removeWeed",  base.from_boolean, fields);
                base.export_element (obj, "Structure", "weedRemovedDate", "weedRemovedDate",  base.from_string, fields);
                base.export_element (obj, "Structure", "fumigantName", "fumigantName",  base.from_string, fields);
                base.export_element (obj, "Structure", "fumigantAppliedDate", "fumigantAppliedDate",  base.from_string, fields);
                base.export_attributes (obj, "Structure", "WireSpacingInfos", "WireSpacingInfos", fields);
                base.export_attributes (obj, "Structure", "StructureSupports", "StructureSupports", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Structure_collapse" aria-expanded="true" aria-controls="Structure_collapse" style="margin-left: 10px;">Structure</a></legend>
                    <div id="Structure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetContainer.prototype.template.call (this) +
                    `
                    {{#materialKind}}<div><b>materialKind</b>: {{materialKind}}</div>{{/materialKind}}
                    {{#height}}<div><b>height</b>: {{height}}</div>{{/height}}
                    {{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
                    {{#removeWeed}}<div><b>removeWeed</b>: {{removeWeed}}</div>{{/removeWeed}}
                    {{#weedRemovedDate}}<div><b>weedRemovedDate</b>: {{weedRemovedDate}}</div>{{/weedRemovedDate}}
                    {{#fumigantName}}<div><b>fumigantName</b>: {{fumigantName}}</div>{{/fumigantName}}
                    {{#fumigantAppliedDate}}<div><b>fumigantAppliedDate</b>: {{fumigantAppliedDate}}</div>{{/fumigantAppliedDate}}
                    {{#WireSpacingInfos}}<div><b>WireSpacingInfos</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WireSpacingInfos}}
                    {{#StructureSupports}}<div><b>StructureSupports</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/StructureSupports}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["materialKindStructureMaterialKind"] = [{ id: '', selected: (!obj["materialKind"])}]; for (let property in InfAssets.StructureMaterialKind) obj["materialKindStructureMaterialKind"].push ({ id: property, selected: obj["materialKind"] && obj["materialKind"].endsWith ('.' + property)});
                if (obj["WireSpacingInfos"]) obj["WireSpacingInfos_string"] = obj["WireSpacingInfos"].join ();
                if (obj["StructureSupports"]) obj["StructureSupports_string"] = obj["StructureSupports"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["materialKindStructureMaterialKind"];
                delete obj["WireSpacingInfos_string"];
                delete obj["StructureSupports_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Structure_collapse" aria-expanded="true" aria-controls="{{id}}_Structure_collapse" style="margin-left: 10px;">Structure</a></legend>
                    <div id="{{id}}_Structure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_materialKind'>materialKind: </label><div class='col-sm-8'><select id='{{id}}_materialKind' class='form-control custom-select'>{{#materialKindStructureMaterialKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/materialKindStructureMaterialKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_height'>height: </label><div class='col-sm-8'><input id='{{id}}_height' class='form-control' type='text'{{#height}} value='{{height}}'{{/height}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_removeWeed'>removeWeed: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_removeWeed' class='form-check-input' type='checkbox'{{#removeWeed}} checked{{/removeWeed}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_weedRemovedDate'>weedRemovedDate: </label><div class='col-sm-8'><input id='{{id}}_weedRemovedDate' class='form-control' type='text'{{#weedRemovedDate}} value='{{weedRemovedDate}}'{{/weedRemovedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fumigantName'>fumigantName: </label><div class='col-sm-8'><input id='{{id}}_fumigantName' class='form-control' type='text'{{#fumigantName}} value='{{fumigantName}}'{{/fumigantName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fumigantAppliedDate'>fumigantAppliedDate: </label><div class='col-sm-8'><input id='{{id}}_fumigantAppliedDate' class='form-control' type='text'{{#fumigantAppliedDate}} value='{{fumigantAppliedDate}}'{{/fumigantAppliedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WireSpacingInfos'>WireSpacingInfos: </label><div class='col-sm-8'><input id='{{id}}_WireSpacingInfos' class='form-control' type='text'{{#WireSpacingInfos}} value='{{WireSpacingInfos_string}}'{{/WireSpacingInfos}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Structure" };
                super.submit (id, obj);
                temp = InfAssets.StructureMaterialKind[document.getElementById (id + "_materialKind").value]; if (temp) obj["materialKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#StructureMaterialKind." + temp; else delete obj["materialKind"];
                temp = document.getElementById (id + "_height").value; if ("" !== temp) obj["height"] = temp;
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" !== temp) obj["ratedVoltage"] = temp;
                temp = document.getElementById (id + "_removeWeed").checked; if (temp) obj["removeWeed"] = true;
                temp = document.getElementById (id + "_weedRemovedDate").value; if ("" !== temp) obj["weedRemovedDate"] = temp;
                temp = document.getElementById (id + "_fumigantName").value; if ("" !== temp) obj["fumigantName"] = temp;
                temp = document.getElementById (id + "_fumigantAppliedDate").value; if ("" !== temp) obj["fumigantAppliedDate"] = temp;
                temp = document.getElementById (id + "_WireSpacingInfos").value; if ("" !== temp) obj["WireSpacingInfos"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WireSpacingInfos", "0..*", "0..*", "WireSpacing", "Structures"],
                            ["StructureSupports", "0..*", "0..1", "StructureSupport", "SecuredStructure"]
                        ]
                    )
                );
            }
        }

        /**
         * Breaker mechanism.
         *
         */
        class OperatingMechanism extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OperatingMechanism;
                if (null == bucket)
                   cim_data.OperatingMechanism = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperatingMechanism[obj.id];
            }

            parse (context, sub)
            {
                let obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "OperatingMechanism";
                base.parse_attributes (/<cim:OperatingMechanism.InterrupterUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterrupterUnit", sub, context);
                let bucket = context.parsed.OperatingMechanism;
                if (null == bucket)
                   context.parsed.OperatingMechanism = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Asset.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "OperatingMechanism", "InterrupterUnit", "InterrupterUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperatingMechanism_collapse" aria-expanded="true" aria-controls="OperatingMechanism_collapse" style="margin-left: 10px;">OperatingMechanism</a></legend>
                    <div id="OperatingMechanism_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    {{#InterrupterUnit}}<div><b>InterrupterUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InterrupterUnit}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["InterrupterUnit"]) obj["InterrupterUnit_string"] = obj["InterrupterUnit"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["InterrupterUnit_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperatingMechanism_collapse" aria-expanded="true" aria-controls="{{id}}_OperatingMechanism_collapse" style="margin-left: 10px;">OperatingMechanism</a></legend>
                    <div id="{{id}}_OperatingMechanism_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "OperatingMechanism" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["InterrupterUnit", "0..*", "0..1", "InterrupterUnit", "OperatingMechanism"]
                        ]
                    )
                );
            }
        }

        /**
         * Streetlight asset.
         *
         */
        class Streetlight extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Streetlight;
                if (null == bucket)
                   cim_data.Streetlight = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Streetlight[obj.id];
            }

            parse (context, sub)
            {
                let obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "Streetlight";
                base.parse_element (/<cim:Streetlight.lightRating>([\s\S]*?)<\/cim:Streetlight.lightRating>/g, obj, "lightRating", base.to_string, sub, context);
                base.parse_attribute (/<cim:Streetlight.lampKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "lampKind", sub, context);
                base.parse_element (/<cim:Streetlight.armLength>([\s\S]*?)<\/cim:Streetlight.armLength>/g, obj, "armLength", base.to_string, sub, context);
                base.parse_attribute (/<cim:Streetlight.Pole\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pole", sub, context);
                let bucket = context.parsed.Streetlight;
                if (null == bucket)
                   context.parsed.Streetlight = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Asset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Streetlight", "lightRating", "lightRating",  base.from_string, fields);
                base.export_attribute (obj, "Streetlight", "lampKind", "lampKind", fields);
                base.export_element (obj, "Streetlight", "armLength", "armLength",  base.from_string, fields);
                base.export_attribute (obj, "Streetlight", "Pole", "Pole", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Streetlight_collapse" aria-expanded="true" aria-controls="Streetlight_collapse" style="margin-left: 10px;">Streetlight</a></legend>
                    <div id="Streetlight_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    {{#lightRating}}<div><b>lightRating</b>: {{lightRating}}</div>{{/lightRating}}
                    {{#lampKind}}<div><b>lampKind</b>: {{lampKind}}</div>{{/lampKind}}
                    {{#armLength}}<div><b>armLength</b>: {{armLength}}</div>{{/armLength}}
                    {{#Pole}}<div><b>Pole</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Pole}}");}); return false;'>{{Pole}}</a></div>{{/Pole}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["lampKindStreetlightLampKind"] = [{ id: '', selected: (!obj["lampKind"])}]; for (let property in InfAssets.StreetlightLampKind) obj["lampKindStreetlightLampKind"].push ({ id: property, selected: obj["lampKind"] && obj["lampKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["lampKindStreetlightLampKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Streetlight_collapse" aria-expanded="true" aria-controls="{{id}}_Streetlight_collapse" style="margin-left: 10px;">Streetlight</a></legend>
                    <div id="{{id}}_Streetlight_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lightRating'>lightRating: </label><div class='col-sm-8'><input id='{{id}}_lightRating' class='form-control' type='text'{{#lightRating}} value='{{lightRating}}'{{/lightRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lampKind'>lampKind: </label><div class='col-sm-8'><select id='{{id}}_lampKind' class='form-control custom-select'>{{#lampKindStreetlightLampKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/lampKindStreetlightLampKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_armLength'>armLength: </label><div class='col-sm-8'><input id='{{id}}_armLength' class='form-control' type='text'{{#armLength}} value='{{armLength}}'{{/armLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pole'>Pole: </label><div class='col-sm-8'><input id='{{id}}_Pole' class='form-control' type='text'{{#Pole}} value='{{Pole}}'{{/Pole}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Streetlight" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lightRating").value; if ("" !== temp) obj["lightRating"] = temp;
                temp = InfAssets.StreetlightLampKind[document.getElementById (id + "_lampKind").value]; if (temp) obj["lampKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#StreetlightLampKind." + temp; else delete obj["lampKind"];
                temp = document.getElementById (id + "_armLength").value; if ("" !== temp) obj["armLength"] = temp;
                temp = document.getElementById (id + "_Pole").value; if ("" !== temp) obj["Pole"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Pole", "0..1", "0..*", "Pole", "Streetlights"]
                        ]
                    )
                );
            }
        }

        /**
         * Bushing asset.
         *
         */
        class Bushing extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Bushing;
                if (null == bucket)
                   cim_data.Bushing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Bushing[obj.id];
            }

            parse (context, sub)
            {
                let obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "Bushing";
                base.parse_attributes (/<cim:Bushing.BushingInsulationPFs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BushingInsulationPFs", sub, context);
                base.parse_attribute (/<cim:Bushing.MovingContact\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MovingContact", sub, context);
                base.parse_attribute (/<cim:Bushing.Terminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:Bushing.FixedContact\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FixedContact", sub, context);
                let bucket = context.parsed.Bushing;
                if (null == bucket)
                   context.parsed.Bushing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Asset.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Bushing", "BushingInsulationPFs", "BushingInsulationPFs", fields);
                base.export_attribute (obj, "Bushing", "MovingContact", "MovingContact", fields);
                base.export_attribute (obj, "Bushing", "Terminal", "Terminal", fields);
                base.export_attribute (obj, "Bushing", "FixedContact", "FixedContact", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Bushing_collapse" aria-expanded="true" aria-controls="Bushing_collapse" style="margin-left: 10px;">Bushing</a></legend>
                    <div id="Bushing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    {{#BushingInsulationPFs}}<div><b>BushingInsulationPFs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BushingInsulationPFs}}
                    {{#MovingContact}}<div><b>MovingContact</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MovingContact}}");}); return false;'>{{MovingContact}}</a></div>{{/MovingContact}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Terminal}}");}); return false;'>{{Terminal}}</a></div>{{/Terminal}}
                    {{#FixedContact}}<div><b>FixedContact</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FixedContact}}");}); return false;'>{{FixedContact}}</a></div>{{/FixedContact}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["BushingInsulationPFs"]) obj["BushingInsulationPFs_string"] = obj["BushingInsulationPFs"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["BushingInsulationPFs_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Bushing_collapse" aria-expanded="true" aria-controls="{{id}}_Bushing_collapse" style="margin-left: 10px;">Bushing</a></legend>
                    <div id="{{id}}_Bushing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MovingContact'>MovingContact: </label><div class='col-sm-8'><input id='{{id}}_MovingContact' class='form-control' type='text'{{#MovingContact}} value='{{MovingContact}}'{{/MovingContact}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Terminal'>Terminal: </label><div class='col-sm-8'><input id='{{id}}_Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FixedContact'>FixedContact: </label><div class='col-sm-8'><input id='{{id}}_FixedContact' class='form-control' type='text'{{#FixedContact}} value='{{FixedContact}}'{{/FixedContact}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Bushing" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MovingContact").value; if ("" !== temp) obj["MovingContact"] = temp;
                temp = document.getElementById (id + "_Terminal").value; if ("" !== temp) obj["Terminal"] = temp;
                temp = document.getElementById (id + "_FixedContact").value; if ("" !== temp) obj["FixedContact"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BushingInsulationPFs", "0..*", "0..1", "BushingInsulationPF", "Bushing"],
                            ["MovingContact", "0..1", "0..*", "InterrupterUnit", "Bushing"],
                            ["Terminal", "0..1", "0..1", "Terminal", "Bushing"],
                            ["FixedContact", "0..1", "0..*", "InterrupterUnit", "Bushing"]
                        ]
                    )
                );
            }
        }

        /**
         * Breaker interrupter.
         *
         * Some interrupters have one fixed and one moving contact, some have 2 fixed contacts, some 2 moving contacts. An interrupter will have relationships with 2 bushings and those relationships may be any combination of the FixedContact and MovingContact associations.
         *
         */
        class InterrupterUnit extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.InterrupterUnit;
                if (null == bucket)
                   cim_data.InterrupterUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InterrupterUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "InterrupterUnit";
                base.parse_attributes (/<cim:InterrupterUnit.Bushing\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Bushing", sub, context);
                base.parse_attribute (/<cim:InterrupterUnit.OperatingMechanism\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperatingMechanism", sub, context);
                base.parse_attributes (/<cim:InterrupterUnit.Bushing\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Bushing", sub, context);
                let bucket = context.parsed.InterrupterUnit;
                if (null == bucket)
                   context.parsed.InterrupterUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Asset.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "InterrupterUnit", "Bushing", "Bushing", fields);
                base.export_attribute (obj, "InterrupterUnit", "OperatingMechanism", "OperatingMechanism", fields);
                base.export_attributes (obj, "InterrupterUnit", "Bushing", "Bushing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InterrupterUnit_collapse" aria-expanded="true" aria-controls="InterrupterUnit_collapse" style="margin-left: 10px;">InterrupterUnit</a></legend>
                    <div id="InterrupterUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    {{#Bushing}}<div><b>Bushing</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Bushing}}
                    {{#OperatingMechanism}}<div><b>OperatingMechanism</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OperatingMechanism}}");}); return false;'>{{OperatingMechanism}}</a></div>{{/OperatingMechanism}}
                    {{#Bushing}}<div><b>Bushing</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Bushing}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Bushing"]) obj["Bushing_string"] = obj["Bushing"].join ();
                if (obj["Bushing"]) obj["Bushing_string"] = obj["Bushing"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Bushing_string"];
                delete obj["Bushing_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InterrupterUnit_collapse" aria-expanded="true" aria-controls="{{id}}_InterrupterUnit_collapse" style="margin-left: 10px;">InterrupterUnit</a></legend>
                    <div id="{{id}}_InterrupterUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperatingMechanism'>OperatingMechanism: </label><div class='col-sm-8'><input id='{{id}}_OperatingMechanism' class='form-control' type='text'{{#OperatingMechanism}} value='{{OperatingMechanism}}'{{/OperatingMechanism}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InterrupterUnit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_OperatingMechanism").value; if ("" !== temp) obj["OperatingMechanism"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Bushing", "0..*", "0..1", "Bushing", "MovingContact"],
                            ["OperatingMechanism", "0..1", "0..*", "OperatingMechanism", "InterrupterUnit"],
                            ["Bushing", "0..*", "0..1", "Bushing", "FixedContact"]
                        ]
                    )
                );
            }
        }

        /**
         * A duct contains individual wires in the layout as specified with associated wire spacing instances; number of them gives the number of conductors in this duct.
         *
         */
        class DuctBank extends AssetContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DuctBank;
                if (null == bucket)
                   cim_data.DuctBank = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DuctBank[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetContainer.prototype.parse.call (this, context, sub);
                obj.cls = "DuctBank";
                base.parse_element (/<cim:DuctBank.circuitCount>([\s\S]*?)<\/cim:DuctBank.circuitCount>/g, obj, "circuitCount", base.to_string, sub, context);
                base.parse_attributes (/<cim:DuctBank.WireSpacingInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WireSpacingInfos", sub, context);
                let bucket = context.parsed.DuctBank;
                if (null == bucket)
                   context.parsed.DuctBank = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "DuctBank", "circuitCount", "circuitCount",  base.from_string, fields);
                base.export_attributes (obj, "DuctBank", "WireSpacingInfos", "WireSpacingInfos", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DuctBank_collapse" aria-expanded="true" aria-controls="DuctBank_collapse" style="margin-left: 10px;">DuctBank</a></legend>
                    <div id="DuctBank_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetContainer.prototype.template.call (this) +
                    `
                    {{#circuitCount}}<div><b>circuitCount</b>: {{circuitCount}}</div>{{/circuitCount}}
                    {{#WireSpacingInfos}}<div><b>WireSpacingInfos</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WireSpacingInfos}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WireSpacingInfos"]) obj["WireSpacingInfos_string"] = obj["WireSpacingInfos"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WireSpacingInfos_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DuctBank_collapse" aria-expanded="true" aria-controls="{{id}}_DuctBank_collapse" style="margin-left: 10px;">DuctBank</a></legend>
                    <div id="{{id}}_DuctBank_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_circuitCount'>circuitCount: </label><div class='col-sm-8'><input id='{{id}}_circuitCount' class='form-control' type='text'{{#circuitCount}} value='{{circuitCount}}'{{/circuitCount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DuctBank" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_circuitCount").value; if ("" !== temp) obj["circuitCount"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WireSpacingInfos", "0..*", "0..1", "WireSpacing", "DuctBank"]
                        ]
                    )
                );
            }
        }

        /**
         * Support for structure assets.
         *
         */
        class StructureSupport extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.StructureSupport;
                if (null == bucket)
                   cim_data.StructureSupport = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StructureSupport[obj.id];
            }

            parse (context, sub)
            {
                let obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "StructureSupport";
                base.parse_attribute (/<cim:StructureSupport.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:StructureSupport.size>([\s\S]*?)<\/cim:StructureSupport.size>/g, obj, "size", base.to_string, sub, context);
                base.parse_element (/<cim:StructureSupport.direction>([\s\S]*?)<\/cim:StructureSupport.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_element (/<cim:StructureSupport.length>([\s\S]*?)<\/cim:StructureSupport.length>/g, obj, "length", base.to_string, sub, context);
                base.parse_attribute (/<cim:StructureSupport.anchorKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "anchorKind", sub, context);
                base.parse_element (/<cim:StructureSupport.anchorRodCount>([\s\S]*?)<\/cim:StructureSupport.anchorRodCount>/g, obj, "anchorRodCount", base.to_string, sub, context);
                base.parse_element (/<cim:StructureSupport.anchorRodLength>([\s\S]*?)<\/cim:StructureSupport.anchorRodLength>/g, obj, "anchorRodLength", base.to_string, sub, context);
                base.parse_attribute (/<cim:StructureSupport.SecuredStructure\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SecuredStructure", sub, context);
                let bucket = context.parsed.StructureSupport;
                if (null == bucket)
                   context.parsed.StructureSupport = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Asset.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StructureSupport", "kind", "kind", fields);
                base.export_element (obj, "StructureSupport", "size", "size",  base.from_string, fields);
                base.export_element (obj, "StructureSupport", "direction", "direction",  base.from_string, fields);
                base.export_element (obj, "StructureSupport", "length", "length",  base.from_string, fields);
                base.export_attribute (obj, "StructureSupport", "anchorKind", "anchorKind", fields);
                base.export_element (obj, "StructureSupport", "anchorRodCount", "anchorRodCount",  base.from_string, fields);
                base.export_element (obj, "StructureSupport", "anchorRodLength", "anchorRodLength",  base.from_string, fields);
                base.export_attribute (obj, "StructureSupport", "SecuredStructure", "SecuredStructure", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StructureSupport_collapse" aria-expanded="true" aria-controls="StructureSupport_collapse" style="margin-left: 10px;">StructureSupport</a></legend>
                    <div id="StructureSupport_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#size}}<div><b>size</b>: {{size}}</div>{{/size}}
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#length}}<div><b>length</b>: {{length}}</div>{{/length}}
                    {{#anchorKind}}<div><b>anchorKind</b>: {{anchorKind}}</div>{{/anchorKind}}
                    {{#anchorRodCount}}<div><b>anchorRodCount</b>: {{anchorRodCount}}</div>{{/anchorRodCount}}
                    {{#anchorRodLength}}<div><b>anchorRodLength</b>: {{anchorRodLength}}</div>{{/anchorRodLength}}
                    {{#SecuredStructure}}<div><b>SecuredStructure</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SecuredStructure}}");}); return false;'>{{SecuredStructure}}</a></div>{{/SecuredStructure}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindStructureSupportKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in InfAssets.StructureSupportKind) obj["kindStructureSupportKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                obj["anchorKindAnchorKind"] = [{ id: '', selected: (!obj["anchorKind"])}]; for (let property in InfAssets.AnchorKind) obj["anchorKindAnchorKind"].push ({ id: property, selected: obj["anchorKind"] && obj["anchorKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindStructureSupportKind"];
                delete obj["anchorKindAnchorKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StructureSupport_collapse" aria-expanded="true" aria-controls="{{id}}_StructureSupport_collapse" style="margin-left: 10px;">StructureSupport</a></legend>
                    <div id="{{id}}_StructureSupport_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindStructureSupportKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindStructureSupportKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_size'>size: </label><div class='col-sm-8'><input id='{{id}}_size' class='form-control' type='text'{{#size}} value='{{size}}'{{/size}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><input id='{{id}}_direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_length'>length: </label><div class='col-sm-8'><input id='{{id}}_length' class='form-control' type='text'{{#length}} value='{{length}}'{{/length}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_anchorKind'>anchorKind: </label><div class='col-sm-8'><select id='{{id}}_anchorKind' class='form-control custom-select'>{{#anchorKindAnchorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/anchorKindAnchorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_anchorRodCount'>anchorRodCount: </label><div class='col-sm-8'><input id='{{id}}_anchorRodCount' class='form-control' type='text'{{#anchorRodCount}} value='{{anchorRodCount}}'{{/anchorRodCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_anchorRodLength'>anchorRodLength: </label><div class='col-sm-8'><input id='{{id}}_anchorRodLength' class='form-control' type='text'{{#anchorRodLength}} value='{{anchorRodLength}}'{{/anchorRodLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SecuredStructure'>SecuredStructure: </label><div class='col-sm-8'><input id='{{id}}_SecuredStructure' class='form-control' type='text'{{#SecuredStructure}} value='{{SecuredStructure}}'{{/SecuredStructure}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StructureSupport" };
                super.submit (id, obj);
                temp = InfAssets.StructureSupportKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#StructureSupportKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_size").value; if ("" !== temp) obj["size"] = temp;
                temp = document.getElementById (id + "_direction").value; if ("" !== temp) obj["direction"] = temp;
                temp = document.getElementById (id + "_length").value; if ("" !== temp) obj["length"] = temp;
                temp = InfAssets.AnchorKind[document.getElementById (id + "_anchorKind").value]; if (temp) obj["anchorKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AnchorKind." + temp; else delete obj["anchorKind"];
                temp = document.getElementById (id + "_anchorRodCount").value; if ("" !== temp) obj["anchorRodCount"] = temp;
                temp = document.getElementById (id + "_anchorRodLength").value; if ("" !== temp) obj["anchorRodLength"] = temp;
                temp = document.getElementById (id + "_SecuredStructure").value; if ("" !== temp) obj["SecuredStructure"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SecuredStructure", "0..1", "0..*", "Structure", "StructureSupports"]
                        ]
                    )
                );
            }
        }

        /**
         * A facility may contain buildings, storage facilities, switching facilities, power generation, manufacturing facilities, maintenance facilities, etc.
         *
         */
        class Facility extends AssetContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Facility;
                if (null == bucket)
                   cim_data.Facility = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Facility[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Facility";
                base.parse_element (/<cim:Facility.kind>([\s\S]*?)<\/cim:Facility.kind>/g, obj, "kind", base.to_string, sub, context);
                let bucket = context.parsed.Facility;
                if (null == bucket)
                   context.parsed.Facility = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "Facility", "kind", "kind",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Facility_collapse" aria-expanded="true" aria-controls="Facility_collapse" style="margin-left: 10px;">Facility</a></legend>
                    <div id="Facility_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetContainer.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Facility_collapse" aria-expanded="true" aria-controls="{{id}}_Facility_collapse" style="margin-left: 10px;">Facility</a></legend>
                    <div id="{{id}}_Facility_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><input id='{{id}}_kind' class='form-control' type='text'{{#kind}} value='{{kind}}'{{/kind}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Facility" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kind").value; if ("" !== temp) obj["kind"] = temp;

                return (obj);
            }
        }

        /**
         * Enclosure that offers protection to the equipment it contains and/or safety to people/animals outside it.
         *
         */
        class Cabinet extends AssetContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Cabinet;
                if (null == bucket)
                   cim_data.Cabinet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Cabinet[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Cabinet";
                let bucket = context.parsed.Cabinet;
                if (null == bucket)
                   context.parsed.Cabinet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetContainer.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Cabinet_collapse" aria-expanded="true" aria-controls="Cabinet_collapse" style="margin-left: 10px;">Cabinet</a></legend>
                    <div id="Cabinet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetContainer.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Cabinet_collapse" aria-expanded="true" aria-controls="{{id}}_Cabinet_collapse" style="margin-left: 10px;">Cabinet</a></legend>
                    <div id="{{id}}_Cabinet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetContainer.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Cabinet" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class OilSpecimen extends Specimen
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilSpecimen;
                if (null == bucket)
                   cim_data.OilSpecimen = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilSpecimen[obj.id];
            }

            parse (context, sub)
            {
                let obj = Specimen.prototype.parse.call (this, context, sub);
                obj.cls = "OilSpecimen";
                base.parse_element (/<cim:OilSpecimen.oilSampleTemperature>([\s\S]*?)<\/cim:OilSpecimen.oilSampleTemperature>/g, obj, "oilSampleTemperature", base.to_string, sub, context);
                base.parse_attribute (/<cim:OilSpecimen.oilTemperatureSource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "oilTemperatureSource", sub, context);
                base.parse_attribute (/<cim:OilSpecimen.oilSampleTakenFrom\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "oilSampleTakenFrom", sub, context);
                base.parse_attribute (/<cim:OilSpecimen.sampleContainer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "sampleContainer", sub, context);
                let bucket = context.parsed.OilSpecimen;
                if (null == bucket)
                   context.parsed.OilSpecimen = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Specimen.prototype.export.call (this, obj, false);

                base.export_element (obj, "OilSpecimen", "oilSampleTemperature", "oilSampleTemperature",  base.from_string, fields);
                base.export_attribute (obj, "OilSpecimen", "oilTemperatureSource", "oilTemperatureSource", fields);
                base.export_attribute (obj, "OilSpecimen", "oilSampleTakenFrom", "oilSampleTakenFrom", fields);
                base.export_attribute (obj, "OilSpecimen", "sampleContainer", "sampleContainer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilSpecimen_collapse" aria-expanded="true" aria-controls="OilSpecimen_collapse" style="margin-left: 10px;">OilSpecimen</a></legend>
                    <div id="OilSpecimen_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Specimen.prototype.template.call (this) +
                    `
                    {{#oilSampleTemperature}}<div><b>oilSampleTemperature</b>: {{oilSampleTemperature}}</div>{{/oilSampleTemperature}}
                    {{#oilTemperatureSource}}<div><b>oilTemperatureSource</b>: {{oilTemperatureSource}}</div>{{/oilTemperatureSource}}
                    {{#oilSampleTakenFrom}}<div><b>oilSampleTakenFrom</b>: {{oilSampleTakenFrom}}</div>{{/oilSampleTakenFrom}}
                    {{#sampleContainer}}<div><b>sampleContainer</b>: {{sampleContainer}}</div>{{/sampleContainer}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["oilTemperatureSourceOilTemperatureSource"] = [{ id: '', selected: (!obj["oilTemperatureSource"])}]; for (let property in OilTemperatureSource) obj["oilTemperatureSourceOilTemperatureSource"].push ({ id: property, selected: obj["oilTemperatureSource"] && obj["oilTemperatureSource"].endsWith ('.' + property)});
                obj["oilSampleTakenFromOilSampleLocation"] = [{ id: '', selected: (!obj["oilSampleTakenFrom"])}]; for (let property in OilSampleLocation) obj["oilSampleTakenFromOilSampleLocation"].push ({ id: property, selected: obj["oilSampleTakenFrom"] && obj["oilSampleTakenFrom"].endsWith ('.' + property)});
                obj["sampleContainerSampleContainerType"] = [{ id: '', selected: (!obj["sampleContainer"])}]; for (let property in SampleContainerType) obj["sampleContainerSampleContainerType"].push ({ id: property, selected: obj["sampleContainer"] && obj["sampleContainer"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["oilTemperatureSourceOilTemperatureSource"];
                delete obj["oilSampleTakenFromOilSampleLocation"];
                delete obj["sampleContainerSampleContainerType"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilSpecimen_collapse" aria-expanded="true" aria-controls="{{id}}_OilSpecimen_collapse" style="margin-left: 10px;">OilSpecimen</a></legend>
                    <div id="{{id}}_OilSpecimen_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Specimen.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilSampleTemperature'>oilSampleTemperature: </label><div class='col-sm-8'><input id='{{id}}_oilSampleTemperature' class='form-control' type='text'{{#oilSampleTemperature}} value='{{oilSampleTemperature}}'{{/oilSampleTemperature}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilTemperatureSource'>oilTemperatureSource: </label><div class='col-sm-8'><select id='{{id}}_oilTemperatureSource' class='form-control custom-select'>{{#oilTemperatureSourceOilTemperatureSource}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/oilTemperatureSourceOilTemperatureSource}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilSampleTakenFrom'>oilSampleTakenFrom: </label><div class='col-sm-8'><select id='{{id}}_oilSampleTakenFrom' class='form-control custom-select'>{{#oilSampleTakenFromOilSampleLocation}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/oilSampleTakenFromOilSampleLocation}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sampleContainer'>sampleContainer: </label><div class='col-sm-8'><select id='{{id}}_sampleContainer' class='form-control custom-select'>{{#sampleContainerSampleContainerType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/sampleContainerSampleContainerType}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilSpecimen" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_oilSampleTemperature").value; if ("" !== temp) obj["oilSampleTemperature"] = temp;
                temp = OilTemperatureSource[document.getElementById (id + "_oilTemperatureSource").value]; if (temp) obj["oilTemperatureSource"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#OilTemperatureSource." + temp; else delete obj["oilTemperatureSource"];
                temp = OilSampleLocation[document.getElementById (id + "_oilSampleTakenFrom").value]; if (temp) obj["oilSampleTakenFrom"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#OilSampleLocation." + temp; else delete obj["oilSampleTakenFrom"];
                temp = SampleContainerType[document.getElementById (id + "_sampleContainer").value]; if (temp) obj["sampleContainer"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#SampleContainerType." + temp; else delete obj["sampleContainer"];

                return (obj);
            }
        }

        /**
         * Test lab that performs various types of testing related to assets.
         *
         */
        class AssetTestLab extends AssetOrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetTestLab;
                if (null == bucket)
                   cim_data.AssetTestLab = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetTestLab[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetOrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetTestLab";
                base.parse_attributes (/<cim:AssetTestLab.LabTestDataSet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LabTestDataSet", sub, context);
                let bucket = context.parsed.AssetTestLab;
                if (null == bucket)
                   context.parsed.AssetTestLab = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetOrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetTestLab", "LabTestDataSet", "LabTestDataSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetTestLab_collapse" aria-expanded="true" aria-controls="AssetTestLab_collapse" style="margin-left: 10px;">AssetTestLab</a></legend>
                    <div id="AssetTestLab_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
                    `
                    {{#LabTestDataSet}}<div><b>LabTestDataSet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LabTestDataSet}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["LabTestDataSet"]) obj["LabTestDataSet_string"] = obj["LabTestDataSet"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["LabTestDataSet_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetTestLab_collapse" aria-expanded="true" aria-controls="{{id}}_AssetTestLab_collapse" style="margin-left: 10px;">AssetTestLab</a></legend>
                    <div id="{{id}}_AssetTestLab_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "AssetTestLab" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LabTestDataSet", "0..*", "0..1", "LabTestDataSet", "AssetTestLab"]
                        ]
                    )
                );
            }
        }

        /**
         * Organisation that maintains assets.
         *
         */
        class Maintainer extends AssetOrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Maintainer;
                if (null == bucket)
                   cim_data.Maintainer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Maintainer[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetOrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "Maintainer";
                let bucket = context.parsed.Maintainer;
                if (null == bucket)
                   context.parsed.Maintainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetOrganisationRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Maintainer_collapse" aria-expanded="true" aria-controls="Maintainer_collapse" style="margin-left: 10px;">Maintainer</a></legend>
                    <div id="Maintainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Maintainer_collapse" aria-expanded="true" aria-controls="{{id}}_Maintainer_collapse" style="margin-left: 10px;">Maintainer</a></legend>
                    <div id="{{id}}_Maintainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Maintainer" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Identity of person/organization that took sample.
         *
         */
        class AssetTestSampleTaker extends AssetOrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetTestSampleTaker;
                if (null == bucket)
                   cim_data.AssetTestSampleTaker = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetTestSampleTaker[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetOrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetTestSampleTaker";
                base.parse_attributes (/<cim:AssetTestSampleTaker.Specimen\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Specimen", sub, context);
                let bucket = context.parsed.AssetTestSampleTaker;
                if (null == bucket)
                   context.parsed.AssetTestSampleTaker = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetOrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetTestSampleTaker", "Specimen", "Specimen", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetTestSampleTaker_collapse" aria-expanded="true" aria-controls="AssetTestSampleTaker_collapse" style="margin-left: 10px;">AssetTestSampleTaker</a></legend>
                    <div id="AssetTestSampleTaker_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
                    `
                    {{#Specimen}}<div><b>Specimen</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Specimen}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Specimen"]) obj["Specimen_string"] = obj["Specimen"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Specimen_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetTestSampleTaker_collapse" aria-expanded="true" aria-controls="{{id}}_AssetTestSampleTaker_collapse" style="margin-left: 10px;">AssetTestSampleTaker</a></legend>
                    <div id="{{id}}_AssetTestSampleTaker_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "AssetTestSampleTaker" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Specimen", "0..*", "0..1", "Specimen", "AssetTestSampleTaker"]
                        ]
                    )
                );
            }
        }

        /**
         * Owner of the asset.
         *
         */
        class AssetOwner extends AssetOrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetOwner;
                if (null == bucket)
                   cim_data.AssetOwner = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetOwner[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetOrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetOwner";
                base.parse_attributes (/<cim:AssetOwner.Ownerships\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Ownerships", sub, context);
                let bucket = context.parsed.AssetOwner;
                if (null == bucket)
                   context.parsed.AssetOwner = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetOrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetOwner", "Ownerships", "Ownerships", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetOwner_collapse" aria-expanded="true" aria-controls="AssetOwner_collapse" style="margin-left: 10px;">AssetOwner</a></legend>
                    <div id="AssetOwner_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
                    `
                    {{#Ownerships}}<div><b>Ownerships</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Ownerships}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Ownerships"]) obj["Ownerships_string"] = obj["Ownerships"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Ownerships_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetOwner_collapse" aria-expanded="true" aria-controls="{{id}}_AssetOwner_collapse" style="margin-left: 10px;">AssetOwner</a></legend>
                    <div id="{{id}}_AssetOwner_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "AssetOwner" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Ownerships", "0..*", "0..1", "Ownership", "AssetOwner"]
                        ]
                    )
                );
            }
        }

        /**
         * Organisation that is a user of the asset.
         *
         */
        class AssetUser extends AssetOrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetUser;
                if (null == bucket)
                   cim_data.AssetUser = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetUser[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetOrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetUser";
                let bucket = context.parsed.AssetUser;
                if (null == bucket)
                   context.parsed.AssetUser = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetOrganisationRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetUser_collapse" aria-expanded="true" aria-controls="AssetUser_collapse" style="margin-left: 10px;">AssetUser</a></legend>
                    <div id="AssetUser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetUser_collapse" aria-expanded="true" aria-controls="{{id}}_AssetUser_collapse" style="margin-left: 10px;">AssetUser</a></legend>
                    <div id="{{id}}_AssetUser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "AssetUser" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * An aggregated indicative scoring by an analytic, which is based on other analytic scores, that can be used to characterize the health of or the risk associated with one or more assets.
         *
         */
        class AggregateScore extends AnalyticScore
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AggregateScore;
                if (null == bucket)
                   cim_data.AggregateScore = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AggregateScore[obj.id];
            }

            parse (context, sub)
            {
                let obj = AnalyticScore.prototype.parse.call (this, context, sub);
                obj.cls = "AggregateScore";
                base.parse_attributes (/<cim:AggregateScore.AnalyticScore\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AnalyticScore", sub, context);
                let bucket = context.parsed.AggregateScore;
                if (null == bucket)
                   context.parsed.AggregateScore = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AnalyticScore.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AggregateScore", "AnalyticScore", "AnalyticScore", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AggregateScore_collapse" aria-expanded="true" aria-controls="AggregateScore_collapse" style="margin-left: 10px;">AggregateScore</a></legend>
                    <div id="AggregateScore_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AnalyticScore.prototype.template.call (this) +
                    `
                    {{#AnalyticScore}}<div><b>AnalyticScore</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AnalyticScore}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["AnalyticScore"]) obj["AnalyticScore_string"] = obj["AnalyticScore"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["AnalyticScore_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AggregateScore_collapse" aria-expanded="true" aria-controls="{{id}}_AggregateScore_collapse" style="margin-left: 10px;">AggregateScore</a></legend>
                    <div id="{{id}}_AggregateScore_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AnalyticScore.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "AggregateScore" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AnalyticScore", "1..*", "0..1", "AnalyticScore", "AssetAggregateScore"]
                        ]
                    )
                );
            }
        }

        /**
         * Score that is indicative of the risk associated with one or more assets.
         *
         */
        class RiskScore extends AggregateScore
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RiskScore;
                if (null == bucket)
                   cim_data.RiskScore = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RiskScore[obj.id];
            }

            parse (context, sub)
            {
                let obj = AggregateScore.prototype.parse.call (this, context, sub);
                obj.cls = "RiskScore";
                base.parse_attribute (/<cim:RiskScore.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:RiskScore.AssetHealthScore\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetHealthScore", sub, context);
                let bucket = context.parsed.RiskScore;
                if (null == bucket)
                   context.parsed.RiskScore = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AggregateScore.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RiskScore", "kind", "kind", fields);
                base.export_attributes (obj, "RiskScore", "AssetHealthScore", "AssetHealthScore", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RiskScore_collapse" aria-expanded="true" aria-controls="RiskScore_collapse" style="margin-left: 10px;">RiskScore</a></legend>
                    <div id="RiskScore_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateScore.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#AssetHealthScore}}<div><b>AssetHealthScore</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetHealthScore}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindRiskScoreKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in RiskScoreKind) obj["kindRiskScoreKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["AssetHealthScore"]) obj["AssetHealthScore_string"] = obj["AssetHealthScore"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindRiskScoreKind"];
                delete obj["AssetHealthScore_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RiskScore_collapse" aria-expanded="true" aria-controls="{{id}}_RiskScore_collapse" style="margin-left: 10px;">RiskScore</a></legend>
                    <div id="{{id}}_RiskScore_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateScore.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindRiskScoreKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindRiskScoreKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RiskScore" };
                super.submit (id, obj);
                temp = RiskScoreKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#RiskScoreKind." + temp; else delete obj["kind"];

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetHealthScore", "0..*", "0..1", "HealthScore", "AssetRiskScore"]
                        ]
                    )
                );
            }
        }

        /**
         * Score that is indicative of the health of one or more assets.
         *
         */
        class HealthScore extends AggregateScore
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.HealthScore;
                if (null == bucket)
                   cim_data.HealthScore = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HealthScore[obj.id];
            }

            parse (context, sub)
            {
                let obj = AggregateScore.prototype.parse.call (this, context, sub);
                obj.cls = "HealthScore";
                base.parse_attribute (/<cim:HealthScore.AssetRiskScore\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetRiskScore", sub, context);
                let bucket = context.parsed.HealthScore;
                if (null == bucket)
                   context.parsed.HealthScore = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AggregateScore.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "HealthScore", "AssetRiskScore", "AssetRiskScore", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HealthScore_collapse" aria-expanded="true" aria-controls="HealthScore_collapse" style="margin-left: 10px;">HealthScore</a></legend>
                    <div id="HealthScore_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateScore.prototype.template.call (this) +
                    `
                    {{#AssetRiskScore}}<div><b>AssetRiskScore</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetRiskScore}}");}); return false;'>{{AssetRiskScore}}</a></div>{{/AssetRiskScore}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HealthScore_collapse" aria-expanded="true" aria-controls="{{id}}_HealthScore_collapse" style="margin-left: 10px;">HealthScore</a></legend>
                    <div id="{{id}}_HealthScore_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateScore.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetRiskScore'>AssetRiskScore: </label><div class='col-sm-8'><input id='{{id}}_AssetRiskScore' class='form-control' type='text'{{#AssetRiskScore}} value='{{AssetRiskScore}}'{{/AssetRiskScore}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HealthScore" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AssetRiskScore").value; if ("" !== temp) obj["AssetRiskScore"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetRiskScore", "0..1", "0..*", "RiskScore", "AssetHealthScore"]
                        ]
                    )
                );
            }
        }

        return (
            {
                IEEEStandardEditionKind: IEEEStandardEditionKind,
                FailureEvent: FailureEvent,
                CatalogAssetType: CatalogAssetType,
                TestDataSet: TestDataSet,
                DINStandard: DINStandard,
                TransformerFailureReasonKind: TransformerFailureReasonKind,
                SampleContainerType: SampleContainerType,
                EPAStandard: EPAStandard,
                ASTMStandardKind: ASTMStandardKind,
                DeploymentStateKind: DeploymentStateKind,
                TestVariantKind: TestVariantKind,
                DINStandardKind: DINStandardKind,
                ISOStandardKind: ISOStandardKind,
                AssetTestLab: AssetTestLab,
                DINStandardEditionKind: DINStandardEditionKind,
                ASTMStandard: ASTMStandard,
                FailureIsolationMethodKind: FailureIsolationMethodKind,
                AssetKind: AssetKind,
                AssetHazardKind: AssetHazardKind,
                CIGREStandard: CIGREStandard,
                RiskScore: RiskScore,
                AssetGroup: AssetGroup,
                AggregateScore: AggregateScore,
                OilTemperatureSource: OilTemperatureSource,
                UKMinistryOfDefenceStandard: UKMinistryOfDefenceStandard,
                AssetTestSampleTaker: AssetTestSampleTaker,
                Structure: Structure,
                IEEEStandardKind: IEEEStandardKind,
                AssetModelUsageKind: AssetModelUsageKind,
                CorporateStandardKind: CorporateStandardKind,
                AssetLifecycleStateKind: AssetLifecycleStateKind,
                AssetDeployment: AssetDeployment,
                Manufacturer: Manufacturer,
                Procedure: Procedure,
                EPAStandardEditionKind: EPAStandardEditionKind,
                ISOStandardEditionKind: ISOStandardEditionKind,
                ISOStandard: ISOStandard,
                IECStandard: IECStandard,
                ScaleKind: ScaleKind,
                AcceptanceTest: AcceptanceTest,
                TestReason: TestReason,
                TransformerApplicationKind: TransformerApplicationKind,
                AssetUser: AssetUser,
                AssetContainer: AssetContainer,
                AssetFailureClassification: AssetFailureClassification,
                ASTMStandardEditionKind: ASTMStandardEditionKind,
                BreakerFailureReasonKind: BreakerFailureReasonKind,
                BreakerApplicationKind: BreakerApplicationKind,
                CIGREStandardEditionKind: CIGREStandardEditionKind,
                StructureSupport: StructureSupport,
                OilSampleLocation: OilSampleLocation,
                Analytic: Analytic,
                MediumKind: MediumKind,
                WEPStandardKind: WEPStandardKind,
                InspectionDataSet: InspectionDataSet,
                AssetFunction: AssetFunction,
                Seal: Seal,
                UKMinistryOfDefenceStandardEditionKind: UKMinistryOfDefenceStandardEditionKind,
                RiskScoreKind: RiskScoreKind,
                AnalyticScore: AnalyticScore,
                InterrupterUnit: InterrupterUnit,
                RetiredReasonKind: RetiredReasonKind,
                FinancialInfo: FinancialInfo,
                ProcedureKind: ProcedureKind,
                DobleStandardKind: DobleStandardKind,
                DiagnosisDataSet: DiagnosisDataSet,
                AssetInfo: AssetInfo,
                FacilityKind: FacilityKind,
                InUseDate: InUseDate,
                OperatingMechanism: OperatingMechanism,
                SealConditionKind: SealConditionKind,
                AssetGroupKind: AssetGroupKind,
                ComMedia: ComMedia,
                OilSpecimen: OilSpecimen,
                DuctBank: DuctBank,
                IECStandardKind: IECStandardKind,
                CIGREStandardKind: CIGREStandardKind,
                Streetlight: Streetlight,
                Joint: Joint,
                EPAStandardKind: EPAStandardKind,
                IECStandardEditionKind: IECStandardEditionKind,
                Specimen: Specimen,
                IEEEStandard: IEEEStandard,
                TAPPIStandardKind: TAPPIStandardKind,
                DeploymentDate: DeploymentDate,
                LaborelecStandardEditionKind: LaborelecStandardEditionKind,
                AssetLocationHazard: AssetLocationHazard,
                HealthScore: HealthScore,
                UKMinistryofDefenceStandardKind: UKMinistryofDefenceStandardKind,
                DobleStandardEditionKind: DobleStandardEditionKind,
                TestStandard: TestStandard,
                LaborelecStandard: LaborelecStandard,
                WEPStandard: WEPStandard,
                Maintainer: Maintainer,
                LifecycleDate: LifecycleDate,
                TAPPIStandardEditionKind: TAPPIStandardEditionKind,
                ProcedureDataSet: ProcedureDataSet,
                AssetOrganisationRole: AssetOrganisationRole,
                WEPStandardEditionKind: WEPStandardEditionKind,
                LabTestDataSet: LabTestDataSet,
                Medium: Medium,
                Cabinet: Cabinet,
                AnalyticKind: AnalyticKind,
                TestMethod: TestMethod,
                LaborelecStandardKind: LaborelecStandardKind,
                Bushing: Bushing,
                Facility: Facility,
                InUseStateKind: InUseStateKind,
                TAPPIStandard: TAPPIStandard,
                AssetOwner: AssetOwner,
                Asset: Asset,
                ProductAssetModel: ProductAssetModel,
                AssetHealthEvent: AssetHealthEvent,
                SealKind: SealKind,
                MaintenanceDataSet: MaintenanceDataSet,
                DobleStandard: DobleStandard,
                FACTSDevice: FACTSDevice,
                SwitchOperationSummary: SwitchOperationSummary,
                AssetFailureMode: AssetFailureMode
            }
        );
    }
);