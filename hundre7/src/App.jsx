import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

    // Normal useEffect example
    // useEffect(() => {
    //   alert(`Count has changed to: ${count}`);
    // }, [count]); // Only runs when 'count' changes
  
    const [show, setShow] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        console.log("This runs after 2 seconds!");
      }, 2000);
  
      // Cleanup function to clear the timer if the component unmounts or changes
      return () => clearTimeout(timer);
    }, []); // Runs once, then cleans up if component unmounts

 
  return (
    <>
      <Navbar color={color} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=> setColor(("Blue"))}>Change Color</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
