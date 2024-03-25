import React from 'react'
import './Home.css'
import '../Navegacion/Navb.css'
import Bio from './Bio'
import Conocimientos from '../Paginas/Conocimientos'
import Work from '../Paginas/Work'
import Formulario from './Formulario'
import { Link } from 'react-router-dom'
import Footerp from '../Paginas/Footerp'
import v from "../../assets/V/v6.png"



const Home = () => {
  return (
    <div>
      <div className='portada'>
      <div className="container-fluid">
      <Link to='/Mainp' >
          <img src={v}alt="logo" className='logov'/> 
      </Link>     <ul className="nav">
      <div className="menuitem">
   {/* 
        <li className="nav-item">
          <Link className="menutit" to='/Home' >Inicio</Link>
        </li>
*/}
     <section className="divi">

     </section>
            <li className="nav-item">
              <Link className="menutit" to='/about'>About</Link>
            </li>
          </div>
        
      </ul> 
    </div>  
    <div>
    <h1 className="portatitu">
<<<<<<< HEAD
          <strong>HEY, HOLA!</strong>
          <br/>
         Bienvenido a mi portafolio </h1>
=======
          HEY, HOLA!
          <br/>
          <strong className='portaname'>SOY VALERIA</strong>
         <br/> UNA DESAROLLADORA  <strong>FULL STACK</strong> </h1>
         
         
>>>>>>> eca353f (Agregar archivos iniciales)
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

export default Home