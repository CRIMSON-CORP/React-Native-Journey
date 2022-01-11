import { Box } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
    Easing,
} from "react-native-reanimated";
import StyledComponent from "../utils/styled";

const StyledView = StyledComponent(Animated.View);

const { width } = Dimensions.get("window");
const SwipeLimit = -width * 0.2;
const SwipeableView = ({ children, BackView, onSwipeLeft = () => {}, simultaneousHandlers }) => {
    const translateX = useSharedValue(0);
    const panGesture = useAnimatedGestureHandler({
        onActive: (e) => {
            translateX.value = Math.max(-128, Math.min(0, e.translationX));
        },
        onEnd: () => {
            const shouldDelete = translateX.value < SwipeLimit;
            if (shouldDelete) {
                translateX.value = withTiming(-width, { easing: Easing.linear });
                runOnJS(onSwipeLeft)();
            } else {
                translateX.value = withTiming(0);
            }
        },
    });
    const facade = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));
    return (
        <StyledView>
            {BackView && (
                <Box position="absolute" top={0} left={0} right={0} bottom={0}>
                    {BackView}
                </Box>
            )}
            <PanGestureHandler
                simultaneousHandlers={simultaneousHandlers}
                onGestureEvent={panGesture}
            >
                <StyledView style={facade}>{children}</StyledView>
            </PanGestureHandler>
        </StyledView>
    );
};

export default SwipeableView;
