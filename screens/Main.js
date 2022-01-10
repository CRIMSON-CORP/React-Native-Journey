import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import {
    Text,
    Box,
    Center,
    VStack,
    useColorMode,
    useColorModeValue,
    themeTools,
} from "native-base";
import ThemeToggler from "../components/ThemeToggler";
import AnimatedCheckBox from "../components/AnimatedCheckBox";
import TaskItem from "../components/TaskItem";
export default function Main() {
    const [Checked, setChecked] = useState(false);
    function handleCheck() {
        setChecked((prev) => !prev);
    }
    return (
        <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} flex={1} px={20}>
            <VStack space={5} alignItems="center" shadow={3}>
                <TaskItem isDone={Checked} setDone={handleCheck} />
            </VStack>
        </Center>
    );
}

const styles = StyleSheet.create({});
