import React from "react";
import { Text, HStack, Switch, useColorMode } from "native-base";
function ThemeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack flexDirection="row" justifyContent="center" space={4} alignItems="center">
            <Text>Light</Text>
            <Switch isChecked={colorMode === "dark"} onToggle={toggleColorMode} />
            <Text>Dark</Text>
        </HStack>
    );
}

export default ThemeToggler;
