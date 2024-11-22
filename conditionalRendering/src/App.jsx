import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showButton, setButton] = useState(false);



  const toDo = [
    {
      title: 'Learn React',
      description: 'Learn React by building a todo app'
    }

  ];

  {/* todo components within class with props 'todo' */ }
  const ToDo = (todo) => {
    return (
      <div className="todoList">
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
    )

  }

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
      {/* <button>Show if the condition is true</button> */}
      {/* consitional statement to show the button */}
      {showButton ? <button>Show if the condition is true</button> : null}

      {/* adding todo components */}
      {/* <ToDo  /> */}
      {toDo.map((currentElement) => (
        <ToDo title={currentElement.title} description={currentElement.description} />
      ))}

      

      <div className="card">
        {/* //toggle the button */}
        <button onClick={() => setButton(!showButton)}>
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
  )
}

export default App
