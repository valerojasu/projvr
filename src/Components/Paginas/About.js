import React from 'react'
import './About.css'
import Navb from '../Navegacion/Navb'
import Footerp from '../Paginas/Footerp'
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <div>
      <Navb />
      <section className="about-header">
        <Container>
          <Row className="about-row">
            <Col sm={6} className="about-text">
              <h1 className="about-title">¿Quién es <strong className="highlight-name">Valeria Rojas?</strong></h1>
              <p className="about-paragraph">
                Soy egresada en <strong>Informática Empresarial</strong>, con un título en <strong>Marketing Digital</strong> y certificada como <strong>System Administrator en ServiceNow</strong>. Además, soy Desarrolladora Full Stack.
              </p>
              <p className="about-paragraph">Nací en 1998, en San José, Costa Rica.</p>
              <p className="about-paragraph">
                Me apasiona el ejercicio, disfrutar de una buena comida, y pasar tiempo con mi familia y mis perros.
              </p>
            </Col>
            <Col sm={6} className="about-image">
              <img src={require('../../assets/IMG_2524.jpg')} alt="Valeria Rojas" className="about-img" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-section">
        <Container>
          <Row>
            <Col sm={6}>
              <p className="contact-title">Contáctame</p>
              <a href="mailto:valerojasu98@hotmail.com" className="contact-link">valerojasu98@hotmail.com</a>
            </Col>
            <Col sm={6}>
              <p className="contact-title">WhatsApp</p>
              <a href="https://api.whatsapp.com/send?phone=50683105640" className="contact-link">83105640</a>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="studies-section">
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="studies-title">Mi Formación Académica</h2>
            </Col>
            <Col sm={4} className="study-card">
              <h3 className="study-year">2023</h3>
              <h4 className="study-title">ServiceNow</h4>
              <p className="study-subtitle">Certified ServiceNow Administrator</p>
            </Col>
            <Col sm={4} className="study-card">
              <h3 className="study-year">2020 - 2021</h3>
              <h4 className="study-title">INTENSA</h4>
              <p className="study-subtitle">Intensive English Course</p>
            </Col>
            <Col sm={4} className="study-card">
              <h3 className="study-year">2019 - 2020</h3>
              <h4 className="study-title">Universidad Americana</h4>
              <p className="study-subtitle">University Degree in Digital Marketing</p>
            </Col>
            <Col sm={4} className="study-card">
              <h3 className="study-year">2022 - 2023</h3>
              <h4 className="study-title">Professional Technical College of Santo Domingo</h4>
              <p className="study-subtitle">Degree in Business Informatics</p>
            </Col>
            <Col sm={4} className="study-card">
              <h3 className="study-year">2022 - 2023</h3>
              <h4 className="study-title">Universidad Creativa</h4>
              <p className="study-subtitle">Technical Degree in Full Stack Development</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Footerp />
    </div>
  )
}

export default About;
