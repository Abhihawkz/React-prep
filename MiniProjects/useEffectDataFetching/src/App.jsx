import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const getData = async () => {
       fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((res) => setTodo(res))
        .catch((err) => console.log(err.message));
    };

    getData()
  }, []);

  return <>
  <div>
  <ol>
  
  {todo.map(t => (<li key={t.id}> {t.title}</li>))}

  </ol>

  </div>
  </>;
}

export default App;
