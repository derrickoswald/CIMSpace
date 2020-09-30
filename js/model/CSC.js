define
(
    ["model/base", "model/HVDCDynamics"],
    function (base, HVDCDynamics)
    {
        class CCArectifierControl extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CCArectifierControl;
                if (null == bucket)
                   cim_data.CCArectifierControl = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CCArectifierControl[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CCArectifierControl";
                let bucket = context.parsed.CCArectifierControl;
                if (null == bucket)
                   context.parsed.CCArectifierControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CCArectifierControl_collapse" aria-expanded="true" aria-controls="CCArectifierControl_collapse" style="margin-left: 10px;">CCArectifierControl</a></legend>
                    <div id="CCArectifierControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CCArectifierControl_collapse" aria-expanded="true" aria-controls="{{id}}_CCArectifierControl_collapse" style="margin-left: 10px;">CCArectifierControl</a></legend>
                    <div id="{{id}}_CCArectifierControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "CCArectifierControl" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class VDCOL extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.VDCOL;
                if (null == bucket)
                   cim_data.VDCOL = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VDCOL[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "VDCOL";
                let bucket = context.parsed.VDCOL;
                if (null == bucket)
                   context.parsed.VDCOL = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VDCOL_collapse" aria-expanded="true" aria-controls="VDCOL_collapse" style="margin-left: 10px;">VDCOL</a></legend>
                    <div id="VDCOL_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VDCOL_collapse" aria-expanded="true" aria-controls="{{id}}_VDCOL_collapse" style="margin-left: 10px;">VDCOL</a></legend>
                    <div id="{{id}}_VDCOL_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "VDCOL" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class CCAinverter extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CCAinverter;
                if (null == bucket)
                   cim_data.CCAinverter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CCAinverter[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CCAinverter";
                let bucket = context.parsed.CCAinverter;
                if (null == bucket)
                   context.parsed.CCAinverter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CCAinverter_collapse" aria-expanded="true" aria-controls="CCAinverter_collapse" style="margin-left: 10px;">CCAinverter</a></legend>
                    <div id="CCAinverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CCAinverter_collapse" aria-expanded="true" aria-controls="{{id}}_CCAinverter_collapse" style="margin-left: 10px;">CCAinverter</a></legend>
                    <div id="{{id}}_CCAinverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "CCAinverter" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class IgnAngleContInverter extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.IgnAngleContInverter;
                if (null == bucket)
                   cim_data.IgnAngleContInverter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IgnAngleContInverter[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IgnAngleContInverter";
                let bucket = context.parsed.IgnAngleContInverter;
                if (null == bucket)
                   context.parsed.IgnAngleContInverter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IgnAngleContInverter_collapse" aria-expanded="true" aria-controls="IgnAngleContInverter_collapse" style="margin-left: 10px;">IgnAngleContInverter</a></legend>
                    <div id="IgnAngleContInverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IgnAngleContInverter_collapse" aria-expanded="true" aria-controls="{{id}}_IgnAngleContInverter_collapse" style="margin-left: 10px;">IgnAngleContInverter</a></legend>
                    <div id="{{id}}_IgnAngleContInverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "IgnAngleContInverter" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class IdcInverterControl extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.IdcInverterControl;
                if (null == bucket)
                   cim_data.IdcInverterControl = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IdcInverterControl[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IdcInverterControl";
                let bucket = context.parsed.IdcInverterControl;
                if (null == bucket)
                   context.parsed.IdcInverterControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IdcInverterControl_collapse" aria-expanded="true" aria-controls="IdcInverterControl_collapse" style="margin-left: 10px;">IdcInverterControl</a></legend>
                    <div id="IdcInverterControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IdcInverterControl_collapse" aria-expanded="true" aria-controls="{{id}}_IdcInverterControl_collapse" style="margin-left: 10px;">IdcInverterControl</a></legend>
                    <div id="{{id}}_IdcInverterControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "IdcInverterControl" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class CSCtype1 extends HVDCDynamics.CSCDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CSCtype1;
                if (null == bucket)
                   cim_data.CSCtype1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CSCtype1[obj.id];
            }

            parse (context, sub)
            {
                let obj = HVDCDynamics.CSCDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "CSCtype1";
                let bucket = context.parsed.CSCtype1;
                if (null == bucket)
                   context.parsed.CSCtype1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = HVDCDynamics.CSCDynamics.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CSCtype1_collapse" aria-expanded="true" aria-controls="CSCtype1_collapse" style="margin-left: 10px;">CSCtype1</a></legend>
                    <div id="CSCtype1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HVDCDynamics.CSCDynamics.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CSCtype1_collapse" aria-expanded="true" aria-controls="{{id}}_CSCtype1_collapse" style="margin-left: 10px;">CSCtype1</a></legend>
                    <div id="{{id}}_CSCtype1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HVDCDynamics.CSCDynamics.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "CSCtype1" };
                super.submit (id, obj);

                return (obj);
            }
        }

        return (
            {
                CSCtype1: CSCtype1,
                VDCOL: VDCOL,
                IgnAngleContInverter: IgnAngleContInverter,
                CCArectifierControl: CCArectifierControl,
                IdcInverterControl: IdcInverterControl,
                CCAinverter: CCAinverter
            }
        );
    }
);