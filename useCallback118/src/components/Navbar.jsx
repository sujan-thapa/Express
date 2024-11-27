import React, {memo} from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log(`Rendering ${adjective} Navbar`)
  return (
    <div>
      I am a {adjective} Navbar
      {/* You are a {adjective} Navbar */}
      <button onClick={()=>{getAdjective()}} >Change me {getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
