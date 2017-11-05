/**
 * Map themes control for CIM Application
 */
"use strict";

define
(
    ["../mustache"],
    /**
     * @summary Theme control.
     * @description UI element for theming.
     * @name cimthemes
     * @exports cimthemes
     * @version 1.0
     */
    function (mustache)
    {
        class ThemeControl
        {
            constructor (themes)
            {
                this._onMap = false;
                this._themes = themes;
                this._theme = this._themes[0];
                this._template =
                "<div class='well'>\n" +
                "  <h3>Themes</h3>\n" +
                "{{#themes}}\n" +
                "  <div class='form-check'>\n" +
                "    <label class='form-check-label'>\n" +
                "      <input id='{{name}}' class='form-check-input' type='radio' name='themeRadios' value='{{name}}' aria-describedby='{{name}}Description'>\n" +
                "      {{title}}\n" +
                "    </label>\n" +
                "  </div>\n" +
                "  <em><small id='{{name}}Description' class='form-text text-muted'>\n" +
                "    {{description}}\n" +
                "  </small></em>\n" +
                "{{/themes}}\n" +
                "</div>\n";
                var list = this._themes.map (
                    function (theme)
                    {
                        return (
                            {
                                name: theme.getName (),
                                title: theme.getTitle (),
                                description: theme.getDescription ()
                            }
                        );
                    }
                );
                this._html = mustache.render (this._template, { themes: list });
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this._container.innerHTML = this._html;
                var current = this._theme.getName ();
                var list = this._container.getElementsByTagName ("input")
                for (var i = 0; i < list.length; i++)
                    if (current == list[i].value)
                        list[i].setAttribute ("checked", "checked");
                for (var i = 0; i < list.length; i++)
                    list[i].onchange = this.theme_change.bind (this);
                this._onMap = true;
                return this._container;
            }

            onRemove ()
            {
                this._container.parentNode.removeChild (this._container);
                this._map = undefined;
                this._onMap = false;
            }

            getDefaultPosition ()
            {
                return ("bottom-right");
            }

            getTheme ()
            {
                return (this._theme);
            }

            visible ()
            {
                return (this._onMap);
            }

            theme_change (event)
            {
                var legend = this._theme.getLegend ().visible ();
                if (legend)
                    this._map.removeControl (this._theme.getLegend ());
                this._theme.remove_theme ();
                var name = event.target.value;
                for (var i = 0; i < this._themes.length; i++)
                    if (name == this._themes[i].getName ())
                    {
                        this._theme = this._themes[i];
                        break;
                    }
                if (this._theme_listener)
                    this._theme_listener ();
            }

            theme_change_listener (fn)
            {
                this._theme_listener = fn;
            }

            theme (map, data, options)
            {
                this._theme.remove_theme ();
                this._theme.make_theme (map, data, options);
            }

            getExtents ()
            {
                return (this._theme.getExtents ());
            }
        }

        return (ThemeControl);
    }
)