/**
 * @fileOverview Various utility functions.
 * @name util
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    [],
    /**
     * @summary Common utility functions.
     * @name util
     * @exports util
     * @version 1.0
     */
    function ()
    {
        /**
         * @summary Browser independent CORS setup.
         * @description Creates the CORS request and opens it.
         * @param {string} method The method type, e.g. "GET" or "POST"
         * @param {string} url the URL to open the request on
         * @param {boolean} asynchronous optional parameter for open() call, default <em>true</em>
         * @param {boolean} withcredentials optional parameter for XMLHttpRequest, default <em>false</em>
         * @returns {object} the request object or <code>null</code> if CORS isn't supported
         * @memberOf module:util
         */
        function createCORSRequest (method, url, asynchronous, withcredentials)
        {
            var ret;

            if ("undefined" == typeof (asynchronous))
                asynchronous = true;
            if ("undefined" == typeof (withcredentials))
                withcredentials = false;
            ret = new XMLHttpRequest ();
            if ("withCredentials" in ret) // "withCredentials" only exists on XMLHTTPRequest2 objects
            {
                ret.open (method, url, asynchronous);
                if (withcredentials)
                    ret.withCredentials = true;
            }
            else if (typeof XDomainRequest != "undefined") // IE
            {
                ret = new XDomainRequest ();
                ret.open (method, url);
            }
            else
                ret = null; // CORS is not supported by the browser

            return (ret);
        }

        return (
            {
                createCORSRequest: createCORSRequest
            }
        );
    }
);