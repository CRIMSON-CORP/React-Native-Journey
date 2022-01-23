import React, { useEffect } from "react";
import {
    Text,
    HStack,
    Switch,
    useColorMode,
    useColorModeValue,
    themeTools,
    theme,
} from "native-base";
import Animated, {
    interpolateColor,
    runOnJS,
    runOnUI,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
function ThemeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();
    const colorTheme = {
        _dark: {
            color: "black",
        },
        _ligt: {
            color: "gray:600",
        },
    };

    function ColorAnimationInterpolator(val, output = []) {
        if (colorMode === "light") {
            return interpolateColor(val, [0, 1], output, "RGB");
        } else {
            return interpolateColor(val, [0, 1], output, "RGB");
        }
    }

    const light = themeTools.getColor(theme, useColorModeValue("red.400", "green.400"));
    const dark = themeTools.getColor(theme, useColorModeValue("yellow.400", "blue.400"));

    const animatedColorValue = useSharedValue(0);

    const animatedText = useAnimatedStyle(() => ({
        color:
            colorMode === "light"
                ? interpolateColor(animatedColorValue.value, [0, 1], [light, dark], "RGB")
                : interpolateColor(animatedColorValue.value, [0, 1], [light, dark], "RGB"),
    }));

    useEffect(() => {
        if (colorMode === "light") {
            animatedColorValue.value = withTiming(0, {
                duration: 200,
            });
        } else {
            animatedColorValue.value = withTiming(1, {
                duration: 200,
            });
        }
    }, [colorMode]);
    return (
        <HStack flexDirection="row" justifyContent="center" space={4} alignItems="center">
            <Animated.Text style={[animatedText]}>Light</Animated.Text>
            <Switch
                isChecked={colorMode === "dark"}
                onToggle={() => toggleColorMode()}
                bg={"green.300"}
                thumbColor={"yellow.400"}
            />
            <Animated.Text style={[animatedText]}>Dark</Animated.Text>
        </HStack>
    );
}

export default ThemeToggler;
