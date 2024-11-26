import React from 'react'
import Component from './Component1'

const Button = ({count}) => {
  return (
    <div>
        <Component count = {count}/>
        <button>I am a button</button>
    </div>
  )
}

export default Button
