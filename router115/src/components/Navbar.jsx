import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav'>

        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/'><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/user'><li>User</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/about'><li>About</li></NavLink>
      </ul>
    </div>
  )
}

export default Navbar
