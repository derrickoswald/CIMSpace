/**
 * Nominal voltage theme.
 */
"use strict";

define
(
    ["../mustache", "./default_theme"],
    /**
     * @summary Theme on BaseVoltage.
     * @description Theme class for colorizing by nominal voltage.
     * @name voltage
     * @exports voltage
     * @version 1.0
     */
    function (mustache, DefaultTheme)
    {
        class VoltageTheme extends DefaultTheme
        {
            constructor()
            {
                super ();
            }

            getName ()
            {
                return ("VoltageTheme");
            }

            getTitle ()
            {
                return ("Nominal voltage");
            }

            getDescription ()
            {
                return ("Equipment and cables colored by nominal voltage.");
            }

            /**
             * Override stylization information.
             * @param {Object} data - the hash table object of CIM classes by class name
             * @function process_spatial_objects_again
             * @memberOf module:voltage
             */
            process_spatial_objects_again (data)
            {
                var colormap = {
                    BaseVoltage_Unknown: "rgb(0, 0, 0)",
	                BaseVoltage_0: "rgb(0, 0, 0)",
	                BaseVoltage_230: "rgb(0, 139, 0)",
	                BaseVoltage_400: "rgb(0, 0, 139)",
	                BaseVoltage_1000: "rgb(0, 139, 139)",
	                BaseVoltage_12000: "rgb(139, 139, 0)",
	                BaseVoltage_16000: "rgb(139, 0, 0)",
	                BaseVoltage_20000: "rgb(139, 0, 139)",
	                BaseVoltage_50000: "rgb(255, 0, 0)",
	                BaseVoltage_132000: "rgb(255, 0, 255)",
	                BaseVoltage_220000: "rgb(0, 255, 255)",
	                BaseVoltage_380000: "rgb(255, 255, 255)"
                };

                var psr = data.PowerSystemResource;
                for (var id in psr)
                {
                    psr[id].color = colormap[psr[id].BaseVoltage];
                    if ("undefined" == typeof (psr[id].color))
                        psr[id].color = "rgb(0, 0, 0)";
                }
            }
        }

        return (VoltageTheme);
    }
)