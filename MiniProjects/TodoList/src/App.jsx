import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo,setTodo] = useState([]);
  const [input,setInput] = useState('');
  

  const handleClick = ()=>{
    setTodo(todo => {
     return todo.concat({
        title:input,
        id: Math.floor(Math.random() * 100)
      })
    })

    setInput('');
  }

  const handleDel = (id)=>{
    setTodo(t => t.filter(todo => todo.id !== id))
  }


  return (
    <>
    <div>
      <div>
        <input type="text" placeholder='Enter you todo' value={input} onChange={(e)=>{
          setInput(e.target.value)
        }} /> <button onClick={handleClick}> ADD.</button>
      </div>
      <div>
        {todo.map(t => {
          return <div>
            <p key={t.id}>{t.title}</p>
            <button onClick={()=>{
              handleDel(t.id)
            }}>Del</button>
          </div>
        })}

      </div>

      </div>

    </>
  )
}

export default App
