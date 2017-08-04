define
(
    ["model/base"],
    /**
     * Contains the core PowerSystemResource and ConductingEquipment entities shared by all applications plus common collections of those entities.
     * Not all applications require all the Core entities.  This package does not depend on any other package except the Domain package, but most of the other packages have associations and generalizations that depend on it.
     */
    function (base)
    {

        /**
         * Type of name.
         * Possible values for attribute 'name' are implementation dependent but standard profiles may specify types. An enterprise may have multiple IT systems each having its own local name for the same object, e.g. a planning system may have different names from an EMS. An object may also have different names within the same IT system, e.g. localName as defined in CIM version 14. The definition from CIM14 is:
         */
        function parse_NameType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "NameType";
            /**
             * Description of the name type.
             */
            obj["description"] = base.parse_element (/<cim:NameType.description>([\s\S]*?)<\/cim:NameType.description>/g, sub, context, true);
            /**
             * Name of the name type.
             */
            obj["name"] = base.parse_element (/<cim:NameType.name>([\s\S]*?)<\/cim:NameType.name>/g, sub, context, true);
            /**
             * Authority responsible for managing names of this type.
             */
            obj["NameTypeAuthority"] = base.parse_attribute (/<cim:NameType.NameTypeAuthority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.NameType;
            if (null == bucket)
                context.parsed.NameType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * TimePoints for a schedule where the time between the points varies.
         */
        function parse_IrregularTimePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "IrregularTimePoint";
            /**
             * The time is relative to the schedule starting time.
             */
            obj["time"] = base.parse_element (/<cim:IrregularTimePoint.time>([\s\S]*?)<\/cim:IrregularTimePoint.time>/g, sub, context, true);
            /**
             * The first value at the time.
             * The meaning of the value is defined by the derived type of the associated schedule.
             */
            obj["value1"] = base.to_float (base.parse_element (/<cim:IrregularTimePoint.value1>([\s\S]*?)<\/cim:IrregularTimePoint.value1>/g, sub, context, true));
            /**
             * The second value at the time.
             * The meaning of the value is defined by the derived type of the associated schedule.
             */
            obj["value2"] = base.to_float (base.parse_element (/<cim:IrregularTimePoint.value2>([\s\S]*?)<\/cim:IrregularTimePoint.value2>/g, sub, context, true));
            /**
             * An IrregularTimePoint belongs to an IrregularIntervalSchedule.
             */
            obj["IntervalSchedule"] = base.parse_attribute (/<cim:IrregularTimePoint.IntervalSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.IrregularTimePoint;
            if (null == bucket)
                context.parsed.IrregularTimePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A collection of equipment at one common system voltage forming a switchgear.
         * The equipment typically consist of breakers, busbars, instrumentation, control, regulation and protection devices as well as assemblies of all these.
         */
        function parse_VoltageLevel (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "VoltageLevel";
            /**
             * The bus bar's high voltage limit
             */
            obj["highVoltageLimit"] = base.parse_element (/<cim:VoltageLevel.highVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.highVoltageLimit>/g, sub, context, true);
            /**
             * The bus bar's low voltage limit
             */
            obj["lowVoltageLimit"] = base.parse_element (/<cim:VoltageLevel.lowVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.lowVoltageLimit>/g, sub, context, true);
            /**
             * The base voltage used for all equipment within the voltage level.
             */
            obj["BaseVoltage"] = base.parse_attribute (/<cim:VoltageLevel.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The substation of the voltage level.
             */
            obj["Substation"] = base.parse_attribute (/<cim:VoltageLevel.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.VoltageLevel;
            if (null == bucket)
                context.parsed.VoltageLevel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The parts of the AC power system that are designed to carry current or that are conductively connected through terminals.
         */
        function parse_ConductingEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Equipment (context, sub);
            obj.cls = "ConductingEquipment";
            /**
             * Action involving grounding operation on this conducting equipment.
             */
            obj["GroundingAction"] = base.parse_attribute (/<cim:ConductingEquipment.GroundingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Base voltage of this conducting equipment.
             * Use only when there is no voltage level container used and only one base voltage applies.  For example, not used for transformers.
             */
            obj["BaseVoltage"] = base.parse_attribute (/<cim:ConductingEquipment.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The status state variable associated with this conducting equipment.
             */
            obj["SvStatus"] = base.parse_attribute (/<cim:ConductingEquipment.SvStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Jumper action involving jumping operation on this conducting equipment.
             */
            obj["JumpingAction"] = base.parse_attribute (/<cim:ConductingEquipment.JumpingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ConductingEquipment;
            if (null == bucket)
                context.parsed.ConductingEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Enumeration of phase identifiers.
         * Allows designation of phases for both transmission and distribution equipment, circuits and loads.
         */
        function parse_PhaseCode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PhaseCode";
            /**
             * Phases A, B, C, and N.
             */
            obj["ABCN"] = base.parse_element (/<cim:PhaseCode.ABCN>([\s\S]*?)<\/cim:PhaseCode.ABCN>/g, sub, context, true);
            /**
             * Phases A, B, and C.
             */
            obj["ABC"] = base.parse_element (/<cim:PhaseCode.ABC>([\s\S]*?)<\/cim:PhaseCode.ABC>/g, sub, context, true);
            /**
             * Phases A, B, and neutral.
             */
            obj["ABN"] = base.parse_element (/<cim:PhaseCode.ABN>([\s\S]*?)<\/cim:PhaseCode.ABN>/g, sub, context, true);
            /**
             * Phases A, C and neutral.
             */
            obj["ACN"] = base.parse_element (/<cim:PhaseCode.ACN>([\s\S]*?)<\/cim:PhaseCode.ACN>/g, sub, context, true);
            /**
             * Phases B, C, and neutral.
             */
            obj["BCN"] = base.parse_element (/<cim:PhaseCode.BCN>([\s\S]*?)<\/cim:PhaseCode.BCN>/g, sub, context, true);
            /**
             * Phases A and B.
             */
            obj["AB"] = base.parse_element (/<cim:PhaseCode.AB>([\s\S]*?)<\/cim:PhaseCode.AB>/g, sub, context, true);
            /**
             * Phases A and C.
             */
            obj["AC"] = base.parse_element (/<cim:PhaseCode.AC>([\s\S]*?)<\/cim:PhaseCode.AC>/g, sub, context, true);
            /**
             * Phases B and C.
             */
            obj["BC"] = base.parse_element (/<cim:PhaseCode.BC>([\s\S]*?)<\/cim:PhaseCode.BC>/g, sub, context, true);
            /**
             * Phases A and neutral.
             */
            obj["AN"] = base.parse_element (/<cim:PhaseCode.AN>([\s\S]*?)<\/cim:PhaseCode.AN>/g, sub, context, true);
            /**
             * Phases B and neutral.
             */
            obj["BN"] = base.parse_element (/<cim:PhaseCode.BN>([\s\S]*?)<\/cim:PhaseCode.BN>/g, sub, context, true);
            /**
             * Phases C and neutral.
             */
            obj["CN"] = base.parse_element (/<cim:PhaseCode.CN>([\s\S]*?)<\/cim:PhaseCode.CN>/g, sub, context, true);
            /**
             * Phase A.
             */
            obj["A"] = base.parse_element (/<cim:PhaseCode.A>([\s\S]*?)<\/cim:PhaseCode.A>/g, sub, context, true);
            /**
             * Phase B.
             */
            obj["B"] = base.parse_element (/<cim:PhaseCode.B>([\s\S]*?)<\/cim:PhaseCode.B>/g, sub, context, true);
            /**
             * Phase C.
             */
            obj["C"] = base.parse_element (/<cim:PhaseCode.C>([\s\S]*?)<\/cim:PhaseCode.C>/g, sub, context, true);
            /**
             * Neutral phase.
             */
            obj["N"] = base.parse_element (/<cim:PhaseCode.N>([\s\S]*?)<\/cim:PhaseCode.N>/g, sub, context, true);
            /**
             * Secondary phase 1 and neutral.
             */
            obj["s1N"] = base.parse_element (/<cim:PhaseCode.s1N>([\s\S]*?)<\/cim:PhaseCode.s1N>/g, sub, context, true);
            /**
             * Secondary phase 2 and neutral.
             */
            obj["s2N"] = base.parse_element (/<cim:PhaseCode.s2N>([\s\S]*?)<\/cim:PhaseCode.s2N>/g, sub, context, true);
            /**
             * Secondary phases 1, 2, and neutral.
             */
            obj["s12N"] = base.parse_element (/<cim:PhaseCode.s12N>([\s\S]*?)<\/cim:PhaseCode.s12N>/g, sub, context, true);
            /**
             * Secondary phase 1.
             */
            obj["s1"] = base.parse_element (/<cim:PhaseCode.s1>([\s\S]*?)<\/cim:PhaseCode.s1>/g, sub, context, true);
            /**
             * Secondary phase 2.
             */
            obj["s2"] = base.parse_element (/<cim:PhaseCode.s2>([\s\S]*?)<\/cim:PhaseCode.s2>/g, sub, context, true);
            /**
             * Secondary phase 1 and 2.
             */
            obj["s12"] = base.parse_element (/<cim:PhaseCode.s12>([\s\S]*?)<\/cim:PhaseCode.s12>/g, sub, context, true);
            bucket = context.parsed.PhaseCode;
            if (null == bucket)
                context.parsed.PhaseCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The parts of a power system that are physical devices, electronic or mechanical.
         */
        function parse_Equipment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemResource (context, sub);
            obj.cls = "Equipment";
            /**
             * If true, the equipment is normally in service.
             */
            obj["normallyInService"] = base.to_boolean (base.parse_element (/<cim:Equipment.normallyInService>([\s\S]*?)<\/cim:Equipment.normallyInService>/g, sub, context, true));
            /**
             * The single instance of equipment represents multiple pieces of equipment that have been modeled together as an aggregate.
             * Examples would be power transformers or synchronous machines operating in parallel modeled as a single aggregate power transformer or aggregate synchronous machine.  This is not to be used to indicate equipment that is part of a group of interdependent equipment produced by a network production program.
             */
            obj["aggregate"] = base.to_boolean (base.parse_element (/<cim:Equipment.aggregate>([\s\S]*?)<\/cim:Equipment.aggregate>/g, sub, context, true));
            /**
             * Container of this equipment.
             */
            obj["EquipmentContainer"] = base.parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Equipment;
            if (null == bucket)
                context.parsed.Equipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A subset of a geographical region of a power system network model.
         */
        function parse_SubGeographicalRegion (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "SubGeographicalRegion";
            /**
             * The geographical region to which this sub-geographical region is within.
             */
            obj["Region"] = base.parse_attribute (/<cim:SubGeographicalRegion.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SubGeographicalRegion;
            if (null == bucket)
                context.parsed.SubGeographicalRegion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A power system resource can be an item of equipment such as a switch, an equipment container containing many individual items of equipment such as a substation, or an organisational entity such as sub-control area.
         * Power system resources can have measurements associated.
         */
        function parse_PowerSystemResource (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "PowerSystemResource";
            /**
             * Datasheet information for this power system resource.
             */
            obj["AssetDatasheet"] = base.parse_attribute (/<cim:PowerSystemResource.AssetDatasheet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Location of this power system resource.
             */
            obj["Location"] = base.parse_attribute (/<cim:PowerSystemResource.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Custom classification for this power system resource.
             */
            obj["PSRType"] = base.parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PowerSystemResource;
            if (null == bucket)
                context.parsed.PowerSystemResource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Time point for a schedule where the time between the consecutive points is constant.
         */
        function parse_RegularTimePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RegularTimePoint";
            /**
             * The position of the regular time point in the sequence.
             * Note that time points don't have to be sequential, i.e. time points may be omitted. The actual time for a RegularTimePoint is computed by multiplying the associated regular interval schedule's time step with the regular time point sequence number and adding the associated schedules start time.
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:RegularTimePoint.sequenceNumber>([\s\S]*?)<\/cim:RegularTimePoint.sequenceNumber>/g, sub, context, true);
            /**
             * The first value at the time.
             * The meaning of the value is defined by the derived type of the associated schedule.
             */
            obj["value1"] = base.to_float (base.parse_element (/<cim:RegularTimePoint.value1>([\s\S]*?)<\/cim:RegularTimePoint.value1>/g, sub, context, true));
            /**
             * The second value at the time.
             * The meaning of the value is defined by the derived type of the associated schedule.
             */
            obj["value2"] = base.to_float (base.parse_element (/<cim:RegularTimePoint.value2>([\s\S]*?)<\/cim:RegularTimePoint.value2>/g, sub, context, true));
            /**
             * Regular interval schedule containing this time point.
             */
            obj["IntervalSchedule"] = base.parse_attribute (/<cim:RegularTimePoint.IntervalSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RegularTimePoint;
            if (null == bucket)
                context.parsed.RegularTimePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The schedule has time points where the time between them varies.
         */
        function parse_IrregularIntervalSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BasicIntervalSchedule (context, sub);
            obj.cls = "IrregularIntervalSchedule";
            bucket = context.parsed.IrregularIntervalSchedule;
            if (null == bucket)
                context.parsed.IrregularIntervalSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A collection of equipment for purposes other than generation or utilization, through which electric energy in bulk is passed for the purposes of switching or modifying its characteristics.
         */
        function parse_Substation (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "Substation";
            /**
             * The SubGeographicalRegion containing the substation.
             */
            obj["Region"] = base.parse_attribute (/<cim:Substation.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Substation;
            if (null == bucket)
                context.parsed.Substation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class describe a base frequency for a power system network.
         * In case of multiple power networks with different frequencies, e.g. 50 or 60 Hertz each network will have it's own base frequency class. Hence it is assumed that power system objects having different base frequencies appear in separate documents where each document has a single base frequency instance.
         */
        function parse_BaseFrequency (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "BaseFrequency";
            /**
             * The base frequency.
             */
            obj["frequency"] = base.parse_element (/<cim:BaseFrequency.frequency>([\s\S]*?)<\/cim:BaseFrequency.frequency>/g, sub, context, true);
            bucket = context.parsed.BaseFrequency;
            if (null == bucket)
                context.parsed.BaseFrequency = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The Name class provides the means to define any number of human readable  names for an object.
         * A name is <b>not</b> to be used for defining inter-object relationships. For inter-object relationships instead use the object identification 'mRID'.
         */
        function parse_Name (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Name";
            /**
             * Any free text that name the object.
             */
            obj["name"] = base.parse_element (/<cim:Name.name>([\s\S]*?)<\/cim:Name.name>/g, sub, context, true);
            /**
             * Type of this name.
             */
            obj["NameType"] = base.parse_attribute (/<cim:Name.NameType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Identified object that this name designates.
             */
            obj["IdentifiedObject"] = base.parse_attribute (/<cim:Name.IdentifiedObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Name;
            if (null == bucket)
                context.parsed.Name = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A reporting group is used for various ad-hoc groupings used for reporting.
         */
        function parse_ReportingGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ReportingGroup";
            /**
             * Reporting super group to which this reporting group belongs.
             */
            obj["ReportingSuperGroup"] = base.parse_attribute (/<cim:ReportingGroup.ReportingSuperGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ReportingGroup;
            if (null == bucket)
                context.parsed.ReportingGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The schedule has time points where the time between them is constant.
         */
        function parse_RegularIntervalSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BasicIntervalSchedule (context, sub);
            obj.cls = "RegularIntervalSchedule";
            /**
             * The time for the last time point.
             */
            obj["endTime"] = base.to_datetime (base.parse_element (/<cim:RegularIntervalSchedule.endTime>([\s\S]*?)<\/cim:RegularIntervalSchedule.endTime>/g, sub, context, true));
            /**
             * The time between each pair of subsequent regular time points in sequence order.
             */
            obj["timeStep"] = base.parse_element (/<cim:RegularIntervalSchedule.timeStep>([\s\S]*?)<\/cim:RegularIntervalSchedule.timeStep>/g, sub, context, true);
            bucket = context.parsed.RegularIntervalSchedule;
            if (null == bucket)
                context.parsed.RegularIntervalSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This is a root class to provide common identification for all classes needing identification and naming attributes.
         */
        function parse_IdentifiedObject (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "IdentifiedObject";
            /**
             * The aliasName is free text human readable name of the object alternative to IdentifiedObject.name.
             * It may be non unique and may not correlate to a naming hierarchy.
             */
            obj["aliasName"] = base.parse_element (/<cim:IdentifiedObject.aliasName>([\s\S]*?)<\/cim:IdentifiedObject.aliasName>/g, sub, context, true);
            /**
             * Master resource identifier issued by a model authority.
             * The mRID is globally unique within an exchange context. Global uniqueness is easily achieved by using a UUID,  as specified in RFC 4122, for the mRID.  The use of UUID is strongly recommended.
             */
            obj["mRID"] = base.parse_element (/<cim:IdentifiedObject.mRID>([\s\S]*?)<\/cim:IdentifiedObject.mRID>/g, sub, context, true);
            /**
             * The name is any free human readable and possibly non unique text naming the object.
             */
            obj["name"] = base.parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context, true);
            /**
             * The description is a free human readable text describing or naming the object.
             * It may be non unique and may not correlate to a naming hierarchy.
             */
            obj["description"] = base.parse_element (/<cim:IdentifiedObject.description>([\s\S]*?)<\/cim:IdentifiedObject.description>/g, sub, context, true);
            if (null == obj.mRID)
                obj.mRID = obj.id;
            if ((null != obj.mRID) && (obj.id != obj.mRID))
            {
                if ("undefined" != typeof (console))
                    console.log ("***Warning*** rdf:ID != mRID [" + obj.id + " != " + obj.mRID + "]");
                else
                    print ("***Warning*** rdf:ID != mRID [" + obj.id + " != " + obj.mRID + "]");
                obj.id = obj.mRID;
            }
            bucket = context.parsed.IdentifiedObject;
            if (null == bucket)
                context.parsed.IdentifiedObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Multi-purpose data points for defining a curve.
         * The use of this generic class is discouraged if a more specific class  can be used to specify the x and y axis values along with their specific data types.
         */
        function parse_CurveData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CurveData";
            /**
             * The data value of the X-axis variable,  depending on the X-axis units.
             */
            obj["xvalue"] = base.to_float (base.parse_element (/<cim:CurveData.xvalue>([\s\S]*?)<\/cim:CurveData.xvalue>/g, sub, context, true));
            /**
             * The data value of the  first Y-axis variable, depending on the Y-axis units.
             */
            obj["y1value"] = base.to_float (base.parse_element (/<cim:CurveData.y1value>([\s\S]*?)<\/cim:CurveData.y1value>/g, sub, context, true));
            /**
             * The data value of the second Y-axis variable (if present), depending on the Y-axis units.
             */
            obj["y2value"] = base.to_float (base.parse_element (/<cim:CurveData.y2value>([\s\S]*?)<\/cim:CurveData.y2value>/g, sub, context, true));
            /**
             * The data value of the third Y-axis variable (if present), depending on the Y-axis units.
             */
            obj["y3value"] = base.to_float (base.parse_element (/<cim:CurveData.y3value>([\s\S]*?)<\/cim:CurveData.y3value>/g, sub, context, true));
            /**
             * The curve of  this curve data point.
             */
            obj["Curve"] = base.parse_attribute (/<cim:CurveData.Curve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CurveData;
            if (null == bucket)
                context.parsed.CurveData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Authority responsible for creation and management of names of a given type; typically an organization or an enterprise system.
         */
        function parse_NameTypeAuthority (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "NameTypeAuthority";
            /**
             * Description of the name type authority.
             */
            obj["description"] = base.parse_element (/<cim:NameTypeAuthority.description>([\s\S]*?)<\/cim:NameTypeAuthority.description>/g, sub, context, true);
            /**
             * Name of the name type authority.
             */
            obj["name"] = base.parse_element (/<cim:NameTypeAuthority.name>([\s\S]*?)<\/cim:NameTypeAuthority.name>/g, sub, context, true);
            bucket = context.parsed.NameTypeAuthority;
            if (null == bucket)
                context.parsed.NameTypeAuthority = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A multi-purpose curve or functional relationship between an independent variable (X-axis) and dependent (Y-axis) variables.
         */
        function parse_Curve (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "Curve";
            /**
             * The style or shape of the curve.
             */
            obj["curveStyle"] = base.parse_element (/<cim:Curve.curveStyle>([\s\S]*?)<\/cim:Curve.curveStyle>/g, sub, context, true);
            /**
             * Multiplier for X-axis.
             */
            obj["xMultiplier"] = base.parse_element (/<cim:Curve.xMultiplier>([\s\S]*?)<\/cim:Curve.xMultiplier>/g, sub, context, true);
            /**
             * The X-axis units of measure.
             */
            obj["xUnit"] = base.parse_element (/<cim:Curve.xUnit>([\s\S]*?)<\/cim:Curve.xUnit>/g, sub, context, true);
            /**
             * Multiplier for Y1-axis.
             */
            obj["y1Multiplier"] = base.parse_element (/<cim:Curve.y1Multiplier>([\s\S]*?)<\/cim:Curve.y1Multiplier>/g, sub, context, true);
            /**
             * The Y1-axis units of measure.
             */
            obj["y1Unit"] = base.parse_element (/<cim:Curve.y1Unit>([\s\S]*?)<\/cim:Curve.y1Unit>/g, sub, context, true);
            /**
             * Multiplier for Y2-axis.
             */
            obj["y2Multiplier"] = base.parse_element (/<cim:Curve.y2Multiplier>([\s\S]*?)<\/cim:Curve.y2Multiplier>/g, sub, context, true);
            /**
             * The Y2-axis units of measure.
             */
            obj["y2Unit"] = base.parse_element (/<cim:Curve.y2Unit>([\s\S]*?)<\/cim:Curve.y2Unit>/g, sub, context, true);
            /**
             * Multiplier for Y3-axis.
             */
            obj["y3Multiplier"] = base.parse_element (/<cim:Curve.y3Multiplier>([\s\S]*?)<\/cim:Curve.y3Multiplier>/g, sub, context, true);
            /**
             * The Y3-axis units of measure.
             */
            obj["y3Unit"] = base.parse_element (/<cim:Curve.y3Unit>([\s\S]*?)<\/cim:Curve.y3Unit>/g, sub, context, true);
            bucket = context.parsed.Curve;
            if (null == bucket)
                context.parsed.Curve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Classifying instances of the same class, e.g. overhead and underground ACLineSegments.
         * This classification mechanism is intended to provide flexibility outside the scope of this standard, i.e. provide customisation that is non standard.
         */
        function parse_PSRType (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "PSRType";
            bucket = context.parsed.PSRType;
            if (null == bucket)
                context.parsed.PSRType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Defines a system base voltage which is referenced.
         */
        function parse_BaseVoltage (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "BaseVoltage";
            /**
             * The power system resource's base voltage.
             */
            obj["nominalVoltage"] = base.parse_element (/<cim:BaseVoltage.nominalVoltage>([\s\S]*?)<\/cim:BaseVoltage.nominalVoltage>/g, sub, context, true);
            bucket = context.parsed.BaseVoltage;
            if (null == bucket)
                context.parsed.BaseVoltage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Connectivity nodes are points where terminals of AC conducting equipment are connected together with zero impedance.
         */
        function parse_ConnectivityNode (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ConnectivityNode";
            /**
             * Container of this connectivity node.
             */
            obj["ConnectivityNodeContainer"] = base.parse_attribute (/<cim:ConnectivityNode.ConnectivityNodeContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The topological node to which this connectivity node is assigned.
             * May depend on the current state of switches in the network.
             */
            obj["TopologicalNode"] = base.parse_attribute (/<cim:ConnectivityNode.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ConnectivityNode;
            if (null == bucket)
                context.parsed.ConnectivityNode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Switching arrangement for bay.
         */
        function parse_BreakerConfiguration (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BreakerConfiguration";
            /**
             * Single breaker.
             */
            obj["singleBreaker"] = base.parse_element (/<cim:BreakerConfiguration.singleBreaker>([\s\S]*?)<\/cim:BreakerConfiguration.singleBreaker>/g, sub, context, true);
            /**
             * Breaker and a half.
             */
            obj["breakerAndAHalf"] = base.parse_element (/<cim:BreakerConfiguration.breakerAndAHalf>([\s\S]*?)<\/cim:BreakerConfiguration.breakerAndAHalf>/g, sub, context, true);
            /**
             * Double breaker.
             */
            obj["doubleBreaker"] = base.parse_element (/<cim:BreakerConfiguration.doubleBreaker>([\s\S]*?)<\/cim:BreakerConfiguration.doubleBreaker>/g, sub, context, true);
            /**
             * No breaker.
             */
            obj["noBreaker"] = base.parse_element (/<cim:BreakerConfiguration.noBreaker>([\s\S]*?)<\/cim:BreakerConfiguration.noBreaker>/g, sub, context, true);
            bucket = context.parsed.BreakerConfiguration;
            if (null == bucket)
                context.parsed.BreakerConfiguration = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies the operations contract relationship between a power system resource and a contract participant.
         */
        function parse_OperatingShare (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OperatingShare";
            /**
             * Percentage operational ownership between the pair (power system resource and operatging participant) associated with this share.
             * The total percentage ownership for a power system resource should add to 100%.
             */
            obj["percentage"] = base.parse_element (/<cim:OperatingShare.percentage>([\s\S]*?)<\/cim:OperatingShare.percentage>/g, sub, context, true);
            /**
             * The operating participant having this share with the associated power system resource.
             */
            obj["OperatingParticipant"] = base.parse_attribute (/<cim:OperatingShare.OperatingParticipant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The power system resource to which the share applies.
             */
            obj["PowerSystemResource"] = base.parse_attribute (/<cim:OperatingShare.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OperatingShare;
            if (null == bucket)
                context.parsed.OperatingShare = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A geographical region of a power system network model.
         */
        function parse_GeographicalRegion (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "GeographicalRegion";
            bucket = context.parsed.GeographicalRegion;
            if (null == bucket)
                context.parsed.GeographicalRegion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Schedule of values at points in time.
         */
        function parse_BasicIntervalSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "BasicIntervalSchedule";
            /**
             * The time for the first time point.
             */
            obj["startTime"] = base.to_datetime (base.parse_element (/<cim:BasicIntervalSchedule.startTime>([\s\S]*?)<\/cim:BasicIntervalSchedule.startTime>/g, sub, context, true));
            /**
             * Multiplier for value1.
             */
            obj["value1Multiplier"] = base.parse_element (/<cim:BasicIntervalSchedule.value1Multiplier>([\s\S]*?)<\/cim:BasicIntervalSchedule.value1Multiplier>/g, sub, context, true);
            /**
             * Value1 units of measure.
             */
            obj["value1Unit"] = base.parse_element (/<cim:BasicIntervalSchedule.value1Unit>([\s\S]*?)<\/cim:BasicIntervalSchedule.value1Unit>/g, sub, context, true);
            /**
             * Multiplier for value2.
             */
            obj["value2Multiplier"] = base.parse_element (/<cim:BasicIntervalSchedule.value2Multiplier>([\s\S]*?)<\/cim:BasicIntervalSchedule.value2Multiplier>/g, sub, context, true);
            /**
             * Value2 units of measure.
             */
            obj["value2Unit"] = base.parse_element (/<cim:BasicIntervalSchedule.value2Unit>([\s\S]*?)<\/cim:BasicIntervalSchedule.value2Unit>/g, sub, context, true);
            bucket = context.parsed.BasicIntervalSchedule;
            if (null == bucket)
                context.parsed.BasicIntervalSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Style or shape of curve.
         */
        function parse_CurveStyle (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CurveStyle";
            /**
             * The Y-axis values are assumed constant until the next curve point and prior to the first curve point.
             */
            obj["constantYValue"] = base.parse_element (/<cim:CurveStyle.constantYValue>([\s\S]*?)<\/cim:CurveStyle.constantYValue>/g, sub, context, true);
            /**
             * The Y-axis values are assumed to be a straight line between values.
             * Also known as linear interpolation.
             */
            obj["straightLineYValues"] = base.parse_element (/<cim:CurveStyle.straightLineYValues>([\s\S]*?)<\/cim:CurveStyle.straightLineYValues>/g, sub, context, true);
            bucket = context.parsed.CurveStyle;
            if (null == bucket)
                context.parsed.CurveStyle = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An electrical connection point (AC or DC) to a piece of conducting equipment.
         * Terminals are connected at physical connection points called connectivity nodes.
         */
        function parse_ACDCTerminal (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ACDCTerminal";
            /**
             * The connected status is related to a bus-branch model and the topological node to terminal relation.
             * True implies the terminal is connected to the related topological node and false implies it is not.
             */
            obj["connected"] = base.to_boolean (base.parse_element (/<cim:ACDCTerminal.connected>([\s\S]*?)<\/cim:ACDCTerminal.connected>/g, sub, context, true));
            /**
             * The orientation of the terminal connections for a multiple terminal conducting equipment.
             * The sequence numbering starts with 1 and additional terminals should follow in increasing order.   The first terminal is the "starting point" for a two terminal branch.
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:ACDCTerminal.sequenceNumber>([\s\S]*?)<\/cim:ACDCTerminal.sequenceNumber>/g, sub, context, true);
            /**
             * The bus name marker used to name the bus (topological node).
             */
            obj["BusNameMarker"] = base.parse_attribute (/<cim:ACDCTerminal.BusNameMarker\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ACDCTerminal;
            if (null == bucket)
                context.parsed.ACDCTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A collection of power system resources (within a given substation) including conducting equipment, protection relays, measurements, and telemetry.
         * A bay typically represents a physical grouping related to modularization of equipment.
         */
        function parse_Bay (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "Bay";
            /**
             * Indicates the presence/absence of energy measurements.
             */
            obj["bayEnergyMeasFlag"] = base.to_boolean (base.parse_element (/<cim:Bay.bayEnergyMeasFlag>([\s\S]*?)<\/cim:Bay.bayEnergyMeasFlag>/g, sub, context, true));
            /**
             * Indicates the presence/absence of active/reactive power measurements.
             */
            obj["bayPowerMeasFlag"] = base.to_boolean (base.parse_element (/<cim:Bay.bayPowerMeasFlag>([\s\S]*?)<\/cim:Bay.bayPowerMeasFlag>/g, sub, context, true));
            /**
             * Breaker configuration.
             */
            obj["breakerConfiguration"] = base.parse_element (/<cim:Bay.breakerConfiguration>([\s\S]*?)<\/cim:Bay.breakerConfiguration>/g, sub, context, true);
            /**
             * Bus bar configuration.
             */
            obj["busBarConfiguration"] = base.parse_element (/<cim:Bay.busBarConfiguration>([\s\S]*?)<\/cim:Bay.busBarConfiguration>/g, sub, context, true);
            /**
             * Substation containing the bay.
             */
            obj["Substation"] = base.parse_attribute (/<cim:Bay.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The voltage level containing this bay.
             */
            obj["VoltageLevel"] = base.parse_attribute (/<cim:Bay.VoltageLevel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Bay;
            if (null == bucket)
                context.parsed.Bay = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An operator of multiple power system resource objects.
         * Note multple operating participants may operate the same power system resource object.   This can be used for modeling jointly owned units where each owner operates as a contractual share.
         */
        function parse_OperatingParticipant (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "OperatingParticipant";
            bucket = context.parsed.OperatingParticipant;
            if (null == bucket)
                context.parsed.OperatingParticipant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Busbar layout for bay.
         */
        function parse_BusbarConfiguration (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BusbarConfiguration";
            /**
             * Single bus.
             */
            obj["singleBus"] = base.parse_element (/<cim:BusbarConfiguration.singleBus>([\s\S]*?)<\/cim:BusbarConfiguration.singleBus>/g, sub, context, true);
            /**
             * Double bus.
             */
            obj["doubleBus"] = base.parse_element (/<cim:BusbarConfiguration.doubleBus>([\s\S]*?)<\/cim:BusbarConfiguration.doubleBus>/g, sub, context, true);
            /**
             * Main bus with transfer bus.
             */
            obj["mainWithTransfer"] = base.parse_element (/<cim:BusbarConfiguration.mainWithTransfer>([\s\S]*?)<\/cim:BusbarConfiguration.mainWithTransfer>/g, sub, context, true);
            /**
             * Ring bus.
             */
            obj["ringBus"] = base.parse_element (/<cim:BusbarConfiguration.ringBus>([\s\S]*?)<\/cim:BusbarConfiguration.ringBus>/g, sub, context, true);
            bucket = context.parsed.BusbarConfiguration;
            if (null == bucket)
                context.parsed.BusbarConfiguration = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The BasePower class defines the base power used in the per unit calculations.
         */
        function parse_BasePower (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "BasePower";
            /**
             * Value used as base power.
             */
            obj["basePower"] = base.parse_element (/<cim:BasePower.basePower>([\s\S]*?)<\/cim:BasePower.basePower>/g, sub, context, true);
            bucket = context.parsed.BasePower;
            if (null == bucket)
                context.parsed.BasePower = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A modeling construct to provide a root class for containing equipment.
         */
        function parse_EquipmentContainer (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ConnectivityNodeContainer (context, sub);
            obj.cls = "EquipmentContainer";
            bucket = context.parsed.EquipmentContainer;
            if (null == bucket)
                context.parsed.EquipmentContainer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A base class for all objects that may contain connectivity nodes or topological nodes.
         */
        function parse_ConnectivityNodeContainer (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemResource (context, sub);
            obj.cls = "ConnectivityNodeContainer";
            bucket = context.parsed.ConnectivityNodeContainer;
            if (null == bucket)
                context.parsed.ConnectivityNodeContainer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A reporting super group, groups reporting groups for a higher level report.
         */
        function parse_ReportingSuperGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ReportingSuperGroup";
            bucket = context.parsed.ReportingSuperGroup;
            if (null == bucket)
                context.parsed.ReportingSuperGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An AC electrical connection point to a piece of conducting equipment.
         * Terminals are connected at physical connection points called connectivity nodes.
         */
        function parse_Terminal (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ACDCTerminal (context, sub);
            obj.cls = "Terminal";
            /**
             * Represents the normal network phasing condition.
             * If the attribute is missing three phases (ABC or ABCN) shall be assumed.
             */
            obj["phases"] = base.parse_element (/<cim:Terminal.phases>([\s\S]*?)<\/cim:Terminal.phases>/g, sub, context, true);
            /**
             * The topological node associated with the terminal.
             * This can be used as an alternative to the connectivity node path to topological node, thus making it unneccesary to model connectivity nodes in some cases.   Note that the if connectivity nodes are in the model, this association would probably not be used as an input specification.
             */
            obj["TopologicalNode"] = base.parse_attribute (/<cim:Terminal.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The conducting equipment of the terminal.
             * Conducting equipment have  terminals that may be connected to other conducting equipment terminals via connectivity nodes or topological nodes.
             */
            obj["ConductingEquipment"] = base.parse_attribute (/<cim:Terminal.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The power flow state variable associated with the terminal.
             */
            obj["SvPowerFlow"] = base.parse_attribute (/<cim:Terminal.SvPowerFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["Bushing"] = base.parse_attribute (/<cim:Terminal.Bushing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The connectivity node to which this terminal connects with zero impedance.
             */
            obj["ConnectivityNode"] = base.parse_attribute (/<cim:Terminal.ConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Terminal;
            if (null == bucket)
                context.parsed.Terminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ConnectivityNodeContainer: parse_ConnectivityNodeContainer,
                parse_OperatingParticipant: parse_OperatingParticipant,
                parse_OperatingShare: parse_OperatingShare,
                parse_SubGeographicalRegion: parse_SubGeographicalRegion,
                parse_IdentifiedObject: parse_IdentifiedObject,
                parse_PowerSystemResource: parse_PowerSystemResource,
                parse_IrregularIntervalSchedule: parse_IrregularIntervalSchedule,
                parse_Bay: parse_Bay,
                parse_BaseVoltage: parse_BaseVoltage,
                parse_RegularIntervalSchedule: parse_RegularIntervalSchedule,
                parse_CurveData: parse_CurveData,
                parse_NameType: parse_NameType,
                parse_Curve: parse_Curve,
                parse_Terminal: parse_Terminal,
                parse_VoltageLevel: parse_VoltageLevel,
                parse_ReportingSuperGroup: parse_ReportingSuperGroup,
                parse_BasicIntervalSchedule: parse_BasicIntervalSchedule,
                parse_BreakerConfiguration: parse_BreakerConfiguration,
                parse_Equipment: parse_Equipment,
                parse_NameTypeAuthority: parse_NameTypeAuthority,
                parse_RegularTimePoint: parse_RegularTimePoint,
                parse_CurveStyle: parse_CurveStyle,
                parse_PhaseCode: parse_PhaseCode,
                parse_Name: parse_Name,
                parse_GeographicalRegion: parse_GeographicalRegion,
                parse_BasePower: parse_BasePower,
                parse_ConductingEquipment: parse_ConductingEquipment,
                parse_ReportingGroup: parse_ReportingGroup,
                parse_Substation: parse_Substation,
                parse_BaseFrequency: parse_BaseFrequency,
                parse_EquipmentContainer: parse_EquipmentContainer,
                parse_IrregularTimePoint: parse_IrregularTimePoint,
                parse_BusbarConfiguration: parse_BusbarConfiguration,
                parse_PSRType: parse_PSRType,
                parse_ACDCTerminal: parse_ACDCTerminal,
                parse_ConnectivityNode: parse_ConnectivityNode
            }
        );
    }
);