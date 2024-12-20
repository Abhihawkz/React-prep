import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const [friends,setFriends] = useState(["jackie","chan","John", "wick"])
  // const [movie,setMovie] = useState({
  //   title:"John wick",
  //   Rating:9
  // })

  // const updateRating = () => setMovie({...movie,Rating : 8})

  // const handleAdd = () => setFriends([...friends,"newFriend"])
  // const handleRemove = ()=> setFriends(friends.filter(f => f!=="newFriend"))
  // const handleUpdate = ()=> setFriends(friends.map(f => f ==="newFriend" ? "Nice Name " : f))

  const [count , setCount] = useState(()=>{
    const initialValue = 10;
    return initialValue;
  })

  const [randomNumber,setRandomNumber] = useState(()=>{
    const random = Math.floor(Math.random()*100)
    return random
  })

  const [fname,setFname] = useState(()=>{
    const name = localStorage.getItem('name');
    return name ? JSON.parse(name) : ""
  })

  useEffect(()=>{
    localStorage.setItem("name",JSON.stringify(fname))
  },[fname])



  return (
    <>
      {/* <div>
      <ul>

      {friends.map((f) => (
        <li key={Math.random()}>
          {f}
        </li>
      ))}

      </ul>
      <button onClick={handleAdd}>Add Friends</button>
      <button onClick={handleRemove}>Remove Friends</button>
      <button onClick={handleUpdate}>Update Friends</button>
      </div>
      <div>
        <p>Title : {movie.title}</p>
        <p>Rating :{movie.Rating}</p>
        <button onClick={updateRating}>Update Rating.</button>
      </div> */}
        {/*-------------------------------------------------------- USE OF FUNCTIONS IN USE STATE ------------------------------------ */}


        <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> {
          setCount(count+1)
        }} > INC </button>
        <button onClick={()=>{
          setCount(count - 1)
        }} > DEC</button>
        </div>



        <div>
          <h2>Random Number : {randomNumber}</h2>
          <button onClick={()=>{
            const r = Math.floor(Math.random()*100);
            setRandomNumber(r);
          }}>Generate Random Number</button>
        </div>
    
          <div>
            <h3>Enter a Name : {fname}</h3>
            <input placeholder='Enter your name' value={fname} onChange={(e)=>{
              setFname(e.target.value)
            }}></input>
          </div>
    
    
    </>
  )
}

export default App
