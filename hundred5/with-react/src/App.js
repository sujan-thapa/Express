import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js'
import { useState } from 'react';

function App() {
  const [count, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar />
      {count}

      <button onClick={()=>{
        setValue(count+1);
      }}>Click Me</button>
      <Footer />
    </div>
  );
}

export default App;
