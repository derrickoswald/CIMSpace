define
(
    ["model/base"],
    function (base)
    {

        function parse_AccumulationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AccumulationKind";
            /**
             * Not Applicable, or implied by the unit of measure.
             *
             */
            base.parse_element (/<cim:AccumulationKind.none>([\s\S]*?)<\/cim:AccumulationKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * A value from a register which represents the bulk quantity of a commodity.
             *
             * This quantity is computed as the integral of the commodity usage rate. This value is typically used as the basis for the dial reading at the meter, and as a result, will roll over upon reaching a maximum dial value.
             *
             */
            base.parse_element (/<cim:AccumulationKind.bulkQuantity>([\s\S]*?)<\/cim:AccumulationKind.bulkQuantity>/g, obj, "bulkQuantity", base.to_string, sub, context);

            /**
             * The sum of the previous billing period values and the present period value.
             *
             * Note: �ContinuousCumulative� is commonly used in conjunction with �demand.� The �ContinuousCumulative Demand� would be the cumulative sum of the previous billing period maximum demand values (as occurring with each demand reset) summed with the present period maximum demand value (which has yet to be reset.)
             *
             */
            base.parse_element (/<cim:AccumulationKind.continuousCumulative>([\s\S]*?)<\/cim:AccumulationKind.continuousCumulative>/g, obj, "continuousCumulative", base.to_string, sub, context);

            /**
             * The sum of the previous billing period values.
             *
             * Note: �Cumulative� is commonly used in conjunction with �demand.� Each demand reset causes the maximum demand value for the present billing period (since the last demand reset) to accumulate as an accumulative total of all maximum demands. So instead of �zeroing� the demand register, a demand reset has the affect of adding the present maximum demand to this accumulating total.
             *
             */
            base.parse_element (/<cim:AccumulationKind.cumulative>([\s\S]*?)<\/cim:AccumulationKind.cumulative>/g, obj, "cumulative", base.to_string, sub, context);

            /**
             * The difference between the value at the end of the prescribed interval and the beginning of the interval.
             *
             * This is used for incremental interval data.
             *
             */
            base.parse_element (/<cim:AccumulationKind.deltaData>([\s\S]*?)<\/cim:AccumulationKind.deltaData>/g, obj, "deltaData", base.to_string, sub, context);

            /**
             * As if a needle is swung out on the meter face to a value to indicate the current value. (Note: An �indicating� value is typically measured over hundreds of milliseconds or greater, or may imply a �pusher� mechanism to capture a value.
             *
             * Compare this to �instantaneous� which is measured over a shorter period of time.)
             *
             */
            base.parse_element (/<cim:AccumulationKind.indicating>([\s\S]*?)<\/cim:AccumulationKind.indicating>/g, obj, "indicating", base.to_string, sub, context);

            /**
             * A form of accumulation which is selective with respect to time.
             *
             * Note : �Summation� could be considered a specialization of �Bulk Quantity� according to the rules of inheritance where �Summation� selectively accumulates pulses over a timing pattern, and �BulkQuantity� accumulates pulses all of the time.
             *
             */
            base.parse_element (/<cim:AccumulationKind.summation>([\s\S]*?)<\/cim:AccumulationKind.summation>/g, obj, "summation", base.to_string, sub, context);

            /**
             * A form of computation which introduces a time delay characteristic to the data value
             *
             */
            base.parse_element (/<cim:AccumulationKind.timeDelay>([\s\S]*?)<\/cim:AccumulationKind.timeDelay>/g, obj, "timeDelay", base.to_string, sub, context);

            /**
             * Typically measured over the fastest period of time allowed by the definition of the metric (usually milliseconds or tens of milliseconds.) (Note: �Instantaneous� was moved to attribute #3 in 61968-9Ed2 from attribute #1 in 61968-9Ed1.)
             *
             */
            base.parse_element (/<cim:AccumulationKind.instantaneous>([\s\S]*?)<\/cim:AccumulationKind.instantaneous>/g, obj, "instantaneous", base.to_string, sub, context);

            /**
             * When this description is applied to a metered value, it implies that the value is a time-independent cumulative quantity much a BulkQuantity, except that it latches upon the maximum value upon reaching that value.
             *
             * Any additional accumulation (positive or negative) is discarded until a reset occurs.
             *
             */
            base.parse_element (/<cim:AccumulationKind.latchingQuantity>([\s\S]*?)<\/cim:AccumulationKind.latchingQuantity>/g, obj, "latchingQuantity", base.to_string, sub, context);

            /**
             * A time-independent cumulative quantity much a BulkQuantity or a LatchingQuantity, except that the accumulation stops at the maximum or minimum values.
             *
             * When the maximum is reached, any additional positive accumulation is discarded, but negative accumulation may be accepted (thus lowering the counter.) Likewise, when the negative bound is reached, any additional negative accumulation is discarded, but positive accumulation is accepted (thus increasing the counter.)
             *
             */
            base.parse_element (/<cim:AccumulationKind.boundedQuantity>([\s\S]*?)<\/cim:AccumulationKind.boundedQuantity>/g, obj, "boundedQuantity", base.to_string, sub, context);

            bucket = context.parsed.AccumulationKind;
            if (null == bucket)
                context.parsed.AccumulationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_FlowDirectionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FlowDirectionKind";
            /**
             * Not Applicable (N/A)
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.none>([\s\S]*?)<\/cim:FlowDirectionKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * "Delivered," or "Imported" as defined 61968-2.
             *
             * Forward Active Energy is a positive kWh value as one would naturally expect to find as energy is supplied by the utility and consumed at the service.
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.forward>([\s\S]*?)<\/cim:FlowDirectionKind.forward>/g, obj, "forward", base.to_string, sub, context);

            /**
             * Typically used to describe that a power factor is lagging the reference value.
             *
             * Note 1: When used to describe VA, �lagging� describes a form of measurement where reactive power is considered in all four quadrants, but real power is considered only in quadrants I and IV.
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.lagging>([\s\S]*?)<\/cim:FlowDirectionKind.lagging>/g, obj, "lagging", base.to_string, sub, context);

            /**
             * Typically used to describe that a power factor is leading the reference value.
             *
             * Note: Leading power factors typically indicate capacitive loading.
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.leading>([\s\S]*?)<\/cim:FlowDirectionKind.leading>/g, obj, "leading", base.to_string, sub, context);

            /**
             * |Forward| - |Reverse|, See 61968-2.
             *
             * Note: In some systems, the value passed as a �net� value could become negative. In other systems the value passed as a �net� value is always a positive number, and rolls-over and rolls-under as needed.
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.net>([\s\S]*?)<\/cim:FlowDirectionKind.net>/g, obj, "net", base.to_string, sub, context);

            /**
             * Reactive positive quadrants. (The term �lagging� is preferred.)
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.q1plusQ2>([\s\S]*?)<\/cim:FlowDirectionKind.q1plusQ2>/g, obj, "q1plusQ2", base.to_string, sub, context);

            /**
             * Quadrants 1 and 3
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.q1plusQ3>([\s\S]*?)<\/cim:FlowDirectionKind.q1plusQ3>/g, obj, "q1plusQ3", base.to_string, sub, context);

            /**
             * Quadrants 1 and 4 usually represent forward active energy
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.q1plusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q1plusQ4>/g, obj, "q1plusQ4", base.to_string, sub, context);

            /**
             * Q1 minus Q4
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.q1minusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q1minusQ4>/g, obj, "q1minusQ4", base.to_string, sub, context);

            /**
             * Quadrants 2 and 3 usually represent reverse active energy
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.q2plusQ3>([\s\S]*?)<\/cim:FlowDirectionKind.q2plusQ3>/g, obj, "q2plusQ3", base.to_string, sub, context);

            /**
             * Quadrants 2 and 4
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.q2plusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q2plusQ4>/g, obj, "q2plusQ4", base.to_string, sub, context);

            /**
             * Q2 minus Q3
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.q2minusQ3>([\s\S]*?)<\/cim:FlowDirectionKind.q2minusQ3>/g, obj, "q2minusQ3", base.to_string, sub, context);

            /**
             * Reactive negative quadrants. (The term �leading� is preferred.)
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.q3plusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q3plusQ4>/g, obj, "q3plusQ4", base.to_string, sub, context);

            /**
             * Q3 minus Q2
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.q3minusQ2>([\s\S]*?)<\/cim:FlowDirectionKind.q3minusQ2>/g, obj, "q3minusQ2", base.to_string, sub, context);

            /**
             * Q1 only
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.quadrant1>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant1>/g, obj, "quadrant1", base.to_string, sub, context);

            /**
             * Q2 only
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.quadrant2>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant2>/g, obj, "quadrant2", base.to_string, sub, context);

            /**
             * Q3 only
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.quadrant3>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant3>/g, obj, "quadrant3", base.to_string, sub, context);

            /**
             * Q4 only
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.quadrant4>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant4>/g, obj, "quadrant4", base.to_string, sub, context);

            /**
             * Reverse Active Energy is equivalent to "Received," or "Exported" as defined in 61968-2.
             *
             * Reverse Active Energy is a positive kWh value as one would expect to find when energy is backfed by the service onto the utility network.
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.reverse>([\s\S]*?)<\/cim:FlowDirectionKind.reverse>/g, obj, "reverse", base.to_string, sub, context);

            /**
             * |Forward| + |Reverse|, See 61968-2.
             *
             * The sum of the commodity in all quadrants Q1+Q2+Q3+Q4.
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.total>([\s\S]*?)<\/cim:FlowDirectionKind.total>/g, obj, "total", base.to_string, sub, context);

            /**
             * In polyphase metering, the total by phase energy register is incremented when the sum of the absolute values of the phase energies is greater than zero:
             * 
             * &lt;img src="HTS_1.
             *
             * PNG" width="234" height="16" border="0" alt="graphic"/&gt;
             *
             */
            base.parse_element (/<cim:FlowDirectionKind.totalByPhase>([\s\S]*?)<\/cim:FlowDirectionKind.totalByPhase>/g, obj, "totalByPhase", base.to_string, sub, context);

            bucket = context.parsed.FlowDirectionKind;
            if (null == bucket)
                context.parsed.FlowDirectionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_MeasuringPeriodKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MeasuringPeriodKind";
            /**
             * Not Applicable
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.none>([\s\S]*?)<\/cim:MeasuringPeriodKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * 10-minute
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.tenMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.tenMinute>/g, obj, "tenMinute", base.to_string, sub, context);

            /**
             * 15-minute
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.fifteenMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.fifteenMinute>/g, obj, "fifteenMinute", base.to_string, sub, context);

            /**
             * 1-minute
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.oneMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.oneMinute>/g, obj, "oneMinute", base.to_string, sub, context);

            /**
             * 24-hour
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.twentyfourHour>([\s\S]*?)<\/cim:MeasuringPeriodKind.twentyfourHour>/g, obj, "twentyfourHour", base.to_string, sub, context);

            /**
             * 30-minute
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.thirtyMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.thirtyMinute>/g, obj, "thirtyMinute", base.to_string, sub, context);

            /**
             * 5-minute
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.fiveMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.fiveMinute>/g, obj, "fiveMinute", base.to_string, sub, context);

            /**
             * 60-minute
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.sixtyMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.sixtyMinute>/g, obj, "sixtyMinute", base.to_string, sub, context);

            /**
             * 2-minute
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.twoMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.twoMinute>/g, obj, "twoMinute", base.to_string, sub, context);

            /**
             * 3-minute
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.threeMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.threeMinute>/g, obj, "threeMinute", base.to_string, sub, context);

            /**
             * Within the present period of time
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.present>([\s\S]*?)<\/cim:MeasuringPeriodKind.present>/g, obj, "present", base.to_string, sub, context);

            /**
             * Shifted within the previous monthly cycle and data set
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.previous>([\s\S]*?)<\/cim:MeasuringPeriodKind.previous>/g, obj, "previous", base.to_string, sub, context);

            /**
             * 20-minute interval
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.twentyMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.twentyMinute>/g, obj, "twentyMinute", base.to_string, sub, context);

            /**
             * 60-minute Fixed Block
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock60Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock60Min>/g, obj, "fixedBlock60Min", base.to_string, sub, context);

            /**
             * 30-minute Fixed Block
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock30Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock30Min>/g, obj, "fixedBlock30Min", base.to_string, sub, context);

            /**
             * 20-minute Fixed Block
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock20Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock20Min>/g, obj, "fixedBlock20Min", base.to_string, sub, context);

            /**
             * 15-minute Fixed Block
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock15Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock15Min>/g, obj, "fixedBlock15Min", base.to_string, sub, context);

            /**
             * 10-minute Fixed Block
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock10Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock10Min>/g, obj, "fixedBlock10Min", base.to_string, sub, context);

            /**
             * 5-minute Fixed Block
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock5Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock5Min>/g, obj, "fixedBlock5Min", base.to_string, sub, context);

            /**
             * 1-minute Fixed Block
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock1Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock1Min>/g, obj, "fixedBlock1Min", base.to_string, sub, context);

            /**
             * 60-minute Rolling Block with 30-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl30MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl30MinSubIntvl>/g, obj, "rollingBlock60MinIntvl30MinSubIntvl", base.to_string, sub, context);

            /**
             * 60-minute Rolling Block with 20-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl20MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl20MinSubIntvl>/g, obj, "rollingBlock60MinIntvl20MinSubIntvl", base.to_string, sub, context);

            /**
             * 60-minute Rolling Block with 15-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl15MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl15MinSubIntvl>/g, obj, "rollingBlock60MinIntvl15MinSubIntvl", base.to_string, sub, context);

            /**
             * 60-minute Rolling Block with 12-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl12MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl12MinSubIntvl>/g, obj, "rollingBlock60MinIntvl12MinSubIntvl", base.to_string, sub, context);

            /**
             * 60-minute Rolling Block with 10-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl10MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl10MinSubIntvl>/g, obj, "rollingBlock60MinIntvl10MinSubIntvl", base.to_string, sub, context);

            /**
             * 60-minute Rolling Block with 6-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl6MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl6MinSubIntvl>/g, obj, "rollingBlock60MinIntvl6MinSubIntvl", base.to_string, sub, context);

            /**
             * 60-minute Rolling Block with 5-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl5MinSubIntvl>/g, obj, "rollingBlock60MinIntvl5MinSubIntvl", base.to_string, sub, context);

            /**
             * 60-minute Rolling Block with 4-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl4MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl4MinSubIntvl>/g, obj, "rollingBlock60MinIntvl4MinSubIntvl", base.to_string, sub, context);

            /**
             * 30-minute Rolling Block with 15-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl15MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl15MinSubIntvl>/g, obj, "rollingBlock30MinIntvl15MinSubIntvl", base.to_string, sub, context);

            /**
             * 30-minute Rolling Block with 10-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl10MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl10MinSubIntvl>/g, obj, "rollingBlock30MinIntvl10MinSubIntvl", base.to_string, sub, context);

            /**
             * 30-minute Rolling Block with 6-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl6MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl6MinSubIntvl>/g, obj, "rollingBlock30MinIntvl6MinSubIntvl", base.to_string, sub, context);

            /**
             * 30-minute Rolling Block with 3-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl3MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl3MinSubIntvl>/g, obj, "rollingBlock30MinIntvl3MinSubIntvl", base.to_string, sub, context);

            /**
             * 30-minute Rolling Block with 2-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl2MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl2MinSubIntvl>/g, obj, "rollingBlock30MinIntvl2MinSubIntvl", base.to_string, sub, context);

            /**
             * 15-minute Rolling Block with 5-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock15MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock15MinIntvl5MinSubIntvl>/g, obj, "rollingBlock15MinIntvl5MinSubIntvl", base.to_string, sub, context);

            /**
             * 15-minute Rolling Block with 3-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock15MinIntvl3MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock15MinIntvl3MinSubIntvl>/g, obj, "rollingBlock15MinIntvl3MinSubIntvl", base.to_string, sub, context);

            /**
             * 15-minute Rolling Block with 1-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock15MinIntvl1MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock15MinIntvl1MinSubIntvl>/g, obj, "rollingBlock15MinIntvl1MinSubIntvl", base.to_string, sub, context);

            /**
             * 10-minute Rolling Block with 5-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock10MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock10MinIntvl5MinSubIntvl>/g, obj, "rollingBlock10MinIntvl5MinSubIntvl", base.to_string, sub, context);

            /**
             * 10-minute Rolling Block with 2-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock10MinIntvl2MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock10MinIntvl2MinSubIntvl>/g, obj, "rollingBlock10MinIntvl2MinSubIntvl", base.to_string, sub, context);

            /**
             * 10-minute Rolling Block with 1-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock10MinIntvl1MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock10MinIntvl1MinSubIntvl>/g, obj, "rollingBlock10MinIntvl1MinSubIntvl", base.to_string, sub, context);

            /**
             * 5-minute Rolling Block with 1-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock5MinIntvl1MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock5MinIntvl1MinSubIntvl>/g, obj, "rollingBlock5MinIntvl1MinSubIntvl", base.to_string, sub, context);

            /**
             * 30-minute Rolling Block with 5-minute sub-intervals
             *
             */
            base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl5MinSubIntvl>/g, obj, "rollingBlock30MinIntvl5MinSubIntvl", base.to_string, sub, context);

            bucket = context.parsed.MeasuringPeriodKind;
            if (null == bucket)
                context.parsed.MeasuringPeriodKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_MeasurementKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MeasurementKind";
            /**
             * Not Applicable
             *
             */
            base.parse_element (/<cim:MeasurementKind.none>([\s\S]*?)<\/cim:MeasurementKind.none>/g, obj, "none", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.apparentPowerFactor>([\s\S]*?)<\/cim:MeasurementKind.apparentPowerFactor>/g, obj, "apparentPowerFactor", base.to_string, sub, context);

            /**
             * funds
             *
             */
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

            /**
             * Dup with �currency�
             *
             */
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

            /**
             * or Voltage Dip
             *
             */
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

            /**
             * Clarified  from Ed. 1. to indicate fluid volume
             *
             */
            base.parse_element (/<cim:MeasurementKind.volume>([\s\S]*?)<\/cim:MeasurementKind.volume>/g, obj, "volume", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.zeroFlowDuration>([\s\S]*?)<\/cim:MeasurementKind.zeroFlowDuration>/g, obj, "zeroFlowDuration", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.zeroSequence>([\s\S]*?)<\/cim:MeasurementKind.zeroSequence>/g, obj, "zeroSequence", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.distortionPowerFactor>([\s\S]*?)<\/cim:MeasurementKind.distortionPowerFactor>/g, obj, "distortionPowerFactor", base.to_string, sub, context);

            /**
             * Usually expressed as a �count�
             *
             */
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

            /**
             * Moved here from Attribute #9 UOM
             *
             */
            base.parse_element (/<cim:MeasurementKind.signaltoNoiseRatio>([\s\S]*?)<\/cim:MeasurementKind.signaltoNoiseRatio>/g, obj, "signaltoNoiseRatio", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.alarm>([\s\S]*?)<\/cim:MeasurementKind.alarm>/g, obj, "alarm", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.batteryCarryover>([\s\S]*?)<\/cim:MeasurementKind.batteryCarryover>/g, obj, "batteryCarryover", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.dataOverflowAlarm>([\s\S]*?)<\/cim:MeasurementKind.dataOverflowAlarm>/g, obj, "dataOverflowAlarm", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.demandLimit>([\s\S]*?)<\/cim:MeasurementKind.demandLimit>/g, obj, "demandLimit", base.to_string, sub, context);

            /**
             * Usually expressed as a count as part of a billing cycle
             *
             */
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

            /**
             * Usually expressed as a count
             *
             */
            base.parse_element (/<cim:MeasurementKind.relayCycle>([\s\S]*?)<\/cim:MeasurementKind.relayCycle>/g, obj, "relayCycle", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.removalTamper>([\s\S]*?)<\/cim:MeasurementKind.removalTamper>/g, obj, "removalTamper", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.reprogrammingTamper>([\s\S]*?)<\/cim:MeasurementKind.reprogrammingTamper>/g, obj, "reprogrammingTamper", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.reverseRotationTamper>([\s\S]*?)<\/cim:MeasurementKind.reverseRotationTamper>/g, obj, "reverseRotationTamper", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.switchArmed>([\s\S]*?)<\/cim:MeasurementKind.switchArmed>/g, obj, "switchArmed", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.switchDisabled>([\s\S]*?)<\/cim:MeasurementKind.switchDisabled>/g, obj, "switchDisabled", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.tamper>([\s\S]*?)<\/cim:MeasurementKind.tamper>/g, obj, "tamper", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.watchdogTimeout>([\s\S]*?)<\/cim:MeasurementKind.watchdogTimeout>/g, obj, "watchdogTimeout", base.to_string, sub, context);

            /**
             * Customer�s bill for the previous billing period (Currency)
             *
             */
            base.parse_element (/<cim:MeasurementKind.billLastPeriod>([\s\S]*?)<\/cim:MeasurementKind.billLastPeriod>/g, obj, "billLastPeriod", base.to_string, sub, context);

            /**
             * Customer�s bill, as known thus far within the present billing period (Currency)
             *
             */
            base.parse_element (/<cim:MeasurementKind.billToDate>([\s\S]*?)<\/cim:MeasurementKind.billToDate>/g, obj, "billToDate", base.to_string, sub, context);

            /**
             * Customer�s bill for the (Currency)
             *
             */
            base.parse_element (/<cim:MeasurementKind.billCarryover>([\s\S]*?)<\/cim:MeasurementKind.billCarryover>/g, obj, "billCarryover", base.to_string, sub, context);

            /**
             * Monthly fee for connection to commodity.
             *
             */
            base.parse_element (/<cim:MeasurementKind.connectionFee>([\s\S]*?)<\/cim:MeasurementKind.connectionFee>/g, obj, "connectionFee", base.to_string, sub, context);

            /**
             * Sound
             *
             */
            base.parse_element (/<cim:MeasurementKind.audibleVolume>([\s\S]*?)<\/cim:MeasurementKind.audibleVolume>/g, obj, "audibleVolume", base.to_string, sub, context);

            base.parse_element (/<cim:MeasurementKind.volumetricFlow>([\s\S]*?)<\/cim:MeasurementKind.volumetricFlow>/g, obj, "volumetricFlow", base.to_string, sub, context);

            bucket = context.parsed.MeasurementKind;
            if (null == bucket)
                context.parsed.MeasurementKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_CommodityKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CommodityKind";
            /**
             * Not Applicable
             *
             */
            base.parse_element (/<cim:CommodityKind.none>([\s\S]*?)<\/cim:CommodityKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * All types of metered quantities.
             *
             * This type of reading comes from the meter and represents a �secondary� metered value.
             *
             */
            base.parse_element (/<cim:CommodityKind.electricitySecondaryMetered>([\s\S]*?)<\/cim:CommodityKind.electricitySecondaryMetered>/g, obj, "electricitySecondaryMetered", base.to_string, sub, context);

            /**
             * It is possible for a meter to be outfitted with an external VT and/or CT.
             *
             * The meter might not be aware of these devices, and the display not compensate for their presence. Ultimately, when these scalars are applied, the value that represents the service value is called the �primary metered� value. The �index� in sub-category 3 mirrors those of sub-category 0.
             *
             */
            base.parse_element (/<cim:CommodityKind.electricityPrimaryMetered>([\s\S]*?)<\/cim:CommodityKind.electricityPrimaryMetered>/g, obj, "electricityPrimaryMetered", base.to_string, sub, context);

            /**
             * A measurement of the communication infrastructure itself.
             *
             */
            base.parse_element (/<cim:CommodityKind.communication>([\s\S]*?)<\/cim:CommodityKind.communication>/g, obj, "communication", base.to_string, sub, context);

            base.parse_element (/<cim:CommodityKind.air>([\s\S]*?)<\/cim:CommodityKind.air>/g, obj, "air", base.to_string, sub, context);

            /**
             * (SF<sub>6</sub> is found separately below.)
             *
             */
            base.parse_element (/<cim:CommodityKind.insulativeGas>([\s\S]*?)<\/cim:CommodityKind.insulativeGas>/g, obj, "insulativeGas", base.to_string, sub, context);

            base.parse_element (/<cim:CommodityKind.insulativeOil>([\s\S]*?)<\/cim:CommodityKind.insulativeOil>/g, obj, "insulativeOil", base.to_string, sub, context);

            base.parse_element (/<cim:CommodityKind.naturalGas>([\s\S]*?)<\/cim:CommodityKind.naturalGas>/g, obj, "naturalGas", base.to_string, sub, context);

            base.parse_element (/<cim:CommodityKind.propane>([\s\S]*?)<\/cim:CommodityKind.propane>/g, obj, "propane", base.to_string, sub, context);

            /**
             * Drinkable water
             *
             */
            base.parse_element (/<cim:CommodityKind.potableWater>([\s\S]*?)<\/cim:CommodityKind.potableWater>/g, obj, "potableWater", base.to_string, sub, context);

            /**
             * Water in steam form, usually used for heating.
             *
             */
            base.parse_element (/<cim:CommodityKind.steam>([\s\S]*?)<\/cim:CommodityKind.steam>/g, obj, "steam", base.to_string, sub, context);

            /**
             * (Sewerage)
             *
             */
            base.parse_element (/<cim:CommodityKind.wasteWater>([\s\S]*?)<\/cim:CommodityKind.wasteWater>/g, obj, "wasteWater", base.to_string, sub, context);

            /**
             * This fluid is likely in liquid form.
             *
             * It is not necessarily water or water based. The warm fluid returns cooler than when it was sent. The heat conveyed may be metered.
             *
             */
            base.parse_element (/<cim:CommodityKind.heatingFluid>([\s\S]*?)<\/cim:CommodityKind.heatingFluid>/g, obj, "heatingFluid", base.to_string, sub, context);

            /**
             * The cool fluid returns warmer than when it was sent.
             *
             * The heat conveyed may be metered.
             *
             */
            base.parse_element (/<cim:CommodityKind.coolingFluid>([\s\S]*?)<\/cim:CommodityKind.coolingFluid>/g, obj, "coolingFluid", base.to_string, sub, context);

            /**
             * Reclaimed water � possibly used for irrigation but not sufficiently treated to be considered safe for drinking.
             *
             */
            base.parse_element (/<cim:CommodityKind.nonpotableWater>([\s\S]*?)<\/cim:CommodityKind.nonpotableWater>/g, obj, "nonpotableWater", base.to_string, sub, context);

            /**
             * Nitrous Oxides NO<sub>X</sub>
             *
             */
            base.parse_element (/<cim:CommodityKind.nox>([\s\S]*?)<\/cim:CommodityKind.nox>/g, obj, "nox", base.to_string, sub, context);

            /**
             * Sulfur Dioxide SO<sub>2</sub>
             *
             */
            base.parse_element (/<cim:CommodityKind.so2>([\s\S]*?)<\/cim:CommodityKind.so2>/g, obj, "so2", base.to_string, sub, context);

            /**
             * Methane CH<sub>4</sub>
             *
             */
            base.parse_element (/<cim:CommodityKind.ch4>([\s\S]*?)<\/cim:CommodityKind.ch4>/g, obj, "ch4", base.to_string, sub, context);

            /**
             * Carbon Dioxide CO<sub>2</sub>
             *
             */
            base.parse_element (/<cim:CommodityKind.co2>([\s\S]*?)<\/cim:CommodityKind.co2>/g, obj, "co2", base.to_string, sub, context);

            base.parse_element (/<cim:CommodityKind.carbon>([\s\S]*?)<\/cim:CommodityKind.carbon>/g, obj, "carbon", base.to_string, sub, context);

            /**
             * Hexachlorocyclohexane HCH
             *
             */
            base.parse_element (/<cim:CommodityKind.hch>([\s\S]*?)<\/cim:CommodityKind.hch>/g, obj, "hch", base.to_string, sub, context);

            /**
             * Perfluorocarbons PFC
             *
             */
            base.parse_element (/<cim:CommodityKind.pfc>([\s\S]*?)<\/cim:CommodityKind.pfc>/g, obj, "pfc", base.to_string, sub, context);

            /**
             * Sulfurhexafluoride SF<sub>6</sub>
             *
             */
            base.parse_element (/<cim:CommodityKind.sf6>([\s\S]*?)<\/cim:CommodityKind.sf6>/g, obj, "sf6", base.to_string, sub, context);

            /**
             * Television
             *
             */
            base.parse_element (/<cim:CommodityKind.tvLicence>([\s\S]*?)<\/cim:CommodityKind.tvLicence>/g, obj, "tvLicence", base.to_string, sub, context);

            /**
             * Internet service
             *
             */
            base.parse_element (/<cim:CommodityKind.internet>([\s\S]*?)<\/cim:CommodityKind.internet>/g, obj, "internet", base.to_string, sub, context);

            /**
             * trash
             *
             */
            base.parse_element (/<cim:CommodityKind.refuse>([\s\S]*?)<\/cim:CommodityKind.refuse>/g, obj, "refuse", base.to_string, sub, context);

            bucket = context.parsed.CommodityKind;
            if (null == bucket)
                context.parsed.CommodityKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_AggregateKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AggregateKind";
            /**
             * Not Applicable
             *
             */
            base.parse_element (/<cim:AggregateKind.none>([\s\S]*?)<\/cim:AggregateKind.none>/g, obj, "none", base.to_string, sub, context);

            base.parse_element (/<cim:AggregateKind.average>([\s\S]*?)<\/cim:AggregateKind.average>/g, obj, "average", base.to_string, sub, context);

            /**
             * The value represents an amount over which a threshold was exceeded.
             *
             */
            base.parse_element (/<cim:AggregateKind.excess>([\s\S]*?)<\/cim:AggregateKind.excess>/g, obj, "excess", base.to_string, sub, context);

            /**
             * The value represents a programmed threshold.
             *
             */
            base.parse_element (/<cim:AggregateKind.highThreshold>([\s\S]*?)<\/cim:AggregateKind.highThreshold>/g, obj, "highThreshold", base.to_string, sub, context);

            /**
             * The value represents a programmed threshold.
             *
             */
            base.parse_element (/<cim:AggregateKind.lowThreshold>([\s\S]*?)<\/cim:AggregateKind.lowThreshold>/g, obj, "lowThreshold", base.to_string, sub, context);

            /**
             * The highest value observed
             *
             */
            base.parse_element (/<cim:AggregateKind.maximum>([\s\S]*?)<\/cim:AggregateKind.maximum>/g, obj, "maximum", base.to_string, sub, context);

            /**
             * The smallest value observed
             *
             */
            base.parse_element (/<cim:AggregateKind.minimum>([\s\S]*?)<\/cim:AggregateKind.minimum>/g, obj, "minimum", base.to_string, sub, context);

            base.parse_element (/<cim:AggregateKind.nominal>([\s\S]*?)<\/cim:AggregateKind.nominal>/g, obj, "nominal", base.to_string, sub, context);

            base.parse_element (/<cim:AggregateKind.normal>([\s\S]*?)<\/cim:AggregateKind.normal>/g, obj, "normal", base.to_string, sub, context);

            /**
             * The second highest value observed
             *
             */
            base.parse_element (/<cim:AggregateKind.secondMaximum>([\s\S]*?)<\/cim:AggregateKind.secondMaximum>/g, obj, "secondMaximum", base.to_string, sub, context);

            /**
             * The second smallest value observed
             *
             */
            base.parse_element (/<cim:AggregateKind.secondMinimum>([\s\S]*?)<\/cim:AggregateKind.secondMinimum>/g, obj, "secondMinimum", base.to_string, sub, context);

            /**
             * The third highest value observed
             *
             */
            base.parse_element (/<cim:AggregateKind.thirdMaximum>([\s\S]*?)<\/cim:AggregateKind.thirdMaximum>/g, obj, "thirdMaximum", base.to_string, sub, context);

            /**
             * The fourth highest value observed
             *
             */
            base.parse_element (/<cim:AggregateKind.fourthMaximum>([\s\S]*?)<\/cim:AggregateKind.fourthMaximum>/g, obj, "fourthMaximum", base.to_string, sub, context);

            /**
             * The fifth highest value observed
             *
             */
            base.parse_element (/<cim:AggregateKind.fifthMaximum>([\s\S]*?)<\/cim:AggregateKind.fifthMaximum>/g, obj, "fifthMaximum", base.to_string, sub, context);

            /**
             * The accumulated sum
             *
             */
            base.parse_element (/<cim:AggregateKind.sum>([\s\S]*?)<\/cim:AggregateKind.sum>/g, obj, "sum", base.to_string, sub, context);

            bucket = context.parsed.AggregateKind;
            if (null == bucket)
                context.parsed.AggregateKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_MacroPeriodKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MacroPeriodKind";
            /**
             * Not Applicable
             *
             */
            base.parse_element (/<cim:MacroPeriodKind.none>([\s\S]*?)<\/cim:MacroPeriodKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * Captured during the billing period starting at midnight of the first day of the billing period (as defined by the billing cycle day).
             *
             * If during the current billing period, it specifies a period from the start of the current billing period until "now".
             *
             */
            base.parse_element (/<cim:MacroPeriodKind.billingPeriod>([\s\S]*?)<\/cim:MacroPeriodKind.billingPeriod>/g, obj, "billingPeriod", base.to_string, sub, context);

            /**
             * Daily Period starting at midnight.
             *
             * If for the current day, this specifies the time from midnight to "now".
             *
             */
            base.parse_element (/<cim:MacroPeriodKind.daily>([\s\S]*?)<\/cim:MacroPeriodKind.daily>/g, obj, "daily", base.to_string, sub, context);

            /**
             * Monthly period starting at midnight on the first day of the month.
             *
             * If within the current month, this specifies the period from the start of the month until "now."
             *
             */
            base.parse_element (/<cim:MacroPeriodKind.monthly>([\s\S]*?)<\/cim:MacroPeriodKind.monthly>/g, obj, "monthly", base.to_string, sub, context);

            /**
             * A season of time spanning multiple months.
             *
             * E.g. "Summer," "Spring," "Fall," and "Winter" based cycle. If within the current season, it specifies the period from the start of the current season until "now."
             *
             */
            base.parse_element (/<cim:MacroPeriodKind.seasonal>([\s\S]*?)<\/cim:MacroPeriodKind.seasonal>/g, obj, "seasonal", base.to_string, sub, context);

            /**
             * Weekly period starting at midnight on the first day of the week and ending the instant before midnight the last day of the week.
             *
             * If within the current week, it specifies the period from the start of the week until "now."
             *
             */
            base.parse_element (/<cim:MacroPeriodKind.weekly>([\s\S]*?)<\/cim:MacroPeriodKind.weekly>/g, obj, "weekly", base.to_string, sub, context);

            /**
             * For the period defined by the start and end of the TimePeriod element in the message.
             *
             */
            base.parse_element (/<cim:MacroPeriodKind.specifiedPeriod>([\s\S]*?)<\/cim:MacroPeriodKind.specifiedPeriod>/g, obj, "specifiedPeriod", base.to_string, sub, context);

            bucket = context.parsed.MacroPeriodKind;
            if (null == bucket)
                context.parsed.MacroPeriodKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_CommodityKind: parse_CommodityKind,
                parse_AccumulationKind: parse_AccumulationKind,
                parse_MeasurementKind: parse_MeasurementKind,
                parse_FlowDirectionKind: parse_FlowDirectionKind,
                parse_AggregateKind: parse_AggregateKind,
                parse_MeasuringPeriodKind: parse_MeasuringPeriodKind,
                parse_MacroPeriodKind: parse_MacroPeriodKind
            }
        );
    }
);