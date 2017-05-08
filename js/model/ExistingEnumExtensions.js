define
(
    ["model/base"],
    function (base)
    {

        /**
         * The units defiend for usage in the CIM.
         */
        function parse_ExtUnitSymbolKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExtUnitSymbolKind";
            /**
             * Apparent power, Volt Ampere (See also real power and reactive power.), VA
             */
            obj["VA"] = base.parse_element (/<cim:ExtUnitSymbolKind.VA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VA>/g, sub, context, true);
            /**
             * Real power, Watt.
             * By definition, one Watt equals oneJoule per second. Electrical power may have real and reactive components. The real portion of electrical power (I�R) or VIcos?, is expressed in Watts. (See also apparent power and reactive power.), W
             */
            obj["W"] = base.parse_element (/<cim:ExtUnitSymbolKind.W>([\s\S]*?)<\/cim:ExtUnitSymbolKind.W>/g, sub, context, true);
            /**
             * Reactive power, Volt Ampere reactive.
             * The �reactive� or �imaginary� component of electrical power (VISin?). (See also real power and apparent power)., VAr
             */
            obj["VAr"] = base.parse_element (/<cim:ExtUnitSymbolKind.VAr>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VAr>/g, sub, context, true);
            /**
             * Apparent energy, Volt Ampere hours, VAh
             */
            obj["VAh"] = base.parse_element (/<cim:ExtUnitSymbolKind.VAh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VAh>/g, sub, context, true);
            /**
             * Real energy, Watt hours, Wh
             */
            obj["Wh"] = base.parse_element (/<cim:ExtUnitSymbolKind.Wh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Wh>/g, sub, context, true);
            /**
             * Reactive energy, Volt Ampere reactive hours, VArh
             */
            obj["VArh"] = base.parse_element (/<cim:ExtUnitSymbolKind.VArh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VArh>/g, sub, context, true);
            /**
             * Electric potential, Volt (W/A), V
             */
            obj["V"] = base.parse_element (/<cim:ExtUnitSymbolKind.V>([\s\S]*?)<\/cim:ExtUnitSymbolKind.V>/g, sub, context, true);
            /**
             * Electric resistance, Ohm (V/A), O
             */
            obj["ohm"] = base.parse_element (/<cim:ExtUnitSymbolKind.ohm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ohm>/g, sub, context, true);
            /**
             * Current, ampere, A
             */
            obj["A"] = base.parse_element (/<cim:ExtUnitSymbolKind.A>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A>/g, sub, context, true);
            /**
             * Electric capacitance, Farad (C/V), �C
             */
            obj["F"] = base.parse_element (/<cim:ExtUnitSymbolKind.F>([\s\S]*?)<\/cim:ExtUnitSymbolKind.F>/g, sub, context, true);
            /**
             * Electric inductance, Henry (Wb/A), H
             */
            obj["H"] = base.parse_element (/<cim:ExtUnitSymbolKind.H>([\s\S]*?)<\/cim:ExtUnitSymbolKind.H>/g, sub, context, true);
            /**
             * Relative temperature in degrees Celsius.
             * In the SI unit system the symbol is �C. Electric charge is measured in coulomb that has the unit symbol C. To destinguish degree Celsius form coulomb the symbol used in the UML is degC. Reason for not using �C is the special character � is difficult to manage in software.
             */
            obj["degC"] = base.parse_element (/<cim:ExtUnitSymbolKind.degC>([\s\S]*?)<\/cim:ExtUnitSymbolKind.degC>/g, sub, context, true);
            /**
             * Time,  seconds, s
             */
            obj["sec"] = base.parse_element (/<cim:ExtUnitSymbolKind.sec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.sec>/g, sub, context, true);
            /**
             * Time, minute  = s * 60, min
             */
            obj["min"] = base.parse_element (/<cim:ExtUnitSymbolKind.min>([\s\S]*?)<\/cim:ExtUnitSymbolKind.min>/g, sub, context, true);
            /**
             * Time, hour = minute * 60, h
             */
            obj["h"] = base.parse_element (/<cim:ExtUnitSymbolKind.h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.h>/g, sub, context, true);
            /**
             * Plane angle, degrees, deg
             */
            obj["deg"] = base.parse_element (/<cim:ExtUnitSymbolKind.deg>([\s\S]*?)<\/cim:ExtUnitSymbolKind.deg>/g, sub, context, true);
            /**
             * Plane angle, Radian (m/m), rad
             */
            obj["rad"] = base.parse_element (/<cim:ExtUnitSymbolKind.rad>([\s\S]*?)<\/cim:ExtUnitSymbolKind.rad>/g, sub, context, true);
            /**
             * Energy joule, (N�m = C�V = W�s), J
             */
            obj["J"] = base.parse_element (/<cim:ExtUnitSymbolKind.J>([\s\S]*?)<\/cim:ExtUnitSymbolKind.J>/g, sub, context, true);
            /**
             * Force newton, (kg m/s�), N
             */
            obj["n"] = base.parse_element (/<cim:ExtUnitSymbolKind.n>([\s\S]*?)<\/cim:ExtUnitSymbolKind.n>/g, sub, context, true);
            /**
             * Electric conductance, Siemens (A / V = 1 / O), S
             */
            obj["siemens"] = base.parse_element (/<cim:ExtUnitSymbolKind.siemens>([\s\S]*?)<\/cim:ExtUnitSymbolKind.siemens>/g, sub, context, true);
            /**
             * N/A, None
             */
            obj["none"] = base.parse_element (/<cim:ExtUnitSymbolKind.none>([\s\S]*?)<\/cim:ExtUnitSymbolKind.none>/g, sub, context, true);
            /**
             * Frequency hertz, (1/s), Hz
             */
            obj["Hz"] = base.parse_element (/<cim:ExtUnitSymbolKind.Hz>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Hz>/g, sub, context, true);
            /**
             * Mass in gram, g
             */
            obj["g"] = base.parse_element (/<cim:ExtUnitSymbolKind.g>([\s\S]*?)<\/cim:ExtUnitSymbolKind.g>/g, sub, context, true);
            /**
             * Pressure, Pascal (N/m�)
            (Note: the absolute or relative measurement of pressure is implied with this entry.
             * See below for more explicit forms.), Pa
             */
            obj["pa"] = base.parse_element (/<cim:ExtUnitSymbolKind.pa>([\s\S]*?)<\/cim:ExtUnitSymbolKind.pa>/g, sub, context, true);
            /**
             * Length, meter, m
             */
            obj["m"] = base.parse_element (/<cim:ExtUnitSymbolKind.m>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m>/g, sub, context, true);
            /**
             * Area, square meter, m�
             */
            obj["m2"] = base.parse_element (/<cim:ExtUnitSymbolKind.m2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m2>/g, sub, context, true);
            /**
             * Volume, cubic meter, m�
             */
            obj["m3"] = base.parse_element (/<cim:ExtUnitSymbolKind.m3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3>/g, sub, context, true);
            /**
             * Amps squared,  amp squared, A2
             */
            obj["A2"] = base.parse_element (/<cim:ExtUnitSymbolKind.A2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A2>/g, sub, context, true);
            /**
             * ampere-squared, Ampere-squared hour, A�h
             */
            obj["A2h"] = base.parse_element (/<cim:ExtUnitSymbolKind.A2h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A2h>/g, sub, context, true);
            /**
             * Amps squared time, square amp second, A�s
             */
            obj["A2s"] = base.parse_element (/<cim:ExtUnitSymbolKind.A2s>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A2s>/g, sub, context, true);
            /**
             * Ampere-hours, Ampere-hours, Ah
             */
            obj["Ah"] = base.parse_element (/<cim:ExtUnitSymbolKind.Ah>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Ah>/g, sub, context, true);
            /**
             * Current, Ratio of Amperages, A/A
             */
            obj["APerA"] = base.parse_element (/<cim:ExtUnitSymbolKind.APerA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.APerA>/g, sub, context, true);
            /**
             * A/m, magnetic field strength, Ampere per metre, A/m
             */
            obj["aPerM"] = base.parse_element (/<cim:ExtUnitSymbolKind.aPerM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.aPerM>/g, sub, context, true);
            /**
             * Amp seconds, amp seconds, As
             */
            obj["As"] = base.parse_element (/<cim:ExtUnitSymbolKind.As>([\s\S]*?)<\/cim:ExtUnitSymbolKind.As>/g, sub, context, true);
            /**
             * Sound pressure level, Bel, acoustic, Combine with multiplier prefix �d� to form decibels of Sound Pressure Level
             * �dB (SPL).�, B (SPL)
             */
            obj["b"] = base.parse_element (/<cim:ExtUnitSymbolKind.b>([\s\S]*?)<\/cim:ExtUnitSymbolKind.b>/g, sub, context, true);
            /**
             * Signal Strength, Bel-mW, normalized to 1mW.
             * Note: to form �dBm� combine �Bm� with multiplier �d�. Bm
             */
            obj["bm"] = base.parse_element (/<cim:ExtUnitSymbolKind.bm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.bm>/g, sub, context, true);
            /**
             * Radioactivity, Becquerel (1/s), Bq
             */
            obj["bq"] = base.parse_element (/<cim:ExtUnitSymbolKind.bq>([\s\S]*?)<\/cim:ExtUnitSymbolKind.bq>/g, sub, context, true);
            /**
             * Energy, British Thermal Units, BTU
             */
            obj["btu"] = base.parse_element (/<cim:ExtUnitSymbolKind.btu>([\s\S]*?)<\/cim:ExtUnitSymbolKind.btu>/g, sub, context, true);
            /**
             * Power, BTU per hour, BTU/h
             */
            obj["btuPerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.btuPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.btuPerH>/g, sub, context, true);
            /**
             * Luminous intensity, candela, cd
             */
            obj["cd"] = base.parse_element (/<cim:ExtUnitSymbolKind.cd>([\s\S]*?)<\/cim:ExtUnitSymbolKind.cd>/g, sub, context, true);
            /**
             * Number of characters, characters, char
             */
            obj["char"] = base.parse_element (/<cim:ExtUnitSymbolKind.char>([\s\S]*?)<\/cim:ExtUnitSymbolKind.char>/g, sub, context, true);
            /**
             * Rate of change of frequency, hertz per second, Hz/s
             */
            obj["HzPerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.HzPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.HzPerSec>/g, sub, context, true);
            /**
             * Application Value, encoded value, code
             */
            obj["code"] = base.parse_element (/<cim:ExtUnitSymbolKind.code>([\s\S]*?)<\/cim:ExtUnitSymbolKind.code>/g, sub, context, true);
            /**
             * Power factor, Dimensionless &lt;img src="HTS_1.
             * PNG" width="64" height="29" border="0" alt="graphic"/&gt;, cos?
             */
            obj["cosTheta"] = base.parse_element (/<cim:ExtUnitSymbolKind.cosTheta>([\s\S]*?)<\/cim:ExtUnitSymbolKind.cosTheta>/g, sub, context, true);
            /**
             * Amount of substance, counter value, count
             */
            obj["count"] = base.parse_element (/<cim:ExtUnitSymbolKind.count>([\s\S]*?)<\/cim:ExtUnitSymbolKind.count>/g, sub, context, true);
            /**
             * Volume, cubic feet, ft�
             */
            obj["ft3"] = base.parse_element (/<cim:ExtUnitSymbolKind.ft3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ft3>/g, sub, context, true);
            /**
             * Volume, cubic feet, ft�(compensated)
             */
            obj["ft3compensated"] = base.parse_element (/<cim:ExtUnitSymbolKind.ft3compensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ft3compensated>/g, sub, context, true);
            /**
             * Volumetric flow rate, compensated cubic feet per hour, ft�(compensated)/h
             */
            obj["ft3compensatedPerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.ft3compensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ft3compensatedPerH>/g, sub, context, true);
            /**
             * Turbine inertia, gram�meter2 (Combine with multiplier prefix �k� to form kg�m2.), gm�
             */
            obj["gM2"] = base.parse_element (/<cim:ExtUnitSymbolKind.gM2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.gM2>/g, sub, context, true);
            /**
             * Concentration, The ratio of the mass of a solute divided by the mass of the solution., g/g
             */
            obj["gPerG"] = base.parse_element (/<cim:ExtUnitSymbolKind.gPerG>([\s\S]*?)<\/cim:ExtUnitSymbolKind.gPerG>/g, sub, context, true);
            /**
             * Absorbed dose, Gray (J/kg), GY
             */
            obj["gy"] = base.parse_element (/<cim:ExtUnitSymbolKind.gy>([\s\S]*?)<\/cim:ExtUnitSymbolKind.gy>/g, sub, context, true);
            /**
             * Frequency, Rate of frequency change, Hz/Hz
             */
            obj["HzPerHz"] = base.parse_element (/<cim:ExtUnitSymbolKind.HzPerHz>([\s\S]*?)<\/cim:ExtUnitSymbolKind.HzPerHz>/g, sub, context, true);
            /**
             * Data rate, characters per second, char/s
             */
            obj["charPerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.charPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.charPerSec>/g, sub, context, true);
            /**
             * Volume, imperial gallons, ImperialGal
             */
            obj["imperialGal"] = base.parse_element (/<cim:ExtUnitSymbolKind.imperialGal>([\s\S]*?)<\/cim:ExtUnitSymbolKind.imperialGal>/g, sub, context, true);
            /**
             * Volumetric flow rate, Imperial gallons per hour, ImperialGal/h
             */
            obj["imperialGalPerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.imperialGalPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.imperialGalPerH>/g, sub, context, true);
            /**
             * Heat capacity, Joule/Kelvin, J/K
             */
            obj["jPerK"] = base.parse_element (/<cim:ExtUnitSymbolKind.jPerK>([\s\S]*?)<\/cim:ExtUnitSymbolKind.jPerK>/g, sub, context, true);
            /**
             * Specific energy, Joules / kg, J/kg
             */
            obj["jPerKg"] = base.parse_element (/<cim:ExtUnitSymbolKind.jPerKg>([\s\S]*?)<\/cim:ExtUnitSymbolKind.jPerKg>/g, sub, context, true);
            /**
             * Temperature, Kelvin, K
             */
            obj["K"] = base.parse_element (/<cim:ExtUnitSymbolKind.K>([\s\S]*?)<\/cim:ExtUnitSymbolKind.K>/g, sub, context, true);
            /**
             * Catalytic activity, katal = mol / s, kat
             */
            obj["kat"] = base.parse_element (/<cim:ExtUnitSymbolKind.kat>([\s\S]*?)<\/cim:ExtUnitSymbolKind.kat>/g, sub, context, true);
            /**
             * Moment of mass ,kilogram meter (kg�m), M
             */
            obj["kgM"] = base.parse_element (/<cim:ExtUnitSymbolKind.kgM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.kgM>/g, sub, context, true);
            /**
             * Density, gram/cubic meter (combine with prefix multiplier �k� to form kg/ m�), g/m�
             */
            obj["kgPerM3"] = base.parse_element (/<cim:ExtUnitSymbolKind.kgPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.kgPerM3>/g, sub, context, true);
            /**
             * Volume, litre = dm3 = m3/1000., L
             */
            obj["litre"] = base.parse_element (/<cim:ExtUnitSymbolKind.litre>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litre>/g, sub, context, true);
            /**
             * Volume, litre, with the value compensated for weather effects, L(compensated)
             */
            obj["litreCompensated"] = base.parse_element (/<cim:ExtUnitSymbolKind.litreCompensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreCompensated>/g, sub, context, true);
            /**
             * Volumetric flow rate, litres (compensated) per hour, L(compensated)/h
             */
            obj["litreCompensatedPerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.litreCompensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreCompensatedPerH>/g, sub, context, true);
            /**
             * Volumetric flow rate, litres per hour, L/h
             */
            obj["litrePerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.litrePerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litrePerH>/g, sub, context, true);
            /**
             * Concentration, The ratio of the volume of a solute divided by the volume of  the solution., L/L
             */
            obj["litrePerLitre"] = base.parse_element (/<cim:ExtUnitSymbolKind.litrePerLitre>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litrePerLitre>/g, sub, context, true);
            /**
             * Volumetric flow rate, Volumetric flow rate, L/s
             */
            obj["litrePerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.litrePerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litrePerSec>/g, sub, context, true);
            /**
             * Volume, litre, with the value uncompensated for weather effects., L(uncompensated)
             */
            obj["litreUncompensated"] = base.parse_element (/<cim:ExtUnitSymbolKind.litreUncompensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreUncompensated>/g, sub, context, true);
            /**
             * Volumetric flow rate, litres (uncompensated) per hour, L(uncompensated)/h
             */
            obj["litreUncompensatedPerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.litreUncompensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreUncompensatedPerH>/g, sub, context, true);
            /**
             * Luminous flux, lumen (cd sr), Lm
             */
            obj["lm"] = base.parse_element (/<cim:ExtUnitSymbolKind.lm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.lm>/g, sub, context, true);
            /**
             * Illuminance lux, (lm/m�), L(uncompensated)/h
             */
            obj["lx"] = base.parse_element (/<cim:ExtUnitSymbolKind.lx>([\s\S]*?)<\/cim:ExtUnitSymbolKind.lx>/g, sub, context, true);
            /**
             * Viscosity, meter squared / second, m�/s
             * m�/h
             */
            obj["m2PerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.m2PerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m2PerSec>/g, sub, context, true);
            /**
             * Volume, cubic meter, with the value compensated for weather effects., m3(compensated)
             */
            obj["m3compensated"] = base.parse_element (/<cim:ExtUnitSymbolKind.m3compensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3compensated>/g, sub, context, true);
            /**
             * Volumetric flow rate, compensated cubic meters per hour, �(compensated)/h
             */
            obj["m3compensatedPerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.m3compensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3compensatedPerH>/g, sub, context, true);
            /**
             * Volumetric flow rate, cubic meters per hour, m�/h
             */
            obj["m3PerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.m3PerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3PerH>/g, sub, context, true);
            /**
             * m3PerSec, cubic meters per second, m�/s
             */
            obj["m3PerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.m3PerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3PerSec>/g, sub, context, true);
            /**
             * m3uncompensated, cubic meter, with the value uncompensated for weather effects., m3(uncompensated)
             */
            obj["m3uncompensated"] = base.parse_element (/<cim:ExtUnitSymbolKind.m3uncompensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3uncompensated>/g, sub, context, true);
            /**
             * Volumetric flow rate, uncompensated cubic meters per hour, m�(uncompensated)/h
             */
            obj["m3uncompensatedPerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.m3uncompensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3uncompensatedPerH>/g, sub, context, true);
            /**
             * EndDeviceEvent, value to be interpreted as a EndDeviceEventCode, meCode
             */
            obj["meCode"] = base.parse_element (/<cim:ExtUnitSymbolKind.meCode>([\s\S]*?)<\/cim:ExtUnitSymbolKind.meCode>/g, sub, context, true);
            /**
             * Amount of substance, mole, mol
             */
            obj["mol"] = base.parse_element (/<cim:ExtUnitSymbolKind.mol>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mol>/g, sub, context, true);
            /**
             * Concentration, Molality, the amount of solute in moles and the amount of solvent in kilograms., mol/kg
             */
            obj["molPerKg"] = base.parse_element (/<cim:ExtUnitSymbolKind.molPerKg>([\s\S]*?)<\/cim:ExtUnitSymbolKind.molPerKg>/g, sub, context, true);
            /**
             * Concentration, The amount of substance concentration, (c), the amount of solvent in moles divided by the volume of solution in m�., mol/ m�
             */
            obj["molPerM3"] = base.parse_element (/<cim:ExtUnitSymbolKind.molPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.molPerM3>/g, sub, context, true);
            /**
             * Concentration, Molar fraction (?), the ratio of the molar amount of a solute divided by the molar amount of the solution.,mol/mol
             */
            obj["molPerMol"] = base.parse_element (/<cim:ExtUnitSymbolKind.molPerMol>([\s\S]*?)<\/cim:ExtUnitSymbolKind.molPerMol>/g, sub, context, true);
            /**
             * Monetary unit, Generic money (Note: Specific monetary units are identified the currency class)., �
             */
            obj["money"] = base.parse_element (/<cim:ExtUnitSymbolKind.money>([\s\S]*?)<\/cim:ExtUnitSymbolKind.money>/g, sub, context, true);
            /**
             * Length, Ratio of length, m/m
             */
            obj["mPerM"] = base.parse_element (/<cim:ExtUnitSymbolKind.mPerM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerM>/g, sub, context, true);
            /**
             * Fuel efficiency, meters / cubic meter, m/m�
             */
            obj["mPerM3"] = base.parse_element (/<cim:ExtUnitSymbolKind.mPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerM3>/g, sub, context, true);
            /**
             * Velocity, meters per second (m/s), m/s
             */
            obj["mPerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.mPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerSec>/g, sub, context, true);
            /**
             * Acceleration, meters per second squared, m/s�
             */
            obj["mPerSec2"] = base.parse_element (/<cim:ExtUnitSymbolKind.mPerSec2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerSec2>/g, sub, context, true);
            /**
             * resistivity, ? (rho), ?m
             */
            obj["ohmM"] = base.parse_element (/<cim:ExtUnitSymbolKind.ohmM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ohmM>/g, sub, context, true);
            /**
             * Pressure, Pascal, absolute pressure, PaA
             */
            obj["paA"] = base.parse_element (/<cim:ExtUnitSymbolKind.paA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.paA>/g, sub, context, true);
            /**
             * Pressure, Pascal, gauge pressure, PaG
             */
            obj["paG"] = base.parse_element (/<cim:ExtUnitSymbolKind.paG>([\s\S]*?)<\/cim:ExtUnitSymbolKind.paG>/g, sub, context, true);
            /**
             * Pressure, Pounds per square inch, absolute, psiA
             */
            obj["psiA"] = base.parse_element (/<cim:ExtUnitSymbolKind.psiA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.psiA>/g, sub, context, true);
            /**
             * Pressure, Pounds per square inch, gauge, psiG
             */
            obj["psiG"] = base.parse_element (/<cim:ExtUnitSymbolKind.psiG>([\s\S]*?)<\/cim:ExtUnitSymbolKind.psiG>/g, sub, context, true);
            /**
             * Quantity power, Q, Q
             */
            obj["q"] = base.parse_element (/<cim:ExtUnitSymbolKind.q>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q>/g, sub, context, true);
            /**
             * Quantity power, Q measured at 45�, Q45
             */
            obj["q45"] = base.parse_element (/<cim:ExtUnitSymbolKind.q45>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q45>/g, sub, context, true);
            /**
             * Quantity energy, Q measured at 45�, Q45h
             */
            obj["q45h"] = base.parse_element (/<cim:ExtUnitSymbolKind.q45h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q45h>/g, sub, context, true);
            /**
             * Quantity power, Q measured at 60�, Q60
             */
            obj["q60"] = base.parse_element (/<cim:ExtUnitSymbolKind.q60>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q60>/g, sub, context, true);
            /**
             * Quantity energy, Qh measured at 60�, Q60h
             */
            obj["q60h"] = base.parse_element (/<cim:ExtUnitSymbolKind.q60h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q60h>/g, sub, context, true);
            /**
             * Quantity energy, Qh, Qh
             */
            obj["qh"] = base.parse_element (/<cim:ExtUnitSymbolKind.qh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.qh>/g, sub, context, true);
            /**
             * Angular velocity, radians per second, rad/s
             */
            obj["radPerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.radPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.radPerSec>/g, sub, context, true);
            /**
             * Amount of rotation, Revolutions, rev
             */
            obj["rev"] = base.parse_element (/<cim:ExtUnitSymbolKind.rev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.rev>/g, sub, context, true);
            /**
             * Rotational speed, Rotations per second, rev/s
             */
            obj["revPerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.revPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.revPerSec>/g, sub, context, true);
            /**
             * Time, Ratio of time (can be combined with an multiplier prefix to show rates such as a clock drift rate, e.g. ��s/s�), s/s
             */
            obj["secPerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.secPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.secPerSec>/g, sub, context, true);
            /**
             * Solid angle, Steradian (m2/m2), sr
             */
            obj["sr"] = base.parse_element (/<cim:ExtUnitSymbolKind.sr>([\s\S]*?)<\/cim:ExtUnitSymbolKind.sr>/g, sub, context, true);
            /**
             * State, "1" = "true", "live", "on", "high", "set"; 
            "0" = "false", "dead", "off", "low", "cleared"
             * Note: A Boolean value is preferred but other values may be supported, status
             */
            obj["status"] = base.parse_element (/<cim:ExtUnitSymbolKind.status>([\s\S]*?)<\/cim:ExtUnitSymbolKind.status>/g, sub, context, true);
            /**
             * Doe equivalent, Sievert (J/kg), Sv
             */
            obj["sv"] = base.parse_element (/<cim:ExtUnitSymbolKind.sv>([\s\S]*?)<\/cim:ExtUnitSymbolKind.sv>/g, sub, context, true);
            /**
             * Magnetic flux density, Tesla (Wb/m2), T
             */
            obj["t"] = base.parse_element (/<cim:ExtUnitSymbolKind.t>([\s\S]*?)<\/cim:ExtUnitSymbolKind.t>/g, sub, context, true);
            /**
             * Energy, Therm, therm
             */
            obj["therm"] = base.parse_element (/<cim:ExtUnitSymbolKind.therm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.therm>/g, sub, context, true);
            /**
             * Timestamp, time and date per ISO 8601 format, timeStamp
             */
            obj["timeStamp"] = base.parse_element (/<cim:ExtUnitSymbolKind.timeStamp>([\s\S]*?)<\/cim:ExtUnitSymbolKind.timeStamp>/g, sub, context, true);
            /**
             * Volume, US gallons, <u>Gal</u>
             */
            obj["usGal"] = base.parse_element (/<cim:ExtUnitSymbolKind.usGal>([\s\S]*?)<\/cim:ExtUnitSymbolKind.usGal>/g, sub, context, true);
            /**
             * Volumetric flow rate, US gallons per hour, USGal/h
             */
            obj["usGalPerH"] = base.parse_element (/<cim:ExtUnitSymbolKind.usGalPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.usGalPerH>/g, sub, context, true);
            /**
             * Volts squared, Volt squared (W2/A2), V�
             */
            obj["V2"] = base.parse_element (/<cim:ExtUnitSymbolKind.V2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.V2>/g, sub, context, true);
            /**
             * volt-squared hour, Volt-squared-hours, V�h
             */
            obj["V2h"] = base.parse_element (/<cim:ExtUnitSymbolKind.V2h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.V2h>/g, sub, context, true);
            /**
             * Kh-Vah, apparent energy metering constant, VAh/rev
             */
            obj["VAhPerRev"] = base.parse_element (/<cim:ExtUnitSymbolKind.VAhPerRev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VAhPerRev>/g, sub, context, true);
            /**
             * Kh-VArh, reactive energy metering constant, VArh/rev
             */
            obj["VArhPerRev"] = base.parse_element (/<cim:ExtUnitSymbolKind.VArhPerRev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VArhPerRev>/g, sub, context, true);
            /**
             * Magnetic flux, Volts per Hertz, V/Hz
             */
            obj["VPerHz"] = base.parse_element (/<cim:ExtUnitSymbolKind.VPerHz>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VPerHz>/g, sub, context, true);
            /**
             * Voltage, Ratio of voltages (e.g. mV/V), V/V
             */
            obj["VPerV"] = base.parse_element (/<cim:ExtUnitSymbolKind.VPerV>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VPerV>/g, sub, context, true);
            /**
             * Volt seconds, Volt seconds (Ws/A), Vs
             */
            obj["Vs"] = base.parse_element (/<cim:ExtUnitSymbolKind.Vs>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Vs>/g, sub, context, true);
            /**
             * Magnetic flux, Weber (V s)<b>, Wb</b>
             */
            obj["wb"] = base.parse_element (/<cim:ExtUnitSymbolKind.wb>([\s\S]*?)<\/cim:ExtUnitSymbolKind.wb>/g, sub, context, true);
            /**
             * Wh/m3, energy per volume, Wh/m�
             */
            obj["WhPerM3"] = base.parse_element (/<cim:ExtUnitSymbolKind.WhPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WhPerM3>/g, sub, context, true);
            /**
             * Kh-Wh, active energy metering constant, Wh/rev
             */
            obj["WhPerRev"] = base.parse_element (/<cim:ExtUnitSymbolKind.WhPerRev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WhPerRev>/g, sub, context, true);
            /**
             * Thermal conductivity, Watt/meter Kelvin, W/m K
             */
            obj["wPerMK"] = base.parse_element (/<cim:ExtUnitSymbolKind.wPerMK>([\s\S]*?)<\/cim:ExtUnitSymbolKind.wPerMK>/g, sub, context, true);
            /**
             * Ramp rate, Watts per second, W/s
             */
            obj["WPerSec"] = base.parse_element (/<cim:ExtUnitSymbolKind.WPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WPerSec>/g, sub, context, true);
            /**
             * Power Factor, PF, W/VA
             */
            obj["WPerVA"] = base.parse_element (/<cim:ExtUnitSymbolKind.WPerVA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WPerVA>/g, sub, context, true);
            /**
             * Signal Strength, Ratio of power, W/W
             */
            obj["WPerW"] = base.parse_element (/<cim:ExtUnitSymbolKind.WPerW>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WPerW>/g, sub, context, true);
            bucket = context.parsed.ExtUnitSymbolKind;
            if (null == bucket)
                context.parsed.ExtUnitSymbolKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The unit multipliers defined for the CIM.
         */
        function parse_ExtUnitMultiplierKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExtUnitMultiplierKind";
            /**
             * Pico 10**-12
             */
            obj["p"] = base.parse_element (/<cim:ExtUnitMultiplierKind.p>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.p>/g, sub, context, true);
            /**
             * Nano 10**-9
             */
            obj["n"] = base.parse_element (/<cim:ExtUnitMultiplierKind.n>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.n>/g, sub, context, true);
            /**
             * Micro 10**-6
             */
            obj["micro"] = base.parse_element (/<cim:ExtUnitMultiplierKind.micro>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.micro>/g, sub, context, true);
            /**
             * Milli 10**-3
             */
            obj["m"] = base.parse_element (/<cim:ExtUnitMultiplierKind.m>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.m>/g, sub, context, true);
            /**
             * Centi 10**-2
             */
            obj["c"] = base.parse_element (/<cim:ExtUnitMultiplierKind.c>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.c>/g, sub, context, true);
            /**
             * Deci 10**-1
             */
            obj["d"] = base.parse_element (/<cim:ExtUnitMultiplierKind.d>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.d>/g, sub, context, true);
            /**
             * Kilo 10**3
             */
            obj["k"] = base.parse_element (/<cim:ExtUnitMultiplierKind.k>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.k>/g, sub, context, true);
            /**
             * Mega 10**6
             */
            obj["M"] = base.parse_element (/<cim:ExtUnitMultiplierKind.M>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.M>/g, sub, context, true);
            /**
             * Giga 10**9
             */
            obj["G"] = base.parse_element (/<cim:ExtUnitMultiplierKind.G>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.G>/g, sub, context, true);
            /**
             * Tera 10**12
             */
            obj["T"] = base.parse_element (/<cim:ExtUnitMultiplierKind.T>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.T>/g, sub, context, true);
            /**
             * Not Applicable or "x1"
             */
            obj["none"] = base.parse_element (/<cim:ExtUnitMultiplierKind.none>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.none>/g, sub, context, true);
            /**
             * deca 10**1
             */
            obj["da"] = base.parse_element (/<cim:ExtUnitMultiplierKind.da>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.da>/g, sub, context, true);
            /**
             * hecto 10**2
             */
            obj["h"] = base.parse_element (/<cim:ExtUnitMultiplierKind.h>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.h>/g, sub, context, true);
            bucket = context.parsed.ExtUnitMultiplierKind;
            if (null == bucket)
                context.parsed.ExtUnitMultiplierKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Enumeration of phase identifiers.
         * Allows designation of phases for both transmission and distribution equipment, circuits and loads.
         */
        function parse_ExtPhaseCodeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExtPhaseCodeKind";
            /**
             * ABC to Neutral
             */
            obj["ABCN"] = base.parse_element (/<cim:ExtPhaseCodeKind.ABCN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ABCN>/g, sub, context, true);
            /**
             * Involving all phases
             */
            obj["ABC"] = base.parse_element (/<cim:ExtPhaseCodeKind.ABC>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ABC>/g, sub, context, true);
            /**
             * AB to Neutral
             */
            obj["ABN"] = base.parse_element (/<cim:ExtPhaseCodeKind.ABN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ABN>/g, sub, context, true);
            /**
             * Phases A, C and neutral.
             */
            obj["ACN"] = base.parse_element (/<cim:ExtPhaseCodeKind.ACN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ACN>/g, sub, context, true);
            /**
             * BC to neutral.
             */
            obj["BCN"] = base.parse_element (/<cim:ExtPhaseCodeKind.BCN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BCN>/g, sub, context, true);
            /**
             * Phases A to B
             */
            obj["AB"] = base.parse_element (/<cim:ExtPhaseCodeKind.AB>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AB>/g, sub, context, true);
            /**
             * Phases A and C
             */
            obj["AC"] = base.parse_element (/<cim:ExtPhaseCodeKind.AC>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AC>/g, sub, context, true);
            /**
             * Phases B to C
             */
            obj["BC"] = base.parse_element (/<cim:ExtPhaseCodeKind.BC>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BC>/g, sub, context, true);
            /**
             * Phases A to neutral.
             */
            obj["AN"] = base.parse_element (/<cim:ExtPhaseCodeKind.AN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AN>/g, sub, context, true);
            /**
             * Phases B to neutral.
             */
            obj["BN"] = base.parse_element (/<cim:ExtPhaseCodeKind.BN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BN>/g, sub, context, true);
            /**
             * Phases C to neutral.
             */
            obj["CN"] = base.parse_element (/<cim:ExtPhaseCodeKind.CN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.CN>/g, sub, context, true);
            /**
             * Phase A.
             */
            obj["A"] = base.parse_element (/<cim:ExtPhaseCodeKind.A>([\s\S]*?)<\/cim:ExtPhaseCodeKind.A>/g, sub, context, true);
            /**
             * Phase B.
             */
            obj["B"] = base.parse_element (/<cim:ExtPhaseCodeKind.B>([\s\S]*?)<\/cim:ExtPhaseCodeKind.B>/g, sub, context, true);
            /**
             * Phase C.
             */
            obj["C"] = base.parse_element (/<cim:ExtPhaseCodeKind.C>([\s\S]*?)<\/cim:ExtPhaseCodeKind.C>/g, sub, context, true);
            /**
             * Neutral
             */
            obj["N"] = base.parse_element (/<cim:ExtPhaseCodeKind.N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.N>/g, sub, context, true);
            /**
             * Phase S2 to neutral.
             */
            obj["S2N"] = base.parse_element (/<cim:ExtPhaseCodeKind.S2N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S2N>/g, sub, context, true);
            /**
             * Phase S1, S2 to neutral.
             */
            obj["S12N"] = base.parse_element (/<cim:ExtPhaseCodeKind.S12N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S12N>/g, sub, context, true);
            /**
             * Phase S1 to Neutral
             */
            obj["S1N"] = base.parse_element (/<cim:ExtPhaseCodeKind.S1N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S1N>/g, sub, context, true);
            /**
             * Phase S2.
             */
            obj["S2"] = base.parse_element (/<cim:ExtPhaseCodeKind.S2>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S2>/g, sub, context, true);
            /**
             * Phase S1 to S2
             */
            obj["S12"] = base.parse_element (/<cim:ExtPhaseCodeKind.S12>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S12>/g, sub, context, true);
            /**
             * Not applicable to any phase
             */
            obj["none"] = base.parse_element (/<cim:ExtPhaseCodeKind.none>([\s\S]*?)<\/cim:ExtPhaseCodeKind.none>/g, sub, context, true);
            /**
             * Phase A current relative to Phase A voltage
             */
            obj["AtoAv"] = base.parse_element (/<cim:ExtPhaseCodeKind.AtoAv>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AtoAv>/g, sub, context, true);
            /**
             * Phase B current or voltage relative to Phase A voltage
             */
            obj["BAv"] = base.parse_element (/<cim:ExtPhaseCodeKind.BAv>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BAv>/g, sub, context, true);
            /**
             * CA to Neutral
             */
            obj["CAN"] = base.parse_element (/<cim:ExtPhaseCodeKind.CAN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.CAN>/g, sub, context, true);
            /**
             * hase C current or voltage relative to Phase A voltage
             */
            obj["CAv"] = base.parse_element (/<cim:ExtPhaseCodeKind.CAv>([\s\S]*?)<\/cim:ExtPhaseCodeKind.CAv>/g, sub, context, true);
            /**
             * Neutral to ground
             */
            obj["NG"] = base.parse_element (/<cim:ExtPhaseCodeKind.NG>([\s\S]*?)<\/cim:ExtPhaseCodeKind.NG>/g, sub, context, true);
            /**
             * Phase S1
             */
            obj["S1"] = base.parse_element (/<cim:ExtPhaseCodeKind.S1>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S1>/g, sub, context, true);
            bucket = context.parsed.ExtPhaseCodeKind;
            if (null == bucket)
                context.parsed.ExtPhaseCodeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ExtUnitSymbolKind: parse_ExtUnitSymbolKind,
                parse_ExtPhaseCodeKind: parse_ExtPhaseCodeKind,
                parse_ExtUnitMultiplierKind: parse_ExtUnitMultiplierKind
            }
        );
    }
);