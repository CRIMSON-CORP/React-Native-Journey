import React from "react";
import { Text, HStack, Switch, useColorMode } from "native-base";
function ThemeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();
    const colorTheme = {
        _dark: {
            color: "white",
        },
        _ligt: {
            color: "gray:600",
        },
    };
    return (
        <HStack
            flexDirection="row"
            justifyContent="center"
            space={4}
            alignItems="center"
            _dark={{ bg: "darkBlue.600" }}
        >
            <Text colorTheme>Light</Text>
            <Switch
                isChecked={colorMode === "dark"}
                onToggle={() => toggleColorMode()}
                bg={"green.300"}
                thumbColor={"yellow.400"}
            />
            <Text colorTheme>Dark</Text>
        </HStack>
    );
}

export default ThemeToggler;
