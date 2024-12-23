import { useState } from "react";

interface userInfo {
    name:string,
    age : number,
    email:string,
}

const UserInfo = () => {
    const [profile , setProfile] = useState<userInfo>({
        name:'',
        age:0,
        email : ''
    })

    const nameUpdate = (name:string)=>{
        setProfile(prev => ({...prev,name:name}))
    }

    const ageUpdate = (age:number)=> {
        setProfile(prev => ({...prev,age:+age}))
    }

    const emailUpdate = (email:string) => {
        setProfile(prev => ({...prev,email}))
    }

  return (
    <div>
        <div>
            <input type="text" placeholder="Name" value={profile.name}  onChange={(e) => nameUpdate(e.target.value)}/>
            <input type="number" placeholder="Age" value={profile.age}  onChange={(e) => ageUpdate(e.target.value)}/>
            <input type="email" placeholder="Email" value={profile.email}  onChange={(e) => emailUpdate(e.target.value)}/>
        </div>
        <div>
            <h1>{profile.name}</h1>
            <h3>{profile.age === 0 ? "" : profile.age}</h3>
            <h3>{profile.email}</h3>
        </div>
    </div>
  )
}

export default UserInfo;