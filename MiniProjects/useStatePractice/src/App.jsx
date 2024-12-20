import { useState } from 'react'
import './App.css'

function App() {
  const [friends,setFriends] = useState(["jackie","chan","John", "wick"])


  const handleAdd = () => setFriends([...friends,"newFriend"])
  const handleRemove = ()=> setFriends(friends.filter(f => f!=="newFriend"))
  const handleUpdate = ()=> setFriends(friends.map(f => f ==="newFriend" ? "Nice Name " : f))

  return (
    <>
      <div>
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

    </>
  )
}

export default App
