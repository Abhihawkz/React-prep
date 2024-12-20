import { useState } from 'react'
import './App.css'

function App() {
  const [todo,setTodo] = useState([])
  const [inputValue,setInputValue] = useState('');

  const handleInput = e => setInputValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    setTodo([...todo,inputValue])
    setInputValue('')
  }

  return (
    <>
    <div>
      <h1>Add Todos</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter you todo' value={inputValue} onChange={handleInput} />
        <button type='submit'>ADD</button>
      </form>

      <button onClick={()=>{
          todo.pup()
        }}>Delete last</button>
    </div>

    <div>
      <ol>
        {todo.map(t => (<li key={Math.random()}>{t}</li>))}
      </ol>
    </div>
    </>
  )
}

export default App
