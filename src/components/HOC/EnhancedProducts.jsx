import React from 'react'

export const withNewProp = (Component) => {
  return function NewComponent(props){
    return <Component {...props} grid="repeat(3, 1fr)"/>
  }
}
