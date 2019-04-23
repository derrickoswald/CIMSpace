/**
 * Chart navigation button for CIM Application.
 */
"use strict";

define
(
    [],
    /**
     * @summary Chart navigation button.
     * @description Toggles the chart control on and off.
     * @exports ChartNav
     * @version 2.0
     */
    function ()
    {
        class ChartNav extends HTMLButtonElement
        {
            constructor ()
            {
                super ();
            }

            connectedCallback ()
            {
                this.setAttribute ("class", "mapboxgl-ctrl-icon");
                this.setAttribute ("aria-label", "Chart");
                this.setAttribute ("title", "Toggle chart panel");
                this.setAttribute ("type", "button");
                this.style["background-image"] = "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0ic3ZnNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPHN0eWxlIGlkPSJzdHlsZTgzNyIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxwYXRoIGlkPSJwYXRoMTY1MyIgZD0ibTQgMTBoMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLXdpZHRoPSIxcHgiLz4KIDxwYXRoIGlkPSJwYXRoMTY1NSIgZD0ibTQuNSA0djEyIiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMXB4Ii8+CiA8cGF0aCBpZD0icGF0aDE2NTciIGQ9Im01IDEwLjVoMXYtMmgxdi0xaDIuMjMzNGwtMC4wMTA3NjEtMWgyLjc3NzR2MmgydjJoMXYzaDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxcHgiLz4KIDxwYXRoIGlkPSJwYXRoMTY1OSIgZD0ibTEzIDQuNWgzIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMXB4Ii8+CiA8cGF0aCBpZD0icGF0aDE2NjEiIGQ9Im03IDEwdjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLXdpZHRoPSIxcHgiLz4KIDxwYXRoIGlkPSJwYXRoMTY2MyIgZD0ibTkuNSAxMHYxIiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMXB4Ii8+CiA8cGF0aCBpZD0icGF0aDE2NjUiIGQ9Im0xMiAxMHYxIiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMXB4Ii8+CiA8cGF0aCBpZD0icGF0aDE2NjciIGQ9Im01IDEyLjQ2MmgxIiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMXB4Ii8+CiA8cGF0aCBpZD0icGF0aDE2NjkiIGQ9Im01IDE1aDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLXdpZHRoPSIxcHgiLz4KIDxwYXRoIGlkPSJwYXRoMTY3MSIgZD0ibTUgNy40NzM5aDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLXdpZHRoPSIxcHgiLz4KIDxwYXRoIGlkPSJwYXRoMTY3MyIgZD0ibTUgNWgxIiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMXB4Ii8+Cjwvc3ZnPgo=')";
                $(this).tooltip ({ placement: "left" });
                this.addEventListener ("click", function () { $(this).tooltip ("hide"); }.bind (this));
            }
        }

        customElements.define ("chart-nav-button", ChartNav, { extends: "button" });

        return (ChartNav);
    }
);
