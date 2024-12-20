import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Validpassword = () => <h1>Valid Password</h1>
const InvalidPassword = ()=> <h1>Invalid Passowrd</h1>

const Password = ({isValid}) => {
  if(isValid){
    return <Validpassword />
  }
  return <InvalidPassword />
}

function App() {
  const [valid,setValid] = useState(false)

  return (
    <>
     <Password isValid={false}/>
     
    </>
  )
}

export default App
