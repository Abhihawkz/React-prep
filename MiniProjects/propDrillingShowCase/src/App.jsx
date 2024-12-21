import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentA from './ComponentA'

function App() {
  const name = "abhi";
  return (
    <>
      <ComponentA name={name}/>
    </>
  )
}

export default App
