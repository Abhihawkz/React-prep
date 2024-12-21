import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './useFetch'

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <>
   <div>
    {data.map((item) => (<p key={item.id}>{item.title}</p>))}
   </div>
    </>
  )
}

export default App
