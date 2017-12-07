/**
 * @fileOverview Base level functions for CIM model.
 * @name model/base
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    [],
    /**
     * @summary Base level functions for CIM model.
     * @description
     * @name model/base
     * @exports model/base
     * @version 1.0
     */
    function ()
    {
        /**
         * Unique numbering for elements without an rdf:ID.
         */
        var UNIQUE_NUMBER = 0;

        /**
         * Pass a string through unchanged.
         * @param {String} str - the string
         * @returns {String} the same string
         * @memberOf module:model/base
         */
        function to_string (str)
        {
            return (str);
        }

        /**
         * Convert a string into a boolean value.
         * @param {String} str - the string to convert
         * @returns {Boolean} the boolean value
         * @memberOf module:model/base
         */
        function to_boolean (str)
        {
            var ret = (null == str) ? str : (str.toLowerCase () === "true")
            return (ret);
        }

        /**
         * Convert a string into a floating point value.
         * @param {String} str - the string to convert
         * @returns {Number} the float value
         * @memberOf module:model/base
         */
        function to_float (str)
        {
            var ret = (null == str) ? NaN : Number (str);
            if (isNaN (ret))
                ret = str;
            return (ret);
        }

        /**
         * Convert a string into a date.
         * @param {String} str - the string to convert
         * @returns {Date} the date and time value
         * @memberOf module:model/base
         */
        function to_datetime (str)
        {
            var ret = Date.parse (str);
            if (isNaN (ret))
                ret = str;
            else
                ret = new Date (ret);
            return (ret);
        }

        /**
         * Create an index of newline characters in a string.
         * @param {String} str - the string to index
         * @param {Number} offset - optional offset to add to the index values
         * @param {Number[]} newlines - optional existing index to append to
         * Originally the idea behind this parameter was to:
         * read the file in 64K chunks using slice on the File blob,
         * and then read as text, scan with regex,
         * getting the last character position before the end of the slice or somewhere convenient,
         * and then to get the next slice starting on a character boundary (UTF8 encoded right) you need
         * to write out the characters seen so far and count the bytes,
         * then ask for the next 64K slice starting at that byte offset.
         * But reading in the entire file (64MB so far) seems to work OK, so this isn't used.
         * @returns {[Number]} the index of newlines, e.g. [15, 32, 64] for "Now is the time\nfor all good men\nto come to the aid of the party\n"
         * @memberOf module:model/base
         */
        function index_string (str, offset, newlines)
        {
            var lines;
            var res;

            offset = offset || 0;
            var nl = newlines || [];
            lines = /\n/g;
            while (null != (res = lines.exec (str)))
                nl.push (res.index + offset);

            return (nl);
        }

        /**
         * Get a line number from the newline index of a context.
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @param {Number} offset - the character position to find line number of, default = context.start_character
         * @returns {Number} the one-based line number for the starting character position
         * @memberOf module:model/base
         */
        function line_number (context, offset)
        {
            var min = 0;
            var max = context.newlines.length - 1;
            if ("undefined" == typeof (offset))
                offset = context.start_character;
            var index;
            var item;

            index = min;
            while (min <= max)
            {
                index = (min + max) / 2 | 0;
                item = context.newlines[index];

                if (item < offset)
                    min = index + 1;
                else if (item > offset)
                    max = index - 1;
                else
                    return (index + 1);
            }

            return ((context.newlines[index] <= offset ? index + 1 : index) + 1);
        }

        /**
         * Parse an element value - the first capture group of a regular expression.
         * @param {Object} regex - the regular expression
         * @param {Object} obj - the object to assign the attribute to
         * @param {String} attribute - the attribute name
         * @param {Function} fn - the conversion function (use to_string for no conversion)
         * @param {String} str - the string to look in
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @memberOf module:model/base
         */
        function parse_element (regex, obj, attribute, fn, str, context)
        {
            var result;

            if (null != (result = regex.exec (str)))
                obj[attribute] = fn (result[1]);
        }

        /**
         * Parse an attribute - the second capture group of a regular expression.
         *
         * @param {Object} regex - the regular expression
         * @param {Object} obj - the object to assign the attribute to
         * @param {String} attribute - the attribute name
         * @param {String} str - the string to look in
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @memberOf module:model/base
         */
        function parse_attribute (regex, obj, attribute, str, context)
        {
            var result;
            var value;

            if (null != (result = regex.exec (str)))
            {
                value = result[2];
                if (value.charAt (0) == '#') // remove '#'
                    value = value.substring (1);
                obj[attribute] = value;
            }
        }

        /**
         * Parse multiple attribute - the second capture group of a regular expression.
         *
         * @param {Object} regex - the regular expression
         * @param {Object} obj - the object to assign the attribute to
         * @param {String} attribute - the attribute name
         * @param {String} str - the string to look in
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @memberOf module:model/base
         */
        function parse_attributes (regex, obj, attribute, str, context)
        {
            var result;
            var value;
            var array = [];

            while (null != (result = regex.exec (str)))
            {
                value = result[2];
                if (value.charAt (0) == '#') // remove '#'
                    value = value.substring (1);
                array.push (value);
                obj[attribute] = array;
            }
        }

        /**
         * Change the value into a string.
         * @param {object} value - the value of the element
         * @returns {String} the element value converted to a string
         * @memberOf module:model/base
         */
        function from_string (value)
        {
            return (value.toString ());
        }

        /**
         * Convert a boolean value into a string.
         * @param {Boolean} value - the boolean value to convert
         * @returns {String} the boolean value converted to a string
         * @memberOf module:model/base
         */
        function from_boolean (value)
        {
            return (value.toString ());
        }

        /**
         * Convert a floating point value into a string.
         * @param {Number} value - the float or double value to convert
         * @returns {String} str - the number as a string
         * @memberOf module:model/base
         */
        function from_float (value)
        {
            return (value.toString ());
        }

        /**
         * Convert a date into a string.
         * @param {Date} date - the date and time value
         * @returns {String} str - the datetime converted to a string
         * @memberOf module:model/base
         */
        function from_datetime (date)
        {
            return (date.toISOString ());
        }

        /**
         * Export one element.
         * e.g. &lt;cim:Location.type&gt;geographic&lt;/cim:Location.type&gt;
         * @param {Object} obj - the CIM object
         * @param {String} cls - the CIM class being written e.g. Location in the example above
         * Note that this is not necessarily the same as obj.cls due to hierarchy
         * @param {String} attribute - the attribute being written, e.g. type in the example above
         * @param {Function} fn - the conversion function to be applied to the attribute, e.g. from_datetime
         * @param {String[]} fields - the forming element array of strings to add to
         * @memberOf module:model/base
         */
        function export_element (obj, cls, attribute, fn, fields)
        {
            var value = obj[attribute];
            if ("undefined" != typeof (value))
            {
                var element = "cim:" + cls + "." + attribute;
                fields.push ("\t\t<" + element + ">" + fn (value) + "</" + element + ">");
            }
        }

        /**
         * Export one attribute.
         * e.g. &lt;cim:Location.CoordinateSystem rdf:resource="#wgs84"/&gt;
         * @param {Object} obj - the CIM object
         * @param {String} cls - the CIM class being written e.g. Location in the example above
         * Note that this is not necessarily the same as obj.cls due to hierarchy
         * @param {String} attribute - the attribute being written, e.g. CoordinateSystem in the example above
         * @param {String[]} fields - the forming element array of strings to add to
         * @memberOf module:model/base
         */
        function export_attribute (obj, cls, attribute, fields)
        {
            var value = obj[attribute];
            if ("undefined" != typeof (value))
                fields.push ("\t\t<cim:" + cls + "." + attribute + " rdf:resource=\"#" + value.toString () + "\"/>");
        }

        /**
         * Export multiple attributes.
         * e.g. &lt;cim:Asset.PowerSystemResources rdf:resource="#STA196"/&gt;
         *	    &lt;cim:Asset.PowerSystemResources rdf:resource="#STA197"/&gt;
         * @param {Object} obj - the CIM object
         * @param {String} cls - the CIM class being written e.g. Location in the example above
         * Note that this is not necessarily the same as obj.cls due to hierarchy
         * @param {String} attribute - the attribute being written, e.g. PowerSystemResources in the example above
         * @param {String[]} fields - the forming element array of strings to add to
         * @memberOf module:model/base
         */
        function export_attributes (obj, cls, attribute, fields)
        {
            var value = obj[attribute];
            if ("undefined" != typeof (value))
                for (var i = 0; i < value.length; i++)
                    fields.push ("\t\t<cim:" + cls + "." + attribute + " rdf:resource=\"#" + value[i].toString () + "\"/>");
        }

        class Element
        {
            constructor (template, cim_data)
            {
                if ("undefined" == typeof (template.id))
                {
                    UNIQUE_NUMBER++;
                    template.id = "element_" + UNIQUE_NUMBER;
                }
                this._id = template.id;
                var bucket = cim_data.Element;
                if (null == bucket)
                   cim_data.Element = bucket = {};
                bucket[this._id] = template;
                if (null != this)
                    Object.assign (this, template);
            }

            remove (cim_data)
            {
                delete cim_data.Element[this._id];
            }

            /**
             * Parse an Element.
             * @param {Object} context - the file reading context
             * @param {Object} context.parsed.Element - the list of elements
             * @param {String} sub - the substring within which to parse the element
             * @memberOf module:model/base
             */
            parse (context, sub)
            {
                var id;
                var elements;
                var ret;

                ret = { cls: "Element" };
                parse_attribute (/rdf:ID=("|')([\s\S]*?)\1/g, ret, "id", sub, context);
                if ("undefined" == typeof (ret.id))
                {
                    UNIQUE_NUMBER++;
                    ret.id = "element_" + UNIQUE_NUMBER;
                }
                elements = context.parsed.Element;
                if (null == elements)
                    context.parsed.Element = elements = {};
                elements[ret.id] = ret;

                return (ret);
            }

            /**
             * Add the main element header and tail to the beginning and end, respectively, of the forming element.
             * @param {Object} obj - the CIM object
             * @param {String[]} fields - the forming element array of strings to add to
             */
            export (obj, fields)
            {
                var id = obj.id.startsWith ("element_") ? null : obj.id;
                fields.splice (0, 0, "\t<cim:" + obj.cls + (id ? (" rdf:ID=\"" + id + "\">") : ">"));
                fields.push ("\t</cim:" + obj.cls + ">");
            }

            /**
             * Template HTML for Element.
             */
            template ()
            {
                return ("");
            }

            condition (obj)
            {
            }

            uncondition (obj)
            {
            }

            /**
             * Edit template HTML for Element.
             */
            edit_template ()
            {
                return ("");
            }
         }

        return (
            {
                to_string: to_string,
                to_boolean: to_boolean,
                to_float: to_float,
                to_datetime: to_datetime,
                index_string: index_string,
                line_number: line_number,
                parse_element: parse_element,
                parse_attribute: parse_attribute,
                parse_attributes: parse_attributes,
                from_string: from_string,
                from_boolean: from_boolean,
                from_float: from_float,
                from_datetime: from_datetime,
                export_element: export_element,
                export_attribute: export_attribute,
                export_attributes: export_attributes,
                Element: Element
            }
        );
    }
);