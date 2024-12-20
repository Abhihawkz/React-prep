import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {
  const [count, setCount] = useState(0)
  const products = {
    name : "Hp Razor five",
    price : 1284841,
    available : true ,
    location : "Banglore"
  }
  return (
    <>
      <Product>
        <h1>Name : {products.name}</h1>
        <h2>Price : {products.price}</h2>
        <h3>Available : {products.available ? "Available" :"Sold Out"}</h3>
        <h4>Location : {products.location}</h4>
      </Product>
    </>
  )
}

export default App
