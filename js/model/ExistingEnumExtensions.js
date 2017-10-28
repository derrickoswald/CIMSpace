define
(
    ["model/base"],
    function (base)
    {

        /**
         * The units defiend for usage in the CIM.
         *
         */
        function parse_ExtUnitSymbolKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExtUnitSymbolKind";
            /**
             * Apparent power, Volt Ampere (See also real power and reactive power.), VA
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.VA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VA>/g, obj, "VA", base.to_string, sub, context);

            /**
             * Real power, Watt.
             *
             * By definition, one Watt equals oneJoule per second. Electrical power may have real and reactive components. The real portion of electrical power (I�R) or VIcos?, is expressed in Watts. (See also apparent power and reactive power.), W
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.W>([\s\S]*?)<\/cim:ExtUnitSymbolKind.W>/g, obj, "W", base.to_string, sub, context);

            /**
             * Reactive power, Volt Ampere reactive.
             *
             * The �reactive� or �imaginary� component of electrical power (VISin?). (See also real power and apparent power)., VAr
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.VAr>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VAr>/g, obj, "VAr", base.to_string, sub, context);

            /**
             * Apparent energy, Volt Ampere hours, VAh
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.VAh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VAh>/g, obj, "VAh", base.to_string, sub, context);

            /**
             * Real energy, Watt hours, Wh
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.Wh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Wh>/g, obj, "Wh", base.to_string, sub, context);

            /**
             * Reactive energy, Volt Ampere reactive hours, VArh
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.VArh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VArh>/g, obj, "VArh", base.to_string, sub, context);

            /**
             * Electric potential, Volt (W/A), V
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.V>([\s\S]*?)<\/cim:ExtUnitSymbolKind.V>/g, obj, "V", base.to_string, sub, context);

            /**
             * Electric resistance, Ohm (V/A), O
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.ohm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ohm>/g, obj, "ohm", base.to_string, sub, context);

            /**
             * Current, ampere, A
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.A>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A>/g, obj, "A", base.to_string, sub, context);

            /**
             * Electric capacitance, Farad (C/V), �C
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.F>([\s\S]*?)<\/cim:ExtUnitSymbolKind.F>/g, obj, "F", base.to_string, sub, context);

            /**
             * Electric inductance, Henry (Wb/A), H
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.H>([\s\S]*?)<\/cim:ExtUnitSymbolKind.H>/g, obj, "H", base.to_string, sub, context);

            /**
             * Relative temperature in degrees Celsius.
             *
             * In the SI unit system the symbol is �C. Electric charge is measured in coulomb that has the unit symbol C. To destinguish degree Celsius form coulomb the symbol used in the UML is degC. Reason for not using �C is the special character � is difficult to manage in software.
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.degC>([\s\S]*?)<\/cim:ExtUnitSymbolKind.degC>/g, obj, "degC", base.to_string, sub, context);

            /**
             * Time,  seconds, s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.sec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.sec>/g, obj, "sec", base.to_string, sub, context);

            /**
             * Time, minute  = s * 60, min
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.min>([\s\S]*?)<\/cim:ExtUnitSymbolKind.min>/g, obj, "min", base.to_string, sub, context);

            /**
             * Time, hour = minute * 60, h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.h>/g, obj, "h", base.to_string, sub, context);

            /**
             * Plane angle, degrees, deg
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.deg>([\s\S]*?)<\/cim:ExtUnitSymbolKind.deg>/g, obj, "deg", base.to_string, sub, context);

            /**
             * Plane angle, Radian (m/m), rad
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.rad>([\s\S]*?)<\/cim:ExtUnitSymbolKind.rad>/g, obj, "rad", base.to_string, sub, context);

            /**
             * Energy joule, (N�m = C�V = W�s), J
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.J>([\s\S]*?)<\/cim:ExtUnitSymbolKind.J>/g, obj, "J", base.to_string, sub, context);

            /**
             * Force newton, (kg m/s�), N
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.n>([\s\S]*?)<\/cim:ExtUnitSymbolKind.n>/g, obj, "n", base.to_string, sub, context);

            /**
             * Electric conductance, Siemens (A / V = 1 / O), S
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.siemens>([\s\S]*?)<\/cim:ExtUnitSymbolKind.siemens>/g, obj, "siemens", base.to_string, sub, context);

            /**
             * N/A, None
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.none>([\s\S]*?)<\/cim:ExtUnitSymbolKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * Frequency hertz, (1/s), Hz
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.Hz>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Hz>/g, obj, "Hz", base.to_string, sub, context);

            /**
             * Mass in gram, g
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.g>([\s\S]*?)<\/cim:ExtUnitSymbolKind.g>/g, obj, "g", base.to_string, sub, context);

            /**
             * Pressure, Pascal (N/m�)
             * (Note: the absolute or relative measurement of pressure is implied with this entry.
             *
             * See below for more explicit forms.), Pa
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.pa>([\s\S]*?)<\/cim:ExtUnitSymbolKind.pa>/g, obj, "pa", base.to_string, sub, context);

            /**
             * Length, meter, m
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m>/g, obj, "m", base.to_string, sub, context);

            /**
             * Area, square meter, m�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m2>/g, obj, "m2", base.to_string, sub, context);

            /**
             * Volume, cubic meter, m�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3>/g, obj, "m3", base.to_string, sub, context);

            /**
             * Amps squared,  amp squared, A2
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.A2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A2>/g, obj, "A2", base.to_string, sub, context);

            /**
             * ampere-squared, Ampere-squared hour, A�h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.A2h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A2h>/g, obj, "A2h", base.to_string, sub, context);

            /**
             * Amps squared time, square amp second, A�s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.A2s>([\s\S]*?)<\/cim:ExtUnitSymbolKind.A2s>/g, obj, "A2s", base.to_string, sub, context);

            /**
             * Ampere-hours, Ampere-hours, Ah
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.Ah>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Ah>/g, obj, "Ah", base.to_string, sub, context);

            /**
             * Current, Ratio of Amperages, A/A
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.APerA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.APerA>/g, obj, "APerA", base.to_string, sub, context);

            /**
             * A/m, magnetic field strength, Ampere per metre, A/m
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.aPerM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.aPerM>/g, obj, "aPerM", base.to_string, sub, context);

            /**
             * Amp seconds, amp seconds, As
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.As>([\s\S]*?)<\/cim:ExtUnitSymbolKind.As>/g, obj, "As", base.to_string, sub, context);

            /**
             * Sound pressure level, Bel, acoustic, Combine with multiplier prefix �d� to form decibels of Sound Pressure Level
             *
             * �dB (SPL).�, B (SPL)
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.b>([\s\S]*?)<\/cim:ExtUnitSymbolKind.b>/g, obj, "b", base.to_string, sub, context);

            /**
             * Signal Strength, Bel-mW, normalized to 1mW.
             *
             * Note: to form �dBm� combine �Bm� with multiplier �d�. Bm
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.bm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.bm>/g, obj, "bm", base.to_string, sub, context);

            /**
             * Radioactivity, Becquerel (1/s), Bq
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.bq>([\s\S]*?)<\/cim:ExtUnitSymbolKind.bq>/g, obj, "bq", base.to_string, sub, context);

            /**
             * Energy, British Thermal Units, BTU
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.btu>([\s\S]*?)<\/cim:ExtUnitSymbolKind.btu>/g, obj, "btu", base.to_string, sub, context);

            /**
             * Power, BTU per hour, BTU/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.btuPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.btuPerH>/g, obj, "btuPerH", base.to_string, sub, context);

            /**
             * Luminous intensity, candela, cd
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.cd>([\s\S]*?)<\/cim:ExtUnitSymbolKind.cd>/g, obj, "cd", base.to_string, sub, context);

            /**
             * Number of characters, characters, char
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.char>([\s\S]*?)<\/cim:ExtUnitSymbolKind.char>/g, obj, "char", base.to_string, sub, context);

            /**
             * Rate of change of frequency, hertz per second, Hz/s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.HzPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.HzPerSec>/g, obj, "HzPerSec", base.to_string, sub, context);

            /**
             * Application Value, encoded value, code
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.code>([\s\S]*?)<\/cim:ExtUnitSymbolKind.code>/g, obj, "code", base.to_string, sub, context);

            /**
             * Power factor, Dimensionless &lt;img src="HTS_1.
             *
             * PNG" width="64" height="29" border="0" alt="graphic"/&gt;, cos?
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.cosTheta>([\s\S]*?)<\/cim:ExtUnitSymbolKind.cosTheta>/g, obj, "cosTheta", base.to_string, sub, context);

            /**
             * Amount of substance, counter value, count
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.count>([\s\S]*?)<\/cim:ExtUnitSymbolKind.count>/g, obj, "count", base.to_string, sub, context);

            /**
             * Volume, cubic feet, ft�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.ft3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ft3>/g, obj, "ft3", base.to_string, sub, context);

            /**
             * Volume, cubic feet, ft�(compensated)
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.ft3compensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ft3compensated>/g, obj, "ft3compensated", base.to_string, sub, context);

            /**
             * Volumetric flow rate, compensated cubic feet per hour, ft�(compensated)/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.ft3compensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ft3compensatedPerH>/g, obj, "ft3compensatedPerH", base.to_string, sub, context);

            /**
             * Turbine inertia, gram�meter2 (Combine with multiplier prefix �k� to form kg�m2.), gm�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.gM2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.gM2>/g, obj, "gM2", base.to_string, sub, context);

            /**
             * Concentration, The ratio of the mass of a solute divided by the mass of the solution., g/g
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.gPerG>([\s\S]*?)<\/cim:ExtUnitSymbolKind.gPerG>/g, obj, "gPerG", base.to_string, sub, context);

            /**
             * Absorbed dose, Gray (J/kg), GY
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.gy>([\s\S]*?)<\/cim:ExtUnitSymbolKind.gy>/g, obj, "gy", base.to_string, sub, context);

            /**
             * Frequency, Rate of frequency change, Hz/Hz
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.HzPerHz>([\s\S]*?)<\/cim:ExtUnitSymbolKind.HzPerHz>/g, obj, "HzPerHz", base.to_string, sub, context);

            /**
             * Data rate, characters per second, char/s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.charPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.charPerSec>/g, obj, "charPerSec", base.to_string, sub, context);

            /**
             * Volume, imperial gallons, ImperialGal
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.imperialGal>([\s\S]*?)<\/cim:ExtUnitSymbolKind.imperialGal>/g, obj, "imperialGal", base.to_string, sub, context);

            /**
             * Volumetric flow rate, Imperial gallons per hour, ImperialGal/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.imperialGalPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.imperialGalPerH>/g, obj, "imperialGalPerH", base.to_string, sub, context);

            /**
             * Heat capacity, Joule/Kelvin, J/K
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.jPerK>([\s\S]*?)<\/cim:ExtUnitSymbolKind.jPerK>/g, obj, "jPerK", base.to_string, sub, context);

            /**
             * Specific energy, Joules / kg, J/kg
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.jPerKg>([\s\S]*?)<\/cim:ExtUnitSymbolKind.jPerKg>/g, obj, "jPerKg", base.to_string, sub, context);

            /**
             * Temperature, Kelvin, K
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.K>([\s\S]*?)<\/cim:ExtUnitSymbolKind.K>/g, obj, "K", base.to_string, sub, context);

            /**
             * Catalytic activity, katal = mol / s, kat
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.kat>([\s\S]*?)<\/cim:ExtUnitSymbolKind.kat>/g, obj, "kat", base.to_string, sub, context);

            /**
             * Moment of mass ,kilogram meter (kg�m), M
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.kgM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.kgM>/g, obj, "kgM", base.to_string, sub, context);

            /**
             * Density, gram/cubic meter (combine with prefix multiplier �k� to form kg/ m�), g/m�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.kgPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.kgPerM3>/g, obj, "kgPerM3", base.to_string, sub, context);

            /**
             * Volume, litre = dm3 = m3/1000., L
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.litre>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litre>/g, obj, "litre", base.to_string, sub, context);

            /**
             * Volume, litre, with the value compensated for weather effects, L(compensated)
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.litreCompensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreCompensated>/g, obj, "litreCompensated", base.to_string, sub, context);

            /**
             * Volumetric flow rate, litres (compensated) per hour, L(compensated)/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.litreCompensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreCompensatedPerH>/g, obj, "litreCompensatedPerH", base.to_string, sub, context);

            /**
             * Volumetric flow rate, litres per hour, L/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.litrePerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litrePerH>/g, obj, "litrePerH", base.to_string, sub, context);

            /**
             * Concentration, The ratio of the volume of a solute divided by the volume of  the solution., L/L
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.litrePerLitre>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litrePerLitre>/g, obj, "litrePerLitre", base.to_string, sub, context);

            /**
             * Volumetric flow rate, Volumetric flow rate, L/s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.litrePerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litrePerSec>/g, obj, "litrePerSec", base.to_string, sub, context);

            /**
             * Volume, litre, with the value uncompensated for weather effects., L(uncompensated)
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.litreUncompensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreUncompensated>/g, obj, "litreUncompensated", base.to_string, sub, context);

            /**
             * Volumetric flow rate, litres (uncompensated) per hour, L(uncompensated)/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.litreUncompensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.litreUncompensatedPerH>/g, obj, "litreUncompensatedPerH", base.to_string, sub, context);

            /**
             * Luminous flux, lumen (cd sr), Lm
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.lm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.lm>/g, obj, "lm", base.to_string, sub, context);

            /**
             * Illuminance lux, (lm/m�), L(uncompensated)/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.lx>([\s\S]*?)<\/cim:ExtUnitSymbolKind.lx>/g, obj, "lx", base.to_string, sub, context);

            /**
             * Viscosity, meter squared / second, m�/s
             *
             * m�/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m2PerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m2PerSec>/g, obj, "m2PerSec", base.to_string, sub, context);

            /**
             * Volume, cubic meter, with the value compensated for weather effects., m3(compensated)
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m3compensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3compensated>/g, obj, "m3compensated", base.to_string, sub, context);

            /**
             * Volumetric flow rate, compensated cubic meters per hour, �(compensated)/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m3compensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3compensatedPerH>/g, obj, "m3compensatedPerH", base.to_string, sub, context);

            /**
             * Volumetric flow rate, cubic meters per hour, m�/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m3PerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3PerH>/g, obj, "m3PerH", base.to_string, sub, context);

            /**
             * m3PerSec, cubic meters per second, m�/s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m3PerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3PerSec>/g, obj, "m3PerSec", base.to_string, sub, context);

            /**
             * m3uncompensated, cubic meter, with the value uncompensated for weather effects., m3(uncompensated)
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m3uncompensated>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3uncompensated>/g, obj, "m3uncompensated", base.to_string, sub, context);

            /**
             * Volumetric flow rate, uncompensated cubic meters per hour, m�(uncompensated)/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.m3uncompensatedPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.m3uncompensatedPerH>/g, obj, "m3uncompensatedPerH", base.to_string, sub, context);

            /**
             * EndDeviceEvent, value to be interpreted as a EndDeviceEventCode, meCode
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.meCode>([\s\S]*?)<\/cim:ExtUnitSymbolKind.meCode>/g, obj, "meCode", base.to_string, sub, context);

            /**
             * Amount of substance, mole, mol
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.mol>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mol>/g, obj, "mol", base.to_string, sub, context);

            /**
             * Concentration, Molality, the amount of solute in moles and the amount of solvent in kilograms., mol/kg
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.molPerKg>([\s\S]*?)<\/cim:ExtUnitSymbolKind.molPerKg>/g, obj, "molPerKg", base.to_string, sub, context);

            /**
             * Concentration, The amount of substance concentration, (c), the amount of solvent in moles divided by the volume of solution in m�., mol/ m�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.molPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.molPerM3>/g, obj, "molPerM3", base.to_string, sub, context);

            /**
             * Concentration, Molar fraction (?), the ratio of the molar amount of a solute divided by the molar amount of the solution.,mol/mol
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.molPerMol>([\s\S]*?)<\/cim:ExtUnitSymbolKind.molPerMol>/g, obj, "molPerMol", base.to_string, sub, context);

            /**
             * Monetary unit, Generic money (Note: Specific monetary units are identified the currency class)., �
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.money>([\s\S]*?)<\/cim:ExtUnitSymbolKind.money>/g, obj, "money", base.to_string, sub, context);

            /**
             * Length, Ratio of length, m/m
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.mPerM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerM>/g, obj, "mPerM", base.to_string, sub, context);

            /**
             * Fuel efficiency, meters / cubic meter, m/m�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.mPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerM3>/g, obj, "mPerM3", base.to_string, sub, context);

            /**
             * Velocity, meters per second (m/s), m/s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.mPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerSec>/g, obj, "mPerSec", base.to_string, sub, context);

            /**
             * Acceleration, meters per second squared, m/s�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.mPerSec2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.mPerSec2>/g, obj, "mPerSec2", base.to_string, sub, context);

            /**
             * resistivity, ? (rho), ?m
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.ohmM>([\s\S]*?)<\/cim:ExtUnitSymbolKind.ohmM>/g, obj, "ohmM", base.to_string, sub, context);

            /**
             * Pressure, Pascal, absolute pressure, PaA
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.paA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.paA>/g, obj, "paA", base.to_string, sub, context);

            /**
             * Pressure, Pascal, gauge pressure, PaG
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.paG>([\s\S]*?)<\/cim:ExtUnitSymbolKind.paG>/g, obj, "paG", base.to_string, sub, context);

            /**
             * Pressure, Pounds per square inch, absolute, psiA
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.psiA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.psiA>/g, obj, "psiA", base.to_string, sub, context);

            /**
             * Pressure, Pounds per square inch, gauge, psiG
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.psiG>([\s\S]*?)<\/cim:ExtUnitSymbolKind.psiG>/g, obj, "psiG", base.to_string, sub, context);

            /**
             * Quantity power, Q, Q
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.q>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q>/g, obj, "q", base.to_string, sub, context);

            /**
             * Quantity power, Q measured at 45�, Q45
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.q45>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q45>/g, obj, "q45", base.to_string, sub, context);

            /**
             * Quantity energy, Q measured at 45�, Q45h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.q45h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q45h>/g, obj, "q45h", base.to_string, sub, context);

            /**
             * Quantity power, Q measured at 60�, Q60
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.q60>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q60>/g, obj, "q60", base.to_string, sub, context);

            /**
             * Quantity energy, Qh measured at 60�, Q60h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.q60h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.q60h>/g, obj, "q60h", base.to_string, sub, context);

            /**
             * Quantity energy, Qh, Qh
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.qh>([\s\S]*?)<\/cim:ExtUnitSymbolKind.qh>/g, obj, "qh", base.to_string, sub, context);

            /**
             * Angular velocity, radians per second, rad/s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.radPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.radPerSec>/g, obj, "radPerSec", base.to_string, sub, context);

            /**
             * Amount of rotation, Revolutions, rev
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.rev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.rev>/g, obj, "rev", base.to_string, sub, context);

            /**
             * Rotational speed, Rotations per second, rev/s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.revPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.revPerSec>/g, obj, "revPerSec", base.to_string, sub, context);

            /**
             * Time, Ratio of time (can be combined with an multiplier prefix to show rates such as a clock drift rate, e.g. ��s/s�), s/s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.secPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.secPerSec>/g, obj, "secPerSec", base.to_string, sub, context);

            /**
             * Solid angle, Steradian (m2/m2), sr
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.sr>([\s\S]*?)<\/cim:ExtUnitSymbolKind.sr>/g, obj, "sr", base.to_string, sub, context);

            /**
             * State, "1" = "true", "live", "on", "high", "set";
             * "0" = "false", "dead", "off", "low", "cleared"
             *
             * Note: A Boolean value is preferred but other values may be supported, status
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.status>([\s\S]*?)<\/cim:ExtUnitSymbolKind.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Doe equivalent, Sievert (J/kg), Sv
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.sv>([\s\S]*?)<\/cim:ExtUnitSymbolKind.sv>/g, obj, "sv", base.to_string, sub, context);

            /**
             * Magnetic flux density, Tesla (Wb/m2), T
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.t>([\s\S]*?)<\/cim:ExtUnitSymbolKind.t>/g, obj, "t", base.to_string, sub, context);

            /**
             * Energy, Therm, therm
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.therm>([\s\S]*?)<\/cim:ExtUnitSymbolKind.therm>/g, obj, "therm", base.to_string, sub, context);

            /**
             * Timestamp, time and date per ISO 8601 format, timeStamp
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.timeStamp>([\s\S]*?)<\/cim:ExtUnitSymbolKind.timeStamp>/g, obj, "timeStamp", base.to_string, sub, context);

            /**
             * Volume, US gallons, <u>Gal</u>
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.usGal>([\s\S]*?)<\/cim:ExtUnitSymbolKind.usGal>/g, obj, "usGal", base.to_string, sub, context);

            /**
             * Volumetric flow rate, US gallons per hour, USGal/h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.usGalPerH>([\s\S]*?)<\/cim:ExtUnitSymbolKind.usGalPerH>/g, obj, "usGalPerH", base.to_string, sub, context);

            /**
             * Volts squared, Volt squared (W2/A2), V�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.V2>([\s\S]*?)<\/cim:ExtUnitSymbolKind.V2>/g, obj, "V2", base.to_string, sub, context);

            /**
             * volt-squared hour, Volt-squared-hours, V�h
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.V2h>([\s\S]*?)<\/cim:ExtUnitSymbolKind.V2h>/g, obj, "V2h", base.to_string, sub, context);

            /**
             * Kh-Vah, apparent energy metering constant, VAh/rev
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.VAhPerRev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VAhPerRev>/g, obj, "VAhPerRev", base.to_string, sub, context);

            /**
             * Kh-VArh, reactive energy metering constant, VArh/rev
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.VArhPerRev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VArhPerRev>/g, obj, "VArhPerRev", base.to_string, sub, context);

            /**
             * Magnetic flux, Volts per Hertz, V/Hz
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.VPerHz>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VPerHz>/g, obj, "VPerHz", base.to_string, sub, context);

            /**
             * Voltage, Ratio of voltages (e.g. mV/V), V/V
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.VPerV>([\s\S]*?)<\/cim:ExtUnitSymbolKind.VPerV>/g, obj, "VPerV", base.to_string, sub, context);

            /**
             * Volt seconds, Volt seconds (Ws/A), Vs
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.Vs>([\s\S]*?)<\/cim:ExtUnitSymbolKind.Vs>/g, obj, "Vs", base.to_string, sub, context);

            /**
             * Magnetic flux, Weber (V s)<b>, Wb</b>
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.wb>([\s\S]*?)<\/cim:ExtUnitSymbolKind.wb>/g, obj, "wb", base.to_string, sub, context);

            /**
             * Wh/m3, energy per volume, Wh/m�
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.WhPerM3>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WhPerM3>/g, obj, "WhPerM3", base.to_string, sub, context);

            /**
             * Kh-Wh, active energy metering constant, Wh/rev
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.WhPerRev>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WhPerRev>/g, obj, "WhPerRev", base.to_string, sub, context);

            /**
             * Thermal conductivity, Watt/meter Kelvin, W/m K
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.wPerMK>([\s\S]*?)<\/cim:ExtUnitSymbolKind.wPerMK>/g, obj, "wPerMK", base.to_string, sub, context);

            /**
             * Ramp rate, Watts per second, W/s
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.WPerSec>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WPerSec>/g, obj, "WPerSec", base.to_string, sub, context);

            /**
             * Power Factor, PF, W/VA
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.WPerVA>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WPerVA>/g, obj, "WPerVA", base.to_string, sub, context);

            /**
             * Signal Strength, Ratio of power, W/W
             *
             */
            base.parse_element (/<cim:ExtUnitSymbolKind.WPerW>([\s\S]*?)<\/cim:ExtUnitSymbolKind.WPerW>/g, obj, "WPerW", base.to_string, sub, context);

            bucket = context.parsed.ExtUnitSymbolKind;
            if (null == bucket)
                context.parsed.ExtUnitSymbolKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The unit multipliers defined for the CIM.
         *
         */
        function parse_ExtUnitMultiplierKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExtUnitMultiplierKind";
            /**
             * Pico 10**-12
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.p>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.p>/g, obj, "p", base.to_string, sub, context);

            /**
             * Nano 10**-9
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.n>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.n>/g, obj, "n", base.to_string, sub, context);

            /**
             * Micro 10**-6
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.micro>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.micro>/g, obj, "micro", base.to_string, sub, context);

            /**
             * Milli 10**-3
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.m>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.m>/g, obj, "m", base.to_string, sub, context);

            /**
             * Centi 10**-2
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.c>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.c>/g, obj, "c", base.to_string, sub, context);

            /**
             * Deci 10**-1
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.d>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.d>/g, obj, "d", base.to_string, sub, context);

            /**
             * Kilo 10**3
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.k>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * Mega 10**6
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.M>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.M>/g, obj, "M", base.to_string, sub, context);

            /**
             * Giga 10**9
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.G>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.G>/g, obj, "G", base.to_string, sub, context);

            /**
             * Tera 10**12
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.T>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.T>/g, obj, "T", base.to_string, sub, context);

            /**
             * Not Applicable or "x1"
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.none>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * deca 10**1
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.da>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.da>/g, obj, "da", base.to_string, sub, context);

            /**
             * hecto 10**2
             *
             */
            base.parse_element (/<cim:ExtUnitMultiplierKind.h>([\s\S]*?)<\/cim:ExtUnitMultiplierKind.h>/g, obj, "h", base.to_string, sub, context);

            bucket = context.parsed.ExtUnitMultiplierKind;
            if (null == bucket)
                context.parsed.ExtUnitMultiplierKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Enumeration of phase identifiers.
         *
         * Allows designation of phases for both transmission and distribution equipment, circuits and loads.
         *
         */
        function parse_ExtPhaseCodeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExtPhaseCodeKind";
            /**
             * ABC to Neutral
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.ABCN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ABCN>/g, obj, "ABCN", base.to_string, sub, context);

            /**
             * Involving all phases
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.ABC>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ABC>/g, obj, "ABC", base.to_string, sub, context);

            /**
             * AB to Neutral
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.ABN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ABN>/g, obj, "ABN", base.to_string, sub, context);

            /**
             * Phases A, C and neutral.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.ACN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.ACN>/g, obj, "ACN", base.to_string, sub, context);

            /**
             * BC to neutral.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.BCN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BCN>/g, obj, "BCN", base.to_string, sub, context);

            /**
             * Phases A to B
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.AB>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AB>/g, obj, "AB", base.to_string, sub, context);

            /**
             * Phases A and C
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.AC>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AC>/g, obj, "AC", base.to_string, sub, context);

            /**
             * Phases B to C
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.BC>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BC>/g, obj, "BC", base.to_string, sub, context);

            /**
             * Phases A to neutral.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.AN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AN>/g, obj, "AN", base.to_string, sub, context);

            /**
             * Phases B to neutral.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.BN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BN>/g, obj, "BN", base.to_string, sub, context);

            /**
             * Phases C to neutral.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.CN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.CN>/g, obj, "CN", base.to_string, sub, context);

            /**
             * Phase A.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.A>([\s\S]*?)<\/cim:ExtPhaseCodeKind.A>/g, obj, "A", base.to_string, sub, context);

            /**
             * Phase B.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.B>([\s\S]*?)<\/cim:ExtPhaseCodeKind.B>/g, obj, "B", base.to_string, sub, context);

            /**
             * Phase C.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.C>([\s\S]*?)<\/cim:ExtPhaseCodeKind.C>/g, obj, "C", base.to_string, sub, context);

            /**
             * Neutral
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.N>/g, obj, "N", base.to_string, sub, context);

            /**
             * Phase S2 to neutral.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.S2N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S2N>/g, obj, "S2N", base.to_string, sub, context);

            /**
             * Phase S1, S2 to neutral.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.S12N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S12N>/g, obj, "S12N", base.to_string, sub, context);

            /**
             * Phase S1 to Neutral
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.S1N>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S1N>/g, obj, "S1N", base.to_string, sub, context);

            /**
             * Phase S2.
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.S2>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S2>/g, obj, "S2", base.to_string, sub, context);

            /**
             * Phase S1 to S2
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.S12>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S12>/g, obj, "S12", base.to_string, sub, context);

            /**
             * Not applicable to any phase
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.none>([\s\S]*?)<\/cim:ExtPhaseCodeKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * Phase A current relative to Phase A voltage
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.AtoAv>([\s\S]*?)<\/cim:ExtPhaseCodeKind.AtoAv>/g, obj, "AtoAv", base.to_string, sub, context);

            /**
             * Phase B current or voltage relative to Phase A voltage
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.BAv>([\s\S]*?)<\/cim:ExtPhaseCodeKind.BAv>/g, obj, "BAv", base.to_string, sub, context);

            /**
             * CA to Neutral
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.CAN>([\s\S]*?)<\/cim:ExtPhaseCodeKind.CAN>/g, obj, "CAN", base.to_string, sub, context);

            /**
             * hase C current or voltage relative to Phase A voltage
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.CAv>([\s\S]*?)<\/cim:ExtPhaseCodeKind.CAv>/g, obj, "CAv", base.to_string, sub, context);

            /**
             * Neutral to ground
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.NG>([\s\S]*?)<\/cim:ExtPhaseCodeKind.NG>/g, obj, "NG", base.to_string, sub, context);

            /**
             * Phase S1
             *
             */
            base.parse_element (/<cim:ExtPhaseCodeKind.S1>([\s\S]*?)<\/cim:ExtPhaseCodeKind.S1>/g, obj, "S1", base.to_string, sub, context);

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