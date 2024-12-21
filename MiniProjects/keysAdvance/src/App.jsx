import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sw , setSw] = useState(false);
  return (
    <>
     <div>
      {sw ? (<h1>Light</h1>):(<h1>Dark</h1>)}
     </div>
    <br />
     <div>

    <input type="text" key={sw ? "Light" : "Dark"} />
    <button onClick={()=>{
      setSw(s => !s)
    }}>Switch</button>

     </div>
    </>
  )
}

export default App
