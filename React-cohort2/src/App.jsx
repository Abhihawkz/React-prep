import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount((c) => c + 1);
  const handleReset = () => setCount((c) => (c = 0));
  const handleSub = () => setCount((c) => c - 1);
  return (
    <>
      <div className="h-screen w-full bg-gray-[#2F3C7E]">
        <div className="flex justify-center items-center h-full flex-col">
        <div className="text-8xl font-semibold">{count}</div>
        <div className="mt-8">
        <button className="mx-4 text-4xl font-bold rounded-xl bg-[#2F3C7E] text-[#FBEAEB]  px-4 py-4" onClick={handleAdd}>Add</button>
        <button className="mx-4 text-4xl font-bold rounded-xl bg-[#2F3C7E] text-[#FBEAEB]  px-4 py-4" onClick={handleReset}>Reset</button>
        <button  className="mx-4 text-4xl font-bold rounded-xl bg-[#2F3C7E] text-[#FBEAEB] px-4 py-4" onClick={handleSub}>Sub</button>
        </div>
        </div>
      </div>
    </>
  );
}


export default App;
