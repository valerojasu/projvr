import React from 'react'
import './Work.css'
import lgit from '../../assets/Logos/Gitaz.png';
import logonet from '../../assets/Logos/Netli.png';



const Work = () => {
  return (
    <div className='workb'>
        <h1 className='worktext1'>Explora mis proyectos más recientes</h1>
        <h2 className='worktext2'> Echa un vistazo a algunos de los proyectos en los que he estado trabajando recientemente.</h2>
        <section className='traba'>
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