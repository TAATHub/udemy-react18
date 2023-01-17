import { useState } from "react";

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const AutoBatchOther = () => {
    console.log('AutoBatchOther');

    const [todos, setTodos] = useState<Todo[] | null>(null);
    const [isFinishAPI, setIsFinishApi] = useState<boolean>(false);
    const [state3, setState3] = useState<string>('');

    const onClickExecuteApi = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                // React 18の場合、イベントハンドラ以外でもバッチング処理が効いていて、複数のsetStateがあっても一度しか再レンダリングされない
                setTodos(data);
                setIsFinishApi(true);
                setState3('updated')
            })
    }

    return (
        <div>
            <p>Automatic Batching確認用（その他）</p>
            <button onClick={onClickExecuteApi}>API実行</button>
            <p>isFinishAPI: {isFinishAPI ? 'true' : 'false'}</p>
            {todos?.map((todo) => {
                return (
                    <p key={todo.id}>{todo.title}</p>
                );
            })}
        </div>
    );
}