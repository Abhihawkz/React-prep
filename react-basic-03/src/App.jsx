import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './Greetings'
import ProductsDetails from './ProductsDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greetings />
      <ProductsDetails />
    </>
  )
}

export default App
