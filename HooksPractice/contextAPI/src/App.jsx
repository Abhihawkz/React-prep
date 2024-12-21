import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import ComponentA from './ComponentA'


export const Data = createContext();


function App() {
  const name = "Bat Man"

  return (
    <Data.Provider value={name}>
      <ComponentA />
    </Data.Provider>
  )
}

export default App
