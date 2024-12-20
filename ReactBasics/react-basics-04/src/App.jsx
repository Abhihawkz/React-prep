import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductInfo from './ProductInfo'
import { UserInfo } from './UserInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductInfo />
    <UserInfo />
    </>
  )
}

export default App
