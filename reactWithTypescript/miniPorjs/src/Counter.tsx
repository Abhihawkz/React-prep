import { useState } from "react";

const Counter = () => {
    const [count ,setCount ] = useState<number>(0);

    return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(count  + 1)}>Add</button>
    </div>
  )
}

export default Counter;