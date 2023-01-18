import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';

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
    </div>
  );
}

export default App;
