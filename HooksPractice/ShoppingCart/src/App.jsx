import { useState } from 'react'
import './App.css'

function App() {
  const [item,setItem] = useState([{}]);
  const [name,setName] = useState("");
  const [quantity,setQuantity] = useState("");
  
  const handleName = (e) => setName(e.target.value);
  const handleQuantity = (e) => setQuantity(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !quantity) return

    const newitem = {
      name,quantity:parseInt(quantity)
    }
    setItem(prevItem => [...prevItem,newitem])
  }
  
  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' value={name} onChange={handleName} placeholder='Enter the item name'/>
        <input name='Quantity' value={quantity} onChange={handleQuantity} placeholder='Enter the quantity'/>
        <button type='submit'> Add </button>
      </form>
    </div>
    <div>
      <ul>
        {item.length < 1 ? "":item.map(val => (<li>{val.name} - Quantity {val.quantity}</li>))}
      </ul>
    </div>
    </>
  )
}

export default App
