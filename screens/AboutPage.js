import { Box, HStack } from "native-base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutPage = () => {
    return (
        <HStack>
            <Box p={10}>
                <Text style={styles.text}>About This App</Text>
            </Box>
        </HStack>
    );
};

export default AboutPage;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: "black",
        fontWeight: "bold",
    },
});
