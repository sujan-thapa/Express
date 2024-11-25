import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({email: '', password: ''});

  const message =()=>{
    console.log("Here is the message");
  }

  const hover = ()=>{
    console.log("hovered");
  }

  const handleChange = (event)=>{
    const {name, value} = event.target;   // destructuring the event.target
    setForm({...form, [name]: value});    // updating the form state
    console.log(form);

    // console.log(event.target.value)
  }

  return (
    <>
      <div className="form">
        <button onClick={message}>Click me</button>
      </div>

      <div className="container">
        <button onMouseOver={hover} >Click to hover</button>
      </div>

      <input type="email" name='email' value={form.name} onChange={handleChange}/>
      <input type="password" name="password" value={form.password} onChange={handleChange} />
    </>
  )
}

export default App
