import React from 'react'
import ComponentB from './ComponentB';

const ComponentA = (props) => {
  return (
    <div>
        <ComponentB name={props.name}/>
    </div>
  )
}

export default ComponentA;