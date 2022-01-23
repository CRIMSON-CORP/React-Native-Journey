import React, { useCallback, useRef } from "react";
import { AnimatePresence, View } from "moti";
import { ScrollView } from "react-native-gesture-handler";
import TaskItem from "./TaskItem";
import StyledComponent from "../utils/styled";

const StyledView = StyledComponent(View);
const StyledScrollView = StyledComponent(ScrollView);

export const AnimatedTaskItem = (props) => {
    const {
        simultaneousHandlers,
        data,
        isEditing,
        onToggleItem,
        onChangeSubject,
        onFinishEditing,
        onPressLabel,
        onRemove,
    } = props;
    function handleToggleCheckbox(data) {
        return onToggleItem(data);
    }

    function handleToggleCheckbox() {
        return onToggleItem(data);
    }

    function handleChangeSubject(subject) {
        return onChangeSubject(data, subject);
    }

    function handleFinishEditing() {
        return onFinishEditing(data);
    }

    function handlePressLabel() {
        return onPressLabel(data);
    }
    function handleRemove() {
        return onRemove(data);
    }

    return (
        <StyledView
            w="full"
            from={{
                opacity: 0,
                scale: 0.5,
                marginBottom: -46,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                marginBottom: 0,
            }}
            exit={{
                opacity: 0,
                scale: 0.5,
                marginBottom: -46,
            }}
        >
            <TaskItem
                simultaneousHandlers={simultaneousHandlers}
                subject={data.subject}
                isDone={data.done}
                isEditing={isEditing}
                onToggleCheckbox={handleToggleCheckbox}
                onChangeSubject={handleChangeSubject}
                onFinishEditing={handleFinishEditing}
                onPressLabel={handlePressLabel}
                onRemove={handleRemove}
            />
        </StyledView>
    );
};

export default function TaskList(props) {
    const {
        data,
        editingItemId,
        onToggleItem,
        onChangeSubject,
        onFinishEditing,
        onPressLabel,
        onRemoveItem,
    } = props;
    const refScrollView = useRef(null);

    return (
        <StyledScrollView ref={refScrollView} w="full">
            <AnimatePresence>
                {data.map((item) => (
                    <AnimatedTaskItem
                        key={item.id}
                        data={item}
                        simultaneousHandlers={refScrollView}
                        isEditing={item.id === editingItemId}
                        onToggleItem={onToggleItem}
                        onChangeSubject={onChangeSubject}
                        onFinishEditing={onFinishEditing}
                        onPressLabel={onPressLabel}
                        onRemove={onRemoveItem}
                    />
                ))}
            </AnimatePresence>
        </StyledScrollView>
    );
}

// My Code from tutorial

// import React, { useCallback, useRef } from "react";
// import { Center } from "native-base";
// import TaskItem from "../components/TaskItem";
// import { AnimatePresence, ScrollView, View } from "moti";
// import StyledComponent from "../utils/styled";
// import ThemeToggler from "../components/ThemeToggler";
// export default function TaskList({ data, updateTask, handleRemove }) {
//     const refScrollView = useRef();
//     const StyledScrollView = StyledComponent(ScrollView);
//     const handleUpdateTask = useCallback(
//         (id, tag, value) => {
//             updateTask(id, tag, value);
//         },
//         [data, updateTask]
//     );

//     const handleRemoveTask = useCallback(
//         (id) => {
//             handleRemove(id);
//         },
//         [data, handleRemove]
//     );

//     return (
//         <StyledScrollView w={"full"} ref={refScrollView}>
//             <AnimatePresence>
//                 {data.map(({ id, completed, subject }) => (
//                     <AnimatedTaskItem
//                         key={id}
//                         id={id}
//                         isDone={completed}
//                         update={handleUpdateTask}
//                         subject={subject}
//                         onRemove={handleRemoveTask}
//                         simultaneousHandlers={refScrollView}
//                     />
//                 ))}
//             </AnimatePresence>
//         </StyledScrollView>
//     );
// }

// function AnimatedTaskItem({ id, isDone, subject, update, onRemove, simultaneousHandlers }) {
//     const handleUpdateTask = useCallback(
//         (id, tag, value) => {
//             update(id, tag, value);
//         },
//         [update]
//     );

//     const handleRemoveTask = useCallback(
//         (id) => {
//             onRemove(id);
//         },
//         [onRemove]
//     );
//     const StyledView = StyledComponent(View);
//     return (
//         <StyledView
//             w={"full"}
//             from={{ opacity: 0, scale: 0.5, marginBottom: -46 }}
//             animate={{ opacity: 1, scale: 1, marginBottom: 0 }}
//             exit={{ opacity: 0, scale: 0.5, marginBottom: -46 }}
//         >
//             <TaskItem
//                 key={id}
//                 id={id}
//                 isDone={isDone}
//                 update={handleUpdateTask}
//                 subject={subject}
//                 onRemove={handleRemoveTask}
//                 simultaneousHandlers={simultaneousHandlers}
//             />
//         </StyledView>
//     );
// }
