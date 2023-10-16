import React from 'react'
import './Mainp.css'
import { Link } from 'react-router-dom'

export default function Mainp() {
  return (
    <div className='mainp'>
      <div>
      <img src='https://cdn-icons-png.flaticon.com/128/3498/3498354.png' className="App-logo" alt="logo" />
      </div>
      <h1 className='tit1'>
        Hola! Yo soy </h1> <h3 className='nombre'> Valeria Rojas </h3>
      <h2 className='tit2'> Full Stack Developer</h2>
      <div>
      <Link className="boton" to='/Home' >Start</Link>
      </div>
    </div>
  )
}
