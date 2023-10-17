import React from 'react'
import './Bio.css'
import './About'
import foto from '../../assets/foto.jpg';

const Bio = () => {
  return (
    <div>
        <section className='bodyb'>
            <div className='col biotext'>
            <h1 className='biotext'> ESTA ES</h1>
            <h2 className='biotext2'> MI BIO</h2>
            <p className='bioparra'>¡Hola! mi nombre es Valeria Rojas.</p>  
            <p className='bioparra'> Nací en 1998, en San José, Costa Rica.</p>  
            <p className='bioparra'> Soy egresada de un colegio técnico profesional en el cual obtuve un título en Informática Empresarial, también, cuento con un título universitario de Marketing Digital obtenido en la Universidad America y en proceso de obtener mi titulo de Desarrollador Full Stack en la Universidad Creativa.</p> 
            <p className='bioparra'> Certificada como System Administrator de Service Now</p> 
             
            </div>
            <div className='col foto'>
              <img src={foto} alt=''className='foto'/>
            </div>
           
        </section>
        <section className='bodyabout2'> 
        <div className='col'>
        <p className='abouttext2'> ¿Cuál es mi misión?</p>  
        </div>
        <div className='col'>
        <p className='aboutparra'> Mi misión es presentar posibilidades de desarrollo y diseño innovador poniendo en práctica mis conocimientos y aun más importante, escuchando los deseos y necesidades de mis clientes.</p>                        

        </div>
        </section> 
    </div>
  )
}

export default Bio