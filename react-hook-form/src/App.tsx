import { useForm,SubmitHandler } from 'react-hook-form'
import './App.css'

interface formTypes {
  name:string,
  email:string,
  password:string
}

function App() {
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm<formTypes>() 
  
  const onSubmit:SubmitHandler<formTypes> = data => console.log(data);
  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="name">Name :</label>
      <input type="text" placeholder='Enter your name' id='name' {...register('name' ,{required: "Name is required",minLength:{
        value:4,
        message:"Name should be minimum of 4 characters"
      }})}/>
      {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
    </div>
    <div>
      <label htmlFor="email">Email :</label>
      <input type="text" placeholder='Enter your email' id='email' {...register('email' ,{required: "Email is required",pattern:{
        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message:'invalid Email address'
      }})}/>
      {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
    </div>
    <div>
      <label htmlFor="password">Password :</label>
      <input type="text" placeholder='Enter your password' id='password' {...register('password' ,{minLength:{
        value : 8,
        message:"Minimum Lenght should be 8 characters"
      }})}/>
      {errors.password && <p style={{color:"red"}}>{errors.password?.message}</p>}
    </div>
      <button type='submit' disabled={isSubmitting}>Submit</button>
    </form>
     
    </>
  )
}

export default App
