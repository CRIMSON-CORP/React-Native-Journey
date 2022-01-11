import React, { useState } from "react";
import { VStack } from "native-base";
import TaskItem from "../components/TaskItem";
export default function Main() {
    const [Checked, setChecked] = useState(false);
    function handleCheck() {
        setChecked((prev) => !prev);
    }

    return (
        <VStack space={5} shadow={3} w={"full"}>
            <TaskItem isDone={Checked} setDone={handleCheck} subject={"Task 1"} />
        </VStack>
    );
}
