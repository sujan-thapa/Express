import React, {useContext} from 'react'
import App from '../App'
import { counterContext } from "../context/context";

const Component1 = ({count}) => {
    const value = useContext(counterContext); // 0 is the default value of the context provider in context.js
  return (
    <div>
      {value.count}
    </div>
  )
}

export default Component1
