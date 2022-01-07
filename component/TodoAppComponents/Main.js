import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Touchable,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Alert,
    ToastAndroid,
    Image,
    TouchableNativeFeedback,
} from "react-native";
import Task from "./component/Task";
export default function App() {
    const [Tasks, setTasks] = useState([]);
    const [NewTask, setNewTask] = useState("");
    function updateTasks(id) {
        setTasks(
            Tasks.map((task) => {
                if (task.id === id) {
                    task.completed = !task.completed;
                }
                return task;
            })
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.taskWrapper}>
                    <Text style={styles.header}>Today's Task</Text>
                    <View style={styles.list}>
                        {Tasks.length ? (
                            Tasks.map((task) => (
                                <Task key={task.id} taskProp={task} updateTasks={updateTasks} />
                            ))
                        ) : (
                            <Text>No Task For now!</Text>
                        )}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.input_wrapper}>
                <View style={styles.input_box}>
                    <TextInput
                        keyboardType="default"
                        style={styles.text_feild}
                        placeholder="Write your task here..."
                        onChangeText={setNewTask}
                        value={NewTask}
                    />
                </View>
                <TouchableNativeFeedback
                    style={styles.plus}
                    onPress={() => {
                        if (NewTask) {
                            let newTaskObj = {
                                id: Tasks.length + 1,
                                completed: false,
                                task: NewTask,
                            };
                            setTasks((prev) => [...prev, { ...newTaskObj }]);
                            setNewTask("");
                        } else {
                            Alert.prompt("Error", "Please input a task!", (text) =>
                                console.log(text)
                            );
                        }
                    }}
                >
                    <View style={styles.plus}>
                        {/* <Text style={styles.plustext}>+</Text> */}
                        <Image
                            style={styles.image}
                            source={require("./assets/icon.png")}
                            resizeMode="cover"
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8eaed",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    header: {
        fontWeight: "900",
        fontSize: 30,
    },
    list: {
        marginTop: 50,
    },

    input_wrapper: {
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
    },
    input_box: {
        backgroundColor: "white",
        shadowColor: "grey",
        shadowOffset: {
            height: 5,
            width: 2,
        },
        shadowRadius: 2,
        padding: 5,
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginRight: 20,
    },
    text_feild: {
        width: "100%",
        padding: 10,
    },

    plus: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "white",
        width: 50,
        height: 50,
        shadowColor: "grey",
        shadowOffset: {
            height: 5,
            width: 2,
        },
    },
    plustext: {
        fontSize: 40,
        fontWeight: "bold",
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});
