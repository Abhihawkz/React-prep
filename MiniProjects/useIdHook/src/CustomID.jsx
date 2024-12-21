import React from 'react'
import { useId } from 'react';

const CustomID = () => {
    const id = useId();


  return (
    <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="text" name="email" id={`${id}-password`} />
    </div>
  )
}

export default CustomID;