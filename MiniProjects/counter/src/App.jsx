import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black text-white h-screen flex items-center justify-center flex-col'>
    <div className='w-[600px] mx-auto'>
     <div className='text-8xl font-semibold flex items-center justify-center'  >
      {count < 0 ? "0" : count}
     </div>
     <div className='flex items-center justify-around'>
      <button onClick={()=>{
        setCount(count + 1)
      }} className='text-4xl bg-gray-950 w-16 rounded-full border border-t-2' >+</button>
      <button onClick={()=>{
        setCount(count-1)
      }}  className='text-4xl bg-gray-950 w-16 rounded-full border border-t-2' >-</button>
     </div>
      </div>
      </div>
    </>
  )
}

export default App
