import React from 'react';
import './Home.css';
import '../Navegacion/Navb.css';
import Bio from './Bio';
import Conocimientos from '../Paginas/Conocimientos';
import Work from '../Paginas/Work';
import Formulario from './Formulario';
import { Link } from 'react-router-dom';
import Footerp from '../Paginas/Footerp';
import v from "../../assets/V/v6.png";

const Home = () => {
  return (
    <div>
      <div className='portada'>
        <div className="container-fluid">  {/* Ajustado el nombre de clase */}
          <Link to='/Mainp'>
            <img src={v} alt="logo" className='logov'/>
          </Link>     
          <ul className="nav">
            <li className="menuitem">  {/* Cambié div por li con la clase menuitem */}
              <Link className="menutit" to='/about'>About</Link>
            </li>
          </ul> 
        </div>  
        <div>
          <h1 className="portatitu">
            <strong>HEY, HOLA!</strong>
            <br/>
            Bienvenido a mi portafolio
          </h1>
        </div> 
      </div>

      <div>
        <Bio/>
      </div>
      <div>
        <Conocimientos/>
      </div>
      <div>
        <Work/>
      </div>
      <div>
        <Formulario/>
      </div>
      <div>
        <Footerp/>
      </div>
    </div>
  )
}

export default Home;
