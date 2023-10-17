import React from 'react'
import { Link } from 'react-router-dom'
import './Navb.css'
import v from "../../assets/V/v6.png"

const Navb = () => {
  return (
    <div>

        <div className="container-fluid">
          <Link to='/Mainp' >
          <img src={v}alt="logo" className='logov'/> 
          </Link>
    
     <ul className="nav">
      <div className="menuitem">
        <li className="nav-item">
         
          <Link className="menutinav" to='/Home' >Inicio</Link>
        </li>
  
  
  {/* Este es un comentario en un elemento JSX 

           
            <li className="nav-item">
              <Link className="menutinav" to='/about'>About</Link>
            </li>
            */}
          </div>
        
      </ul> 
    </div> 
    </div>
  )
}

export default Navb