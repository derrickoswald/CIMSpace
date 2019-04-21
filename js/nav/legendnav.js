/**
 * Legend navigation button for CIM Application.
 */
"use strict";

define
(
    [],
    /**
     * @summary Legend navigation button.
     * @description Toggles the legend control on and off.
     * @name legendnav
     * @exports LegendNav
     * @version 2.0
     */
    function ()
    {
        class LegendNav extends HTMLButtonElement
        {
            constructor ()
            {
                super ();
            }

            connectedCallback ()
            {
                this.setAttribute ("class", "mapboxgl-ctrl-icon");
                this.setAttribute ("aria-label", "Legend");
                this.setAttribute ("title", "Toggle legend");
                this.setAttribute ("type", "button");
                this.style["background-image"] = "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQogICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyINCiAgICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIg0KICAgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgIHZpZXdCb3g9IjAgMCAyMCAyMCINCiAgICAgdmVyc2lvbj0iMS4xIj4NCiAgICA8cGF0aA0KICAgICAgICAgZD0ibSA3LjMyODk0NDksNy4wMDAwMDAxIC0xLjM2MTM2MzYsMCAtMS4zNjEzNjM3LDAgTCA1LjI4Njg5OTUsNS44MjEwMjQ2IDUuOTY3NTgxMyw0LjY0MjA0OTEgNi42NDgyNjMsNS44MjEwMjQ2IFoiDQogICAgICAgICBpZD0icGF0aDg1NiINCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNjk5OTk5OTk7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPg0KICAgIDxwYXRoDQogICAgICAgICBpZD0icGF0aDg2MCINCiAgICAgICAgIGQ9Im0gMTAsNS43MjI2NzU0IGggNiINCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNjk5OTk5OTk7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4NCiAgICA8cmVjdA0KICAgICAgICAgeT0iOC4zMTQ4NDUxIg0KICAgICAgICAgeD0iNC4zODYyMjYyIg0KICAgICAgICAgaGVpZ2h0PSIyLjk5OTk5OTgiDQogICAgICAgICB3aWR0aD0iMi45OTk5OTk4Ig0KICAgICAgICAgaWQ9InJlY3Q4NjIiDQogICAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjY5OTk5OTk5O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4NCiAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC42OTk5OTk5OTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIg0KICAgICAgICAgZD0ibSAxMCw5Ljg2MTMzNzkgaCA2Ig0KICAgICAgICAgaWQ9InBhdGg4NjQiIC8+DQogICAgPGNpcmNsZQ0KICAgICAgICAgcj0iMS41NjY3MTgzIg0KICAgICAgICAgY3k9IjE0LjA4MzI4MiINCiAgICAgICAgIGN4PSI1LjkxNjcxODUiDQogICAgICAgICBpZD0icGF0aDg2NiINCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNjk5OTk5OTk7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPg0KICAgIDxwYXRoDQogICAgICAgICBpZD0icGF0aDg3NyINCiAgICAgICAgIGQ9Im0gMTAsMTQgaCA2Ig0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC42OTk5OTk5OTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPg0KPC9zdmc+')";
                $(this).tooltip ();
                this.addEventListener ("click", function () { $(this).tooltip ("hide"); }.bind (this));
            }
        }

        customElements.define ("legend-nav-button", LegendNav, { extends: "button" });

        return (LegendNav);
    }
)