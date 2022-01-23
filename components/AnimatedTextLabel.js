import React, { useEffect, memo } from "react";
import { Pressable } from "react-native";
import { Box, HStack, Text } from "native-base";
import Animated, {
    Easing,
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
    withDelay,
    interpolateColor,
} from "react-native-reanimated";

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedHStack = Animated.createAnimatedComponent(HStack);

const AnimatedTaskLabel = memo((props) => {
    const { strikethrough, textColor, inactiveTextColor, children } = props;
    const hstackOffSet = useSharedValue(0);
    const hstackAnimatedStyles = useAnimatedStyle(
        () => ({
            transform: [{ translateX: hstackOffSet.value }],
        }),
        [strikethrough]
    );
    const textColorProgress = useSharedValue(0);
    const TextColorAnimatedStyles = useAnimatedStyle(
        () => ({
            color: interpolateColor(
                textColorProgress.value,
                [0, 1],
                [textColor, inactiveTextColor]
            ),
        }),
        [strikethrough, textColor, inactiveTextColor]
    );
    const strikethroughWidth = useSharedValue(0);
    const strikethroughAnimatedStyles = useAnimatedStyle(
        () => ({
            width: `${strikethroughWidth.value * 100}%`,
            borderBottomColor: interpolateColor(
                textColorProgress.value,
                [0, 1],
                [textColor, inactiveTextColor]
            ),
        }),
        [strikethrough, textColor, inactiveTextColor]
    );

    useEffect(() => {
        const easing = Easing.out(Easing.quad);
        if (strikethrough) {
            hstackOffSet.value = withSequence(
                withTiming(4, { duration: 200, easing }),
                withTiming(0, { duration: 200, easing })
            );
            strikethroughWidth.value = withTiming(1, { duration: 400, easing });
            textColorProgress.value = withDelay(1000, withTiming(1, { duration: 400, easing }));
        } else {
            strikethroughWidth.value = withTiming(0, { duration: 400, easing });
            textColorProgress.value = withTiming(0, { duration: 400, easing });
        }
    });

    return (
        <AnimatedHStack alignItems="center" style={[hstackAnimatedStyles]}>
            <Animated.Text
                fontSize={19}
                noOfLines={1}
                isTruncated
                px={1}
                style={[TextColorAnimatedStyles]}
            >
                {children}
            </Animated.Text>
            <AnimatedBox
                position="absolute"
                h={1}
                borderBottomWidth={1}
                style={[strikethroughAnimatedStyles]}
            />
        </AnimatedHStack>
    );
});

export default AnimatedTaskLabel;

// My Code from tutorial

// import React, { useEffect } from "react";
// import Animated, {
//     Easing,
//     withTiming,
//     useSharedValue,
//     withDelay,
//     interpolateColor,
//     useAnimatedStyle,
//     withSequence,
// } from "react-native-reanimated";
// import { HStack, Box, Text } from "native-base";
// const AnimatedTextLabel = ({ isDone, children, textColor, inActive }) => {
//     const AnimatedHStack = Animated.createAnimatedComponent(HStack);
//     const AnimatedBox = Animated.createAnimatedComponent(Box);
//     const AnimatedText = Animated.createAnimatedComponent(Text);

//     // Animation that moves text to the right a little when task is done
//     const hstackOffset = useSharedValue(0);
//     const hstackanimation = useAnimatedStyle(
//         () => ({ transform: [{ translateX: hstackOffset.value }] }),
//         [isDone]
//     );
//     // Animation that moves text to the right a little when task is done
//     const strokeThroughOffset = useSharedValue(0);
//     const strikeThroughanimation = useAnimatedStyle(
//         () => ({
//             width: `${strokeThroughOffset.value * 100}%`,
//             borderBottomColor: interpolateColor(
//                 strokeThroughOffset.value,
//                 [0, 1],
//                 [textColor, inActive],
//                 "RGB"
//             ),
//         }),
//         [isDone, textColor, inActive]
//     );

//     // anination that changes color of text when task is done
//     const textColorAnimationValue = useSharedValue(0);
//     const textColorAnimation = useAnimatedStyle(
//         () => ({
//             color: interpolateColor(
//                 textColorAnimationValue.value,
//                 [0, 1],
//                 [textColor, inActive],
//                 "RGB"
//             ),
//         }),
//         [isDone, textColor, inActive]
//     );

//     useEffect(() => {
//         const easing = Easing.out(Easing.quad);
//         // this changes value of sharedValue when task is done
//         if (isDone) {
//             // moves text 6 px to the right and back, Sequence
//             hstackOffset.value = withSequence(
//                 withTiming(6, { duration: 500, easing }),
//                 withTiming(0, { duration: 500, easing })
//             );
//             // Chnages colr of the text, with a delay of 200ms
//             textColorAnimationValue.value = withDelay(200, withTiming(1, { duration: 200 }));
//             strokeThroughOffset.value = withDelay(
//                 500,
//                 withTiming(1, {
//                     duration: 400,
//                 })
//             );
//         } else {
//             // Changes color of text back to undone task original text color
//             textColorAnimationValue.value = withTiming(0, {
//                 duration: 200,
//             });
//             strokeThroughOffset.value = withTiming(0, {
//                 duration: 400,
//             });
//         }
//     }, [isDone]);
//     return (
//         <AnimatedHStack
//             alignItems="center"
//             // style={hstackanimation}
//         >
//             <AnimatedText fontSize={16} isTruncated style={textColorAnimation}>
//                 {children}
//             </AnimatedText>
//             <AnimatedBox
//                 position="absolute"
//                 borderBottomWidth={1}
//                 //  style={strikeThroughanimation}
//             />
//         </AnimatedHStack>
//     );
// };

// export default AnimatedTextLabel;
