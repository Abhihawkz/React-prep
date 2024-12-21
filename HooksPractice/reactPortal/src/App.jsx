import { useState } from 'react'
import './App.css'
import Portal from './Portal';

function App() {
  const [input,setInput] = useState('');
  const [copied,setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(input).then(()=>{
      setCopied(true);
      setTimeout(()=>{
        setCopied(false)
      },2000)
    })
  }
  
  return (
    <>
     <div>
      <input placeholder='Enter your text' value={input} onChange={(e)=>{setInput(e.target.value)}} />
      <button onClick={handleCopy}>Copy</button>
      </div> 
      <Portal copied={copied} />
    </>
  )
}

export default App
