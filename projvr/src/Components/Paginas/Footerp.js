import React from 'react';
import './Footerp.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footerp = () => {
  return (
    <div className="footer-wrapper">
      <Container className="term">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} sm={6} md={5} className="footer-content">
            <h4 className="textof">Copyright @2024 - Created by Valeria Rojas</h4>
          </Col>
          <Col xs={12} sm={3} md={3} className="footer-content">
            <h4 className="textof">
              <a href="mailto:valerojasu98@hotmail.com" className="textof">Contáctenos</a>
            </h4>
          </Col>
          <Col xs={4} sm={2} md={1} className="iconosf">
            <a href="https://www.google.com/" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a> 
          </Col>
          <Col xs={4} sm={2} md={1} className="iconosf">
            <a href="https://www.linkedin.com/in/sharon-valeria-rojas-ugalde-347409180/" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>
          <Col xs={4} sm={2} md={1} className="iconosf">
            <a href="https://api.whatsapp.com/send?phone=50683105640&text= Hola!%20Quiero%20contratar%20sus%20servicios!" aria-label="WhatsApp">
              <i className="bi bi-whatsapp"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footerp;
