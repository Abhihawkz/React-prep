import React from 'react'
import {createPortal} from 'react-dom'

const Portal = ({copied}) => {
  return (
   

    <div style={{position:'absolute', bottom:'3rem'}}>
        {copied ? "copied to clipboard" : ""}
    </div>
  );
}

export default Portal;