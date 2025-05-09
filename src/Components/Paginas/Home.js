import React from 'react';
import './Home.css';
import '../Navegacion/Navb.css';
import Bio from './Bio';
import Conocimientos from '../Paginas/Conocimientos';
import Work from '../Paginas/Work';
import Formulario from './Formulario';
import Footerp from '../Paginas/Footerp';
import HomeNavbar from '../Navegacion/HomeNavbar'; // ✅ navbar importado

const Home = () => {
  return (
    <div>
      <div className='portada'>
        <HomeNavbar /> 
        <h1 className="portatitu">
          <strong>HEY, HOLA!</strong><br />
          Bienvenido a mi portafolio
        </h1>
      </div>

      <Bio />
      <Conocimientos />
      <Work />
      <Formulario />
      <Footerp />
    </div>
  );
};

export default Home;
