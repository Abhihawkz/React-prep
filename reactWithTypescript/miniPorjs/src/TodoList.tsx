import { useState } from "react";

interface todo {
    id:number,
    task:string,
    completed:boolean,
}

const TodoList = () => {
    const [todos,setTodos] = useState<todo[]>([])

    const addTodo = (task:stirng)=>{
        const newTodo : todo = {
            id:todos.length+1,
            task:task,
            completed:true
        }

        setTodos(prev => ([...prev,newTodo]))
    }
  return (
    <div>
        <h1>TodoList</h1>
        <button onClick={()=>{
            addTodo("newTodo")
        }}>Add Todo</button>

        <div>
            <ol>
                {todos.map(t => (<li key={t.id}>{t.task} * {t.completed ? " completed " : " not completed"}</li>))}
            </ol>
        </div>
    </div>
  )
}

export default TodoList;