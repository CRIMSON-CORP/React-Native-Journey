import React, { useCallback } from "react";
import { Pressable } from "react-native";
import { Box, HStack, Icon, Input, themeTools, useTheme, useColorModeValue } from "native-base";
import { Feather } from "@expo/vector-icons";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import AnimatedTaskLabel from "./AnimatedTextLabel";
import SwipableView from "./SwipeableView";

const TaskItem = (props) => {
    const {
        isEditing,
        isDone,
        onToggleCheckbox,
        subject,
        onPressLabel,
        onRemove,
        onChangeSubject,
        onFinishEditing,
        simultaneousHandlers,
    } = props;

    const theme = useTheme();
    const highlightColor = themeTools.getColor(theme, useColorModeValue("blue.500", "blue.400"));
    const boxStroke = themeTools.getColor(theme, useColorModeValue("muted.300", "muted.500"));
    const checkmarkColor = themeTools.getColor(theme, useColorModeValue("white", "white"));
    const activeTextColor = themeTools.getColor(theme, useColorModeValue("darkText", "lightText"));
    const doneTextColor = themeTools.getColor(theme, useColorModeValue("muted.400", "muted.600"));

    const handleChangeSubject = useCallback(
        (e) => {
            onChangeSubject && onChangeSubject(e.nativeEvent.text);
        },
        [onChangeSubject]
    );

    return (
        <Pressable onPress={onToggleCheckbox}>
            <SwipableView
                simultaneousHandlers={simultaneousHandlers}
                onSwipeLeft={onRemove}
                BackView={
                    <Box
                        w="full"
                        h="full"
                        bg="red.500"
                        alignItems="flex-end"
                        justifyContent="center"
                        pr={4}
                    >
                        <Icon color="white" as={<Feather name="trash-2" />} size="5" />
                    </Box>
                }
            >
                <HStack
                    alignItems="center"
                    w="full"
                    px={4}
                    py={2}
                    bg={useColorModeValue("warmGray.50", "primary.900")}
                >
                    <Box width={30} height={30} mr={2}>
                        <AnimatedCheckbox
                            highlightColor={highlightColor}
                            checkmarkColor={checkmarkColor}
                            boxOutlineColor={boxStroke}
                            checked={isDone}
                        />
                    </Box>
                    {isEditing ? (
                        <Input
                            placeholder="Task"
                            value={subject}
                            variant="unstyled"
                            fontSize={19}
                            px={1}
                            py={0}
                            autoFocus
                            blurOnSubmit
                            onChange={handleChangeSubject}
                            onBlur={onFinishEditing}
                        />
                    ) : (
                        <Pressable onLongPress={onPressLabel}>
                            <AnimatedTaskLabel
                                textColor={activeTextColor}
                                inactiveTextColor={doneTextColor}
                                strikethrough={isDone}
                            >
                                {subject}
                            </AnimatedTaskLabel>
                        </Pressable>
                    )}
                </HStack>
            </SwipableView>
        </Pressable>
    );
};

export default TaskItem;

// My Code from Tutorial

// import React, { useState } from "react";
// import { Pressable } from "react-native";
// import { Box, HStack, themeTools, useColorModeValue, useTheme } from "native-base";
// import AnimatedCheckbox from "react-native-checkbox-reanimated";
// import AnimatedTextLabel from "./AnimatedTextLabel";
// import SwipeableView from "../components/SwipeableView";
// import { Icon, Input } from "native-base";
// import { Feather } from "@expo/vector-icons";
// import StyledComponent from "../utils/styled";
// import { View } from "moti";
// import { ScrollView } from "react-native-gesture-handler";

// const TaskItem = ({
//     id,
//     isDone,
//     update,
//     onPresslabel,
//     onRemove,
//     subject,
//     simultaneousHandlers,
// }) => {
//     const theme = useTheme();
//     const highlight = themeTools.getColor(theme, useColorModeValue("cyan.500", "blue.400"));
//     const boxStroke = themeTools.getColor(theme, useColorModeValue("muted.300", "muted.50"));
//     const checkMarkColor = themeTools.getColor(theme, useColorModeValue("white", "white"));
//     const activeTextColor = themeTools.getColor(theme, useColorModeValue("darkText", "lightText"));
//     const doneTextColor = themeTools.getColor(theme, useColorModeValue("muted.400", "muted.600"));
//     const [Value, setValue] = useState(subject);
//     const [isEdit, setisEdit] = useState(false);
//     const StyledView = StyledComponent(View);
//     return (
//         <StyledView
//             w={"full"}
//             from={{ opacity: 0, scale: 0.5, marginBottom: -46 }}
//             animate={{ opacity: 1, scale: 1, marginBottom: 0 }}
//             exit={{ opacity: 0, scale: 0.5, marginBottom: -46 }}
//         >
//             <SwipeableView
//                 onSwipeLeft={() => onRemove(id)}
//                 BackView={
//                     <Box
//                         w="full"
//                         h="full"
//                         justifyContent={"center"}
//                         alignItems={"flex-end"}
//                         pr={4}
//                         bg={"red.500"}
//                     >
//                         <Icon
//                             color={"white"}
//                             as={<Feather name="trash-2" style={{ fontSize: 20, color: "white" }} />}
//                         />
//                     </Box>
//                 }
//                 simultaneousHandlers={simultaneousHandlers}
//             >
//                 <Pressable onPress={() => update(id, "completed", !isDone)}>
//                     <HStack
//                         px={4}
//                         py={3}
//                         alignItems="center"
//                         spacing={2}
//                         _dark={{ bg: "darkBlue.800" }}
//                         _light={{ bg: "white" }}
//                     >
//                         <Box width={30} height={30} mr={2}>
//                             <AnimatedCheckbox
//                                 checked={isDone}
//                                 highlightColor={highlight || "#4444ff"}
//                                 checkmarkColor={checkMarkColor || "#ffffff"}
//                                 boxOutlineColor={boxStroke || "#4444ff"}
//                             />
//                         </Box>
//                         {isEdit ? (
//                             <Input
//                                 value={Value}
//                                 autoFocus
//                                 onChangeText={(val) => setValue(val)}
//                                 onBlur={() => (update(id, "subject", Value), setisEdit(false))}
//                                 variant={"unstyled"}
//                                 p={"0"}
//                                 m={"0"}
//                                 fontSize={16}
//                             />
//                         ) : (
//                             <Pressable onLongPress={() => setisEdit(true)}>
//                                 <AnimatedTextLabel
//                                     isDone={isDone}
//                                     textColor={activeTextColor}
//                                     inActive={doneTextColor}
//                                 >
//                                     {subject}
//                                 </AnimatedTextLabel>
//                             </Pressable>
//                         )}
//                     </HStack>
//                 </Pressable>
//             </SwipeableView>
//         </StyledView>
//     );
// };

// export default TaskItem;
