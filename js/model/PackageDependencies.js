define
(
    ["model/base"],
    /**
     * This package shows all the root level subpackage dependencies of the combined CIM model.
     *
     */
    function (base)
    {

        /**
         * The version of dependencies description among top level subpackages of the combined CIM model.
         *
         * This is not the same as the combined packages version.
         *
         */
        class PackageDependenciesCIMVersion extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PackageDependenciesCIMVersion;
                if (null == bucket)
                   cim_data.PackageDependenciesCIMVersion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PackageDependenciesCIMVersion[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PackageDependenciesCIMVersion";
                base.parse_element (/<cim:PackageDependenciesCIMVersion.date>([\s\S]*?)<\/cim:PackageDependenciesCIMVersion.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:PackageDependenciesCIMVersion.version>([\s\S]*?)<\/cim:PackageDependenciesCIMVersion.version>/g, obj, "version", base.to_string, sub, context);
                var bucket = context.parsed.PackageDependenciesCIMVersion;
                if (null == bucket)
                   context.parsed.PackageDependenciesCIMVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PackageDependenciesCIMVersion", "date", "date",  base.from_string, fields);
                base.export_element (obj, "PackageDependenciesCIMVersion", "version", "version",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PackageDependenciesCIMVersion_collapse" aria-expanded="true" aria-controls="PackageDependenciesCIMVersion_collapse" style="margin-left: 10px;">PackageDependenciesCIMVersion</a></legend>
                    <div id="PackageDependenciesCIMVersion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#date}}<div><b>date</b>: {{date}}</div>{{/date}}
                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PackageDependenciesCIMVersion_collapse" aria-expanded="true" aria-controls="PackageDependenciesCIMVersion_collapse" style="margin-left: 10px;">PackageDependenciesCIMVersion</a></legend>
                    <div id="PackageDependenciesCIMVersion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='date'>date: </label><div class='col-sm-8'><input id='date' class='form-control' type='text'{{#date}} value='{{date}}'{{/date}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='version'>version: </label><div class='col-sm-8'><input id='version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PackageDependenciesCIMVersion" };
                super.submit (obj);
                temp = document.getElementById ("date").value; if ("" != temp) obj.date = temp;
                temp = document.getElementById ("version").value; if ("" != temp) obj.version = temp;

                return (obj);
            }
        }

        return (
            {
                PackageDependenciesCIMVersion: PackageDependenciesCIMVersion
            }
        );
    }
);