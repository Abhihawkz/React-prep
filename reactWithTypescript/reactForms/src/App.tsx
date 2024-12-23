import { FormEvent, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface formTypes {
  name:string,
  email:string,
  password:string
}

function App() {
  const [submittedData ,setSubmittedData] = useState<formTypes>({
    name:"",
    email:"",
    password:""
  })
  const nameRef  = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event:FormEvent<HTMLElement>)=>{
    event.preventDefault();
    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    
    setSubmittedData({name,email,password})
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter you name' ref={nameRef} />
        <input type="text" placeholder='Enter you email' ref={emailRef} />
        <input type="password" placeholder='Enter you password' ref={passwordRef}/>
        <button type='submit'> Submit </button>
      </form>

      <div>
        <h1>Name: {submittedData.name}</h1>
        <h2>Email: {submittedData.email}</h2>
        <h3>Password: {submittedData.password}</h3>
      </div>
    </div>
      
    </>
  )
}

export default App
