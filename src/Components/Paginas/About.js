import React from 'react'
import './About.css'
import Navb from '../Navegacion/Navb'
import Conocimientos from '../Paginas/Conocimientos'

function About() {
  return (
    <div>
      <div>
      <Navb/>
      </div>
      <div>
      <section className='bodyabout'>
            <div className='col biotext'>
            <h1 className='abouttext2'> ¿Quién es </h1>
            <h2 className='abouttext'> Valeria Rojas?</h2>
            <p className='aboutparra'> Soy egresada de un colegio técnico profesional en el cual obtuve un título en Informática Empresarial, también, cuento con un título universitario de Marketing Digital obtenido en la Universidad America y en proceso de obtener mi titulo de Desarrollador Full Stack en la Universidad Creativa.</p> 
            <p className='aboutparra'> Certificada como System Administrator de Service Now</p> 
            <p className='aboutparra'> Nací en 1998, en San José, Costa Rica.</p>  
            <p className='aboutparra'> Cuando no estoy en frente de la computadora, me encanta hacer ejercicio, salir a comer a un buen restaurante, pasar tiempo de calidad con mi familia y mis perritos.</p>  

            </div>  
            <div className='col'>
       
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
        <section>
          <Conocimientos/>
        </section>
        
      </div>
    </div>
  )
}

export default About