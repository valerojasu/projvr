import React from 'react'
import './About.css'
import Navb from '../Navegacion/Navb'
import Conocimientos from '../Paginas/Conocimientos'
import fotob from '../../assets/foto.jpg';
import Footerp from '../Paginas/Footerp'


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
            <img src={fotob} alt=''className='foto'/>
            </div> 
        </section>
    
        <section className='bodyabout2'> 
        <div className='col'>
        <p className='abouttext2'> ¿Cuál es mi misión?</p>  
        </div>
        <div className='col'>
        <p className='aboutparra'> Mi misión es presentar posibilidades de desarrollo y diseño innovador poniendo en práctica mis conocimientos y aun más importante, escuchando los deseos y necesidades de mis futuros clientes.</p>                        

        </div>
        </section>
        <section>
          <Conocimientos/>
        </section>
      
        <section>
        <section className='WorkExpe'>
            <h1 className='WorkExpet'> ACADEMIC BACKGROUND</h1>
            <div>
            <aside className='col WorkExpet1'>
                <div className='col'>
                <h2 className='WorkExpet1'><strong>2023</strong></h2>
                </div>
                <div className='col'>
                <h2 className='WorkExpet1'><strong>ServiceNow</strong></h2>
                <h3 className='WorkExpet2'>Certificated ServiceNow Administrator</h3>
                </div>  
            </aside>
            <aside className='col WorkExpet1'>
                <div className='col'>
                <h2 className='WorkExpet1'><strong>2022-2023</strong></h2>
                </div>
                <div className='col'>
                <h2 className='WorkExpet1'><strong>Universidad Creativa</strong></h2>
                <h3 className='WorkExpet2'>Technical University Degreed in Full Stack Developer</h3>
                </div>  
            </aside>
            <aside className='col WorkExpet1'>
                <div className='col'>
                <h2 className='WorkExpet1'><strong>2020 - 2021</strong></h2>
                </div>
                <div className='col'>
                <h2 className='WorkExpet1'><strong>INTENSA</strong></h2>
                <h3 className='WorkExpet2'>Intensive English Course</h3>
                </div>  
            </aside>
            <aside className='col WorkExpet1'>
                <div >
                <h2 className='WorkExpet1'><strong>2019 - 2020</strong></h2>
                </div>
                <div className='col'>
                <h2 className='WorkExpet1'><strong>Universidad Americana</strong></h2>
                <h3 className='WorkExpet2'>University Degree in Digital Marketing</h3>
                </div>  
            </aside>
            </div>
            <aside className='WorkExpet1'>
                <div className='col'>
                <h2 className='WorkExpet1'><strong>2022-2023</strong></h2>
                </div>
                <div className='col'>
                <h2 className='WorkExpet1'><strong>Professional Technical Collage of Santo Domingo</strong></h2>
                <h3 className='WorkExpet2'>Degree in Business Informatics</h3>
                </div>  
            </aside>
           

        </section>
        </section>
        <section>
        <section class="Contactos">
            <aside class="container">
                <section class="row">
                    <div class="col">
                        <p class="titulo">Contáctenos a nuestro WhatsApp</p>    
                        <p class="encima" href="https://api.whatsapp.com/send?phone=50683105640&text= Hola!%20Quiero%20contratar%20sus%20servicios!"> 83105640</p>
                    </div>
                </section>
            </aside>
    
            <aside class="container">
                <section class="row">
                    
                        <div class="col">
                            <p class="titulo">Correo electrónico:</p>    
                        <a href="mailto:sudisplay@gmail.com" class="encima">valerojasu98@hotmail.com</a>                        
                    </div>
                </section>
            </aside>
           
        </section>
        </section>

        <section>
            <Footerp/>
        </section>
        
        
        
      </div>
    </div>
  )
}

export default About