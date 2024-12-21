import React from 'react'
import { Data } from './App';
import { useContext } from 'react';

const ContextComponent = () => {
    const name = useContext(Data)
  return (
    <div>Hello {name}</div>
  )
}

export default ContextComponent;