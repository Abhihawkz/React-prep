import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount((c) => c + 1);
  const handleReset = () => setCount((c) => c = 0);
  const handleSub = () => setCount((c) => c - 1);
  return (
    <>
      <div>{count}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSub}>Sub</button>
    </>
  );
}

export default App;
