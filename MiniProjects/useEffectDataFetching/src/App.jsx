import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [count ,setCount] = useState(0)
  const [something ,setSomething] = useState(0)


  useEffect(() => {
    const getData = async () => {
       fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((res) => setTodo(res))
        .catch((err) => console.log(err.message));
    };

    getData()
  }, []);


  useEffect(()=>{
    console.log("count changed")
  },[count])

  return <>
  <div>
    count : {count} SomethingCount : {something}
    <br />
    <br />
    <button onClick={()=>{
      setCount(count + 1)
    }}>click</button>
    <button onClick={()=>{
      setSomething(something+2)
    }}>something</button>
  </div>
  <br />
    <br /><br />
    <br />
  <div>
  <ol>
  
  {todo.map(t => (<li key={t.id}> {t.title}</li>))}

  </ol>

  </div>
  </>;
}

export default App;
