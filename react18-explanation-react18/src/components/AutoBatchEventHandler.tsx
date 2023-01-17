import { useState } from "react";
import { flushSync } from "react-dom";

export const AutoBatchEventHandler = () => {
    // レンダリング・再レンダリング
    console.log('AutoBatchEventHandler');

    const [state1, setState1] = useState<number>(0);
    const [state2, setState2] = useState<number>(0);

    const onClickUpdateButton = () => {
        // setState1前後でstateの値が変わっておらず、バッチ処理されていることがわかる
        console.log(state1);

        // バッチ処理したくない場合に使う
        flushSync(() => {
            setState1((state1) => state1 + 1);
        });

        console.log(state1);

        setState2((state2) => state2 + 1);
    }

    return (
        <div>
            <p>Automatic Batching確認用（イベントハンドラ）</p>
            <button onClick={onClickUpdateButton}>State更新</button>
            <p>State1: {state1}</p>
            <p>State2: {state2}</p>
        </div>
    );
}