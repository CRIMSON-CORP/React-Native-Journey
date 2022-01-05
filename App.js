import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./component/Task";
export default function App() {
    const [Tasks, setTasks] = useState([
        {
            id: 1,
            task: "Go for an outing",
            completed: false,
        },
        {
            id: 2,
            task: "Read the Dip",
            completed: false,
        },
        {
            id: 3,
            task: "Cut some grasses",
            completed: false,
        },
        {
            id: 4,
            task: "Fall out",
            completed: false,
        },
    ]);

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
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.header}>Today's Task</Text>
                <View style={styles.list}>
                    {Tasks.map((task) => (
                        <Task key={task.id} taskProp={task} updateTasks={updateTasks} />
                    ))}
                </View>
            </View>
        </View>
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
});
