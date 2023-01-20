import logo from './logo.svg';
import './App.css';
import { Suspense, useEffect } from 'react';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';
import { ReactQuery } from './components/ReactQuery';

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
      <Suspense fallback={<p>ローディング中...</p>}>
        <ReactQuery/>
      </Suspense>
    </div>
  );
}

export default App;
