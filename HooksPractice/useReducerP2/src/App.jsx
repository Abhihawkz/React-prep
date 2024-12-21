import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { createContext } from "react";
import { useReducer } from "react";
import { initialState, reducer } from "./ReducerInAction";
import ComponentB from "./ComponentB";

export const Data = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState(0);
  const greeting = "Good Morning";
  return (
    <Data.Provider value={greeting}>
      <ComponentB />
      <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>INC</button>
        <button onClick={() => dispatch({ type: "reset" })}>Res</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Dec</button>
      </div>

      <br />
      <br />
      <br />

      <div>
        <button
          onClick={() =>
            {
              dispatch({ type: "decrementByAmount", payload: +input })
              setInput(0)
            }
          }
        >
          SUB
        </button>{" "}
        <input type="number" value={input} onChange={(e)=> setInput(e.target.value)} />{input}
        <button
          onClick={() =>{

            dispatch({ type: "incrementByAmount", payload: +input })
            setInput(0)
          }
          }
        >
          ADD
        </button>
      </div>
    </Data.Provider>
  );
}

export default App;
