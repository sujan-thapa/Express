import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  // let a = 1; // Normal variable

  const [count, setCount] = useState(0); // For triggering re-renders
  const a = useRef(1); // Ref variable
  // useEffect(() => {
  //   a += 2; // Increment 'a' every time the component re-renders
  //   console.log('Updated value of a:', a); // Debugging
  // });

  // 
  useEffect(()=>{
    a.current += 1;
    console.log('Updated value of a:', a.current);
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{a.current+1}</h2> {/* Displays the current value of 'a' */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
