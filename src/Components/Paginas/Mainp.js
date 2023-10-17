import React from 'react'
import './Mainp.css'
import { Link } from 'react-router-dom'
import v from "../../assets/V/v6.png"


export default function Mainp() {
  return (
    <div className='mainp'>
      <div>
      <img src={v} className="App-logo" alt="logo" />
      </div>
      <h1 className='tit1'>
      PORTAFOLIO DE: </h1> 
        <h3 className='nombre'> VALERIA ROJAS </h3>
      <h2 className='tit2'> FULL STACK DEVELOPER</h2>
      <div>
      <Link className="boton" to='/Home' >Start</Link>
      </div>
    </div>
  )
}
