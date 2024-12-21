import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

const initialState = {
  count:0
}

const reducer = (state,action)=>{
  switch(action.type){
    case "increment" : return {...state,count:state.count+1}
    case "decrement" : return {...state,count:state.count - 1}
    case "reset" : return {...state,count:0}
    default : return state;
  }
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
    <div>
      {state.count}
    </div>
      <div>
        <button onClick={()=> dispatch({type:"increment"})}>Inc</button>
        <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
        <button onClick={()=> dispatch({type:"decrement"})}>Dec</button>
      </div>

    </>
  )
}

export default App
