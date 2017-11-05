/**
 * Topological island theme.
 */
"use strict";

define
(
    ["../mustache", "./default_theme"],
    /**
     * @summary Theme on topological island.
     * @description Theme class for colorizing by topological island.
     * @name island
     * @exports island
     * @version 1.0
     */
    function (mustache, DefaultTheme)
    {
        class IslandTheme extends DefaultTheme
        {
            constructor()
            {
                super ();
            }

            getName ()
            {
                return ("IslandTheme");
            }

            getTitle ()
            {
                return ("Topological island");
            }

            getDescription ()
            {
                return ("Topological islands (transformer service areas) by color.");
            }

            /**
             * Override stylization information.
             * @param {Object} data - the hash table object of CIM classes by class name
             * @function process_spatial_objects_again
             * @memberOf module:island
             */
            process_spatial_objects_again (data)
            {
                var colors = [
	                "rgb(0, 0, 0)",
	                "rgb(0, 139, 0)",
	                "rgb(0, 0, 139)",
	                "rgb(0, 139, 139)",
	                "rgb(139, 139, 0)",
	                "rgb(139, 0, 0)",
	                "rgb(139, 0, 139)",
	                "rgb(255, 0, 0)",
	                "rgb(255, 0, 255)",
	                "rgb(0, 255, 255)",
	                "rgb(255, 255, 255)"
                ];
                var islands = data.TopologicalIsland;
                var colormap = {};
                var index = 0;
                for (var id in islands)
                {
                    colormap[id] = colors[index % colors.length];
                    index++;
                }
                var nodes = data.TopologicalNode;
                var maptable = {};
                for (var id in nodes)
                    maptable[id] = colormap[nodes[id].TopologicalIsland];
                var terminals = data.Terminal;
                var psr = data.PowerSystemResource
                for (var id in terminals)
                {
                    var terminal = terminals[id];
                    psr[terminal.ConductingEquipment].color = maptable[terminal.TopologicalNode];
                }
            }
        }

        return (IslandTheme);
    }
)