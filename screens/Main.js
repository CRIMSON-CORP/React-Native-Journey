import React from "react";
import { StyleSheet } from "react-native";
import {
    Text,
    Box,
    Center,
    VStack,
    useColorMode,
    useColorModeValue,
    themeTools,
} from "native-base";
import ThemeToggler from "../utils/ThemeToggler";
export default function Main() {
    return (
        <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} flex={1} px={20}>
            <VStack space={5} alignItems="center">
                <Box
                    _text={{ color: "cyan.50", bg: "blueGray.200" }}
                    width={200}
                    height={200}
                    justifyContent={"center"}
                >
                    <Center>
                        <ThemeToggler />
                    </Center>
                </Box>
            </VStack>
        </Center>
    );
}

const styles = StyleSheet.create({});
