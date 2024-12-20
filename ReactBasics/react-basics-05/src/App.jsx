import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Product from './Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <User name="John" age={34}/>
    <User name="Jenny" age={28}/>
    <Product name='Computer' price={38984} />
    </>
  )
}

export default App
