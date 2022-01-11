import React, { useState } from "react";
import { VStack } from "native-base";
import TaskItem from "../components/TaskItem";
export default function Main() {
    const [TaskList, setTaskList] = useState([
        {
            id: 1,
            completed: false,
            subject: "Take out the Trash",
        },
        {
            id: 2,
            completed: false,
            subject: "Buy new Laptop",
        },
        {
            id: 3,
            completed: false,
            subject: "Sort out IT Stuff",
        },
    ]);
    function updateTask(id, tag, value) {
        setTaskList((prev) =>
            prev.map((p) => {
                if (p.id === id) {
                    p[tag] = value;
                }
                return p;
            })
        );
    }

    function handleRemove(id) {
        setTaskList((prev) => {
            return prev.filter((p) => p.id !== id);
        });
    }

    return (
        <VStack space={5} shadow={3} w={"full"}>
            {TaskList.map(({ id, completed, subject }) => (
                <TaskItem
                    key={id}
                    id={id}
                    isDone={completed}
                    update={updateTask}
                    subject={subject}
                    onRemove={handleRemove}
                />
            ))}
        </VStack>
    );
}
