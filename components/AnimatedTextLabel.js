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

    const hstackOffset = useSharedValue(0);
    const hstackanimation = useAnimatedStyle(
        () => ({
            transform: [{ translateX: hstackOffset.value }],
        }),
        [isDone]
    );

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
        if (isDone) {
            withSequence(2, [
                withTiming((hstackOffset.value = 4), {
                    duration: 500,
                    easing,
                }),
                withTiming((hstackOffset.value = 0), {
                    duration: 500,
                    easing,
                }),
            ]);
        } else {
        }
    }, [isDone]);
    return (
        <AnimatedHStack alignItems="center">
            <AnimatedText fontSize={16} animatedProps={textColorAnimation} isTruncated>
                {children}
            </AnimatedText>
            <AnimatedBox position="absolute" borderBottomWidth={1} />
        </AnimatedHStack>
    );
};

export default AnimatedTextLabel;
