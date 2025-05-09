import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.css';
import v from "../../assets/V/v6.png";

const HomeNavbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`navbar-home ${navScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to='/Mainp'>
          <img src={v} alt="logo" className='logov' />
        </Link>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link className="menutinav" to='/about' onClick={() => setMenuOpen(false)}>About</Link>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
