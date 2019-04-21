/**
 * Rotation navigation button for CIM Application.
 */
"use strict";

define
(
    [],
    /**
     * @summary Rotation navigation button.
     * @description Shows current map orientation and reverts to north upwards when clicked.
     * @name rotationnav
     * @exports RotationNav
     * @version 2.0
     */
    function ()
    {
        class RotationNav extends HTMLButtonElement
        {
            constructor ()
            {
                super ();
                this.rotateCompassArrow = this.rotateCompassArrow.bind (this);
                this.template =
`
<span style="width: 20px; height: 20px; margin: 5px; background-repeat: no-repeat; display: inline-block; background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjAgMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CiAgICA8cG9seWdvbiBmaWxsPScjMzMzMzMzJyBwb2ludHM9JzYsOSAxMCwxIDE0LDknLz4KICAgIDxwb2x5Z29uIGZpbGw9JyNDQ0NDQ0MnIHBvaW50cz0nNiwxMSAxMCwxOSAxNCwxMSAnLz4KPC9zdmc+Cg==');transform: rotate(0deg);"></span>
`;
            }

            connectedCallback ()
            {
                this.setAttribute ("class", "mapboxgl-ctrl-icon");
                this.setAttribute ("aria-label", "Reset North");
                this.setAttribute ("title", "Reset bearing and pitch to north");
                this.setAttribute ("type", "button");
                this.innerHTML = this.template;
                $(this).tooltip ();
            }

            onAdd (map)
            {
                this._map = map;
                map.on ('rotate', this.rotateCompassArrow);
                this.addEventListener ("click", this.resetNorth.bind (this));
            }

            onRemove ()
            {
                this._map.off ('rotate', this._rotateCompassArrow);
                delete this._map;
            }

            rotateCompassArrow ()
            {
                const rotate = `rotate(${this._map.transform.angle * (180.0 / Math.PI)}deg)`;
                this.children[0].style.transform = rotate;
            }

            resetNorth ()
            {
                $(this).tooltip ("hide");
                this._map.easeTo ({ bearing: 0.0, pitch: 0.0 });
            }
        }

        customElements.define ("rotation-nav-button", RotationNav, { extends: "button" });

        return (RotationNav);
    }
)