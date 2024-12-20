import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './Greetings'
import User from './User'
import Weather from './Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Greetings timeOfDay="afternoon" />
    <User isAdmin={true} isLoggedIn={true}/>
    <Weather temp={45}/>
    </>
  )
}

export default App
