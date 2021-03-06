/**
 * Zoom Extents navigation button for CIM Application.
 */
"use strict";

define
(
    [],
    /**
     * @summary Zoom Extents navigation button.
     * @description Zooms to the extent of the data loaded into the map.
     * @exports ZoomNav
     * @version 2.0
     */
    function ()
    {
        class ZoomNav extends HTMLButtonElement
        {
            constructor ()
            {
                super ();
            }

            connectedCallback ()
            {
                this.setAttribute ("class", "mapboxgl-ctrl-icon");
                this.setAttribute ("aria-label", "Zoom Extents");
                this.setAttribute ("title", "Zoom extents");
                this.setAttribute ("type", "button");
                this.style["background-image"] = "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQogICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyINCiAgICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIg0KICAgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgIGlkPSJzdmc4MzcwIg0KICAgICB2ZXJzaW9uPSIxLjEiDQogICAgIHZpZXdCb3g9IjAgMCAyMCAyMCI+DQogICAgPG1ldGFkYXRhDQogICAgICAgICBpZD0ibWV0YWRhdGE4Mzc2Ij4NCiAgICAgICAgPHJkZjpSREY+DQogICAgICAgICAgICA8Y2M6V29yaw0KICAgICAgICAgICAgICAgICByZGY6YWJvdXQ9IiI+DQogICAgICAgICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+DQogICAgICAgICAgICAgICAgPGRjOnR5cGUNCiAgICAgICAgICAgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+DQogICAgICAgICAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+DQogICAgICAgICAgICA8L2NjOldvcms+DQogICAgICAgIDwvcmRmOlJERj4NCiAgICA8L21ldGFkYXRhPg0KICAgIDxkZWZzDQogICAgICAgICBpZD0iZGVmczgzNzQiIC8+DQogICAgPGcNCiAgICAgICAgIGlkPSJnNjk1MCI+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgICAgaWQ9InBhdGg2OTEzIg0KICAgICAgICAgICAgIGQ9Ik0gNiw2IDMuNjMzOTc0Niw1LjM2NjAyNTUgMS4yNjc5NDkyLDQuNzMyMDUwOCAyLjk5OTk5OTksMi45OTk5OTk5IDQuNzMyMDUwOCwxLjI2Nzk0OTIgNS4zNjYwMjU1LDMuNjMzOTc0NiBaIg0KICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIg0KICAgICAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMzE2OTg3MywtMC41NDkwMzgxMSwwLjU0OTAzODExLDAuMzE2OTg3MywxLjgwMzg0NzUsNi4xOTYxNTI0KSIgLz4NCiAgICAgICAgPHBhdGgNCiAgICAgICAgICAgICBpZD0icGF0aDY5NDIiDQogICAgICAgICAgICAgZD0iTSA1LDUgOCw4Ig0KICAgICAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIiAvPg0KICAgIDwvZz4NCiAgICA8Zw0KICAgICAgICAgaWQ9Imc2OTY3Ig0KICAgICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCwxMCwxMCkiPg0KICAgICAgICA8cGF0aA0KICAgICAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMzE2OTg3MywtMC41NDkwMzgxMSwwLjU0OTAzODExLDAuMzE2OTg3MywxLjgwMzg0NzUsNi4xOTYxNTI0KSINCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSINCiAgICAgICAgICAgICBkPSJNIDYsNiAzLjYzMzk3NDYsNS4zNjYwMjU1IDEuMjY3OTQ5Miw0LjczMjA1MDggMi45OTk5OTk5LDIuOTk5OTk5OSA0LjczMjA1MDgsMS4yNjc5NDkyIDUuMzY2MDI1NSwzLjYzMzk3NDYgWiINCiAgICAgICAgICAgICBpZD0icGF0aDY5NjMiIC8+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiDQogICAgICAgICAgICAgZD0iTSA1LDUgOCw4Ig0KICAgICAgICAgICAgIGlkPSJwYXRoNjk2NSIgLz4NCiAgICA8L2c+DQogICAgPGcNCiAgICAgICAgIGlkPSJnNjk3MyINCiAgICAgICAgIHRyYW5zZm9ybT0icm90YXRlKC05MCwxMCw5Ljk5OTk5OTYpIj4NCiAgICAgICAgPHBhdGgNCiAgICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjMxNjk4NzMsLTAuNTQ5MDM4MTEsMC41NDkwMzgxMSwwLjMxNjk4NzMsMS44MDM4NDc1LDYuMTk2MTUyNCkiDQogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiDQogICAgICAgICAgICAgZD0iTSA2LDYgMy42MzM5NzQ2LDUuMzY2MDI1NSAxLjI2Nzk0OTIsNC43MzIwNTA4IDIuOTk5OTk5OSwyLjk5OTk5OTkgNC43MzIwNTA4LDEuMjY3OTQ5MiA1LjM2NjAyNTUsMy42MzM5NzQ2IFoiDQogICAgICAgICAgICAgaWQ9InBhdGg2OTY5IiAvPg0KICAgICAgICA8cGF0aA0KICAgICAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIg0KICAgICAgICAgICAgIGQ9Ik0gNSw1IDgsOCINCiAgICAgICAgICAgICBpZD0icGF0aDY5NzEiIC8+DQogICAgPC9nPg0KICAgIDxnDQogICAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSg5MCwxMCwxMCkiDQogICAgICAgICBpZD0iZzY5NzkiPg0KICAgICAgICA8cGF0aA0KICAgICAgICAgICAgIGlkPSJwYXRoNjk3NSINCiAgICAgICAgICAgICBkPSJNIDYsNiAzLjYzMzk3NDYsNS4zNjYwMjU1IDEuMjY3OTQ5Miw0LjczMjA1MDggMi45OTk5OTk5LDIuOTk5OTk5OSA0LjczMjA1MDgsMS4yNjc5NDkyIDUuMzY2MDI1NSwzLjYzMzk3NDYgWiINCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSINCiAgICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjMxNjk4NzMsLTAuNTQ5MDM4MTEsMC41NDkwMzgxMSwwLjMxNjk4NzMsMS44MDM4NDc1LDYuMTk2MTUyNCkiIC8+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgICAgaWQ9InBhdGg2OTc3Ig0KICAgICAgICAgICAgIGQ9Ik0gNSw1IDgsOCINCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIgLz4NCiAgICA8L2c+DQo8L3N2Zz4=')";
                $(this).tooltip ({ placement: "left" });
                this.addEventListener ("click", function () { $(this).tooltip ("hide"); }.bind (this));
            }
        }

        customElements.define ("zoom-nav-button", ZoomNav, { extends: "button" });

        return (ZoomNav);
    }
);