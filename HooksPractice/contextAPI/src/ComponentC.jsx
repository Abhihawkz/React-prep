import React from 'react'
import { Data } from './App';
import { useContext } from 'react';

const ComponentC = () => {
    const name = useContext(Data)

    return (
    <div>My name is : {name}</div>
  )
}

export default ComponentC;