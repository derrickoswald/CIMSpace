/**
 * In service theme.
 */
"use strict";

define
(
    ["../mustache", "./default_theme"],
    /**
     * @summary Theme on service status.
     * @description Theme class for colorizing by in-service status.
     * @exports inservice
     * @version 1.0
     */
    function (mustache, DefaultTheme)
    {
        class InServiceTheme extends DefaultTheme
        {
            constructor()
            {
                super ();
                this._items =
                    [
                        {
                            id: "inservice",
                            description: "<span style='width: 15px; height: 15px; background: rgb(0, 255, 0);'>&nbsp;&nbsp;&nbsp;</span> In service",
                            checked: true,
                            color: "rgb(0, 255, 0)"
                        },
                        {
                            id: "outofservice",
                            description: "<span style='width: 15px; height: 15px; background: rgb(255, 0, 0);'>&nbsp;&nbsp;&nbsp;</span> Out of service",
                            checked: true,
                            color: "rgb(255, 0, 0)"
                        },
                        {
                            id: "unknown",
                            description: "<span style='width: 15px; height: 15px; background: rgb(128, 128, 128);'>&nbsp;&nbsp;&nbsp;</span> Status unknown",
                            checked: true,
                            color: "rgb(128, 128, 128)"
                        }
                    ];
            }

            getName ()
            {
                return ("InServiceTheme");
            }

            getTitle ()
            {
                return ("Service status");
            }

            getDescription ()
            {
                return ("In service status from SvStatus reference and normallyInService flag.");
            }

            /**
             * Item list for the legend.
             */
            getItems ()
            {
                return (this._items);
            }

            /**
             * Override stylization information.
             * @param {Object} data - the hash table object of CIM classes by class name
             * @param {Object} options - options for processing
             */
            process_spatial_objects_again (data, options)
            {
                const statuses = data.SvStatus;
                const colormap = {};
                for (let status in statuses)
                    if (statuses.hasOwnProperty(status))
                    colormap[status] = statuses[status].inService ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)";
                const equipment = data.ConductingEquipment;
                for (let id in equipment)
                {
                    if (equipment.hasOwnProperty(id))
                    {
                        const status = equipment[id].SvStatus;
                        if ("undefined" != typeof (status))
                            equipment[id].color = colormap[status];
                        else
                        {
                            const normal = equipment[id].normallyInService;
                            if ("undefined" != typeof (normal))
                                equipment[id].color = normal ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)";
                            else
                                equipment[id].color = "rgb(128, 128, 128)";
                        }
                    }
                }
            }
        }

        return (InServiceTheme);
    }
);
