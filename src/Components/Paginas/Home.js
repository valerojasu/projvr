import React from 'react'
import './Home.css'
import Navb from '../Navegacion/Navb'
import Bio from './Bio'
import Conocimientos from '../Paginas/Conocimientos'
import Work from '../Paginas/Work'

const Home = () => {
  return (
    <div>
      <div>
      <Navb/>
      </div>
      <div className='portada'>
        <h1>Hola</h1>
        <h2>Bienvenido a mi Portafolio</h2>
        <img src='./src/assest.v.png' alt=''/>
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
      </div>
      
  )
}

export default Home