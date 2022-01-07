import { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableNativeFeedbackBase,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

const Task = ({ taskProp, updateTasks }) => {
    const { completed, task, id } = taskProp;
    const [MarkForDelete, setMarkForDelete] = useState(false);

    return (
        <View>
            <TouchableWithoutFeedback
                onPress={() => updateTasks(id)}
                onLongPress={() => setMarkForDelete(!MarkForDelete)}
            >
                <View
                    style={{ ...styles.wrapper, backgroundColor: MarkForDelete ? "red" : "white" }}
                >
                    <TouchableOpacity
                        style={{
                            ...styles.check,
                            backgroundColor: completed && !MarkForDelete ? "#1e88e5" : "white",
                            borderColor: MarkForDelete ? "white" : "#1e88e5",
                        }}
                    ></TouchableOpacity>
                    <Text style={{ ...styles.text, color: MarkForDelete ? "white" : "grey" }}>
                        {task}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Task;

const styles = StyleSheet.create({
    wrapper: {
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
    },
});
