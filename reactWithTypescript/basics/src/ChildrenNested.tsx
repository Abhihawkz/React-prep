import React from 'react'

type childs = {
    children : React.ReactNode
}

const ChildrenNested = ({children} : childs) => {
  return (
    <div>{children}</div>
  )
}

export default ChildrenNested;