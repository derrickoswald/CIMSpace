/**
 * Map navigation control for CIM Application
 */
"use strict";

define
(
    [],
    /**
     * @summary Navigation control.
     * @description UI element for holding zoom buttons, a compass, toggling theme settings, legends, editing, etc.
     * @see https://github.com/mapbox/mapbox-gl-js/blob/master/src/ui/control/navigation_control.js
     * @name cimnav
     * @exports cimnav
     * @version 1.0
     */
    function ()
    {
        /**
         * A `NavigationControl` control contains zoom buttons, a compass and theme setting, legend, editing etc. toggles.
         *
         * @implements {IControl}
         * @example
         * var nav = new mapboxgl.NavigationControl();
         * nav.addButton (document.createElement ("button", { is: "zoomin-nav-button" }));
         * map.addControl(nav, 'top-left');
         * @see [Display map navigation controls](https://www.mapbox.com/mapbox-gl-js/example/navigation/)
         */
        class NavigationControl
        {
            constructor ()
            {
                this._container = window.document.createElement ("div");
                this._container.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
                this._container.addEventListener ("contextmenu", e => e.preventDefault ());
            }

            addButton (button)
            {
                this._container.appendChild (button);
            }

            removeButton (button)
            {
                this._container.removeChild (button);
            }

            onAdd (map)
            {
                this._map = map;
                for (var i = 0; i < this._container.children.length; i++)
                {
                    var child = this._container.children[i];
                    if (child.onAdd)
                        child.onAdd (map)
                }
                return (this._container);
            }

            onRemove ()
            {
                if (this._container.parentNode)
                    this._container.parentNode.removeChild (this._container);
                for (var i = 0; i < this._container.children.length; i++)
                {
                    var child = this._container.children[i];
                    if (child.onRemove)
                        child.onRemove ()
                }
                delete this._map;
            }
        }

        return (NavigationControl);
    }
)