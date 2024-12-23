import { useState } from 'react'

import './App.css'
import User from './User'
import ChildrenNested from './ChildrenNested'

function App() {

  return (
    <>
     <User name="john wick" age={44} isGangster={true}/>
     <ChildrenNested>
      <h1>Hello fam</h1>
      <p>Nice meeting you all .</p>
     </ChildrenNested>
    </>
  )
}

export default App
