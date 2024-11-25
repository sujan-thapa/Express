import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const num1 = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    const inputValue = num1.current.value;
    console.log(inputValue);
  };

  return (
    <>
      <form onSubmit={handleChange}>
        <input type="text" ref={num1} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )

}
export default App
