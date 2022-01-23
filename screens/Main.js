import React, { useState, useCallback } from "react";
import { Icon, VStack, useColorModeValue, Fab } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { nanoid } from "nanoid/non-secure";
// import AnimatedColorBox from "../components/animated-color-box";
// import Masthead from "../components/masthead";
// import NavBar from "../components/navbar";
import ThemeToggler from "../components/ThemeToggler";
import TaskList from "../components/TaskList";

const initialData = [
    {
        id: nanoid(),
        subject: "Buy movie tickets for Friday",
        done: false,
    },
    {
        id: nanoid(),
        subject: "Take a react native course",
        done: false,
    },
];

export default function MainScreen() {
    const [data, setData] = useState(initialData);
    const [editingItemId, setEditingItemId] = useState();

    function handleToggleTaskItem(item) {
        return setData((prevData) => {
            const newData = [...prevData];
            const index = prevData.indexOf(item);
            newData[index] = {
                ...item,
                done: !item.done,
            };
            return newData;
        });
    }
    function handleChangeTaskItemSubject(item, newSubject) {
        setData((prevData) => {
            const newData = [...prevData];
            const index = prevData.indexOf(item);
            newData[index] = {
                ...item,
                subject: newSubject,
            };
            return newData;
        });
    }
    const handleFinishEditingTaskItem = useCallback((_item) => {
        setEditingItemId(null);
    }, []);
    const handlePressTaskItemLabel = useCallback((item) => {
        setEditingItemId(item.id);
    }, []);
    const handleRemoveItem = useCallback((item) => {
        setData((prevData) => {
            const newData = prevData.filter((i) => i !== item);
            return newData;
        });
    }, []);

    return (
        <>
            <VStack
                flex={1}
                space={1}
                bg={useColorModeValue("warmGray.50", "primary.900")}
                mt="-20px"
                borderTopLeftRadius="20px"
                borderTopRightRadius="20px"
                pt="20px"
            >
                <TaskList
                    data={data}
                    onToggleItem={handleToggleTaskItem}
                    onChangeSubject={handleChangeTaskItemSubject}
                    onFinishEditing={handleFinishEditingTaskItem}
                    onPressLabel={handlePressTaskItemLabel}
                    onRemoveItem={handleRemoveItem}
                    editingItemId={editingItemId}
                />
            </VStack>
            <Fab
                position="absolute"
                renderInPortal={false}
                size="sm"
                icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
                colorScheme={useColorModeValue("blue", "darkBlue")}
                bg={useColorModeValue("blue.500", "blue.400")}
                onPress={() => {
                    const id = nanoid();
                    setData([
                        {
                            id,
                            subject: "",
                            done: false,
                        },
                        ...data,
                    ]);
                    setEditingItemId(id);
                }}
            />
            <ThemeToggler />
        </>
    );
}

// MyCodefrom tutorial

// import React, { useCallback, useState } from "react";
// import { Center } from "native-base";
// import shortid from "shortid";
// import ThemeToggler from "../components/ThemeToggler";
// import TaskList from "../components/TaskList";
// export default function Main() {
//     const [Data, setData] = useState([
//         {
//             id: shortid.generate(),
//             completed: false,
//             subject: "Take out the Trash",
//         },
//         {
//             id: shortid.generate(),
//             completed: false,
//             subject: "Buy new Laptop",
//         },
//         {
//             id: shortid.generate(),
//             completed: false,
//             subject: "Sort out IT Stuff",
//         },
//     ]);

//     const updateTask = useCallback((id, tag, value) => {
//         setData((prev) => {
//             const newData = [...prev];
//             const index = prev.findIndex((p) => p.id === id);
//             const staleData = newData[index];
//             newData[index] = {
//                 ...staleData,
//                 [tag]: value,
//             };
//             return newData;
//         });
//     });

//     const handleRemove = useCallback((id) => {
//         setData((prev) => {
//             return prev.filter((p) => p.id !== id);
//         });
//     }, []);

//     return (
//         <Center flex={1} _dark={{ bg: "darkBlue.900" }} _light={{ bg: "white" }}>
//             <TaskList data={Data} updateTask={updateTask} handleRemove={handleRemove} />
//             <ThemeToggler />
//         </Center>
//     );
// }
