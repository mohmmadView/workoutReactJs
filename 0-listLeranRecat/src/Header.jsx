import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const test = document.body;
  return (
    <div className="App">
      <button
        onClick={() => console.log(body)}
        className="text-black fixed right-3"
      >
        farsi
      </button>
      <h1 className="text-blue-600">Learn React</h1>

      <div className="flex justify-center">
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div> */}
    </div>
  );
}

export default App;
