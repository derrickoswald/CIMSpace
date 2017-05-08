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
             */
            obj["none"] = base.parse_element (/<cim:AccumulationKind.none>([\s\S]*?)<\/cim:AccumulationKind.none>/g, sub, context, true);
            /**
             * A value from a register which represents the bulk quantity of a commodity.
             * This quantity is computed as the integral of the commodity usage rate. This value is typically used as the basis for the dial reading at the meter, and as a result, will roll over upon reaching a maximum dial value.
             */
            obj["bulkQuantity"] = base.parse_element (/<cim:AccumulationKind.bulkQuantity>([\s\S]*?)<\/cim:AccumulationKind.bulkQuantity>/g, sub, context, true);
            /**
             * The sum of the previous billing period values and the present period value.
             * Note: �ContinuousCumulative� is commonly used in conjunction with �demand.� The �ContinuousCumulative Demand� would be the cumulative sum of the previous billing period maximum demand values (as occurring with each demand reset) summed with the present period maximum demand value (which has yet to be reset.)
             */
            obj["continuousCumulative"] = base.parse_element (/<cim:AccumulationKind.continuousCumulative>([\s\S]*?)<\/cim:AccumulationKind.continuousCumulative>/g, sub, context, true);
            /**
             * The sum of the previous billing period values.
             * Note: �Cumulative� is commonly used in conjunction with �demand.� Each demand reset causes the maximum demand value for the present billing period (since the last demand reset) to accumulate as an accumulative total of all maximum demands. So instead of �zeroing� the demand register, a demand reset has the affect of adding the present maximum demand to this accumulating total.
             */
            obj["cumulative"] = base.parse_element (/<cim:AccumulationKind.cumulative>([\s\S]*?)<\/cim:AccumulationKind.cumulative>/g, sub, context, true);
            /**
             * The difference between the value at the end of the prescribed interval and the beginning of the interval.
             * This is used for incremental interval data.
             */
            obj["deltaData"] = base.parse_element (/<cim:AccumulationKind.deltaData>([\s\S]*?)<\/cim:AccumulationKind.deltaData>/g, sub, context, true);
            /**
             * As if a needle is swung out on the meter face to a value to indicate the current value. (Note: An �indicating� value is typically measured over hundreds of milliseconds or greater, or may imply a �pusher� mechanism to capture a value.
             * Compare this to �instantaneous� which is measured over a shorter period of time.)
             */
            obj["indicating"] = base.parse_element (/<cim:AccumulationKind.indicating>([\s\S]*?)<\/cim:AccumulationKind.indicating>/g, sub, context, true);
            /**
             * A form of accumulation which is selective with respect to time.
             * Note : �Summation� could be considered a specialization of �Bulk Quantity� according to the rules of inheritance where �Summation� selectively accumulates pulses over a timing pattern, and �BulkQuantity� accumulates pulses all of the time.
             */
            obj["summation"] = base.parse_element (/<cim:AccumulationKind.summation>([\s\S]*?)<\/cim:AccumulationKind.summation>/g, sub, context, true);
            /**
             * A form of computation which introduces a time delay characteristic to the data value
             */
            obj["timeDelay"] = base.parse_element (/<cim:AccumulationKind.timeDelay>([\s\S]*?)<\/cim:AccumulationKind.timeDelay>/g, sub, context, true);
            /**
             * Typically measured over the fastest period of time allowed by the definition of the metric (usually milliseconds or tens of milliseconds.) (Note: �Instantaneous� was moved to attribute #3 in 61968-9Ed2 from attribute #1 in 61968-9Ed1.)
             */
            obj["instantaneous"] = base.parse_element (/<cim:AccumulationKind.instantaneous>([\s\S]*?)<\/cim:AccumulationKind.instantaneous>/g, sub, context, true);
            /**
             * When this description is applied to a metered value, it implies that the value is a time-independent cumulative quantity much a BulkQuantity, except that it latches upon the maximum value upon reaching that value.
             * Any additional accumulation (positive or negative) is discarded until a reset occurs.
             */
            obj["latchingQuantity"] = base.parse_element (/<cim:AccumulationKind.latchingQuantity>([\s\S]*?)<\/cim:AccumulationKind.latchingQuantity>/g, sub, context, true);
            /**
             * A time-independent cumulative quantity much a BulkQuantity or a LatchingQuantity, except that the accumulation stops at the maximum or minimum values.
             * When the maximum is reached, any additional positive accumulation is discarded, but negative accumulation may be accepted (thus lowering the counter.) Likewise, when the negative bound is reached, any additional negative accumulation is discarded, but positive accumulation is accepted (thus increasing the counter.)
             */
            obj["boundedQuantity"] = base.parse_element (/<cim:AccumulationKind.boundedQuantity>([\s\S]*?)<\/cim:AccumulationKind.boundedQuantity>/g, sub, context, true);
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
             */
            obj["none"] = base.parse_element (/<cim:FlowDirectionKind.none>([\s\S]*?)<\/cim:FlowDirectionKind.none>/g, sub, context, true);
            /**
             * "Delivered," or "Imported" as defined 61968-2.
             * Forward Active Energy is a positive kWh value as one would naturally expect to find as energy is supplied by the utility and consumed at the service.
             */
            obj["forward"] = base.parse_element (/<cim:FlowDirectionKind.forward>([\s\S]*?)<\/cim:FlowDirectionKind.forward>/g, sub, context, true);
            /**
             * Typically used to describe that a power factor is lagging the reference value.
             * Note 1: When used to describe VA, �lagging� describes a form of measurement where reactive power is considered in all four quadrants, but real power is considered only in quadrants I and IV.
             */
            obj["lagging"] = base.parse_element (/<cim:FlowDirectionKind.lagging>([\s\S]*?)<\/cim:FlowDirectionKind.lagging>/g, sub, context, true);
            /**
             * Typically used to describe that a power factor is leading the reference value.
             * Note: Leading power factors typically indicate capacitive loading.
             */
            obj["leading"] = base.parse_element (/<cim:FlowDirectionKind.leading>([\s\S]*?)<\/cim:FlowDirectionKind.leading>/g, sub, context, true);
            /**
             * |Forward| - |Reverse|, See 61968-2.
             * Note: In some systems, the value passed as a �net� value could become negative. In other systems the value passed as a �net� value is always a positive number, and rolls-over and rolls-under as needed.
             */
            obj["net"] = base.parse_element (/<cim:FlowDirectionKind.net>([\s\S]*?)<\/cim:FlowDirectionKind.net>/g, sub, context, true);
            /**
             * Reactive positive quadrants. (The term �lagging� is preferred.)
             */
            obj["q1plusQ2"] = base.parse_element (/<cim:FlowDirectionKind.q1plusQ2>([\s\S]*?)<\/cim:FlowDirectionKind.q1plusQ2>/g, sub, context, true);
            /**
             * Quadrants 1 and 3
             */
            obj["q1plusQ3"] = base.parse_element (/<cim:FlowDirectionKind.q1plusQ3>([\s\S]*?)<\/cim:FlowDirectionKind.q1plusQ3>/g, sub, context, true);
            /**
             * Quadrants 1 and 4 usually represent forward active energy
             */
            obj["q1plusQ4"] = base.parse_element (/<cim:FlowDirectionKind.q1plusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q1plusQ4>/g, sub, context, true);
            /**
             * Q1 minus Q4
             */
            obj["q1minusQ4"] = base.parse_element (/<cim:FlowDirectionKind.q1minusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q1minusQ4>/g, sub, context, true);
            /**
             * Quadrants 2 and 3 usually represent reverse active energy
             */
            obj["q2plusQ3"] = base.parse_element (/<cim:FlowDirectionKind.q2plusQ3>([\s\S]*?)<\/cim:FlowDirectionKind.q2plusQ3>/g, sub, context, true);
            /**
             * Quadrants 2 and 4
             */
            obj["q2plusQ4"] = base.parse_element (/<cim:FlowDirectionKind.q2plusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q2plusQ4>/g, sub, context, true);
            /**
             * Q2 minus Q3
             */
            obj["q2minusQ3"] = base.parse_element (/<cim:FlowDirectionKind.q2minusQ3>([\s\S]*?)<\/cim:FlowDirectionKind.q2minusQ3>/g, sub, context, true);
            /**
             * Reactive negative quadrants. (The term �leading� is preferred.)
             */
            obj["q3plusQ4"] = base.parse_element (/<cim:FlowDirectionKind.q3plusQ4>([\s\S]*?)<\/cim:FlowDirectionKind.q3plusQ4>/g, sub, context, true);
            /**
             * Q3 minus Q2
             */
            obj["q3minusQ2"] = base.parse_element (/<cim:FlowDirectionKind.q3minusQ2>([\s\S]*?)<\/cim:FlowDirectionKind.q3minusQ2>/g, sub, context, true);
            /**
             * Q1 only
             */
            obj["quadrant1"] = base.parse_element (/<cim:FlowDirectionKind.quadrant1>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant1>/g, sub, context, true);
            /**
             * Q2 only
             */
            obj["quadrant2"] = base.parse_element (/<cim:FlowDirectionKind.quadrant2>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant2>/g, sub, context, true);
            /**
             * Q3 only
             */
            obj["quadrant3"] = base.parse_element (/<cim:FlowDirectionKind.quadrant3>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant3>/g, sub, context, true);
            /**
             * Q4 only
             */
            obj["quadrant4"] = base.parse_element (/<cim:FlowDirectionKind.quadrant4>([\s\S]*?)<\/cim:FlowDirectionKind.quadrant4>/g, sub, context, true);
            /**
             * Reverse Active Energy is equivalent to "Received," or "Exported" as defined in 61968-2.
             * Reverse Active Energy is a positive kWh value as one would expect to find when energy is backfed by the service onto the utility network.
             */
            obj["reverse"] = base.parse_element (/<cim:FlowDirectionKind.reverse>([\s\S]*?)<\/cim:FlowDirectionKind.reverse>/g, sub, context, true);
            /**
             * |Forward| + |Reverse|, See 61968-2.
             * The sum of the commodity in all quadrants Q1+Q2+Q3+Q4.
             */
            obj["total"] = base.parse_element (/<cim:FlowDirectionKind.total>([\s\S]*?)<\/cim:FlowDirectionKind.total>/g, sub, context, true);
            /**
             * In polyphase metering, the total by phase energy register is incremented when the sum of the absolute values of the phase energies is greater than zero:
            
            &lt;img src="HTS_1.
             * PNG" width="234" height="16" border="0" alt="graphic"/&gt;
             */
            obj["totalByPhase"] = base.parse_element (/<cim:FlowDirectionKind.totalByPhase>([\s\S]*?)<\/cim:FlowDirectionKind.totalByPhase>/g, sub, context, true);
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
             */
            obj["none"] = base.parse_element (/<cim:MeasuringPeriodKind.none>([\s\S]*?)<\/cim:MeasuringPeriodKind.none>/g, sub, context, true);
            /**
             * 10-minute
             */
            obj["tenMinute"] = base.parse_element (/<cim:MeasuringPeriodKind.tenMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.tenMinute>/g, sub, context, true);
            /**
             * 15-minute
             */
            obj["fifteenMinute"] = base.parse_element (/<cim:MeasuringPeriodKind.fifteenMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.fifteenMinute>/g, sub, context, true);
            /**
             * 1-minute
             */
            obj["oneMinute"] = base.parse_element (/<cim:MeasuringPeriodKind.oneMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.oneMinute>/g, sub, context, true);
            /**
             * 24-hour
             */
            obj["twentyfourHour"] = base.parse_element (/<cim:MeasuringPeriodKind.twentyfourHour>([\s\S]*?)<\/cim:MeasuringPeriodKind.twentyfourHour>/g, sub, context, true);
            /**
             * 30-minute
             */
            obj["thirtyMinute"] = base.parse_element (/<cim:MeasuringPeriodKind.thirtyMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.thirtyMinute>/g, sub, context, true);
            /**
             * 5-minute
             */
            obj["fiveMinute"] = base.parse_element (/<cim:MeasuringPeriodKind.fiveMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.fiveMinute>/g, sub, context, true);
            /**
             * 60-minute
             */
            obj["sixtyMinute"] = base.parse_element (/<cim:MeasuringPeriodKind.sixtyMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.sixtyMinute>/g, sub, context, true);
            /**
             * 2-minute
             */
            obj["twoMinute"] = base.parse_element (/<cim:MeasuringPeriodKind.twoMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.twoMinute>/g, sub, context, true);
            /**
             * 3-minute
             */
            obj["threeMinute"] = base.parse_element (/<cim:MeasuringPeriodKind.threeMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.threeMinute>/g, sub, context, true);
            /**
             * Within the present period of time
             */
            obj["present"] = base.parse_element (/<cim:MeasuringPeriodKind.present>([\s\S]*?)<\/cim:MeasuringPeriodKind.present>/g, sub, context, true);
            /**
             * Shifted within the previous monthly cycle and data set
             */
            obj["previous"] = base.parse_element (/<cim:MeasuringPeriodKind.previous>([\s\S]*?)<\/cim:MeasuringPeriodKind.previous>/g, sub, context, true);
            /**
             * 20-minute interval
             */
            obj["twentyMinute"] = base.parse_element (/<cim:MeasuringPeriodKind.twentyMinute>([\s\S]*?)<\/cim:MeasuringPeriodKind.twentyMinute>/g, sub, context, true);
            /**
             * 60-minute Fixed Block
             */
            obj["fixedBlock60Min"] = base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock60Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock60Min>/g, sub, context, true);
            /**
             * 30-minute Fixed Block
             */
            obj["fixedBlock30Min"] = base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock30Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock30Min>/g, sub, context, true);
            /**
             * 20-minute Fixed Block
             */
            obj["fixedBlock20Min"] = base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock20Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock20Min>/g, sub, context, true);
            /**
             * 15-minute Fixed Block
             */
            obj["fixedBlock15Min"] = base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock15Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock15Min>/g, sub, context, true);
            /**
             * 10-minute Fixed Block
             */
            obj["fixedBlock10Min"] = base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock10Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock10Min>/g, sub, context, true);
            /**
             * 5-minute Fixed Block
             */
            obj["fixedBlock5Min"] = base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock5Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock5Min>/g, sub, context, true);
            /**
             * 1-minute Fixed Block
             */
            obj["fixedBlock1Min"] = base.parse_element (/<cim:MeasuringPeriodKind.fixedBlock1Min>([\s\S]*?)<\/cim:MeasuringPeriodKind.fixedBlock1Min>/g, sub, context, true);
            /**
             * 60-minute Rolling Block with 30-minute sub-intervals
             */
            obj["rollingBlock60MinIntvl30MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl30MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl30MinSubIntvl>/g, sub, context, true);
            /**
             * 60-minute Rolling Block with 20-minute sub-intervals
             */
            obj["rollingBlock60MinIntvl20MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl20MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl20MinSubIntvl>/g, sub, context, true);
            /**
             * 60-minute Rolling Block with 15-minute sub-intervals
             */
            obj["rollingBlock60MinIntvl15MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl15MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl15MinSubIntvl>/g, sub, context, true);
            /**
             * 60-minute Rolling Block with 12-minute sub-intervals
             */
            obj["rollingBlock60MinIntvl12MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl12MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl12MinSubIntvl>/g, sub, context, true);
            /**
             * 60-minute Rolling Block with 10-minute sub-intervals
             */
            obj["rollingBlock60MinIntvl10MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl10MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl10MinSubIntvl>/g, sub, context, true);
            /**
             * 60-minute Rolling Block with 6-minute sub-intervals
             */
            obj["rollingBlock60MinIntvl6MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl6MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl6MinSubIntvl>/g, sub, context, true);
            /**
             * 60-minute Rolling Block with 5-minute sub-intervals
             */
            obj["rollingBlock60MinIntvl5MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl5MinSubIntvl>/g, sub, context, true);
            /**
             * 60-minute Rolling Block with 4-minute sub-intervals
             */
            obj["rollingBlock60MinIntvl4MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock60MinIntvl4MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock60MinIntvl4MinSubIntvl>/g, sub, context, true);
            /**
             * 30-minute Rolling Block with 15-minute sub-intervals
             */
            obj["rollingBlock30MinIntvl15MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl15MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl15MinSubIntvl>/g, sub, context, true);
            /**
             * 30-minute Rolling Block with 10-minute sub-intervals
             */
            obj["rollingBlock30MinIntvl10MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl10MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl10MinSubIntvl>/g, sub, context, true);
            /**
             * 30-minute Rolling Block with 6-minute sub-intervals
             */
            obj["rollingBlock30MinIntvl6MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl6MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl6MinSubIntvl>/g, sub, context, true);
            /**
             * 30-minute Rolling Block with 3-minute sub-intervals
             */
            obj["rollingBlock30MinIntvl3MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl3MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl3MinSubIntvl>/g, sub, context, true);
            /**
             * 30-minute Rolling Block with 2-minute sub-intervals
             */
            obj["rollingBlock30MinIntvl2MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl2MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl2MinSubIntvl>/g, sub, context, true);
            /**
             * 15-minute Rolling Block with 5-minute sub-intervals
             */
            obj["rollingBlock15MinIntvl5MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock15MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock15MinIntvl5MinSubIntvl>/g, sub, context, true);
            /**
             * 15-minute Rolling Block with 3-minute sub-intervals
             */
            obj["rollingBlock15MinIntvl3MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock15MinIntvl3MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock15MinIntvl3MinSubIntvl>/g, sub, context, true);
            /**
             * 15-minute Rolling Block with 1-minute sub-intervals
             */
            obj["rollingBlock15MinIntvl1MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock15MinIntvl1MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock15MinIntvl1MinSubIntvl>/g, sub, context, true);
            /**
             * 10-minute Rolling Block with 5-minute sub-intervals
             */
            obj["rollingBlock10MinIntvl5MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock10MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock10MinIntvl5MinSubIntvl>/g, sub, context, true);
            /**
             * 10-minute Rolling Block with 2-minute sub-intervals
             */
            obj["rollingBlock10MinIntvl2MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock10MinIntvl2MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock10MinIntvl2MinSubIntvl>/g, sub, context, true);
            /**
             * 10-minute Rolling Block with 1-minute sub-intervals
             */
            obj["rollingBlock10MinIntvl1MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock10MinIntvl1MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock10MinIntvl1MinSubIntvl>/g, sub, context, true);
            /**
             * 5-minute Rolling Block with 1-minute sub-intervals
             */
            obj["rollingBlock5MinIntvl1MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock5MinIntvl1MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock5MinIntvl1MinSubIntvl>/g, sub, context, true);
            /**
             * 30-minute Rolling Block with 5-minute sub-intervals
             */
            obj["rollingBlock30MinIntvl5MinSubIntvl"] = base.parse_element (/<cim:MeasuringPeriodKind.rollingBlock30MinIntvl5MinSubIntvl>([\s\S]*?)<\/cim:MeasuringPeriodKind.rollingBlock30MinIntvl5MinSubIntvl>/g, sub, context, true);
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
             */
            obj["none"] = base.parse_element (/<cim:MeasurementKind.none>([\s\S]*?)<\/cim:MeasurementKind.none>/g, sub, context, true);
            obj["apparentPowerFactor"] = base.parse_element (/<cim:MeasurementKind.apparentPowerFactor>([\s\S]*?)<\/cim:MeasurementKind.apparentPowerFactor>/g, sub, context, true);
            /**
             * funds
             */
            obj["currency"] = base.parse_element (/<cim:MeasurementKind.currency>([\s\S]*?)<\/cim:MeasurementKind.currency>/g, sub, context, true);
            obj["current"] = base.parse_element (/<cim:MeasurementKind.current>([\s\S]*?)<\/cim:MeasurementKind.current>/g, sub, context, true);
            obj["currentAngle"] = base.parse_element (/<cim:MeasurementKind.currentAngle>([\s\S]*?)<\/cim:MeasurementKind.currentAngle>/g, sub, context, true);
            obj["currentImbalance"] = base.parse_element (/<cim:MeasurementKind.currentImbalance>([\s\S]*?)<\/cim:MeasurementKind.currentImbalance>/g, sub, context, true);
            obj["date"] = base.parse_element (/<cim:MeasurementKind.date>([\s\S]*?)<\/cim:MeasurementKind.date>/g, sub, context, true);
            obj["demand"] = base.parse_element (/<cim:MeasurementKind.demand>([\s\S]*?)<\/cim:MeasurementKind.demand>/g, sub, context, true);
            obj["distance"] = base.parse_element (/<cim:MeasurementKind.distance>([\s\S]*?)<\/cim:MeasurementKind.distance>/g, sub, context, true);
            obj["distortionVoltAmp"] = base.parse_element (/<cim:MeasurementKind.distortionVoltAmp>([\s\S]*?)<\/cim:MeasurementKind.distortionVoltAmp>/g, sub, context, true);
            obj["energization"] = base.parse_element (/<cim:MeasurementKind.energization>([\s\S]*?)<\/cim:MeasurementKind.energization>/g, sub, context, true);
            obj["energy"] = base.parse_element (/<cim:MeasurementKind.energy>([\s\S]*?)<\/cim:MeasurementKind.energy>/g, sub, context, true);
            obj["energizationLoadSide"] = base.parse_element (/<cim:MeasurementKind.energizationLoadSide>([\s\S]*?)<\/cim:MeasurementKind.energizationLoadSide>/g, sub, context, true);
            obj["fan"] = base.parse_element (/<cim:MeasurementKind.fan>([\s\S]*?)<\/cim:MeasurementKind.fan>/g, sub, context, true);
            obj["frequency"] = base.parse_element (/<cim:MeasurementKind.frequency>([\s\S]*?)<\/cim:MeasurementKind.frequency>/g, sub, context, true);
            /**
             * Dup with �currency�
             */
            obj["fund"] = base.parse_element (/<cim:MeasurementKind.fund>([\s\S]*?)<\/cim:MeasurementKind.fund>/g, sub, context, true);
            obj["ieee1366ASAI"] = base.parse_element (/<cim:MeasurementKind.ieee1366ASAI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366ASAI>/g, sub, context, true);
            obj["ieee1366ASIDI"] = base.parse_element (/<cim:MeasurementKind.ieee1366ASIDI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366ASIDI>/g, sub, context, true);
            obj["ieee1366ASIFI"] = base.parse_element (/<cim:MeasurementKind.ieee1366ASIFI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366ASIFI>/g, sub, context, true);
            obj["ieee1366CAIDI"] = base.parse_element (/<cim:MeasurementKind.ieee1366CAIDI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CAIDI>/g, sub, context, true);
            obj["ieee1366CAIFI"] = base.parse_element (/<cim:MeasurementKind.ieee1366CAIFI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CAIFI>/g, sub, context, true);
            obj["ieee1366CEMIn"] = base.parse_element (/<cim:MeasurementKind.ieee1366CEMIn>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CEMIn>/g, sub, context, true);
            obj["ieee1366CEMSMIn"] = base.parse_element (/<cim:MeasurementKind.ieee1366CEMSMIn>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CEMSMIn>/g, sub, context, true);
            obj["ieee1366CTAIDI"] = base.parse_element (/<cim:MeasurementKind.ieee1366CTAIDI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366CTAIDI>/g, sub, context, true);
            obj["ieee1366MAIFI"] = base.parse_element (/<cim:MeasurementKind.ieee1366MAIFI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366MAIFI>/g, sub, context, true);
            obj["ieee1366MAIFIe"] = base.parse_element (/<cim:MeasurementKind.ieee1366MAIFIe>([\s\S]*?)<\/cim:MeasurementKind.ieee1366MAIFIe>/g, sub, context, true);
            obj["ieee1366SAIDI"] = base.parse_element (/<cim:MeasurementKind.ieee1366SAIDI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366SAIDI>/g, sub, context, true);
            obj["ieee1366SAIFI"] = base.parse_element (/<cim:MeasurementKind.ieee1366SAIFI>([\s\S]*?)<\/cim:MeasurementKind.ieee1366SAIFI>/g, sub, context, true);
            obj["lineLoss"] = base.parse_element (/<cim:MeasurementKind.lineLoss>([\s\S]*?)<\/cim:MeasurementKind.lineLoss>/g, sub, context, true);
            obj["loss"] = base.parse_element (/<cim:MeasurementKind.loss>([\s\S]*?)<\/cim:MeasurementKind.loss>/g, sub, context, true);
            obj["negativeSequence"] = base.parse_element (/<cim:MeasurementKind.negativeSequence>([\s\S]*?)<\/cim:MeasurementKind.negativeSequence>/g, sub, context, true);
            obj["phasorPowerFactor"] = base.parse_element (/<cim:MeasurementKind.phasorPowerFactor>([\s\S]*?)<\/cim:MeasurementKind.phasorPowerFactor>/g, sub, context, true);
            obj["phasorReactivePower"] = base.parse_element (/<cim:MeasurementKind.phasorReactivePower>([\s\S]*?)<\/cim:MeasurementKind.phasorReactivePower>/g, sub, context, true);
            obj["positiveSequence"] = base.parse_element (/<cim:MeasurementKind.positiveSequence>([\s\S]*?)<\/cim:MeasurementKind.positiveSequence>/g, sub, context, true);
            obj["power"] = base.parse_element (/<cim:MeasurementKind.power>([\s\S]*?)<\/cim:MeasurementKind.power>/g, sub, context, true);
            obj["powerFactor"] = base.parse_element (/<cim:MeasurementKind.powerFactor>([\s\S]*?)<\/cim:MeasurementKind.powerFactor>/g, sub, context, true);
            obj["quantityPower"] = base.parse_element (/<cim:MeasurementKind.quantityPower>([\s\S]*?)<\/cim:MeasurementKind.quantityPower>/g, sub, context, true);
            /**
             * or Voltage Dip
             */
            obj["sag"] = base.parse_element (/<cim:MeasurementKind.sag>([\s\S]*?)<\/cim:MeasurementKind.sag>/g, sub, context, true);
            obj["swell"] = base.parse_element (/<cim:MeasurementKind.swell>([\s\S]*?)<\/cim:MeasurementKind.swell>/g, sub, context, true);
            obj["switchPosition"] = base.parse_element (/<cim:MeasurementKind.switchPosition>([\s\S]*?)<\/cim:MeasurementKind.switchPosition>/g, sub, context, true);
            obj["tapPosition"] = base.parse_element (/<cim:MeasurementKind.tapPosition>([\s\S]*?)<\/cim:MeasurementKind.tapPosition>/g, sub, context, true);
            obj["tariffRate"] = base.parse_element (/<cim:MeasurementKind.tariffRate>([\s\S]*?)<\/cim:MeasurementKind.tariffRate>/g, sub, context, true);
            obj["temperature"] = base.parse_element (/<cim:MeasurementKind.temperature>([\s\S]*?)<\/cim:MeasurementKind.temperature>/g, sub, context, true);
            obj["totalHarmonicDistortion"] = base.parse_element (/<cim:MeasurementKind.totalHarmonicDistortion>([\s\S]*?)<\/cim:MeasurementKind.totalHarmonicDistortion>/g, sub, context, true);
            obj["transformerLoss"] = base.parse_element (/<cim:MeasurementKind.transformerLoss>([\s\S]*?)<\/cim:MeasurementKind.transformerLoss>/g, sub, context, true);
            obj["unipedeVoltageDip10to15"] = base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip10to15>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip10to15>/g, sub, context, true);
            obj["unipedeVoltageDip15to30"] = base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip15to30>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip15to30>/g, sub, context, true);
            obj["unipedeVoltageDip30to60"] = base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip30to60>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip30to60>/g, sub, context, true);
            obj["unipedeVoltageDip60to90"] = base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip60to90>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip60to90>/g, sub, context, true);
            obj["unipedeVoltageDip90to100"] = base.parse_element (/<cim:MeasurementKind.unipedeVoltageDip90to100>([\s\S]*?)<\/cim:MeasurementKind.unipedeVoltageDip90to100>/g, sub, context, true);
            obj["voltage"] = base.parse_element (/<cim:MeasurementKind.voltage>([\s\S]*?)<\/cim:MeasurementKind.voltage>/g, sub, context, true);
            obj["voltageAngle"] = base.parse_element (/<cim:MeasurementKind.voltageAngle>([\s\S]*?)<\/cim:MeasurementKind.voltageAngle>/g, sub, context, true);
            obj["voltageExcursion"] = base.parse_element (/<cim:MeasurementKind.voltageExcursion>([\s\S]*?)<\/cim:MeasurementKind.voltageExcursion>/g, sub, context, true);
            obj["voltageImbalance"] = base.parse_element (/<cim:MeasurementKind.voltageImbalance>([\s\S]*?)<\/cim:MeasurementKind.voltageImbalance>/g, sub, context, true);
            /**
             * Clarified  from Ed. 1. to indicate fluid volume
             */
            obj["volume"] = base.parse_element (/<cim:MeasurementKind.volume>([\s\S]*?)<\/cim:MeasurementKind.volume>/g, sub, context, true);
            obj["zeroFlowDuration"] = base.parse_element (/<cim:MeasurementKind.zeroFlowDuration>([\s\S]*?)<\/cim:MeasurementKind.zeroFlowDuration>/g, sub, context, true);
            obj["zeroSequence"] = base.parse_element (/<cim:MeasurementKind.zeroSequence>([\s\S]*?)<\/cim:MeasurementKind.zeroSequence>/g, sub, context, true);
            obj["distortionPowerFactor"] = base.parse_element (/<cim:MeasurementKind.distortionPowerFactor>([\s\S]*?)<\/cim:MeasurementKind.distortionPowerFactor>/g, sub, context, true);
            /**
             * Usually expressed as a �count�
             */
            obj["frequencyExcursion"] = base.parse_element (/<cim:MeasurementKind.frequencyExcursion>([\s\S]*?)<\/cim:MeasurementKind.frequencyExcursion>/g, sub, context, true);
            obj["applicationContext"] = base.parse_element (/<cim:MeasurementKind.applicationContext>([\s\S]*?)<\/cim:MeasurementKind.applicationContext>/g, sub, context, true);
            obj["apTitle"] = base.parse_element (/<cim:MeasurementKind.apTitle>([\s\S]*?)<\/cim:MeasurementKind.apTitle>/g, sub, context, true);
            obj["assetNumber"] = base.parse_element (/<cim:MeasurementKind.assetNumber>([\s\S]*?)<\/cim:MeasurementKind.assetNumber>/g, sub, context, true);
            obj["bandwidth"] = base.parse_element (/<cim:MeasurementKind.bandwidth>([\s\S]*?)<\/cim:MeasurementKind.bandwidth>/g, sub, context, true);
            obj["batteryVoltage"] = base.parse_element (/<cim:MeasurementKind.batteryVoltage>([\s\S]*?)<\/cim:MeasurementKind.batteryVoltage>/g, sub, context, true);
            obj["broadcastAddress"] = base.parse_element (/<cim:MeasurementKind.broadcastAddress>([\s\S]*?)<\/cim:MeasurementKind.broadcastAddress>/g, sub, context, true);
            obj["deviceAddressType1"] = base.parse_element (/<cim:MeasurementKind.deviceAddressType1>([\s\S]*?)<\/cim:MeasurementKind.deviceAddressType1>/g, sub, context, true);
            obj["deviceAddressType2"] = base.parse_element (/<cim:MeasurementKind.deviceAddressType2>([\s\S]*?)<\/cim:MeasurementKind.deviceAddressType2>/g, sub, context, true);
            obj["deviceAddressType3"] = base.parse_element (/<cim:MeasurementKind.deviceAddressType3>([\s\S]*?)<\/cim:MeasurementKind.deviceAddressType3>/g, sub, context, true);
            obj["deviceAddressType4"] = base.parse_element (/<cim:MeasurementKind.deviceAddressType4>([\s\S]*?)<\/cim:MeasurementKind.deviceAddressType4>/g, sub, context, true);
            obj["deviceClass"] = base.parse_element (/<cim:MeasurementKind.deviceClass>([\s\S]*?)<\/cim:MeasurementKind.deviceClass>/g, sub, context, true);
            obj["electronicSerialNumber"] = base.parse_element (/<cim:MeasurementKind.electronicSerialNumber>([\s\S]*?)<\/cim:MeasurementKind.electronicSerialNumber>/g, sub, context, true);
            obj["endDeviceID"] = base.parse_element (/<cim:MeasurementKind.endDeviceID>([\s\S]*?)<\/cim:MeasurementKind.endDeviceID>/g, sub, context, true);
            obj["groupAddressType1"] = base.parse_element (/<cim:MeasurementKind.groupAddressType1>([\s\S]*?)<\/cim:MeasurementKind.groupAddressType1>/g, sub, context, true);
            obj["groupAddressType2"] = base.parse_element (/<cim:MeasurementKind.groupAddressType2>([\s\S]*?)<\/cim:MeasurementKind.groupAddressType2>/g, sub, context, true);
            obj["groupAddressType3"] = base.parse_element (/<cim:MeasurementKind.groupAddressType3>([\s\S]*?)<\/cim:MeasurementKind.groupAddressType3>/g, sub, context, true);
            obj["groupAddressType4"] = base.parse_element (/<cim:MeasurementKind.groupAddressType4>([\s\S]*?)<\/cim:MeasurementKind.groupAddressType4>/g, sub, context, true);
            obj["ipAddress"] = base.parse_element (/<cim:MeasurementKind.ipAddress>([\s\S]*?)<\/cim:MeasurementKind.ipAddress>/g, sub, context, true);
            obj["macAddress"] = base.parse_element (/<cim:MeasurementKind.macAddress>([\s\S]*?)<\/cim:MeasurementKind.macAddress>/g, sub, context, true);
            obj["mfgAssignedConfigurationID"] = base.parse_element (/<cim:MeasurementKind.mfgAssignedConfigurationID>([\s\S]*?)<\/cim:MeasurementKind.mfgAssignedConfigurationID>/g, sub, context, true);
            obj["mfgAssignedPhysicalSerialNumber"] = base.parse_element (/<cim:MeasurementKind.mfgAssignedPhysicalSerialNumber>([\s\S]*?)<\/cim:MeasurementKind.mfgAssignedPhysicalSerialNumber>/g, sub, context, true);
            obj["mfgAssignedProductNumber"] = base.parse_element (/<cim:MeasurementKind.mfgAssignedProductNumber>([\s\S]*?)<\/cim:MeasurementKind.mfgAssignedProductNumber>/g, sub, context, true);
            obj["mfgAssignedUniqueCommunicationAddress"] = base.parse_element (/<cim:MeasurementKind.mfgAssignedUniqueCommunicationAddress>([\s\S]*?)<\/cim:MeasurementKind.mfgAssignedUniqueCommunicationAddress>/g, sub, context, true);
            obj["multiCastAddress"] = base.parse_element (/<cim:MeasurementKind.multiCastAddress>([\s\S]*?)<\/cim:MeasurementKind.multiCastAddress>/g, sub, context, true);
            obj["oneWayAddress"] = base.parse_element (/<cim:MeasurementKind.oneWayAddress>([\s\S]*?)<\/cim:MeasurementKind.oneWayAddress>/g, sub, context, true);
            obj["signalStrength"] = base.parse_element (/<cim:MeasurementKind.signalStrength>([\s\S]*?)<\/cim:MeasurementKind.signalStrength>/g, sub, context, true);
            obj["twoWayAddress"] = base.parse_element (/<cim:MeasurementKind.twoWayAddress>([\s\S]*?)<\/cim:MeasurementKind.twoWayAddress>/g, sub, context, true);
            /**
             * Moved here from Attribute #9 UOM
             */
            obj["signaltoNoiseRatio"] = base.parse_element (/<cim:MeasurementKind.signaltoNoiseRatio>([\s\S]*?)<\/cim:MeasurementKind.signaltoNoiseRatio>/g, sub, context, true);
            obj["alarm"] = base.parse_element (/<cim:MeasurementKind.alarm>([\s\S]*?)<\/cim:MeasurementKind.alarm>/g, sub, context, true);
            obj["batteryCarryover"] = base.parse_element (/<cim:MeasurementKind.batteryCarryover>([\s\S]*?)<\/cim:MeasurementKind.batteryCarryover>/g, sub, context, true);
            obj["dataOverflowAlarm"] = base.parse_element (/<cim:MeasurementKind.dataOverflowAlarm>([\s\S]*?)<\/cim:MeasurementKind.dataOverflowAlarm>/g, sub, context, true);
            obj["demandLimit"] = base.parse_element (/<cim:MeasurementKind.demandLimit>([\s\S]*?)<\/cim:MeasurementKind.demandLimit>/g, sub, context, true);
            /**
             * Usually expressed as a count as part of a billing cycle
             */
            obj["demandReset"] = base.parse_element (/<cim:MeasurementKind.demandReset>([\s\S]*?)<\/cim:MeasurementKind.demandReset>/g, sub, context, true);
            obj["diagnostic"] = base.parse_element (/<cim:MeasurementKind.diagnostic>([\s\S]*?)<\/cim:MeasurementKind.diagnostic>/g, sub, context, true);
            obj["emergencyLimit"] = base.parse_element (/<cim:MeasurementKind.emergencyLimit>([\s\S]*?)<\/cim:MeasurementKind.emergencyLimit>/g, sub, context, true);
            obj["encoderTamper"] = base.parse_element (/<cim:MeasurementKind.encoderTamper>([\s\S]*?)<\/cim:MeasurementKind.encoderTamper>/g, sub, context, true);
            obj["ieee1366MomentaryInterruption"] = base.parse_element (/<cim:MeasurementKind.ieee1366MomentaryInterruption>([\s\S]*?)<\/cim:MeasurementKind.ieee1366MomentaryInterruption>/g, sub, context, true);
            obj["ieee1366MomentaryInterruptionEvent"] = base.parse_element (/<cim:MeasurementKind.ieee1366MomentaryInterruptionEvent>([\s\S]*?)<\/cim:MeasurementKind.ieee1366MomentaryInterruptionEvent>/g, sub, context, true);
            obj["ieee1366SustainedInterruption"] = base.parse_element (/<cim:MeasurementKind.ieee1366SustainedInterruption>([\s\S]*?)<\/cim:MeasurementKind.ieee1366SustainedInterruption>/g, sub, context, true);
            obj["interruptionBehaviour"] = base.parse_element (/<cim:MeasurementKind.interruptionBehaviour>([\s\S]*?)<\/cim:MeasurementKind.interruptionBehaviour>/g, sub, context, true);
            obj["inversionTamper"] = base.parse_element (/<cim:MeasurementKind.inversionTamper>([\s\S]*?)<\/cim:MeasurementKind.inversionTamper>/g, sub, context, true);
            obj["loadInterrupt"] = base.parse_element (/<cim:MeasurementKind.loadInterrupt>([\s\S]*?)<\/cim:MeasurementKind.loadInterrupt>/g, sub, context, true);
            obj["loadShed"] = base.parse_element (/<cim:MeasurementKind.loadShed>([\s\S]*?)<\/cim:MeasurementKind.loadShed>/g, sub, context, true);
            obj["maintenance"] = base.parse_element (/<cim:MeasurementKind.maintenance>([\s\S]*?)<\/cim:MeasurementKind.maintenance>/g, sub, context, true);
            obj["physicalTamper"] = base.parse_element (/<cim:MeasurementKind.physicalTamper>([\s\S]*?)<\/cim:MeasurementKind.physicalTamper>/g, sub, context, true);
            obj["powerLossTamper"] = base.parse_element (/<cim:MeasurementKind.powerLossTamper>([\s\S]*?)<\/cim:MeasurementKind.powerLossTamper>/g, sub, context, true);
            obj["powerOutage"] = base.parse_element (/<cim:MeasurementKind.powerOutage>([\s\S]*?)<\/cim:MeasurementKind.powerOutage>/g, sub, context, true);
            obj["powerQuality"] = base.parse_element (/<cim:MeasurementKind.powerQuality>([\s\S]*?)<\/cim:MeasurementKind.powerQuality>/g, sub, context, true);
            obj["powerRestoration"] = base.parse_element (/<cim:MeasurementKind.powerRestoration>([\s\S]*?)<\/cim:MeasurementKind.powerRestoration>/g, sub, context, true);
            obj["programmed"] = base.parse_element (/<cim:MeasurementKind.programmed>([\s\S]*?)<\/cim:MeasurementKind.programmed>/g, sub, context, true);
            obj["pushbutton"] = base.parse_element (/<cim:MeasurementKind.pushbutton>([\s\S]*?)<\/cim:MeasurementKind.pushbutton>/g, sub, context, true);
            obj["relayActivation"] = base.parse_element (/<cim:MeasurementKind.relayActivation>([\s\S]*?)<\/cim:MeasurementKind.relayActivation>/g, sub, context, true);
            /**
             * Usually expressed as a count
             */
            obj["relayCycle"] = base.parse_element (/<cim:MeasurementKind.relayCycle>([\s\S]*?)<\/cim:MeasurementKind.relayCycle>/g, sub, context, true);
            obj["removalTamper"] = base.parse_element (/<cim:MeasurementKind.removalTamper>([\s\S]*?)<\/cim:MeasurementKind.removalTamper>/g, sub, context, true);
            obj["reprogrammingTamper"] = base.parse_element (/<cim:MeasurementKind.reprogrammingTamper>([\s\S]*?)<\/cim:MeasurementKind.reprogrammingTamper>/g, sub, context, true);
            obj["reverseRotationTamper"] = base.parse_element (/<cim:MeasurementKind.reverseRotationTamper>([\s\S]*?)<\/cim:MeasurementKind.reverseRotationTamper>/g, sub, context, true);
            obj["switchArmed"] = base.parse_element (/<cim:MeasurementKind.switchArmed>([\s\S]*?)<\/cim:MeasurementKind.switchArmed>/g, sub, context, true);
            obj["switchDisabled"] = base.parse_element (/<cim:MeasurementKind.switchDisabled>([\s\S]*?)<\/cim:MeasurementKind.switchDisabled>/g, sub, context, true);
            obj["tamper"] = base.parse_element (/<cim:MeasurementKind.tamper>([\s\S]*?)<\/cim:MeasurementKind.tamper>/g, sub, context, true);
            obj["watchdogTimeout"] = base.parse_element (/<cim:MeasurementKind.watchdogTimeout>([\s\S]*?)<\/cim:MeasurementKind.watchdogTimeout>/g, sub, context, true);
            /**
             * Customer�s bill for the previous billing period (Currency)
             */
            obj["billLastPeriod"] = base.parse_element (/<cim:MeasurementKind.billLastPeriod>([\s\S]*?)<\/cim:MeasurementKind.billLastPeriod>/g, sub, context, true);
            /**
             * Customer�s bill, as known thus far within the present billing period (Currency)
             */
            obj["billToDate"] = base.parse_element (/<cim:MeasurementKind.billToDate>([\s\S]*?)<\/cim:MeasurementKind.billToDate>/g, sub, context, true);
            /**
             * Customer�s bill for the (Currency)
             */
            obj["billCarryover"] = base.parse_element (/<cim:MeasurementKind.billCarryover>([\s\S]*?)<\/cim:MeasurementKind.billCarryover>/g, sub, context, true);
            /**
             * Monthly fee for connection to commodity.
             */
            obj["connectionFee"] = base.parse_element (/<cim:MeasurementKind.connectionFee>([\s\S]*?)<\/cim:MeasurementKind.connectionFee>/g, sub, context, true);
            /**
             * Sound
             */
            obj["audibleVolume"] = base.parse_element (/<cim:MeasurementKind.audibleVolume>([\s\S]*?)<\/cim:MeasurementKind.audibleVolume>/g, sub, context, true);
            obj["volumetricFlow"] = base.parse_element (/<cim:MeasurementKind.volumetricFlow>([\s\S]*?)<\/cim:MeasurementKind.volumetricFlow>/g, sub, context, true);
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
             */
            obj["none"] = base.parse_element (/<cim:CommodityKind.none>([\s\S]*?)<\/cim:CommodityKind.none>/g, sub, context, true);
            /**
             * All types of metered quantities.
             * This type of reading comes from the meter and represents a �secondary� metered value.
             */
            obj["electricitySecondaryMetered"] = base.parse_element (/<cim:CommodityKind.electricitySecondaryMetered>([\s\S]*?)<\/cim:CommodityKind.electricitySecondaryMetered>/g, sub, context, true);
            /**
             * It is possible for a meter to be outfitted with an external VT and/or CT.
             * The meter might not be aware of these devices, and the display not compensate for their presence. Ultimately, when these scalars are applied, the value that represents the service value is called the �primary metered� value. The �index� in sub-category 3 mirrors those of sub-category 0.
             */
            obj["electricityPrimaryMetered"] = base.parse_element (/<cim:CommodityKind.electricityPrimaryMetered>([\s\S]*?)<\/cim:CommodityKind.electricityPrimaryMetered>/g, sub, context, true);
            /**
             * A measurement of the communication infrastructure itself.
             */
            obj["communication"] = base.parse_element (/<cim:CommodityKind.communication>([\s\S]*?)<\/cim:CommodityKind.communication>/g, sub, context, true);
            obj["air"] = base.parse_element (/<cim:CommodityKind.air>([\s\S]*?)<\/cim:CommodityKind.air>/g, sub, context, true);
            /**
             * (SF<sub>6</sub> is found separately below.)
             */
            obj["insulativeGas"] = base.parse_element (/<cim:CommodityKind.insulativeGas>([\s\S]*?)<\/cim:CommodityKind.insulativeGas>/g, sub, context, true);
            obj["insulativeOil"] = base.parse_element (/<cim:CommodityKind.insulativeOil>([\s\S]*?)<\/cim:CommodityKind.insulativeOil>/g, sub, context, true);
            obj["naturalGas"] = base.parse_element (/<cim:CommodityKind.naturalGas>([\s\S]*?)<\/cim:CommodityKind.naturalGas>/g, sub, context, true);
            obj["propane"] = base.parse_element (/<cim:CommodityKind.propane>([\s\S]*?)<\/cim:CommodityKind.propane>/g, sub, context, true);
            /**
             * Drinkable water
             */
            obj["potableWater"] = base.parse_element (/<cim:CommodityKind.potableWater>([\s\S]*?)<\/cim:CommodityKind.potableWater>/g, sub, context, true);
            /**
             * Water in steam form, usually used for heating.
             */
            obj["steam"] = base.parse_element (/<cim:CommodityKind.steam>([\s\S]*?)<\/cim:CommodityKind.steam>/g, sub, context, true);
            /**
             * (Sewerage)
             */
            obj["wasteWater"] = base.parse_element (/<cim:CommodityKind.wasteWater>([\s\S]*?)<\/cim:CommodityKind.wasteWater>/g, sub, context, true);
            /**
             * This fluid is likely in liquid form.
             * It is not necessarily water or water based. The warm fluid returns cooler than when it was sent. The heat conveyed may be metered.
             */
            obj["heatingFluid"] = base.parse_element (/<cim:CommodityKind.heatingFluid>([\s\S]*?)<\/cim:CommodityKind.heatingFluid>/g, sub, context, true);
            /**
             * The cool fluid returns warmer than when it was sent.
             * The heat conveyed may be metered.
             */
            obj["coolingFluid"] = base.parse_element (/<cim:CommodityKind.coolingFluid>([\s\S]*?)<\/cim:CommodityKind.coolingFluid>/g, sub, context, true);
            /**
             * Reclaimed water � possibly used for irrigation but not sufficiently treated to be considered safe for drinking.
             */
            obj["nonpotableWater"] = base.parse_element (/<cim:CommodityKind.nonpotableWater>([\s\S]*?)<\/cim:CommodityKind.nonpotableWater>/g, sub, context, true);
            /**
             * Nitrous Oxides NO<sub>X</sub>
             */
            obj["nox"] = base.parse_element (/<cim:CommodityKind.nox>([\s\S]*?)<\/cim:CommodityKind.nox>/g, sub, context, true);
            /**
             * Sulfur Dioxide SO<sub>2</sub>
             */
            obj["so2"] = base.parse_element (/<cim:CommodityKind.so2>([\s\S]*?)<\/cim:CommodityKind.so2>/g, sub, context, true);
            /**
             * Methane CH<sub>4</sub>
             */
            obj["ch4"] = base.parse_element (/<cim:CommodityKind.ch4>([\s\S]*?)<\/cim:CommodityKind.ch4>/g, sub, context, true);
            /**
             * Carbon Dioxide CO<sub>2</sub>
             */
            obj["co2"] = base.parse_element (/<cim:CommodityKind.co2>([\s\S]*?)<\/cim:CommodityKind.co2>/g, sub, context, true);
            obj["carbon"] = base.parse_element (/<cim:CommodityKind.carbon>([\s\S]*?)<\/cim:CommodityKind.carbon>/g, sub, context, true);
            /**
             * Hexachlorocyclohexane HCH
             */
            obj["hch"] = base.parse_element (/<cim:CommodityKind.hch>([\s\S]*?)<\/cim:CommodityKind.hch>/g, sub, context, true);
            /**
             * Perfluorocarbons PFC
             */
            obj["pfc"] = base.parse_element (/<cim:CommodityKind.pfc>([\s\S]*?)<\/cim:CommodityKind.pfc>/g, sub, context, true);
            /**
             * Sulfurhexafluoride SF<sub>6</sub>
             */
            obj["sf6"] = base.parse_element (/<cim:CommodityKind.sf6>([\s\S]*?)<\/cim:CommodityKind.sf6>/g, sub, context, true);
            /**
             * Television
             */
            obj["tvLicence"] = base.parse_element (/<cim:CommodityKind.tvLicence>([\s\S]*?)<\/cim:CommodityKind.tvLicence>/g, sub, context, true);
            /**
             * Internet service
             */
            obj["internet"] = base.parse_element (/<cim:CommodityKind.internet>([\s\S]*?)<\/cim:CommodityKind.internet>/g, sub, context, true);
            /**
             * trash
             */
            obj["refuse"] = base.parse_element (/<cim:CommodityKind.refuse>([\s\S]*?)<\/cim:CommodityKind.refuse>/g, sub, context, true);
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
             */
            obj["none"] = base.parse_element (/<cim:AggregateKind.none>([\s\S]*?)<\/cim:AggregateKind.none>/g, sub, context, true);
            obj["average"] = base.parse_element (/<cim:AggregateKind.average>([\s\S]*?)<\/cim:AggregateKind.average>/g, sub, context, true);
            /**
             * The value represents an amount over which a threshold was exceeded.
             */
            obj["excess"] = base.parse_element (/<cim:AggregateKind.excess>([\s\S]*?)<\/cim:AggregateKind.excess>/g, sub, context, true);
            /**
             * The value represents a programmed threshold.
             */
            obj["highThreshold"] = base.parse_element (/<cim:AggregateKind.highThreshold>([\s\S]*?)<\/cim:AggregateKind.highThreshold>/g, sub, context, true);
            /**
             * The value represents a programmed threshold.
             */
            obj["lowThreshold"] = base.parse_element (/<cim:AggregateKind.lowThreshold>([\s\S]*?)<\/cim:AggregateKind.lowThreshold>/g, sub, context, true);
            /**
             * The highest value observed
             */
            obj["maximum"] = base.parse_element (/<cim:AggregateKind.maximum>([\s\S]*?)<\/cim:AggregateKind.maximum>/g, sub, context, true);
            /**
             * The smallest value observed
             */
            obj["minimum"] = base.parse_element (/<cim:AggregateKind.minimum>([\s\S]*?)<\/cim:AggregateKind.minimum>/g, sub, context, true);
            obj["nominal"] = base.parse_element (/<cim:AggregateKind.nominal>([\s\S]*?)<\/cim:AggregateKind.nominal>/g, sub, context, true);
            obj["normal"] = base.parse_element (/<cim:AggregateKind.normal>([\s\S]*?)<\/cim:AggregateKind.normal>/g, sub, context, true);
            /**
             * The second highest value observed
             */
            obj["secondMaximum"] = base.parse_element (/<cim:AggregateKind.secondMaximum>([\s\S]*?)<\/cim:AggregateKind.secondMaximum>/g, sub, context, true);
            /**
             * The second smallest value observed
             */
            obj["secondMinimum"] = base.parse_element (/<cim:AggregateKind.secondMinimum>([\s\S]*?)<\/cim:AggregateKind.secondMinimum>/g, sub, context, true);
            /**
             * The third highest value observed
             */
            obj["thirdMaximum"] = base.parse_element (/<cim:AggregateKind.thirdMaximum>([\s\S]*?)<\/cim:AggregateKind.thirdMaximum>/g, sub, context, true);
            /**
             * The fourth highest value observed
             */
            obj["fourthMaximum"] = base.parse_element (/<cim:AggregateKind.fourthMaximum>([\s\S]*?)<\/cim:AggregateKind.fourthMaximum>/g, sub, context, true);
            /**
             * The fifth highest value observed
             */
            obj["fifthMaximum"] = base.parse_element (/<cim:AggregateKind.fifthMaximum>([\s\S]*?)<\/cim:AggregateKind.fifthMaximum>/g, sub, context, true);
            /**
             * The accumulated sum
             */
            obj["sum"] = base.parse_element (/<cim:AggregateKind.sum>([\s\S]*?)<\/cim:AggregateKind.sum>/g, sub, context, true);
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
             */
            obj["none"] = base.parse_element (/<cim:MacroPeriodKind.none>([\s\S]*?)<\/cim:MacroPeriodKind.none>/g, sub, context, true);
            /**
             * Captured during the billing period starting at midnight of the first day of the billing period (as defined by the billing cycle day).
             * If during the current billing period, it specifies a period from the start of the current billing period until "now".
             */
            obj["billingPeriod"] = base.parse_element (/<cim:MacroPeriodKind.billingPeriod>([\s\S]*?)<\/cim:MacroPeriodKind.billingPeriod>/g, sub, context, true);
            /**
             * Daily Period starting at midnight.
             * If for the current day, this specifies the time from midnight to "now".
             */
            obj["daily"] = base.parse_element (/<cim:MacroPeriodKind.daily>([\s\S]*?)<\/cim:MacroPeriodKind.daily>/g, sub, context, true);
            /**
             * Monthly period starting at midnight on the first day of the month.
             * If within the current month, this specifies the period from the start of the month until "now."
             */
            obj["monthly"] = base.parse_element (/<cim:MacroPeriodKind.monthly>([\s\S]*?)<\/cim:MacroPeriodKind.monthly>/g, sub, context, true);
            /**
             * A season of time spanning multiple months.
             * E.g. "Summer," "Spring," "Fall," and "Winter" based cycle. If within the current season, it specifies the period from the start of the current season until "now."
             */
            obj["seasonal"] = base.parse_element (/<cim:MacroPeriodKind.seasonal>([\s\S]*?)<\/cim:MacroPeriodKind.seasonal>/g, sub, context, true);
            /**
             * Weekly period starting at midnight on the first day of the week and ending the instant before midnight the last day of the week.
             * If within the current week, it specifies the period from the start of the week until "now."
             */
            obj["weekly"] = base.parse_element (/<cim:MacroPeriodKind.weekly>([\s\S]*?)<\/cim:MacroPeriodKind.weekly>/g, sub, context, true);
            /**
             * For the period defined by the start and end of the TimePeriod element in the message.
             */
            obj["specifiedPeriod"] = base.parse_element (/<cim:MacroPeriodKind.specifiedPeriod>([\s\S]*?)<\/cim:MacroPeriodKind.specifiedPeriod>/g, sub, context, true);
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