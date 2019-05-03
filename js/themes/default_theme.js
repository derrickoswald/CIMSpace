/**
 * Default theme.
 */
"use strict";

define
(
    ["./icon_theme"],
    /**
     * @summary Base class for themes.
     * @description Theme first loaded by default and the diff theme other themes are based on.
     * @exports default_theme
     * @version 1.0
     */
    function (IconTheme)
    {
        class DefaultTheme extends IconTheme
        {
            constructor ()
            {
                super ();
            }

            getName ()
            {
                return ("DefaultTheme");
            }

            getTitle ()
            {
                return ("Default");
            }
        }

        return (DefaultTheme);
    }
);
