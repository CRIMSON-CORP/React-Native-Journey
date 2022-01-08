import React from "react";
import { View, Text } from "react-native";
import App from "../App";
export default function Main() {
    return (
        <App>
            <View style={styles.view}>
                <Text>Hello</Text>
            </View>
        </App>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "red",
    },
});
