import React from 'react'
import './Work.css'
import lgit from '../../assets/Logos/gitblan.png';
import logonet from '../../assets/Logos/netlify.png';



const Work = () => {
  return (
    <div className='workb'>
        <section className='traba'>
        <h2 className='col worktext2'> Visite mi perfil en alguna de estas plataformas para saber más de mis trabajos</h2>
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