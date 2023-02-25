import './App.css';
import { Suspense, useEffect } from 'react';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';
import { ReactQuery } from './components/ReactQuery';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  useEffect(() => {
    console.log("Appがレンダリングされた");
  }, []); 

  return (
    <div className="App">
      <AutoBatchEventHandler/>
      <AutoBatchOther/>
      <hr />
      <Transition/>
      <hr />
      <ErrorBoundary fallback={<p>全体エラーです</p>}>
        <Suspense fallback={<p>全体ローディング中...</p>}>
          <ReactQuery/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
