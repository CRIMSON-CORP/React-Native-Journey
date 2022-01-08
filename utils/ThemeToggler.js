import React from "react";
import { Text, HStack, Switch, useColorMode } from "native-base";
const ThemeToggler = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack>
            <Text>Dark</Text>
            <Switch isChecked={colorMode === "dark"} onToggle={toggleColorMode} />
        </HStack>
    );
};

export default ThemeToggler;
