import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navb.css';
import v from "../../assets/V/v6.png";

const Navb = ({ page }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Manejar el scroll para agregar la clase 'scrolled' al navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${page === 'about' ? 'navbar-about' : 'navbar-home'}`}>
      <div className="container-fluid">
        <Link to='/Mainp'>
          <img src={v} alt="logo" className='logov' />
        </Link>

        <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <div className="menuitem">
            <li className="nav-item">
              <Link className="menutinav" to='/Home'>Inicio</Link>
            </li>
            {/* Puedes agregar más enlaces aquí */}
          </div>
        </ul>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navb;


