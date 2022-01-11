import React, { useState } from "react";
import { Pressable } from "react-native";
import { Box, HStack, themeTools, useColorModeValue, useTheme } from "native-base";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import AnimatedTextLabel from "./AnimatedTextLabel";
import SwipeableView from "../components/SwipeableView";
import { Icon, Input } from "native-base";
import { Feather } from "@expo/vector-icons";

const TaskItem = ({
    id,
    isDone,
    update,
    onPresslabel,
    onRemove,
    subject,
    simultaneousHandlers,
}) => {
    const theme = useTheme();
    const highlight = themeTools.getColor(theme, useColorModeValue("cyan.500", "blue.400"));
    const boxStroke = themeTools.getColor(theme, useColorModeValue("muted.300", "muted.500"));
    const checkMarkColor = themeTools.getColor(theme, useColorModeValue("white", "white"));
    const activeTextColor = themeTools.getColor(theme, useColorModeValue("darkText", "lightText"));
    const doneTextColor = themeTools.getColor(theme, useColorModeValue("muted.400", "muted.600"));
    const [Value, setValue] = useState(subject);
    const [isEdit, setisEdit] = useState(false);
    return (
        <SwipeableView
            onSwipeLeft={() => onRemove(id)}
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
            <Pressable onPress={() => update(id, "completed", !isDone)}>
                <HStack px={4} py={3} alignItems="center" spacing={2} bg={"white"}>
                    <Box width={30} height={30} mr={2}>
                        <AnimatedCheckbox
                            checked={isDone}
                            highlightColor={highlight || "#4444ff"}
                            checkmarkColor={checkMarkColor || "#ffffff"}
                            boxOutlineColor={boxStroke || "#4444ff"}
                        />
                    </Box>
                    {isEdit ? (
                        <Input
                            value={Value}
                            autoFocus
                            onChangeText={(val) => setValue(val)}
                            onBlur={() => (update(id, "subject", Value), setisEdit(false))}
                            variant={"unstyled"}
                            p={"0"}
                            m={"0"}
                            fontSize={16}
                        />
                    ) : (
                        <Pressable onLongPress={() => setisEdit(true)}>
                            <AnimatedTextLabel
                                isDone={isDone}
                                textColor={activeTextColor}
                                inActive={doneTextColor}
                            >
                                {subject}
                            </AnimatedTextLabel>
                        </Pressable>
                    )}
                </HStack>
            </Pressable>
        </SwipeableView>
    );
};

export default TaskItem;
