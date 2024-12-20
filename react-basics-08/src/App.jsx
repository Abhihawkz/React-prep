import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const products = ["wireless mouse", "keyboard", "monitor", "headphones","razor blade"];
  return (
    <>
    <h1>Cart</h1>
    {products.length > 0 && <h2> you have {products.length} items in your cart.</h2>}

    <h3>Products</h3>
    <ul>
    {products.map((item) => {
      return <li key={Math.random()}>
        {item}
      </li>
    })}

    </ul>
    </>
  )
}

export default App
