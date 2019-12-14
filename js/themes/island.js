/**
 * Topological island theme.
 */
"use strict";

define
(
    ["mustache", "./default_theme"],
    /**
     * @summary Theme on topological island.
     * @description Theme class for colorizing by topological island.
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

            getRandomInt (max)
            {
                return (Math.floor (Math.random () * Math.floor (max)));
            }

            /**
             * Override stylization information.
             * @param {Object} data - the hash table object of CIM classes by class name
             * @param {Object} options - options for processing
             */
            process_spatial_objects_again (data, options)
            {
                const islands = data.TopologicalIsland;
                const colormap = {};
                for (let id in islands)
                {
                    if (islands.hasOwnProperty (id))
                        colormap[id] = this._colors[this.getRandomInt (this._colors.length)];
                }
                const nodes = data.TopologicalNode;
                const maptable = {};
                for (let id in nodes)
                    if (nodes.hasOwnProperty (id))
                        maptable[id] = colormap[nodes[id].TopologicalIsland];
                const terminals = data.Terminal;
                const psr = data.PowerSystemResource;
                for (let id in terminals)
                {
                    if (terminals.hasOwnProperty( id))
                    {
                        const terminal = terminals[id];
                        const colour = maptable[terminal.TopologicalNode];
                        const equipment = psr[terminal.ConductingEquipment];
                        if (colour && equipment)
                            equipment.color = colour;
                    }
                }
                this._items = [];
                let i = 1;
                for (let j = 0; j < this._colors.length; j++)
                {
                    const color = this._colors[j];
                    let text = "";
                    for (let island in colormap)
                        if (colormap.hasOwnProperty (island))
                            if (colormap[island] === color)
                                text += "," + island;
                    if (text !== "")
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
);