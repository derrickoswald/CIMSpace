define
(
    ["model/base"],
    function (base)
    {

        /**
         * The units defiend for usage in the CIM.
         *
         */
        class ExtUnitSymbolKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ExtUnitSymbolKind;
                if (null == bucket)
                   cim_data.ExtUnitSymbolKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExtUnitSymbolKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExtUnitSymbolKind";
                base.parse_element (/<cim:ExtUnitSymbolKind.VA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VA>/g, obj, "VA", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.W>([\s\S]*?)<\/cim:ExtUnitSymbolKind.W>/g, obj, "W", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.VAr>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VAr>/g, obj, "VAr", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.VAh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VAh>/g, obj, "VAh", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.Wh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Wh>/g, obj, "Wh", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.VArh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VArh>/g, obj, "VArh", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.V>([\s\S]*?)<\/cim:ExtUnitSymbolKind.V>/g, obj, "V", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.ohm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ohm>/g, obj, "ohm", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.A>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A>/g, obj, "A", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.F>([\s\S]*?)<\/cim:ExtUnitSymbolKind.F>/g, obj, "F", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.H>([\s\S]*?)<\/cim:ExtUnitSymbolKind.H>/g, obj, "H", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.degC>([\s\S]*?)<\/cim:ExtUnitSymbolKind.degC>/g, obj, "degC", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.sec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.sec>/g, obj, "sec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.min>([\s\S]*?)<\/cim:ExtUnitSymbolKind.min>/g, obj, "min", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.h>/g, obj, "h", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.deg>([\s\S]*?)<\/cim:ExtUnitSymbolKind.deg>/g, obj, "deg", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.rad>([\s\S]*?)<\/cim:ExtUnitSymbolKind.rad>/g, obj, "rad", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.J>([\s\S]*?)<\/cim:ExtUnitSymbolKind.J>/g, obj, "J", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.n>([\s\S]*?)<\/cim:ExtUnitSymbolKind.n>/g, obj, "n", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.siemens>([\s\S]*?)<\/cim:ExtUnitSymbolKind.siemens>/g, obj, "siemens", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.none>([\s\S]*?)<\/cim:ExtUnitSymbolKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.Hz>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Hz>/g, obj, "Hz", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.g>([\s\S]*?)<\/cim:ExtUnitSymbolKind.g>/g, obj, "g", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.pa>([\s\S]*?)<\/cim:ExtUnitSymbolKind.pa>/g, obj, "pa", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m>/g, obj, "m", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m2>/g, obj, "m2", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3>/g, obj, "m3", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.A2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A2>/g, obj, "A2", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.A2h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A2h>/g, obj, "A2h", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.A2s>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A2s>/g, obj, "A2s", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.Ah>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Ah>/g, obj, "Ah", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.APerA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.APerA>/g, obj, "APerA", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.aPerM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.aPerM>/g, obj, "aPerM", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.As>([\s\S]*?)<\/cim:ExtUnitSymbolKind.As>/g, obj, "As", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.b>([\s\S]*?)<\/cim:ExtUnitSymbolKind.b>/g, obj, "b", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.bm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.bm>/g, obj, "bm", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.bq>([\s\S]*?)<\/cim:ExtUnitSymbolKind.bq>/g, obj, "bq", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.btu>([\s\S]*?)<\/cim:ExtUnitSymbolKind.btu>/g, obj, "btu", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.btuPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.btuPerH>/g, obj, "btuPerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.cd>([\s\S]*?)<\/cim:ExtUnitSymbolKind.cd>/g, obj, "cd", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.char>([\s\S]*?)<\/cim:ExtUnitSymbolKind.char>/g, obj, "char", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.HzPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.HzPerSec>/g, obj, "HzPerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.code>([\s\S]*?)<\/cim:ExtUnitSymbolKind.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.cosTheta>([\s\S]*?)<\/cim:ExtUnitSymbolKind.cosTheta>/g, obj, "cosTheta", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.count>([\s\S]*?)<\/cim:ExtUnitSymbolKind.count>/g, obj, "count", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.ft3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ft3>/g, obj, "ft3", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.ft3compensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ft3compensated>/g, obj, "ft3compensated", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.ft3compensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ft3compensatedPerH>/g, obj, "ft3compensatedPerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.gM2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.gM2>/g, obj, "gM2", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.gPerG>([\s\S]*?)<\/cim:ExtUnitSymbolKind.gPerG>/g, obj, "gPerG", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.gy>([\s\S]*?)<\/cim:ExtUnitSymbolKind.gy>/g, obj, "gy", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.HzPerHz>([\s\S]*?)<\/cim:ExtUnitSymbolKind.HzPerHz>/g, obj, "HzPerHz", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.charPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.charPerSec>/g, obj, "charPerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.imperialGal>([\s\S]*?)<\/cim:ExtUnitSymbolKind.imperialGal>/g, obj, "imperialGal", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.imperialGalPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.imperialGalPerH>/g, obj, "imperialGalPerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.jPerK>([\s\S]*?)<\/cim:ExtUnitSymbolKind.jPerK>/g, obj, "jPerK", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.jPerKg>([\s\S]*?)<\/cim:ExtUnitSymbolKind.jPerKg>/g, obj, "jPerKg", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.K>([\s\S]*?)<\/cim:ExtUnitSymbolKind.K>/g, obj, "K", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.kat>([\s\S]*?)<\/cim:ExtUnitSymbolKind.kat>/g, obj, "kat", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.kgM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.kgM>/g, obj, "kgM", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.kgPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.kgPerM3>/g, obj, "kgPerM3", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.litre>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litre>/g, obj, "litre", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.litreCompensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreCompensated>/g, obj, "litreCompensated", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.litreCompensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreCompensatedPerH>/g, obj, "litreCompensatedPerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.litrePerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litrePerH>/g, obj, "litrePerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.litrePerLitre>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litrePerLitre>/g, obj, "litrePerLitre", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.litrePerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litrePerSec>/g, obj, "litrePerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.litreUncompensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreUncompensated>/g, obj, "litreUncompensated", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.litreUncompensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreUncompensatedPerH>/g, obj, "litreUncompensatedPerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.lm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.lm>/g, obj, "lm", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.lx>([\s\S]*?)<\/cim:ExtUnitSymbolKind.lx>/g, obj, "lx", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m2PerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m2PerSec>/g, obj, "m2PerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m3compensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3compensated>/g, obj, "m3compensated", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m3compensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3compensatedPerH>/g, obj, "m3compensatedPerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m3PerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3PerH>/g, obj, "m3PerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m3PerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3PerSec>/g, obj, "m3PerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m3uncompensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3uncompensated>/g, obj, "m3uncompensated", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.m3uncompensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3uncompensatedPerH>/g, obj, "m3uncompensatedPerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.meCode>([\s\S]*?)<\/cim:ExtUnitSymbolKind.meCode>/g, obj, "meCode", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.mol>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mol>/g, obj, "mol", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.molPerKg>([\s\S]*?)<\/cim:ExtUnitSymbolKind.molPerKg>/g, obj, "molPerKg", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.molPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.molPerM3>/g, obj, "molPerM3", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.molPerMol>([\s\S]*?)<\/cim:ExtUnitSymbolKind.molPerMol>/g, obj, "molPerMol", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.money>([\s\S]*?)<\/cim:ExtUnitSymbolKind.money>/g, obj, "money", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.mPerM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerM>/g, obj, "mPerM", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.mPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerM3>/g, obj, "mPerM3", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.mPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerSec>/g, obj, "mPerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.mPerSec2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerSec2>/g, obj, "mPerSec2", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.ohmM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ohmM>/g, obj, "ohmM", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.paA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.paA>/g, obj, "paA", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.paG>([\s\S]*?)<\/cim:ExtUnitSymbolKind.paG>/g, obj, "paG", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.psiA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.psiA>/g, obj, "psiA", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.psiG>([\s\S]*?)<\/cim:ExtUnitSymbolKind.psiG>/g, obj, "psiG", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.q>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q>/g, obj, "q", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.q45>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q45>/g, obj, "q45", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.q45h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q45h>/g, obj, "q45h", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.q60>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q60>/g, obj, "q60", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.q60h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q60h>/g, obj, "q60h", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.qh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.qh>/g, obj, "qh", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.radPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.radPerSec>/g, obj, "radPerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.rev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.rev>/g, obj, "rev", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.revPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.revPerSec>/g, obj, "revPerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.secPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.secPerSec>/g, obj, "secPerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.sr>([\s\S]*?)<\/cim:ExtUnitSymbolKind.sr>/g, obj, "sr", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.status>([\s\S]*?)<\/cim:ExtUnitSymbolKind.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.sv>([\s\S]*?)<\/cim:ExtUnitSymbolKind.sv>/g, obj, "sv", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.t>([\s\S]*?)<\/cim:ExtUnitSymbolKind.t>/g, obj, "t", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.therm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.therm>/g, obj, "therm", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.timeStamp>([\s\S]*?)<\/cim:ExtUnitSymbolKind.timeStamp>/g, obj, "timeStamp", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.usGal>([\s\S]*?)<\/cim:ExtUnitSymbolKind.usGal>/g, obj, "usGal", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.usGalPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.usGalPerH>/g, obj, "usGalPerH", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.V2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.V2>/g, obj, "V2", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.V2h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.V2h>/g, obj, "V2h", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.VAhPerRev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VAhPerRev>/g, obj, "VAhPerRev", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.VArhPerRev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VArhPerRev>/g, obj, "VArhPerRev", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.VPerHz>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VPerHz>/g, obj, "VPerHz", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.VPerV>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VPerV>/g, obj, "VPerV", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.Vs>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Vs>/g, obj, "Vs", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.wb>([\s\S]*?)<\/cim:ExtUnitSymbolKind.wb>/g, obj, "wb", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.WhPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WhPerM3>/g, obj, "WhPerM3", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.WhPerRev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WhPerRev>/g, obj, "WhPerRev", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.wPerMK>([\s\S]*?)<\/cim:ExtUnitSymbolKind.wPerMK>/g, obj, "wPerMK", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.WPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WPerSec>/g, obj, "WPerSec", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.WPerVA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WPerVA>/g, obj, "WPerVA", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitSymbolKind.WPerW>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WPerW>/g, obj, "WPerW", base.to_string, sub, context);

                var bucket = context.parsed.ExtUnitSymbolKind;
                if (null == bucket)
                   context.parsed.ExtUnitSymbolKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExtUnitSymbolKind", "VA", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "W", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "VAr", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "VAh", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "Wh", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "VArh", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "V", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "ohm", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "A", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "F", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "H", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "degC", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "sec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "min", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "h", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "deg", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "rad", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "J", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "n", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "siemens", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "none", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "Hz", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "g", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "pa", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m2", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m3", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "A2", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "A2h", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "A2s", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "Ah", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "APerA", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "aPerM", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "As", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "b", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "bm", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "bq", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "btu", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "btuPerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "cd", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "char", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "HzPerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "code", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "cosTheta", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "count", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "ft3", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "ft3compensated", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "ft3compensatedPerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "gM2", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "gPerG", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "gy", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "HzPerHz", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "charPerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "imperialGal", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "imperialGalPerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "jPerK", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "jPerKg", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "K", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "kat", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "kgM", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "kgPerM3", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "litre", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "litreCompensated", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "litreCompensatedPerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "litrePerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "litrePerLitre", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "litrePerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "litreUncompensated", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "litreUncompensatedPerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "lm", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "lx", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m2PerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m3compensated", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m3compensatedPerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m3PerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m3PerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m3uncompensated", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "m3uncompensatedPerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "meCode", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "mol", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "molPerKg", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "molPerM3", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "molPerMol", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "money", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "mPerM", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "mPerM3", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "mPerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "mPerSec2", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "ohmM", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "paA", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "paG", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "psiA", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "psiG", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "q", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "q45", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "q45h", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "q60", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "q60h", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "qh", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "radPerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "rev", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "revPerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "secPerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "sr", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "status", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "sv", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "t", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "therm", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "timeStamp", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "usGal", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "usGalPerH", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "V2", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "V2h", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "VAhPerRev", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "VArhPerRev", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "VPerHz", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "VPerV", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "Vs", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "wb", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "WhPerM3", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "WhPerRev", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "wPerMK", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "WPerSec", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "WPerVA", base.from_string, fields);
                base.export_element (obj, "ExtUnitSymbolKind", "WPerW", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ExtUnitSymbolKind_collapse" aria-expanded="true" aria-controls="ExtUnitSymbolKind_collapse">ExtUnitSymbolKind</a>
<div id="ExtUnitSymbolKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#VA}}<div><b>VA</b>: {{VA}}</div>{{/VA}}
{{#W}}<div><b>W</b>: {{W}}</div>{{/W}}
{{#VAr}}<div><b>VAr</b>: {{VAr}}</div>{{/VAr}}
{{#VAh}}<div><b>VAh</b>: {{VAh}}</div>{{/VAh}}
{{#Wh}}<div><b>Wh</b>: {{Wh}}</div>{{/Wh}}
{{#VArh}}<div><b>VArh</b>: {{VArh}}</div>{{/VArh}}
{{#V}}<div><b>V</b>: {{V}}</div>{{/V}}
{{#ohm}}<div><b>ohm</b>: {{ohm}}</div>{{/ohm}}
{{#A}}<div><b>A</b>: {{A}}</div>{{/A}}
{{#F}}<div><b>F</b>: {{F}}</div>{{/F}}
{{#H}}<div><b>H</b>: {{H}}</div>{{/H}}
{{#degC}}<div><b>degC</b>: {{degC}}</div>{{/degC}}
{{#sec}}<div><b>sec</b>: {{sec}}</div>{{/sec}}
{{#min}}<div><b>min</b>: {{min}}</div>{{/min}}
{{#h}}<div><b>h</b>: {{h}}</div>{{/h}}
{{#deg}}<div><b>deg</b>: {{deg}}</div>{{/deg}}
{{#rad}}<div><b>rad</b>: {{rad}}</div>{{/rad}}
{{#J}}<div><b>J</b>: {{J}}</div>{{/J}}
{{#n}}<div><b>n</b>: {{n}}</div>{{/n}}
{{#siemens}}<div><b>siemens</b>: {{siemens}}</div>{{/siemens}}
{{#none}}<div><b>none</b>: {{none}}</div>{{/none}}
{{#Hz}}<div><b>Hz</b>: {{Hz}}</div>{{/Hz}}
{{#g}}<div><b>g</b>: {{g}}</div>{{/g}}
{{#pa}}<div><b>pa</b>: {{pa}}</div>{{/pa}}
{{#m}}<div><b>m</b>: {{m}}</div>{{/m}}
{{#m2}}<div><b>m2</b>: {{m2}}</div>{{/m2}}
{{#m3}}<div><b>m3</b>: {{m3}}</div>{{/m3}}
{{#A2}}<div><b>A2</b>: {{A2}}</div>{{/A2}}
{{#A2h}}<div><b>A2h</b>: {{A2h}}</div>{{/A2h}}
{{#A2s}}<div><b>A2s</b>: {{A2s}}</div>{{/A2s}}
{{#Ah}}<div><b>Ah</b>: {{Ah}}</div>{{/Ah}}
{{#APerA}}<div><b>APerA</b>: {{APerA}}</div>{{/APerA}}
{{#aPerM}}<div><b>aPerM</b>: {{aPerM}}</div>{{/aPerM}}
{{#As}}<div><b>As</b>: {{As}}</div>{{/As}}
{{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
{{#bm}}<div><b>bm</b>: {{bm}}</div>{{/bm}}
{{#bq}}<div><b>bq</b>: {{bq}}</div>{{/bq}}
{{#btu}}<div><b>btu</b>: {{btu}}</div>{{/btu}}
{{#btuPerH}}<div><b>btuPerH</b>: {{btuPerH}}</div>{{/btuPerH}}
{{#cd}}<div><b>cd</b>: {{cd}}</div>{{/cd}}
{{#char}}<div><b>char</b>: {{char}}</div>{{/char}}
{{#HzPerSec}}<div><b>HzPerSec</b>: {{HzPerSec}}</div>{{/HzPerSec}}
{{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
{{#cosTheta}}<div><b>cosTheta</b>: {{cosTheta}}</div>{{/cosTheta}}
{{#count}}<div><b>count</b>: {{count}}</div>{{/count}}
{{#ft3}}<div><b>ft3</b>: {{ft3}}</div>{{/ft3}}
{{#ft3compensated}}<div><b>ft3compensated</b>: {{ft3compensated}}</div>{{/ft3compensated}}
{{#ft3compensatedPerH}}<div><b>ft3compensatedPerH</b>: {{ft3compensatedPerH}}</div>{{/ft3compensatedPerH}}
{{#gM2}}<div><b>gM2</b>: {{gM2}}</div>{{/gM2}}
{{#gPerG}}<div><b>gPerG</b>: {{gPerG}}</div>{{/gPerG}}
{{#gy}}<div><b>gy</b>: {{gy}}</div>{{/gy}}
{{#HzPerHz}}<div><b>HzPerHz</b>: {{HzPerHz}}</div>{{/HzPerHz}}
{{#charPerSec}}<div><b>charPerSec</b>: {{charPerSec}}</div>{{/charPerSec}}
{{#imperialGal}}<div><b>imperialGal</b>: {{imperialGal}}</div>{{/imperialGal}}
{{#imperialGalPerH}}<div><b>imperialGalPerH</b>: {{imperialGalPerH}}</div>{{/imperialGalPerH}}
{{#jPerK}}<div><b>jPerK</b>: {{jPerK}}</div>{{/jPerK}}
{{#jPerKg}}<div><b>jPerKg</b>: {{jPerKg}}</div>{{/jPerKg}}
{{#K}}<div><b>K</b>: {{K}}</div>{{/K}}
{{#kat}}<div><b>kat</b>: {{kat}}</div>{{/kat}}
{{#kgM}}<div><b>kgM</b>: {{kgM}}</div>{{/kgM}}
{{#kgPerM3}}<div><b>kgPerM3</b>: {{kgPerM3}}</div>{{/kgPerM3}}
{{#litre}}<div><b>litre</b>: {{litre}}</div>{{/litre}}
{{#litreCompensated}}<div><b>litreCompensated</b>: {{litreCompensated}}</div>{{/litreCompensated}}
{{#litreCompensatedPerH}}<div><b>litreCompensatedPerH</b>: {{litreCompensatedPerH}}</div>{{/litreCompensatedPerH}}
{{#litrePerH}}<div><b>litrePerH</b>: {{litrePerH}}</div>{{/litrePerH}}
{{#litrePerLitre}}<div><b>litrePerLitre</b>: {{litrePerLitre}}</div>{{/litrePerLitre}}
{{#litrePerSec}}<div><b>litrePerSec</b>: {{litrePerSec}}</div>{{/litrePerSec}}
{{#litreUncompensated}}<div><b>litreUncompensated</b>: {{litreUncompensated}}</div>{{/litreUncompensated}}
{{#litreUncompensatedPerH}}<div><b>litreUncompensatedPerH</b>: {{litreUncompensatedPerH}}</div>{{/litreUncompensatedPerH}}
{{#lm}}<div><b>lm</b>: {{lm}}</div>{{/lm}}
{{#lx}}<div><b>lx</b>: {{lx}}</div>{{/lx}}
{{#m2PerSec}}<div><b>m2PerSec</b>: {{m2PerSec}}</div>{{/m2PerSec}}
{{#m3compensated}}<div><b>m3compensated</b>: {{m3compensated}}</div>{{/m3compensated}}
{{#m3compensatedPerH}}<div><b>m3compensatedPerH</b>: {{m3compensatedPerH}}</div>{{/m3compensatedPerH}}
{{#m3PerH}}<div><b>m3PerH</b>: {{m3PerH}}</div>{{/m3PerH}}
{{#m3PerSec}}<div><b>m3PerSec</b>: {{m3PerSec}}</div>{{/m3PerSec}}
{{#m3uncompensated}}<div><b>m3uncompensated</b>: {{m3uncompensated}}</div>{{/m3uncompensated}}
{{#m3uncompensatedPerH}}<div><b>m3uncompensatedPerH</b>: {{m3uncompensatedPerH}}</div>{{/m3uncompensatedPerH}}
{{#meCode}}<div><b>meCode</b>: {{meCode}}</div>{{/meCode}}
{{#mol}}<div><b>mol</b>: {{mol}}</div>{{/mol}}
{{#molPerKg}}<div><b>molPerKg</b>: {{molPerKg}}</div>{{/molPerKg}}
{{#molPerM3}}<div><b>molPerM3</b>: {{molPerM3}}</div>{{/molPerM3}}
{{#molPerMol}}<div><b>molPerMol</b>: {{molPerMol}}</div>{{/molPerMol}}
{{#money}}<div><b>money</b>: {{money}}</div>{{/money}}
{{#mPerM}}<div><b>mPerM</b>: {{mPerM}}</div>{{/mPerM}}
{{#mPerM3}}<div><b>mPerM3</b>: {{mPerM3}}</div>{{/mPerM3}}
{{#mPerSec}}<div><b>mPerSec</b>: {{mPerSec}}</div>{{/mPerSec}}
{{#mPerSec2}}<div><b>mPerSec2</b>: {{mPerSec2}}</div>{{/mPerSec2}}
{{#ohmM}}<div><b>ohmM</b>: {{ohmM}}</div>{{/ohmM}}
{{#paA}}<div><b>paA</b>: {{paA}}</div>{{/paA}}
{{#paG}}<div><b>paG</b>: {{paG}}</div>{{/paG}}
{{#psiA}}<div><b>psiA</b>: {{psiA}}</div>{{/psiA}}
{{#psiG}}<div><b>psiG</b>: {{psiG}}</div>{{/psiG}}
{{#q}}<div><b>q</b>: {{q}}</div>{{/q}}
{{#q45}}<div><b>q45</b>: {{q45}}</div>{{/q45}}
{{#q45h}}<div><b>q45h</b>: {{q45h}}</div>{{/q45h}}
{{#q60}}<div><b>q60</b>: {{q60}}</div>{{/q60}}
{{#q60h}}<div><b>q60h</b>: {{q60h}}</div>{{/q60h}}
{{#qh}}<div><b>qh</b>: {{qh}}</div>{{/qh}}
{{#radPerSec}}<div><b>radPerSec</b>: {{radPerSec}}</div>{{/radPerSec}}
{{#rev}}<div><b>rev</b>: {{rev}}</div>{{/rev}}
{{#revPerSec}}<div><b>revPerSec</b>: {{revPerSec}}</div>{{/revPerSec}}
{{#secPerSec}}<div><b>secPerSec</b>: {{secPerSec}}</div>{{/secPerSec}}
{{#sr}}<div><b>sr</b>: {{sr}}</div>{{/sr}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#sv}}<div><b>sv</b>: {{sv}}</div>{{/sv}}
{{#t}}<div><b>t</b>: {{t}}</div>{{/t}}
{{#therm}}<div><b>therm</b>: {{therm}}</div>{{/therm}}
{{#timeStamp}}<div><b>timeStamp</b>: {{timeStamp}}</div>{{/timeStamp}}
{{#usGal}}<div><b>usGal</b>: {{usGal}}</div>{{/usGal}}
{{#usGalPerH}}<div><b>usGalPerH</b>: {{usGalPerH}}</div>{{/usGalPerH}}
{{#V2}}<div><b>V2</b>: {{V2}}</div>{{/V2}}
{{#V2h}}<div><b>V2h</b>: {{V2h}}</div>{{/V2h}}
{{#VAhPerRev}}<div><b>VAhPerRev</b>: {{VAhPerRev}}</div>{{/VAhPerRev}}
{{#VArhPerRev}}<div><b>VArhPerRev</b>: {{VArhPerRev}}</div>{{/VArhPerRev}}
{{#VPerHz}}<div><b>VPerHz</b>: {{VPerHz}}</div>{{/VPerHz}}
{{#VPerV}}<div><b>VPerV</b>: {{VPerV}}</div>{{/VPerV}}
{{#Vs}}<div><b>Vs</b>: {{Vs}}</div>{{/Vs}}
{{#wb}}<div><b>wb</b>: {{wb}}</div>{{/wb}}
{{#WhPerM3}}<div><b>WhPerM3</b>: {{WhPerM3}}</div>{{/WhPerM3}}
{{#WhPerRev}}<div><b>WhPerRev</b>: {{WhPerRev}}</div>{{/WhPerRev}}
{{#wPerMK}}<div><b>wPerMK</b>: {{wPerMK}}</div>{{/wPerMK}}
{{#WPerSec}}<div><b>WPerSec</b>: {{WPerSec}}</div>{{/WPerSec}}
{{#WPerVA}}<div><b>WPerVA</b>: {{WPerVA}}</div>{{/WPerVA}}
{{#WPerW}}<div><b>WPerW</b>: {{WPerW}}</div>{{/WPerW}}
</div>
`
                );
           }        }

        /**
         * The unit multipliers defined for the CIM.
         *
         */
        class ExtUnitMultiplierKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ExtUnitMultiplierKind;
                if (null == bucket)
                   cim_data.ExtUnitMultiplierKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExtUnitMultiplierKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExtUnitMultiplierKind";
                base.parse_element (/<cim:ExtUnitMultiplierKind.p>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.n>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.n>/g, obj, "n", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.micro>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.micro>/g, obj, "micro", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.m>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.m>/g, obj, "m", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.c>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.c>/g, obj, "c", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.d>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.d>/g, obj, "d", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.k>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.M>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.M>/g, obj, "M", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.G>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.G>/g, obj, "G", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.T>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.T>/g, obj, "T", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.none>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.da>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.da>/g, obj, "da", base.to_string, sub, context);
                base.parse_element (/<cim:ExtUnitMultiplierKind.h>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.h>/g, obj, "h", base.to_string, sub, context);

                var bucket = context.parsed.ExtUnitMultiplierKind;
                if (null == bucket)
                   context.parsed.ExtUnitMultiplierKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExtUnitMultiplierKind", "p", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "n", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "micro", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "m", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "c", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "d", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "k", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "M", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "G", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "T", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "none", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "da", base.from_string, fields);
                base.export_element (obj, "ExtUnitMultiplierKind", "h", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ExtUnitMultiplierKind_collapse" aria-expanded="true" aria-controls="ExtUnitMultiplierKind_collapse">ExtUnitMultiplierKind</a>
<div id="ExtUnitMultiplierKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#p}}<div><b>p</b>: {{p}}</div>{{/p}}
{{#n}}<div><b>n</b>: {{n}}</div>{{/n}}
{{#micro}}<div><b>micro</b>: {{micro}}</div>{{/micro}}
{{#m}}<div><b>m</b>: {{m}}</div>{{/m}}
{{#c}}<div><b>c</b>: {{c}}</div>{{/c}}
{{#d}}<div><b>d</b>: {{d}}</div>{{/d}}
{{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
{{#M}}<div><b>M</b>: {{M}}</div>{{/M}}
{{#G}}<div><b>G</b>: {{G}}</div>{{/G}}
{{#T}}<div><b>T</b>: {{T}}</div>{{/T}}
{{#none}}<div><b>none</b>: {{none}}</div>{{/none}}
{{#da}}<div><b>da</b>: {{da}}</div>{{/da}}
{{#h}}<div><b>h</b>: {{h}}</div>{{/h}}
</div>
`
                );
           }        }

        /**
         * Enumeration of phase identifiers.
         *
         * Allows designation of phases for both transmission and distribution equipment, circuits and loads.
         *
         */
        class ExtPhaseCodeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ExtPhaseCodeKind;
                if (null == bucket)
                   cim_data.ExtPhaseCodeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExtPhaseCodeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExtPhaseCodeKind";
                base.parse_element (/<cim:ExtPhaseCodeKind.ABCN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ABCN>/g, obj, "ABCN", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.ABC>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ABC>/g, obj, "ABC", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.ABN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ABN>/g, obj, "ABN", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.ACN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ACN>/g, obj, "ACN", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.BCN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BCN>/g, obj, "BCN", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.AB>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AB>/g, obj, "AB", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.AC>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AC>/g, obj, "AC", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.BC>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BC>/g, obj, "BC", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.AN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AN>/g, obj, "AN", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.BN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BN>/g, obj, "BN", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.CN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.CN>/g, obj, "CN", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.A>([\s\S]*?)<\/cim:ExtPhaseCodeKind.A>/g, obj, "A", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.B>([\s\S]*?)<\/cim:ExtPhaseCodeKind.B>/g, obj, "B", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.C>([\s\S]*?)<\/cim:ExtPhaseCodeKind.C>/g, obj, "C", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.N>/g, obj, "N", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.S2N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S2N>/g, obj, "S2N", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.S12N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S12N>/g, obj, "S12N", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.S1N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S1N>/g, obj, "S1N", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.S2>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S2>/g, obj, "S2", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.S12>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S12>/g, obj, "S12", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.none>([\s\S]*?)<\/cim:ExtPhaseCodeKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.AtoAv>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AtoAv>/g, obj, "AtoAv", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.BAv>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BAv>/g, obj, "BAv", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.CAN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.CAN>/g, obj, "CAN", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.CAv>([\s\S]*?)<\/cim:ExtPhaseCodeKind.CAv>/g, obj, "CAv", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.NG>([\s\S]*?)<\/cim:ExtPhaseCodeKind.NG>/g, obj, "NG", base.to_string, sub, context);
                base.parse_element (/<cim:ExtPhaseCodeKind.S1>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S1>/g, obj, "S1", base.to_string, sub, context);

                var bucket = context.parsed.ExtPhaseCodeKind;
                if (null == bucket)
                   context.parsed.ExtPhaseCodeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExtPhaseCodeKind", "ABCN", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "ABC", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "ABN", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "ACN", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "BCN", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "AB", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "AC", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "BC", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "AN", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "BN", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "CN", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "A", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "B", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "C", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "N", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "S2N", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "S12N", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "S1N", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "S2", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "S12", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "none", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "AtoAv", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "BAv", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "CAN", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "CAv", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "NG", base.from_string, fields);
                base.export_element (obj, "ExtPhaseCodeKind", "S1", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ExtPhaseCodeKind_collapse" aria-expanded="true" aria-controls="ExtPhaseCodeKind_collapse">ExtPhaseCodeKind</a>
<div id="ExtPhaseCodeKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#ABCN}}<div><b>ABCN</b>: {{ABCN}}</div>{{/ABCN}}
{{#ABC}}<div><b>ABC</b>: {{ABC}}</div>{{/ABC}}
{{#ABN}}<div><b>ABN</b>: {{ABN}}</div>{{/ABN}}
{{#ACN}}<div><b>ACN</b>: {{ACN}}</div>{{/ACN}}
{{#BCN}}<div><b>BCN</b>: {{BCN}}</div>{{/BCN}}
{{#AB}}<div><b>AB</b>: {{AB}}</div>{{/AB}}
{{#AC}}<div><b>AC</b>: {{AC}}</div>{{/AC}}
{{#BC}}<div><b>BC</b>: {{BC}}</div>{{/BC}}
{{#AN}}<div><b>AN</b>: {{AN}}</div>{{/AN}}
{{#BN}}<div><b>BN</b>: {{BN}}</div>{{/BN}}
{{#CN}}<div><b>CN</b>: {{CN}}</div>{{/CN}}
{{#A}}<div><b>A</b>: {{A}}</div>{{/A}}
{{#B}}<div><b>B</b>: {{B}}</div>{{/B}}
{{#C}}<div><b>C</b>: {{C}}</div>{{/C}}
{{#N}}<div><b>N</b>: {{N}}</div>{{/N}}
{{#S2N}}<div><b>S2N</b>: {{S2N}}</div>{{/S2N}}
{{#S12N}}<div><b>S12N</b>: {{S12N}}</div>{{/S12N}}
{{#S1N}}<div><b>S1N</b>: {{S1N}}</div>{{/S1N}}
{{#S2}}<div><b>S2</b>: {{S2}}</div>{{/S2}}
{{#S12}}<div><b>S12</b>: {{S12}}</div>{{/S12}}
{{#none}}<div><b>none</b>: {{none}}</div>{{/none}}
{{#AtoAv}}<div><b>AtoAv</b>: {{AtoAv}}</div>{{/AtoAv}}
{{#BAv}}<div><b>BAv</b>: {{BAv}}</div>{{/BAv}}
{{#CAN}}<div><b>CAN</b>: {{CAN}}</div>{{/CAN}}
{{#CAv}}<div><b>CAv</b>: {{CAv}}</div>{{/CAv}}
{{#NG}}<div><b>NG</b>: {{NG}}</div>{{/NG}}
{{#S1}}<div><b>S1</b>: {{S1}}</div>{{/S1}}
</div>
`
                );
           }        }

        return (
            {
                ExtUnitMultiplierKind: ExtUnitMultiplierKind,
                ExtUnitSymbolKind: ExtUnitSymbolKind,
                ExtPhaseCodeKind: ExtPhaseCodeKind
            }
        );
    }
);