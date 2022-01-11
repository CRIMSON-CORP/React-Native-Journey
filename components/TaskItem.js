import React from "react";
import { Pressable } from "react-native";
import { Box, HStack, themeTools, useColorModeValue, useTheme } from "native-base";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import AnimatedTextLabel from "./AnimatedTextLabel";
import SwipeableView from "../components/SwipeableView";
import { Icon } from "native-base";
import { Feather } from "@expo/vector-icons";

const TaskItem = ({ isDone, setDone, onPresslabel, onRemove, subject, simultaneousHandlers }) => {
    const theme = useTheme();
    const highlight = themeTools.getColor(theme, useColorModeValue("cyan.500", "blue.400"));
    const boxStroke = themeTools.getColor(theme, useColorModeValue("muted.300", "muted.500"));
    const checkMarkColor = themeTools.getColor(theme, useColorModeValue("white", "white"));
    const activeTextColor = themeTools.getColor(theme, useColorModeValue("darkText", "lightText"));
    const doneTextColor = themeTools.getColor(theme, useColorModeValue("muted.400", "muted.600"));
    return (
        <SwipeableView
            onSwipeLeft={onRemove}
            BackView={
                <Box
                    w="full"
                    h="full"
                    justifyContent={"center"}
                    alignItems={"flex-end"}
                    pr={4}
                    bg={"red.500"}
                >
                    <Icon
                        color={"white"}
                        as={<Feather name="trash-2" style={{ fontSize: 20, color: "white" }} />}
                    />
                </Box>
            }
            simultaneousHandlers={simultaneousHandlers}
        >
            <Pressable onPress={setDone}>
                <HStack px={4} py={3} alignItems="center" spacing={2} bg={"white"}>
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
                        {subject}
                    </AnimatedTextLabel>
                </HStack>
            </Pressable>
        </SwipeableView>
    );
};

export default TaskItem;
