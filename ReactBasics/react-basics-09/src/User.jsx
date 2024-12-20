import React from 'react'

const User = ({isLoggedIn,isAdmin}) => {
  if(isLoggedIn && isAdmin){
    return <h2>Welcome Admin.</h2>
  }else{
    return <h2>Welcome User.</h2>
  }
}

export default User;