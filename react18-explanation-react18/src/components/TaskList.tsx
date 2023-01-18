import { useDeferredValue } from "react";
import type { Task } from "./Transition";

type Props = {
    taskList: Task[];
}

export const TaskList = (props: Props) => {
    const { taskList } = props;
    // コンポーネント化でuseTransitionが使えない場合はuseDeferedValueを使う
    const deferedTaskList = useDeferredValue(taskList);

    return (
        <>
            {deferedTaskList.map((task) => (
                <div key={task.id} style={{ width: '300px', margin: 'auto', background: 'lavender'}}>
                    <p>タイトル: {task.title}</p>
                    <p>担当: {task.assignee}</p>
                </div>
            ))}
        </>
    );
}