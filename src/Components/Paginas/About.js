import React from 'react'
import './About.css'
import './Bio.css'
import Navb from '../Navegacion/Navb'
import Conocimientos from '../Paginas/Conocimientos'
import Footerp from '../Paginas/Footerp'
import { Container, Row, Col } from 'react-bootstrap';



function About() {
  return (
    <div>
      <div>
      <Navb/>
      </div>
      <Container>
      <Row>
      <Col sm={6} className="bodyabout">
            <div className='col'>
            <h1 className='abouttext2'> ¿Quién es
            <br/> <strong className='nombc'>Valeria Rojas? </strong> </h1>
            <p className='aboutparra'> Soy egresada de un colegio técnico profesional en el cual obtuve un título en <strong> Informática Empresarial </strong>, también, cuento con un título universitario de <strong> Marketing Digital </strong>  obtenido en la Universidad Americana y graduada como <strong> Desarrollador Full Stack </strong>  en la Universidad Creativa de Costa Rica.</p> 
            <p className='aboutparra'> Certificada como <strong> System Administrator de ServiceNow </strong></p> 
            <p className='aboutparra'> Nací en 1998, en San José, Costa Rica.</p>  
            <p className='aboutparra'> Cuando no estoy en frente de la computadora, me encanta hacer ejercicio, salir a comer a un buen restaurante, pasar tiempo de calidad con mi familia y mis perritos.</p>  

            </div>  
            </Col>
            <Col sm= {6}>
            
            <img src={require ('../../assets/fotoportada.png')} alt='' className='fotop'/>
            
            </Col>
            
        
        </Row>
        </Container>\
    
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
      
        <Container className='contenedor'>
        <Row>
        <Col sm={10}>
            <h1 className='WorkExpet'> ACADEMIC BACKGROUND</h1>

            </Col>
        <section className='WorkExpe'>
            

            <div>
            <Col sm={4}>
                <Col>
                <h2 className='WorkExpet1'><strong>2023</strong></h2>
                </Col>
                <Col >
                <h2 className='WorkExpet1'><strong>ServiceNow</strong></h2>
                <h3 className='WorkExpet2'>Certificated ServiceNow Administrator</h3>
                </Col>  
            </Col>
           
            <Col sm={4}>
                <Col >
                <h2 className='WorkExpet1'><strong>2020 - 2021</strong></h2>
                </Col>
                <Col>
                <h2 className='WorkExpet1'><strong>INTENSA</strong></h2>
                <h3 className='WorkExpet2'>Intensive English Course</h3>
                </Col>  
            </Col>
            <Col sm={4}>
                <Col >
                <h2 className='WorkExpet1'><strong>2019 - 2020</strong></h2>
                </Col>
                <Col>
                <h2 className='WorkExpet1'><strong>Universidad Americana</strong></h2>
                <h3 className='WorkExpet2'>University Degree in Digital Marketing</h3>
                </Col>  
                </Col>
            </div>
        <Row>

        </Row>
            <Col sm={6}>
                <Col>
                <h2 className='WorkExpet1'><strong>2022-2023</strong></h2>
                </Col>
                <Col>
                <h2 className='WorkExpet1'><strong>Professional Technical Collage of Santo Domingo</strong></h2>
                <h3 className='WorkExpet2'>Degree in Business Informatics</h3>
                </Col>  
            </Col>
            <Col s={6}>
                <Col>
                <h2 className='WorkExpet1'><strong>2022-2023</strong></h2>
                </Col>
                <Col >
                <h2 className='WorkExpet1'><strong>Universidad Creativa</strong></h2>
                <h3 className='WorkExpet2'>Technical University Degreed in Full Stack Developer</h3>
                </Col>  
            </Col>
            </section>   
        </Row>
        </Container>
        <section>
        <section class="Contactos">
            <Col class="container">
                <section class="row">
                    <div class="col">
                        <p class="titulo">Contáctenos a nuestro WhatsApp</p>    
                        <p class="encima" href="https://api.whatsapp.com/send?phone=50683105640&text= Hola!%20Quiero%20contratar%20sus%20servicios!"> 83105640</p>
                    </div>
                </section>
            </Col>
    
            <Col class="container">
                <section class="row">
                    
                        <div class="col">
                            <p class="titulo">Correo electrónico:</p>    
                        <a href="mailto:sudisplay@gmail.com" class="encima">valerojasu98@hotmail.com</a>                        
                    </div>
                </section>
            </Col>
           
        </section>
        </section>

        <section>
            <Footerp/>
        </section>
        
        
        
      </div>
    
  )
}

export default About