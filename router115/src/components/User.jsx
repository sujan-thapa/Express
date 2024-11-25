import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
  const params = useParams()
  

  return (
    <div>
      {params.username?  `I am user ${params.username}`: "No user specified"}
     
    </div>
  )
}

export default User
