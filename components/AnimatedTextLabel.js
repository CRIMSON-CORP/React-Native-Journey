import React, { useEffect } from "react";
import Animated, {
    Easing,
    withTiming,
    useSharedValue,
    withDelay,
    interpolateColor,
    useAnimatedStyle,
    withSequence,
} from "react-native-reanimated";
import { HStack, Box, Text } from "native-base";
const AnimatedTextLabel = ({ isDone, children, textColor, inActive }) => {
    const AnimatedHStack = Animated.createAnimatedComponent(HStack);
    const AnimatedBox = Animated.createAnimatedComponent(Box);
    const AnimatedText = Animated.createAnimatedComponent(Text);

    // Animation that moves text to the right a little when task is done
    const hstackOffset = useSharedValue(0);
    const hstackanimation = useAnimatedStyle(
        () => ({ transform: [{ translateX: hstackOffset.value }] }),
        [isDone]
    );
    // Animation that moves text to the right a little when task is done
    const strokeThroughOffset = useSharedValue(0);
    const strokeColor = useSharedValue(0);
    const strikeThroughanimation = useAnimatedStyle(
        () => ({
            width: strokeThroughOffset.value,
            borderBottomColor: interpolateColor(
                strokeColor.value,
                [0, 1],
                [textColor, inActive],
                "RGB"
            ),
        }),
        [isDone, textColor, inActive]
    );

    // anination that changes color of text when task is done
    const textColorAnimationValue = useSharedValue(0);
    const textColorAnimation = useAnimatedStyle(
        () => ({
            color: interpolateColor(
                textColorAnimationValue.value,
                [0, 1],
                [textColor, inActive],
                "RGB"
            ),
        }),
        [isDone, textColor, inActive]
    );

    useEffect(() => {
        const easing = Easing.out(Easing.quad);
        // this changes value of sharedValue when task is done
        if (isDone) {
            // moves text 6 px to the right and back, Sequence
            hstackOffset.value = withSequence(
                withTiming(6, { duration: 500, easing }),
                withTiming(0, { duration: 500, easing })
            );
            // Chnages colr of the text, with a delay of 200ms
            textColorAnimationValue.value = withDelay(
                200,
                withTiming(1, { duration: 200, easing: Easing.linear })
            );
            strokeThroughOffset.value = withDelay(
                500,
                withTiming("100%", {
                    duration: 400,
                })
            );
            strokeColor.value = withTiming(1, {
                duration: 400,
            });
        } else {
            // Changes color of text back to undone task original text color
            textColorAnimationValue.value = withTiming(0, {
                duration: 200,
                easing: Easing.linear,
            });
            strokeThroughOffset.value = withTiming(0, {
                duration: 400,
            });
            strokeColor.value = withTiming(0, {
                duration: 300,
            });
        }
    }, [isDone]);
    return (
        <AnimatedHStack alignItems="center" style={hstackanimation}>
            <AnimatedText fontSize={16} isTruncated style={textColorAnimation}>
                {children}
            </AnimatedText>
            <AnimatedBox
                position="absolute"
                borderBottomWidth={1}
                style={{}}
                style={strikeThroughanimation}
            />
        </AnimatedHStack>
    );
};

export default AnimatedTextLabel;
