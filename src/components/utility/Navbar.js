import React from 'react'
import logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-component">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <Link to='/' >Home</Link>
          <a href='#exercises' >Exercises</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar