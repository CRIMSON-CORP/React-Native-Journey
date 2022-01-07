import {
    StyleSheet,
    View,
    StatusBar,
    Text,
    Platform,
    Image,
    TouchableNativeFeedback,
} from "react-native";
export default function Welcome() {
    return (
        <View style={styles.body}>
            <Image
                source={require("../../assets/DoneWithItAssets/background.jpg")}
                style={styles.backgroundImage}
            />
            <View style={styles.safearea}>
                <View style={styles.logoWrapper}>
                    <Image
                        source={require("../../assets/DoneWithItAssets/logo-red.png")}
                        resizeMode="cover"
                        style={styles.logo}
                    />
                    <Text style={styles.caption}>Sell What you don't need anymore.</Text>
                </View>
                <View>
                    <TouchableNativeFeedback>
                        <View style={[styles.button, styles.buttonFill]}>
                            <Text style={[styles.buttonText, styles.buttonFillText]}>Login</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={[styles.button, styles.buttonOutline]}>
                            <Text style={[styles.buttonText, styles.buttonOutlineText]}>
                                Sign in
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    safearea: {
        padding: 20,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    logoWrapper: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        paddingTop: 60,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    caption: {
        fontWeight: "bold",
        fontSize: 14,
    },
    button: {
        width: "100%",
        padding: 15,
        borderRadius: 10,
        textAlign: "center",
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 24,
        textAlign: "center",
    },
    buttonFill: {
        backgroundColor: "red",
    },
    buttonFillText: {
        color: "white",
    },
    buttonOutline: {
        backgroundColor: "#ffffff",
    },
    buttonOutlineText: {
        color: "red",
    },
});
