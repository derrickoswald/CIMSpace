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
         * Convert a string into a boolean value.
         * @param {String} str - the string to convert
         * @returns {Boolean} the boolean value
         * @memberOf module:model/base
         */
        function to_boolean (str)
        {
            return (str.toLowerCase () === "true");
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
         * @param {String} str - the string to look in
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @param {Boolean} optional - if <em>true</em> return <em>null</em> if not found rather than throw an exception
         * @returns {String} the string found as the first capture group
         * @memberOf module:model/base
         */
        function parse_element (regex, str, context, optional)
        {
            var result;
            var ret;

            ret = null;

            if (null != (result = regex.exec (str)))
                ret = result[1];
            else
                if (!optional)
                    throw ("regular expression " + regex.source + " not found while parsing at line " + line_number (context));
//                else
//                    console.log (regex.source + " not found at line " + line_number (context));

            return (ret);
        }

        /**
         * Parse an attribute - the second capture group of a regular expression.
         * @param {Object} regex - the regular expression
         * @param {String} str - the string to look in
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @param {Boolean} optional - if <em>true</em> return <em>null</em> if not found rather than throw an exception
         * @returns {String} the string found as the second capture group (the first is the quote character used)
         * @memberOf module:model/base
         */
        function parse_attribute (regex, str, context, optional)
        {
            var result;
            var ret;

            ret = null;

            if (null != (result = regex.exec (str)))
            {
                ret = result[2];
                if (ret.charAt (0) == '#') // remove '#'
                    ret = ret.substring (1);
            }
            else
                if (!optional)
                    throw ("regular expression " + regex.source + " not found while parsing at line " + line_number (context));
//                else
//                    console.log (regex.source + " not found at line " + line_number (context));

            return (ret);
        }

        /**
         * Parse an Element.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Element - the list of elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/base
         */
        function parse_Element (context, sub)
        {
            var id;
            var elements;
            var ret;

            id = parse_attribute (/rdf:ID=("|')([\s\S]*?)\1/g, sub, context, true);
            if (null == id)
            {
                UNIQUE_NUMBER++;
                id = "element_" + UNIQUE_NUMBER;
            }
            elements = context.parsed.Element;
            if (null == elements)
                context.parsed.Element = elements = {};
            ret = { id: id, cls: "Element" };
            elements[id] = ret;

            return (ret);
        }

        return (
            {
                to_boolean: to_boolean,
                index_string: index_string,
                line_number: line_number,
                parse_element: parse_element,
                parse_attribute: parse_attribute,
                parse_Element: parse_Element
            }
        );
    }
);