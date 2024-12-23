import { FC } from "react";
import { type user } from "./UserComponent";

type admin = user & {
    admin : boolean
}


const AdminComponent : FC<admin> = ({name,age,email,location,admin}) => {
  return (
    <div><h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{location}</h3>
        <h4>{email}</h4>
        <h5>{admin ? "Admin" : "Not an Admin"}</h5>
    </div>
  )
}

export default AdminComponent;