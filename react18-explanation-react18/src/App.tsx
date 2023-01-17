import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';

function App() {
  useEffect(() => {
    console.log("Appがレンダリングされた");
  }, []); 

  return (
    <div className="App">
      <AutoBatchEventHandler/>
      <AutoBatchOther/>
    </div>
  );
}

export default App;
