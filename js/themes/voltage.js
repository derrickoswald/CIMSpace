/**
 * Nominal voltage theme.
 */
"use strict";

define
(
    ["mustache", "./default_theme"],
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
                this._colors = [
                    "rgb(51, 51, 51)",
                    "rgb(0, 139, 0)",
                    "rgb(0, 0, 139)",
                    "rgb(0, 139, 139)",
                    "rgb(139, 139, 0)",
                    "rgb(139, 0, 0)",
                    "rgb(139, 0, 139)",
                    "rgb(255, 0, 0)",
                    "rgb(255, 0, 255)",
                    "rgb(0, 255, 255)",
                    "rgb(0, 0, 255)"
                ];
                this._colormap = {
                    BaseVoltage_Unknown: "rgb(139, 139, 139)",
                    BaseVoltage_0: "rgb(51, 51, 51)",
                    BaseVoltage_230: "rgb(0, 139, 0)",
                    BaseVoltage_400: "rgb(0, 0, 139)",
                    BaseVoltage_1000: "rgb(0, 139, 139)",
                    BaseVoltage_12000: "rgb(139, 139, 0)",
                    BaseVoltage_16000: "rgb(139, 0, 0)",
                    BaseVoltage_20000: "rgb(139, 0, 139)",
                    BaseVoltage_50000: "rgb(255, 0, 0)",
                    BaseVoltage_132000: "rgb(255, 0, 255)",
                    BaseVoltage_220000: "rgb(0, 255, 255)",
                    BaseVoltage_380000: "rgb(0, 0, 255)"
                };
                this._items = [];
                for (let id in this._colormap)
                    if (this._colormap.hasOwnProperty (id))
                        this._items.push (
                            {
                                id: id,
                                description: "<span style='width: 15px; height: 15px; background: " + this._colormap[id] + ";'>&nbsp;&nbsp;&nbsp;</span> " + id,
                                checked: true,
                                color: this._colormap[id]
                            }
                        );
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
             * Item list for the legend.
             */
            getItems ()
            {
                return (this._items);
            }

            getVoltages (data)
            {
                const voltages = [];
                for (let id in data.BaseVoltage)
                    if (data.BaseVoltage.hasOwnProperty (id))
                        voltages.push (
                            {
                                id: id,
                                name: data.BaseVoltage[id].name ? data.BaseVoltage[id].name : `${data.BaseVoltage[id].nominalVoltage}V`,
                                voltage: data.BaseVoltage[id].nominalVoltage
                            }
                        );
                voltages.sort (function (a, b) { return (a.voltage - b.voltage); });
                this._colormap = {};
                for (let i = 0; i < voltages.length; i++)
                {
                    const color = this._colors[i % this._colors.length];
                    this._colormap[voltages[i].id] = color;
                    voltages[i].color = color;
                }
                this._items = voltages.map (
                    function (voltage)
                    {
                        const id = voltage.id;
                        const name = voltage.name;
                        const color = voltage.color;
                        return (
                            {
                                id: id,
                                description: "<span style='width: 15px; height: 15px; background: " + color + ";'>&nbsp;&nbsp;&nbsp;</span> " + name,
                                checked: true,
                                color: color
                            }
                        );
                    }
                );
                this._items.unshift (
                    {
                        id: "none",
                        description: "<span style='width: 15px; height: 15px; background:rgb(139, 139, 139);'>&nbsp;&nbsp;&nbsp;</span> None",
                        checked: true,
                        color: "rgb(139, 139, 139)"
                    }
                )
            }

            /**
             * Override stylization information.
             * @param {Object} data - the hash table object of CIM classes by class name
             * @param {Object} options - options for processing
             */
            process_spatial_objects_again (data, options)
            {
                this.getVoltages (data);
                const psr = data.PowerSystemResource;
                for (let id in psr)
                {
                    if (psr.hasOwnProperty (id))
                    {
                        psr[id].color = this._colormap[psr[id].BaseVoltage];
                        if ("undefined" == typeof (psr[id].color))
                            psr[id].color = "rgb(139, 139, 139)";
                    }
                }
            }
        }

        return (VoltageTheme);
    }
);