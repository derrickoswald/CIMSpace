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
     * @name inservice
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
             * Override stylization information.
             * @param {Object} data - the hash table object of CIM classes by class name
             * @function process_spatial_objects_again
             * @memberOf module:inservice
             */
            process_spatial_objects_again (data)
            {
                var statuses = data.SvStatus;
                var colormap = {};
                for (var id in statuses)
                    colormap[id] = statuses[id].inService ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)";
                var equipment = data.ConductingEquipment;
                for (var id in equipment)
                {
                    var status = equipment[id].SvStatus;
                    if ("undefined" != typeof (status))
                        equipment[id].color = colormap[status];
                    else
                    {
                        var normal = equipment[id].normallyInService;
                        if ("undefined" != typeof (normal))
                            equipment[id].color = normal ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)";
                        else
                            equipment[id].color = "rgb(128, 128, 128)";
                    }
                }
            }
        }

        return (InServiceTheme);
    }
)
