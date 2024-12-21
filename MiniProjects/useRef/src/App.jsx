import { useRef, useState } from 'react'
import './App.css'
import Timer from './Timer';

function App() {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <>
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}> Focus</button>
      </div>     
      <Timer />
    </>
  )
}

export default App
