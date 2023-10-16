import React from 'react'
import { Link } from 'react-router-dom'
import './Navb.css'

const Navb = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid">
    <Link to='/Mainp'> 
        <img src="https://cdn-icons-png.flaticon.com/128/3499/3499613.png" alt="logo" className='logov'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <Link className="nav-link" to='/Home' >Inicio</Link>
        <Link className="nav-link" to='/About'>About</Link>

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navb