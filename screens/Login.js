import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { View as MotiView } from "moti";
import { MotiPressable, useMotiPressable } from "moti/interactions";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
const Login = () => {
    const variant = {
        inital: {
            translateY: 400,
            opacity: 0.5,
        },
        animate: {
            translateY: 0,
            opacity: 1,
            scale: 1,
        },
        transition: {
            type: "timing",
            duration: 1000,
        },
    };

    function handleState() {
        console.log("====================================");
        console.log(123);
        console.log("====================================");
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/pexels-eva-elijas-7598389.jpg")}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.buttonWrapper}>
                <TapGestureHandler onHandlerStateChange={handleState}>
                    <MotiView
                        style={{ ...styles.button }}
                        animate={variant.animate}
                        from={variant.inital}
                        transition={variant.transition}
                    >
                        <Text style={{ ...styles.buttonText }}>Login</Text>
                    </MotiView>
                </TapGestureHandler>
                <TapGestureHandler>
                    <MotiView
                        style={{ ...styles.button, backgroundColor: "#0b126d" }}
                        animate={variant.animate}
                        from={variant.inital}
                        transition={{
                            ...variant.transition,
                            delay: 0.75,
                        }}
                    >
                        <Text style={{ ...styles.buttonText, color: "white" }}>Sign In</Text>
                    </MotiView>
                </TapGestureHandler>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        width: "100%",
        height: "100%",
    },
    image: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    buttonWrapper: {
        bottom: 0,
        height: 200,
        padding: 20,
        width: "100%",
        position: "absolute",
    },
    button: {
        padding: 20,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 35,
        marginBottom: 20,
        shadowColor: "black",
        shadowOffset: {
            height: 20,
            width: 20,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 3,
    },
    buttonText: {
        color: "blue",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});
