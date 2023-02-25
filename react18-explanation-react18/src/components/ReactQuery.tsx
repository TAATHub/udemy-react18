import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AlbumList } from "./AlbumList";
import { SideBar } from "./SideBar";
import { TodoList } from "./TodoList";

export const ReactQuery = () => {
    return (
        <div style={{display: 'flex', padding: '16px'}}>
            <SideBar/>
            <div style={{flexGrow: 1}}>
            <ErrorBoundary fallback={<p>アルバムエラーです</p>}>
                <Suspense fallback={<p>アルバムローディング中...</p>}>
                    <AlbumList/>
                </Suspense>
            </ErrorBoundary>
            <ErrorBoundary fallback={<p>TODOエラーです</p>}>
                <Suspense fallback={<p>TODOローディング中...</p>}>
                    <TodoList/>
                </Suspense>
            </ErrorBoundary>
            </div>
        </div>
    );
}