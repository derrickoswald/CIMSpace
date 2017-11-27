define
(
    ["model/base"],
    function (base)
    {

        class AccumulationKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AccumulationKind;
                if (null == bucket)
                   cim_data.AccumulationKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AccumulationKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AccumulationKind";
                base.parse_element (/<cim:AccumulationKind.none>([\s\S]*?)<\/cim:AccumulationKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.bulkQuantity>([\s\S]*?)<\/cim:AccumulationKind.bulkQuantity>/g, obj, "bulkQuantity", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.continuousCumulative>([\s\S]*?)<\/cim:AccumulationKind.continuousCumulative>/g, obj, "continuousCumulative", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.cumulative>([\s\S]*?)<\/cim:AccumulationKind.cumulative>/g, obj, "cumulative", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.deltaData>([\s\S]*?)<\/cim:AccumulationKind.deltaData>/g, obj, "deltaData", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.indicating>([\s\S]*?)<\/cim:AccumulationKind.indicating>/g, obj, "indicating", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.summation>([\s\S]*?)<\/cim:AccumulationKind.summation>/g, obj, "summation", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.timeDelay>([\s\S]*?)<\/cim:AccumulationKind.timeDelay>/g, obj, "timeDelay", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.instantaneous>([\s\S]*?)<\/cim:AccumulationKind.instantaneous>/g, obj, "instantaneous", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.latchingQuantity>([\s\S]*?)<\/cim:AccumulationKind.latchingQuantity>/g, obj, "latchingQuantity", base.to_string, sub, context);
                base.parse_element (/<cim:AccumulationKind.boundedQuantity>([\s\S]*?)<\/cim:AccumulationKind.boundedQuantity>/g, obj, "boundedQuantity", base.to_string, sub, context);

                var bucket = context.parsed.AccumulationKind;
                if (null == bucket)
                   context.parsed.AccumulationKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AccumulationKind", "none", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "bulkQuantity", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "continuousCumulative", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "cumulative", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "deltaData", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "indicating", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "summation", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "timeDelay", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "instantaneous", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "latchingQuantity", base.from_string, fields);
                base.export_element (obj, "AccumulationKind", "boundedQuantity", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class FlowDirectionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FlowDirectionKind;
                if (null == bucket)
                   cim_data.FlowDirectionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FlowDirectionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FlowDirectionKind";
                base.parse_element (/<cim:FlowDirectionKind.none>([\s\S]*?)<\/cim:FlowDirectionKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.forward>([\s\S]*?)<\/cim:FlowDirectionKind.forward>/g, obj, "forward", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.lagging>([\s\S]*?)<\/cim:FlowDirectionKind.lagging>/g, obj, "lagging", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.leading>([\s\S]*?)<\/cim:FlowDirectionKind.leading>/g, obj, "leading", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.net>([\s\S]*?)<\/cim:FlowDirectionKind.net>/g, obj, "net", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.q1plusQ2>([\s\S]*?)<\/cim:FlowDirectionKind.q1plusQ2>/g, obj, "q1plusQ2", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.q1plusQ3>([\s\S]*?)<\/cim:FlowDirectionKind.q1plusQ3>/g, obj, "q1plusQ3", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.q1plusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q1plusQ4>/g, obj, "q1plusQ4", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.q1minusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q1minusQ4>/g, obj, "q1minusQ4", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.q2plusQ3>([\s\S]*?)<\/cim:FlowDirectionKind.q2plusQ3>/g, obj, "q2plusQ3", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.q2plusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q2plusQ4>/g, obj, "q2plusQ4", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.q2minusQ3>([\s\S]*?)<\/cim:FlowDirectionKind.q2minusQ3>/g, obj, "q2minusQ3", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.q3plusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q3plusQ4>/g, obj, "q3plusQ4", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.q3minusQ2>([\s\S]*?)<\/cim:FlowDirectionKind.q3minusQ2>/g, obj, "q3minusQ2", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.quadrant1>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant1>/g, obj, "quadrant1", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.quadrant2>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant2>/g, obj, "quadrant2", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.quadrant3>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant3>/g, obj, "quadrant3", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.quadrant4>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant4>/g, obj, "quadrant4", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.reverse>([\s\S]*?)<\/cim:FlowDirectionKind.reverse>/g, obj, "reverse", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.total>([\s\S]*?)<\/cim:FlowDirectionKind.total>/g, obj, "total", base.to_string, sub, context);
                base.parse_element (/<cim:FlowDirectionKind.totalByPhase>([\s\S]*?)<\/cim:FlowDirectionKind.totalByPhase>/g, obj, "totalByPhase", base.to_string, sub, context);

                var bucket = context.parsed.FlowDirectionKind;
                if (null == bucket)
                   context.parsed.FlowDirectionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "FlowDirectionKind", "none", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "forward", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "lagging", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "leading", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "net", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "q1plusQ2", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "q1plusQ3", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "q1plusQ4", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "q1minusQ4", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "q2plusQ3", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "q2plusQ4", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "q2minusQ3", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "q3plusQ4", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "q3minusQ2", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "quadrant1", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "quadrant2", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "quadrant3", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "quadrant4", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "reverse", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "total", base.from_string, fields);
                base.export_element (obj, "FlowDirectionKind", "totalByPhase", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class MeasuringPeriodKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MeasuringPeriodKind;
                if (null == bucket)
                   cim_data.MeasuringPeriodKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeasuringPeriodKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MeasuringPeriodKind";
                base.parse_element (/<cim:MeasuringPeriodKind.none>([\s\S]*?)<\/cim:MeasuringPeriodKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.tenMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.tenMinute>/g, obj, "tenMinute", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.fifteenMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.fifteenMinute>/g, obj, "fifteenMinute", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.oneMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.oneMinute>/g, obj, "oneMinute", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.twentyfourHour>([\s\S]*?)<\/cim:MeasuringPeriodKind.twentyfourHour>/g, obj, "twentyfourHour", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.thirtyMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.thirtyMinute>/g, obj, "thirtyMinute", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.fiveMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.fiveMinute>/g, obj, "fiveMinute", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.sixtyMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.sixtyMinute>/g, obj, "sixtyMinute", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.twoMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.twoMinute>/g, obj, "twoMinute", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.threeMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.threeMinute>/g, obj, "threeMinute", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.present>([\s\S]*?)<\/cim:MeasuringPeriodKind.present>/g, obj, "present", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.previous>([\s\S]*?)<\/cim:MeasuringPeriodKind.previous>/g, obj, "previous", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.twentyMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.twentyMinute>/g, obj, "twentyMinute", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock60Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock60Min>/g, obj, "fixedBlock60Min", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock30Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock30Min>/g, obj, "fixedBlock30Min", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock20Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock20Min>/g, obj, "fixedBlock20Min", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock15Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock15Min>/g, obj, "fixedBlock15Min", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock10Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock10Min>/g, obj, "fixedBlock10Min", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock5Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock5Min>/g, obj, "fixedBlock5Min", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock1Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock1Min>/g, obj, "fixedBlock1Min", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl30MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl30MinSubIntvl>/g, obj, "rollingBlock60MinIntvl30MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl20MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl20MinSubIntvl>/g, obj, "rollingBlock60MinIntvl20MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl15MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl15MinSubIntvl>/g, obj, "rollingBlock60MinIntvl15MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl12MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl12MinSubIntvl>/g, obj, "rollingBlock60MinIntvl12MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl10MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl10MinSubIntvl>/g, obj, "rollingBlock60MinIntvl10MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl6MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl6MinSubIntvl>/g, obj, "rollingBlock60MinIntvl6MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl5MinSubIntvl>/g, obj, "rollingBlock60MinIntvl5MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl4MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl4MinSubIntvl>/g, obj, "rollingBlock60MinIntvl4MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl15MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl15MinSubIntvl>/g, obj, "rollingBlock30MinIntvl15MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl10MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl10MinSubIntvl>/g, obj, "rollingBlock30MinIntvl10MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl6MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl6MinSubIntvl>/g, obj, "rollingBlock30MinIntvl6MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl3MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl3MinSubIntvl>/g, obj, "rollingBlock30MinIntvl3MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl2MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl2MinSubIntvl>/g, obj, "rollingBlock30MinIntvl2MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock15MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock15MinIntvl5MinSubIntvl>/g, obj, "rollingBlock15MinIntvl5MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock15MinIntvl3MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock15MinIntvl3MinSubIntvl>/g, obj, "rollingBlock15MinIntvl3MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock15MinIntvl1MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock15MinIntvl1MinSubIntvl>/g, obj, "rollingBlock15MinIntvl1MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock10MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock10MinIntvl5MinSubIntvl>/g, obj, "rollingBlock10MinIntvl5MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock10MinIntvl2MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock10MinIntvl2MinSubIntvl>/g, obj, "rollingBlock10MinIntvl2MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock10MinIntvl1MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock10MinIntvl1MinSubIntvl>/g, obj, "rollingBlock10MinIntvl1MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock5MinIntvl1MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock5MinIntvl1MinSubIntvl>/g, obj, "rollingBlock5MinIntvl1MinSubIntvl", base.to_string, sub, context);
                base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl5MinSubIntvl>/g, obj, "rollingBlock30MinIntvl5MinSubIntvl", base.to_string, sub, context);

                var bucket = context.parsed.MeasuringPeriodKind;
                if (null == bucket)
                   context.parsed.MeasuringPeriodKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MeasuringPeriodKind", "none", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "tenMinute", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "fifteenMinute", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "oneMinute", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "twentyfourHour", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "thirtyMinute", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "fiveMinute", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "sixtyMinute", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "twoMinute", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "threeMinute", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "present", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "previous", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "twentyMinute", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "fixedBlock60Min", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "fixedBlock30Min", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "fixedBlock20Min", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "fixedBlock15Min", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "fixedBlock10Min", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "fixedBlock5Min", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "fixedBlock1Min", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock60MinIntvl30MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock60MinIntvl20MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock60MinIntvl15MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock60MinIntvl12MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock60MinIntvl10MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock60MinIntvl6MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock60MinIntvl5MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock60MinIntvl4MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock30MinIntvl15MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock30MinIntvl10MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock30MinIntvl6MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock30MinIntvl3MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock30MinIntvl2MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock15MinIntvl5MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock15MinIntvl3MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock15MinIntvl1MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock10MinIntvl5MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock10MinIntvl2MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock10MinIntvl1MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock5MinIntvl1MinSubIntvl", base.from_string, fields);
                base.export_element (obj, "MeasuringPeriodKind", "rollingBlock30MinIntvl5MinSubIntvl", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class MeasurementKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MeasurementKind;
                if (null == bucket)
                   cim_data.MeasurementKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeasurementKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementKind";
                base.parse_element (/<cim:MeasurementKind.none>([\s\S]*?)<\/cim:MeasurementKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.apparentPowerFactor>([\s\S]*?)<\/cim:MeasurementKind.apparentPowerFactor>/g, obj, "apparentPowerFactor", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.currency>([\s\S]*?)<\/cim:MeasurementKind.currency>/g, obj, "currency", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.current>([\s\S]*?)<\/cim:MeasurementKind.current>/g, obj, "current", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.currentAngle>([\s\S]*?)<\/cim:MeasurementKind.currentAngle>/g, obj, "currentAngle", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.currentImbalance>([\s\S]*?)<\/cim:MeasurementKind.currentImbalance>/g, obj, "currentImbalance", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.date>([\s\S]*?)<\/cim:MeasurementKind.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.demand>([\s\S]*?)<\/cim:MeasurementKind.demand>/g, obj, "demand", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.distance>([\s\S]*?)<\/cim:MeasurementKind.distance>/g, obj, "distance", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.distortionVoltAmp>([\s\S]*?)<\/cim:MeasurementKind.distortionVoltAmp>/g, obj, "distortionVoltAmp", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.energization>([\s\S]*?)<\/cim:MeasurementKind.energization>/g, obj, "energization", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.energy>([\s\S]*?)<\/cim:MeasurementKind.energy>/g, obj, "energy", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.energizationLoadSide>([\s\S]*?)<\/cim:MeasurementKind.energizationLoadSide>/g, obj, "energizationLoadSide", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.fan>([\s\S]*?)<\/cim:MeasurementKind.fan>/g, obj, "fan", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.frequency>([\s\S]*?)<\/cim:MeasurementKind.frequency>/g, obj, "frequency", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.fund>([\s\S]*?)<\/cim:MeasurementKind.fund>/g, obj, "fund", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366ASAI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366ASAI>/g, obj, "ieee1366ASAI", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366ASIDI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366ASIDI>/g, obj, "ieee1366ASIDI", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366ASIFI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366ASIFI>/g, obj, "ieee1366ASIFI", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366CAIDI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CAIDI>/g, obj, "ieee1366CAIDI", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366CAIFI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CAIFI>/g, obj, "ieee1366CAIFI", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366CEMIn>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CEMIn>/g, obj, "ieee1366CEMIn", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366CEMSMIn>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CEMSMIn>/g, obj, "ieee1366CEMSMIn", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366CTAIDI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CTAIDI>/g, obj, "ieee1366CTAIDI", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366MAIFI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366MAIFI>/g, obj, "ieee1366MAIFI", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366MAIFIe>([\s\S]*?)<\/cim:MeasurementKind.ieee1366MAIFIe>/g, obj, "ieee1366MAIFIe", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366SAIDI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366SAIDI>/g, obj, "ieee1366SAIDI", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366SAIFI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366SAIFI>/g, obj, "ieee1366SAIFI", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.lineLoss>([\s\S]*?)<\/cim:MeasurementKind.lineLoss>/g, obj, "lineLoss", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.loss>([\s\S]*?)<\/cim:MeasurementKind.loss>/g, obj, "loss", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.negativeSequence>([\s\S]*?)<\/cim:MeasurementKind.negativeSequence>/g, obj, "negativeSequence", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.phasorPowerFactor>([\s\S]*?)<\/cim:MeasurementKind.phasorPowerFactor>/g, obj, "phasorPowerFactor", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.phasorReactivePower>([\s\S]*?)<\/cim:MeasurementKind.phasorReactivePower>/g, obj, "phasorReactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.positiveSequence>([\s\S]*?)<\/cim:MeasurementKind.positiveSequence>/g, obj, "positiveSequence", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.power>([\s\S]*?)<\/cim:MeasurementKind.power>/g, obj, "power", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.powerFactor>([\s\S]*?)<\/cim:MeasurementKind.powerFactor>/g, obj, "powerFactor", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.quantityPower>([\s\S]*?)<\/cim:MeasurementKind.quantityPower>/g, obj, "quantityPower", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.sag>([\s\S]*?)<\/cim:MeasurementKind.sag>/g, obj, "sag", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.swell>([\s\S]*?)<\/cim:MeasurementKind.swell>/g, obj, "swell", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.switchPosition>([\s\S]*?)<\/cim:MeasurementKind.switchPosition>/g, obj, "switchPosition", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.tapPosition>([\s\S]*?)<\/cim:MeasurementKind.tapPosition>/g, obj, "tapPosition", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.tariffRate>([\s\S]*?)<\/cim:MeasurementKind.tariffRate>/g, obj, "tariffRate", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.temperature>([\s\S]*?)<\/cim:MeasurementKind.temperature>/g, obj, "temperature", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.totalHarmonicDistortion>([\s\S]*?)<\/cim:MeasurementKind.totalHarmonicDistortion>/g, obj, "totalHarmonicDistortion", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.transformerLoss>([\s\S]*?)<\/cim:MeasurementKind.transformerLoss>/g, obj, "transformerLoss", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip10to15>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip10to15>/g, obj, "unipedeVoltageDip10to15", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip15to30>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip15to30>/g, obj, "unipedeVoltageDip15to30", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip30to60>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip30to60>/g, obj, "unipedeVoltageDip30to60", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip60to90>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip60to90>/g, obj, "unipedeVoltageDip60to90", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip90to100>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip90to100>/g, obj, "unipedeVoltageDip90to100", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.voltage>([\s\S]*?)<\/cim:MeasurementKind.voltage>/g, obj, "voltage", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.voltageAngle>([\s\S]*?)<\/cim:MeasurementKind.voltageAngle>/g, obj, "voltageAngle", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.voltageExcursion>([\s\S]*?)<\/cim:MeasurementKind.voltageExcursion>/g, obj, "voltageExcursion", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.voltageImbalance>([\s\S]*?)<\/cim:MeasurementKind.voltageImbalance>/g, obj, "voltageImbalance", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.volume>([\s\S]*?)<\/cim:MeasurementKind.volume>/g, obj, "volume", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.zeroFlowDuration>([\s\S]*?)<\/cim:MeasurementKind.zeroFlowDuration>/g, obj, "zeroFlowDuration", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.zeroSequence>([\s\S]*?)<\/cim:MeasurementKind.zeroSequence>/g, obj, "zeroSequence", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.distortionPowerFactor>([\s\S]*?)<\/cim:MeasurementKind.distortionPowerFactor>/g, obj, "distortionPowerFactor", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.frequencyExcursion>([\s\S]*?)<\/cim:MeasurementKind.frequencyExcursion>/g, obj, "frequencyExcursion", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.applicationContext>([\s\S]*?)<\/cim:MeasurementKind.applicationContext>/g, obj, "applicationContext", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.apTitle>([\s\S]*?)<\/cim:MeasurementKind.apTitle>/g, obj, "apTitle", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.assetNumber>([\s\S]*?)<\/cim:MeasurementKind.assetNumber>/g, obj, "assetNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.bandwidth>([\s\S]*?)<\/cim:MeasurementKind.bandwidth>/g, obj, "bandwidth", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.batteryVoltage>([\s\S]*?)<\/cim:MeasurementKind.batteryVoltage>/g, obj, "batteryVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.broadcastAddress>([\s\S]*?)<\/cim:MeasurementKind.broadcastAddress>/g, obj, "broadcastAddress", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.deviceAddressType1>([\s\S]*?)<\/cim:MeasurementKind.deviceAddressType1>/g, obj, "deviceAddressType1", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.deviceAddressType2>([\s\S]*?)<\/cim:MeasurementKind.deviceAddressType2>/g, obj, "deviceAddressType2", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.deviceAddressType3>([\s\S]*?)<\/cim:MeasurementKind.deviceAddressType3>/g, obj, "deviceAddressType3", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.deviceAddressType4>([\s\S]*?)<\/cim:MeasurementKind.deviceAddressType4>/g, obj, "deviceAddressType4", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.deviceClass>([\s\S]*?)<\/cim:MeasurementKind.deviceClass>/g, obj, "deviceClass", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.electronicSerialNumber>([\s\S]*?)<\/cim:MeasurementKind.electronicSerialNumber>/g, obj, "electronicSerialNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.endDeviceID>([\s\S]*?)<\/cim:MeasurementKind.endDeviceID>/g, obj, "endDeviceID", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.groupAddressType1>([\s\S]*?)<\/cim:MeasurementKind.groupAddressType1>/g, obj, "groupAddressType1", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.groupAddressType2>([\s\S]*?)<\/cim:MeasurementKind.groupAddressType2>/g, obj, "groupAddressType2", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.groupAddressType3>([\s\S]*?)<\/cim:MeasurementKind.groupAddressType3>/g, obj, "groupAddressType3", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.groupAddressType4>([\s\S]*?)<\/cim:MeasurementKind.groupAddressType4>/g, obj, "groupAddressType4", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ipAddress>([\s\S]*?)<\/cim:MeasurementKind.ipAddress>/g, obj, "ipAddress", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.macAddress>([\s\S]*?)<\/cim:MeasurementKind.macAddress>/g, obj, "macAddress", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.mfgAssignedConfigurationID>([\s\S]*?)<\/cim:MeasurementKind.mfgAssignedConfigurationID>/g, obj, "mfgAssignedConfigurationID", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.mfgAssignedPhysicalSerialNumber>([\s\S]*?)<\/cim:MeasurementKind.mfgAssignedPhysicalSerialNumber>/g, obj, "mfgAssignedPhysicalSerialNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.mfgAssignedProductNumber>([\s\S]*?)<\/cim:MeasurementKind.mfgAssignedProductNumber>/g, obj, "mfgAssignedProductNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.mfgAssignedUniqueCommunicationAddress>([\s\S]*?)<\/cim:MeasurementKind.mfgAssignedUniqueCommunicationAddress>/g, obj, "mfgAssignedUniqueCommunicationAddress", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.multiCastAddress>([\s\S]*?)<\/cim:MeasurementKind.multiCastAddress>/g, obj, "multiCastAddress", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.oneWayAddress>([\s\S]*?)<\/cim:MeasurementKind.oneWayAddress>/g, obj, "oneWayAddress", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.signalStrength>([\s\S]*?)<\/cim:MeasurementKind.signalStrength>/g, obj, "signalStrength", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.twoWayAddress>([\s\S]*?)<\/cim:MeasurementKind.twoWayAddress>/g, obj, "twoWayAddress", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.signaltoNoiseRatio>([\s\S]*?)<\/cim:MeasurementKind.signaltoNoiseRatio>/g, obj, "signaltoNoiseRatio", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.alarm>([\s\S]*?)<\/cim:MeasurementKind.alarm>/g, obj, "alarm", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.batteryCarryover>([\s\S]*?)<\/cim:MeasurementKind.batteryCarryover>/g, obj, "batteryCarryover", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.dataOverflowAlarm>([\s\S]*?)<\/cim:MeasurementKind.dataOverflowAlarm>/g, obj, "dataOverflowAlarm", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.demandLimit>([\s\S]*?)<\/cim:MeasurementKind.demandLimit>/g, obj, "demandLimit", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.demandReset>([\s\S]*?)<\/cim:MeasurementKind.demandReset>/g, obj, "demandReset", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.diagnostic>([\s\S]*?)<\/cim:MeasurementKind.diagnostic>/g, obj, "diagnostic", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.emergencyLimit>([\s\S]*?)<\/cim:MeasurementKind.emergencyLimit>/g, obj, "emergencyLimit", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.encoderTamper>([\s\S]*?)<\/cim:MeasurementKind.encoderTamper>/g, obj, "encoderTamper", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366MomentaryInterruption>([\s\S]*?)<\/cim:MeasurementKind.ieee1366MomentaryInterruption>/g, obj, "ieee1366MomentaryInterruption", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366MomentaryInterruptionEvent>([\s\S]*?)<\/cim:MeasurementKind.ieee1366MomentaryInterruptionEvent>/g, obj, "ieee1366MomentaryInterruptionEvent", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.ieee1366SustainedInterruption>([\s\S]*?)<\/cim:MeasurementKind.ieee1366SustainedInterruption>/g, obj, "ieee1366SustainedInterruption", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.interruptionBehaviour>([\s\S]*?)<\/cim:MeasurementKind.interruptionBehaviour>/g, obj, "interruptionBehaviour", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.inversionTamper>([\s\S]*?)<\/cim:MeasurementKind.inversionTamper>/g, obj, "inversionTamper", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.loadInterrupt>([\s\S]*?)<\/cim:MeasurementKind.loadInterrupt>/g, obj, "loadInterrupt", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.loadShed>([\s\S]*?)<\/cim:MeasurementKind.loadShed>/g, obj, "loadShed", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.maintenance>([\s\S]*?)<\/cim:MeasurementKind.maintenance>/g, obj, "maintenance", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.physicalTamper>([\s\S]*?)<\/cim:MeasurementKind.physicalTamper>/g, obj, "physicalTamper", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.powerLossTamper>([\s\S]*?)<\/cim:MeasurementKind.powerLossTamper>/g, obj, "powerLossTamper", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.powerOutage>([\s\S]*?)<\/cim:MeasurementKind.powerOutage>/g, obj, "powerOutage", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.powerQuality>([\s\S]*?)<\/cim:MeasurementKind.powerQuality>/g, obj, "powerQuality", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.powerRestoration>([\s\S]*?)<\/cim:MeasurementKind.powerRestoration>/g, obj, "powerRestoration", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.programmed>([\s\S]*?)<\/cim:MeasurementKind.programmed>/g, obj, "programmed", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.pushbutton>([\s\S]*?)<\/cim:MeasurementKind.pushbutton>/g, obj, "pushbutton", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.relayActivation>([\s\S]*?)<\/cim:MeasurementKind.relayActivation>/g, obj, "relayActivation", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.relayCycle>([\s\S]*?)<\/cim:MeasurementKind.relayCycle>/g, obj, "relayCycle", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.removalTamper>([\s\S]*?)<\/cim:MeasurementKind.removalTamper>/g, obj, "removalTamper", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.reprogrammingTamper>([\s\S]*?)<\/cim:MeasurementKind.reprogrammingTamper>/g, obj, "reprogrammingTamper", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.reverseRotationTamper>([\s\S]*?)<\/cim:MeasurementKind.reverseRotationTamper>/g, obj, "reverseRotationTamper", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.switchArmed>([\s\S]*?)<\/cim:MeasurementKind.switchArmed>/g, obj, "switchArmed", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.switchDisabled>([\s\S]*?)<\/cim:MeasurementKind.switchDisabled>/g, obj, "switchDisabled", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.tamper>([\s\S]*?)<\/cim:MeasurementKind.tamper>/g, obj, "tamper", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.watchdogTimeout>([\s\S]*?)<\/cim:MeasurementKind.watchdogTimeout>/g, obj, "watchdogTimeout", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.billLastPeriod>([\s\S]*?)<\/cim:MeasurementKind.billLastPeriod>/g, obj, "billLastPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.billToDate>([\s\S]*?)<\/cim:MeasurementKind.billToDate>/g, obj, "billToDate", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.billCarryover>([\s\S]*?)<\/cim:MeasurementKind.billCarryover>/g, obj, "billCarryover", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.connectionFee>([\s\S]*?)<\/cim:MeasurementKind.connectionFee>/g, obj, "connectionFee", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.audibleVolume>([\s\S]*?)<\/cim:MeasurementKind.audibleVolume>/g, obj, "audibleVolume", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementKind.volumetricFlow>([\s\S]*?)<\/cim:MeasurementKind.volumetricFlow>/g, obj, "volumetricFlow", base.to_string, sub, context);

                var bucket = context.parsed.MeasurementKind;
                if (null == bucket)
                   context.parsed.MeasurementKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MeasurementKind", "none", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "apparentPowerFactor", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "currency", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "current", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "currentAngle", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "currentImbalance", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "date", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "demand", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "distance", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "distortionVoltAmp", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "energization", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "energy", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "energizationLoadSide", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "fan", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "frequency", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "fund", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366ASAI", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366ASIDI", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366ASIFI", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366CAIDI", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366CAIFI", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366CEMIn", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366CEMSMIn", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366CTAIDI", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366MAIFI", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366MAIFIe", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366SAIDI", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366SAIFI", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "lineLoss", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "loss", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "negativeSequence", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "phasorPowerFactor", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "phasorReactivePower", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "positiveSequence", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "power", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "powerFactor", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "quantityPower", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "sag", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "swell", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "switchPosition", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "tapPosition", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "tariffRate", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "temperature", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "totalHarmonicDistortion", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "transformerLoss", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "unipedeVoltageDip10to15", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "unipedeVoltageDip15to30", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "unipedeVoltageDip30to60", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "unipedeVoltageDip60to90", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "unipedeVoltageDip90to100", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "voltage", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "voltageAngle", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "voltageExcursion", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "voltageImbalance", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "volume", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "zeroFlowDuration", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "zeroSequence", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "distortionPowerFactor", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "frequencyExcursion", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "applicationContext", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "apTitle", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "assetNumber", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "bandwidth", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "batteryVoltage", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "broadcastAddress", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "deviceAddressType1", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "deviceAddressType2", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "deviceAddressType3", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "deviceAddressType4", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "deviceClass", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "electronicSerialNumber", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "endDeviceID", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "groupAddressType1", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "groupAddressType2", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "groupAddressType3", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "groupAddressType4", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ipAddress", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "macAddress", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "mfgAssignedConfigurationID", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "mfgAssignedPhysicalSerialNumber", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "mfgAssignedProductNumber", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "mfgAssignedUniqueCommunicationAddress", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "multiCastAddress", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "oneWayAddress", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "signalStrength", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "twoWayAddress", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "signaltoNoiseRatio", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "alarm", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "batteryCarryover", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "dataOverflowAlarm", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "demandLimit", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "demandReset", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "diagnostic", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "emergencyLimit", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "encoderTamper", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366MomentaryInterruption", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366MomentaryInterruptionEvent", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "ieee1366SustainedInterruption", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "interruptionBehaviour", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "inversionTamper", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "loadInterrupt", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "loadShed", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "maintenance", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "physicalTamper", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "powerLossTamper", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "powerOutage", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "powerQuality", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "powerRestoration", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "programmed", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "pushbutton", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "relayActivation", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "relayCycle", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "removalTamper", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "reprogrammingTamper", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "reverseRotationTamper", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "switchArmed", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "switchDisabled", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "tamper", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "watchdogTimeout", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "billLastPeriod", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "billToDate", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "billCarryover", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "connectionFee", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "audibleVolume", base.from_string, fields);
                base.export_element (obj, "MeasurementKind", "volumetricFlow", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class CommodityKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CommodityKind;
                if (null == bucket)
                   cim_data.CommodityKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CommodityKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CommodityKind";
                base.parse_element (/<cim:CommodityKind.none>([\s\S]*?)<\/cim:CommodityKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.electricitySecondaryMetered>([\s\S]*?)<\/cim:CommodityKind.electricitySecondaryMetered>/g, obj, "electricitySecondaryMetered", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.electricityPrimaryMetered>([\s\S]*?)<\/cim:CommodityKind.electricityPrimaryMetered>/g, obj, "electricityPrimaryMetered", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.communication>([\s\S]*?)<\/cim:CommodityKind.communication>/g, obj, "communication", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.air>([\s\S]*?)<\/cim:CommodityKind.air>/g, obj, "air", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.insulativeGas>([\s\S]*?)<\/cim:CommodityKind.insulativeGas>/g, obj, "insulativeGas", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.insulativeOil>([\s\S]*?)<\/cim:CommodityKind.insulativeOil>/g, obj, "insulativeOil", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.naturalGas>([\s\S]*?)<\/cim:CommodityKind.naturalGas>/g, obj, "naturalGas", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.propane>([\s\S]*?)<\/cim:CommodityKind.propane>/g, obj, "propane", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.potableWater>([\s\S]*?)<\/cim:CommodityKind.potableWater>/g, obj, "potableWater", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.steam>([\s\S]*?)<\/cim:CommodityKind.steam>/g, obj, "steam", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.wasteWater>([\s\S]*?)<\/cim:CommodityKind.wasteWater>/g, obj, "wasteWater", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.heatingFluid>([\s\S]*?)<\/cim:CommodityKind.heatingFluid>/g, obj, "heatingFluid", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.coolingFluid>([\s\S]*?)<\/cim:CommodityKind.coolingFluid>/g, obj, "coolingFluid", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.nonpotableWater>([\s\S]*?)<\/cim:CommodityKind.nonpotableWater>/g, obj, "nonpotableWater", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.nox>([\s\S]*?)<\/cim:CommodityKind.nox>/g, obj, "nox", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.so2>([\s\S]*?)<\/cim:CommodityKind.so2>/g, obj, "so2", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.ch4>([\s\S]*?)<\/cim:CommodityKind.ch4>/g, obj, "ch4", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.co2>([\s\S]*?)<\/cim:CommodityKind.co2>/g, obj, "co2", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.carbon>([\s\S]*?)<\/cim:CommodityKind.carbon>/g, obj, "carbon", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.hch>([\s\S]*?)<\/cim:CommodityKind.hch>/g, obj, "hch", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.pfc>([\s\S]*?)<\/cim:CommodityKind.pfc>/g, obj, "pfc", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.sf6>([\s\S]*?)<\/cim:CommodityKind.sf6>/g, obj, "sf6", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.tvLicence>([\s\S]*?)<\/cim:CommodityKind.tvLicence>/g, obj, "tvLicence", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.internet>([\s\S]*?)<\/cim:CommodityKind.internet>/g, obj, "internet", base.to_string, sub, context);
                base.parse_element (/<cim:CommodityKind.refuse>([\s\S]*?)<\/cim:CommodityKind.refuse>/g, obj, "refuse", base.to_string, sub, context);

                var bucket = context.parsed.CommodityKind;
                if (null == bucket)
                   context.parsed.CommodityKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CommodityKind", "none", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "electricitySecondaryMetered", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "electricityPrimaryMetered", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "communication", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "air", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "insulativeGas", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "insulativeOil", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "naturalGas", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "propane", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "potableWater", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "steam", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "wasteWater", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "heatingFluid", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "coolingFluid", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "nonpotableWater", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "nox", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "so2", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "ch4", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "co2", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "carbon", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "hch", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "pfc", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "sf6", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "tvLicence", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "internet", base.from_string, fields);
                base.export_element (obj, "CommodityKind", "refuse", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class AggregateKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AggregateKind;
                if (null == bucket)
                   cim_data.AggregateKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AggregateKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AggregateKind";
                base.parse_element (/<cim:AggregateKind.none>([\s\S]*?)<\/cim:AggregateKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.average>([\s\S]*?)<\/cim:AggregateKind.average>/g, obj, "average", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.excess>([\s\S]*?)<\/cim:AggregateKind.excess>/g, obj, "excess", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.highThreshold>([\s\S]*?)<\/cim:AggregateKind.highThreshold>/g, obj, "highThreshold", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.lowThreshold>([\s\S]*?)<\/cim:AggregateKind.lowThreshold>/g, obj, "lowThreshold", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.maximum>([\s\S]*?)<\/cim:AggregateKind.maximum>/g, obj, "maximum", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.minimum>([\s\S]*?)<\/cim:AggregateKind.minimum>/g, obj, "minimum", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.nominal>([\s\S]*?)<\/cim:AggregateKind.nominal>/g, obj, "nominal", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.normal>([\s\S]*?)<\/cim:AggregateKind.normal>/g, obj, "normal", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.secondMaximum>([\s\S]*?)<\/cim:AggregateKind.secondMaximum>/g, obj, "secondMaximum", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.secondMinimum>([\s\S]*?)<\/cim:AggregateKind.secondMinimum>/g, obj, "secondMinimum", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.thirdMaximum>([\s\S]*?)<\/cim:AggregateKind.thirdMaximum>/g, obj, "thirdMaximum", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.fourthMaximum>([\s\S]*?)<\/cim:AggregateKind.fourthMaximum>/g, obj, "fourthMaximum", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.fifthMaximum>([\s\S]*?)<\/cim:AggregateKind.fifthMaximum>/g, obj, "fifthMaximum", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateKind.sum>([\s\S]*?)<\/cim:AggregateKind.sum>/g, obj, "sum", base.to_string, sub, context);

                var bucket = context.parsed.AggregateKind;
                if (null == bucket)
                   context.parsed.AggregateKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AggregateKind", "none", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "average", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "excess", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "highThreshold", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "lowThreshold", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "maximum", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "minimum", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "nominal", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "normal", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "secondMaximum", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "secondMinimum", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "thirdMaximum", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "fourthMaximum", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "fifthMaximum", base.from_string, fields);
                base.export_element (obj, "AggregateKind", "sum", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class MacroPeriodKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MacroPeriodKind;
                if (null == bucket)
                   cim_data.MacroPeriodKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MacroPeriodKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MacroPeriodKind";
                base.parse_element (/<cim:MacroPeriodKind.none>([\s\S]*?)<\/cim:MacroPeriodKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:MacroPeriodKind.billingPeriod>([\s\S]*?)<\/cim:MacroPeriodKind.billingPeriod>/g, obj, "billingPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:MacroPeriodKind.daily>([\s\S]*?)<\/cim:MacroPeriodKind.daily>/g, obj, "daily", base.to_string, sub, context);
                base.parse_element (/<cim:MacroPeriodKind.monthly>([\s\S]*?)<\/cim:MacroPeriodKind.monthly>/g, obj, "monthly", base.to_string, sub, context);
                base.parse_element (/<cim:MacroPeriodKind.seasonal>([\s\S]*?)<\/cim:MacroPeriodKind.seasonal>/g, obj, "seasonal", base.to_string, sub, context);
                base.parse_element (/<cim:MacroPeriodKind.weekly>([\s\S]*?)<\/cim:MacroPeriodKind.weekly>/g, obj, "weekly", base.to_string, sub, context);
                base.parse_element (/<cim:MacroPeriodKind.specifiedPeriod>([\s\S]*?)<\/cim:MacroPeriodKind.specifiedPeriod>/g, obj, "specifiedPeriod", base.to_string, sub, context);

                var bucket = context.parsed.MacroPeriodKind;
                if (null == bucket)
                   context.parsed.MacroPeriodKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MacroPeriodKind", "none", base.from_string, fields);
                base.export_element (obj, "MacroPeriodKind", "billingPeriod", base.from_string, fields);
                base.export_element (obj, "MacroPeriodKind", "daily", base.from_string, fields);
                base.export_element (obj, "MacroPeriodKind", "monthly", base.from_string, fields);
                base.export_element (obj, "MacroPeriodKind", "seasonal", base.from_string, fields);
                base.export_element (obj, "MacroPeriodKind", "weekly", base.from_string, fields);
                base.export_element (obj, "MacroPeriodKind", "specifiedPeriod", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                AccumulationKind: AccumulationKind,
                MeasuringPeriodKind: MeasuringPeriodKind,
                MeasurementKind: MeasurementKind,
                FlowDirectionKind: FlowDirectionKind,
                AggregateKind: AggregateKind,
                CommodityKind: CommodityKind,
                MacroPeriodKind: MacroPeriodKind
            }
        );
    }
);