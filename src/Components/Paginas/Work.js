import React from 'react'
import './Work.css'
import lgit from '../../assets/Logos/gitblan.png';
import logonet from '../../assets/Logos/netlify.png';



const Work = () => {
  return (
    <div className='workb'>
        <h1 className='worktext1'>Mis trabajos recientes</h1>
        <h2 className='worktext2'> Aca estan algunos de mis trabajos recientes</h2>
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