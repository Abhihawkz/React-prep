// import { FC } from "react";

type user = {
    name:string,
    age:number,
    isGangster:boolean
}

export const User = ({name,age,isGangster}:user) => {
  return (
    <div>
             <p>{name}</p>
             <p>{age}</p>
             <p>{isGangster ? "yes is a Gangster" : "Not a Gangster"}</p>
         </div>
  )
}


// const User:FC<user> = ({name,age,isGangster}) => {
//   return (
//     <div>
//         <p>{name}</p>
//         <p>{age}</p>
//         <p>{isGangster ? "yes is a Gangster" : "Not a Gangster"}</p>
//     </div>
//   )
// }

export default User;