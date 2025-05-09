import React from 'react';
import { Link } from 'react-router-dom';
import './Navb.css';
import v from "../../assets/V/v6.png";

const Navb = () => {
  return (
    <div className="navbar-about">  {/* Aplica la clase navbar-about */}
        <div className="container-fluid">
          <Link to='/Mainp'>
            <img src={v} alt="logo" className='logov'/>
          </Link>
    
          <ul className="nav">
            <div className="menuitem">
              <li className="nav-item">
                <Link className="menutinav" to='/Home'>Inicio</Link>
              </li>
              {/* Aquí puedes agregar más enlaces */}
            </div>
          </ul>
        </div> 
    </div>
  );
}

export default Navb;

