import {
    StyleSheet,
    Text,
    TouchableNativeFeedbackBase,
    TouchableOpacity,
    View,
} from "react-native";

const Task = ({ taskProp, updateTasks }) => {
    const { completed, task, id } = taskProp;
    const styles = StyleSheet.create({
        wrapper: {
            backgroundColor: "white",
            shadowColor: "grey",
            shadowOffset: {
                height: 5,
                width: 2,
            },
            shadowRadius: 2,
            padding: 20,
            borderRadius: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
        },
        text: {
            fontWeight: "700",
            color: "grey",
            marginLeft: 15,
        },
        check: {
            borderRadius: 10,
            borderColor: "#1e88e5",
            borderWidth: 3,
            width: 25,
            height: 25,
            backgroundColor: completed ? "#1e88e5" : "#ffffff00",
        },
    });

    return (
        <View>
            <TouchableOpacity style={styles.wrapper} onPress={() => updateTasks(id)}>
                <TouchableOpacity style={{ ...styles.check }}></TouchableOpacity>
                <Text style={styles.text}>{task}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Task;
