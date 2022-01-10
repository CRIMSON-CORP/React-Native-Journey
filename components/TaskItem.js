import React, { useCallback } from "react";
import { View, Text, Pressable } from "react-native";
import { Box, HStack, themeTools, useColorModeValue, useTheme } from "native-base";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import AnimatedTextLabel from "./AnimatedTextLabel";

const TaskItem = ({ isDone, setDone }) => {
    const theme = useTheme;
    const highlight = themeTools.getColor(theme, useColorModeValue("red.500", "blue.400"));
    const boxStroke = themeTools.getColor(theme, useColorModeValue("muted.300", "muted.500"));
    const checkMarkColor = themeTools.getColor(theme, useColorModeValue("white", "white"));
    const activeTextColor = themeTools.getColor(theme, useColorModeValue("darkText", "lightText"));
    const doneTextColor = themeTools.getColor(theme, useColorModeValue("muted.400", "muted.600"));
    return (
        <Pressable onPress={setDone}>
            <HStack px={4} py={2} alignItems="center" spacing={2}>
                <Box width={30} height={30} mr={2}>
                    <AnimatedCheckbox
                        checked={isDone}
                        highlightColor={highlight || "#4444ff"}
                        checkmarkColor={checkMarkColor || "#ffffff"}
                        boxOutlineColor={boxStroke || "#4444ff"}
                    />
                </Box>
                <AnimatedTextLabel
                    isDone={isDone}
                    textColor={activeTextColor}
                    inActive={doneTextColor}
                >
                    Hello
                </AnimatedTextLabel>
            </HStack>
        </Pressable>
    );
};

export default TaskItem;
