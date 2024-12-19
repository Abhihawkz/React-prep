import React from 'react'

const Greetings = () => {
    const name = "abhi webdev";
    const date = new Date();
  return (
    <div><h1>{name}</h1>
    <p>{date.toString()}</p>
    </div>
  )
}

export default Greetings;