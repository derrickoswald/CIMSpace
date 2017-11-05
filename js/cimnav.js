/**
 * Map navigation control for CIM Application
 */
"use strict";

define
(
    [],
    /**
     * @summary Navigation control.
     * @description UI element for zoom buttons, a compass and theme setting toggle.
     * @see https://github.com/mapbox/mapbox-gl-js/blob/master/src/ui/control/navigation_control.js
     * @name cimnav
     * @exports cimnav
     * @version 1.0
     */
    function ()
    {

        function create (tagName, className, container)
        {
            const el = window.document.createElement(tagName);
            if (className) el.className = className;
            if (container) container.appendChild(el);
            return el;
        }

        function remove (node)
        {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        }

        function bindAll (fns, context)
        {
             fns.forEach((fn) => {
                 if (!context[fn]) { return; }
                 context[fn] = context[fn].bind(context);
             });
        }

        /**
         * A `NavigationControl` control contains zoom buttons, a compass and theme setting and legend toggles.
         *
         * @implements {IControl}
         * @example
         * var nav = new mapboxgl.NavigationControl();
         * map.addControl(nav, 'top-left');
         * @see [Display map navigation controls](https://www.mapbox.com/mapbox-gl-js/example/navigation/)
         * @see [Add a third party vector tile source](https://www.mapbox.com/mapbox-gl-js/example/third-party/)
         */
        class NavigationControl {

            constructor(zoome, themer, legend)
            {
                bindAll (["_rotateCompassArrow"], this);

                this._container = create ('div', 'mapboxgl-ctrl mapboxgl-ctrl-group');
                this._container.addEventListener ('contextmenu', (e) => e.preventDefault());

                this._zoomInButton = this._createButton ('mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-in', 'Zoom In', () => this._map.zoomIn ());
                this._zoomOutButton = this._createButton ('mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-out', 'Zoom Out', () => this._map.zoomOut ());
                this._compass = this._createButton ('mapboxgl-ctrl-icon mapboxgl-ctrl-compass', 'Reset North', () => this._map.resetNorth ());
                this._compassArrow = create ('span', 'mapboxgl-ctrl-compass-arrow', this._compass);
                this._zoomExtents = this._createButton ('mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-extents', 'Zoom Extents', zoome);
                this._themeChooser = this._createButton ('mapboxgl-ctrl-icon mapboxgl-ctrl-themer', 'Themes', themer);
                this._legendDisplay = this._createButton ('mapboxgl-ctrl-icon mapboxgl-ctrl-legend', 'Legend', legend);
            }

            _rotateCompassArrow ()
            {
                const rotate = `rotate(${this._map.transform.angle * (180 / Math.PI)}deg)`;
                this._compassArrow.style.transform = rotate;
            }

            onAdd (map)
            {
                this._map = map;
                this._map.on ('rotate', this._rotateCompassArrow);
                this._rotateCompassArrow ();
                return (this._container);
            }

            onRemove ()
            {
                remove (this._container);
                this._map.off ('rotate', this._rotateCompassArrow);
                delete this._map;
                delete this._handler;
            }

            _createButton (className, ariaLabel, fn)
            {
                const a = create ('button', className, this._container);
                a.type = 'button';
                a.setAttribute ('aria-label', ariaLabel);
                a.addEventListener ('click', fn);
                return (a);
            }
        }

        return (
            {
                NavigationControl: NavigationControl
            }
        );
    }
)