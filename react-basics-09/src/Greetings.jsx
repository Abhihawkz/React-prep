import React from 'react'

const Greetings = ({timeOfDay}) => {
  return <div>
  {timeOfDay === 'morning' ? (<h2>Good Morning!!</h2>) : (<h2>Good Afternoon!!</h2>)}
  </div>
}

export default Greetings;