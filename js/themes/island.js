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
                this._colors = [
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
                    "rgb(255, 255, 0)"
                ];
                this._items = [];
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
             * @function process_spatial_objects_again
             * @memberOf module:island
             */
            process_spatial_objects_again (data, options)
            {
                var islands = data.TopologicalIsland;
                var colormap = {};
                var index = 0;
                for (var id in islands)
                {
                    colormap[id] = this._colors[index % this._colors.length];
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
                    var colour = maptable[terminal.TopologicalNode];
                    var equipment = psr[terminal.ConductingEquipment];
                    if (colour && equipment)
                        equipment.color = colour;
                }
                this._items = [];
                var i = 1;
                for (var j = 0; j < this._colors.length; j++)
                {
                    var color = this._colors[j];
                    var text = "";
                    for (var island in colormap)
                        if (colormap[island] == color)
                            text += "," + island;
                    if (text != "")
                    {
                        text = text.substring (1);
                        if (text.length > 80)
                            text = text.substring (0, 80) + "...";
                        this._items.push (
                            {
                                id: "islands" + i,
                                description: "<span style='width: 15px; height: 15px; background: " + color + ";'>&nbsp;&nbsp;&nbsp;</span> " + text,
                                checked: true,
                                color: color
                            }
                        );
                    }
                    i++;
                }
            }
        }

        return (IslandTheme);
    }
)