
export type user = {
    name : string,
    email : string,
    age : number,
    location : string[],
}


const UserComponent = ({name,age,location,email}:user) => {
  return (
    <div><h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{location}</h3>
        <h4>{email}</h4>
    </div>
  )
}

export default UserComponent;