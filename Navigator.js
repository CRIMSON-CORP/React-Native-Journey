import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./screens/Main";
import AboutPage from "./screens/AboutPage";
const Drawer = createDrawerNavigator();
const Navigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="About" component={AboutPage} />
        </Drawer.Navigator>
    );
};

export default Navigator;
