import React from 'react'
import './Work.css'
import lgit from '../../assets/Logos/gitblan.png';
import logonet from '../../assets/Logos/netlify.png';



const Work = () => {
  return (
    <div className='workb'>
<<<<<<< HEAD
        <h1 className='worktext1'>Mis trabajos recientes</h1>
        <h2 className='worktext2'> Aca estan algunos de mis trabajos recientes</h2>
        <section className='traba'>
=======
        <section className='traba'>
        <h2 className='col worktext2'> Visite mi perfil en alguna de estas plataformas para saber más de mis trabajos</h2>
>>>>>>> eca353f (Agregar archivos iniciales)
                <div className='col cuadritos'>
                    <a href='https://github.com/valerojasu?tab=repositories'>
                    <img src={lgit} alt='' className='workgit'/>
                    </a>
                </div>
                <div className='col cuadritos'>
                <a href='https://app.netlify.com/teams/valerojasu/overview'>
                    <img src={logonet} alt='' className='worknet'/>
                    </a>                </div>
         
            </section>

    </div>
  )
}

export default Work