define
(
    ["model/base"],
    function (base)
    {

        /**
         * The units defiend for usage in the CIM.
         *
         */
        var ExtUnitSymbolKind =
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
            sec: "sec",
            min: "min",
            h: "h",
            deg: "deg",
            rad: "rad",
            J: "J",
            n: "n",
            siemens: "siemens",
            none: "none",
            Hz: "Hz",
            g: "g",
            pa: "pa",
            m: "m",
            m2: "m2",
            m3: "m3",
            A2: "A2",
            A2h: "A2h",
            A2s: "A2s",
            Ah: "Ah",
            APerA: "APerA",
            aPerM: "aPerM",
            As: "As",
            b: "b",
            bm: "bm",
            bq: "bq",
            btu: "btu",
            btuPerH: "btuPerH",
            cd: "cd",
            char: "char",
            HzPerSec: "HzPerSec",
            code: "code",
            cosTheta: "cosTheta",
            count: "count",
            ft3: "ft3",
            ft3compensated: "ft3compensated",
            ft3compensatedPerH: "ft3compensatedPerH",
            gM2: "gM2",
            gPerG: "gPerG",
            gy: "gy",
            HzPerHz: "HzPerHz",
            charPerSec: "charPerSec",
            imperialGal: "imperialGal",
            imperialGalPerH: "imperialGalPerH",
            jPerK: "jPerK",
            jPerKg: "jPerKg",
            K: "K",
            kat: "kat",
            kgM: "kgM",
            kgPerM3: "kgPerM3",
            litre: "litre",
            litreCompensated: "litreCompensated",
            litreCompensatedPerH: "litreCompensatedPerH",
            litrePerH: "litrePerH",
            litrePerLitre: "litrePerLitre",
            litrePerSec: "litrePerSec",
            litreUncompensated: "litreUncompensated",
            litreUncompensatedPerH: "litreUncompensatedPerH",
            lm: "lm",
            lx: "lx",
            m2PerSec: "m2PerSec",
            m3compensated: "m3compensated",
            m3compensatedPerH: "m3compensatedPerH",
            m3PerH: "m3PerH",
            m3PerSec: "m3PerSec",
            m3uncompensated: "m3uncompensated",
            m3uncompensatedPerH: "m3uncompensatedPerH",
            meCode: "meCode",
            mol: "mol",
            molPerKg: "molPerKg",
            molPerM3: "molPerM3",
            molPerMol: "molPerMol",
            money: "money",
            mPerM: "mPerM",
            mPerM3: "mPerM3",
            mPerSec: "mPerSec",
            mPerSec2: "mPerSec2",
            ohmM: "ohmM",
            paA: "paA",
            paG: "paG",
            psiA: "psiA",
            psiG: "psiG",
            q: "q",
            q45: "q45",
            q45h: "q45h",
            q60: "q60",
            q60h: "q60h",
            qh: "qh",
            radPerSec: "radPerSec",
            rev: "rev",
            revPerSec: "revPerSec",
            secPerSec: "secPerSec",
            sr: "sr",
            status: "status",
            sv: "sv",
            t: "t",
            therm: "therm",
            timeStamp: "timeStamp",
            usGal: "usGal",
            usGalPerH: "usGalPerH",
            V2: "V2",
            V2h: "V2h",
            VAhPerRev: "VAhPerRev",
            VArhPerRev: "VArhPerRev",
            VPerHz: "VPerHz",
            VPerV: "VPerV",
            Vs: "Vs",
            wb: "wb",
            WhPerM3: "WhPerM3",
            WhPerRev: "WhPerRev",
            wPerMK: "wPerMK",
            WPerSec: "WPerSec",
            WPerVA: "WPerVA",
            WPerW: "WPerW"
        };
        Object.freeze (ExtUnitSymbolKind);

        /**
         * The unit multipliers defined for the CIM.
         *
         */
        var ExtUnitMultiplierKind =
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
            none: "none",
            da: "da",
            h: "h"
        };
        Object.freeze (ExtUnitMultiplierKind);

        /**
         * Enumeration of phase identifiers.
         *
         * Allows designation of phases for both transmission and distribution equipment, circuits and loads.
         *
         */
        var ExtPhaseCodeKind =
        {
            ABCN: "ABCN",
            ABC: "ABC",
            ABN: "ABN",
            ACN: "ACN",
            BCN: "BCN",
            AB: "AB",
            AC: "AC",
            BC: "BC",
            AN: "AN",
            BN: "BN",
            CN: "CN",
            A: "A",
            B: "B",
            C: "C",
            N: "N",
            S2N: "S2N",
            S12N: "S12N",
            S1N: "S1N",
            S2: "S2",
            S12: "S12",
            none: "none",
            AtoAv: "AtoAv",
            BAv: "BAv",
            CAN: "CAN",
            CAv: "CAv",
            NG: "NG",
            S1: "S1"
        };
        Object.freeze (ExtPhaseCodeKind);

        return (
            {
                ExtUnitMultiplierKind: ExtUnitMultiplierKind,
                ExtUnitSymbolKind: ExtUnitSymbolKind,
                ExtPhaseCodeKind: ExtPhaseCodeKind
            }
        );
    }
);