import React from 'react'
import './Bio.css'
import { Container, Row, Col } from 'react-bootstrap';

const Bio = () => {
  return (
    <div>
      <Container>
        <Row className="bodyb">
          {/* Columna de Texto */}
          <Col sm={12} md={6}>
            <div className="col biotext">
              <h1 className="biotext">ESTA ES</h1>
              <h2 className="biotext2">MI BIO</h2>
              <p className="bioparra">
                ¡Hola! soy <strong className="nombc">Valeria Rojas</strong>
              </p>
              <p className="bioparra">
                Nací en 1998, en San José, Costa Rica, y siempre he sentido curiosidad por el mundo de la tecnología y el marketing. <br />
                Empecé mi formación en un colegio técnico, donde obtuve un título en Informática Empresarial, lo que me dio una base sólida para entender cómo funcionan las empresas desde dentro. <br />
                Después, decidí seguir mi pasión por el marketing y estudié Marketing Digital en la Universidad Americana. <br />
                Pero no me detuve ahí: también me gradué como Desarrolladora Full Stack en la Universidad Creativa de Costa Rica, porque me encanta crear soluciones tecnológicas que realmente marquen la diferencia.<br />
                Además, tengo una certificación como System Administrator en ServiceNow, lo que me ha permitido profundizar en la gestión de plataformas tecnológicas.
              </p>
            </div>
          </Col>

          {/* Columna de Imagen */}
          <Col sm={12} md={6}>
            <img src={require('../../assets/fotoportada.png')} alt="" className="foto" />
          </Col>
        </Row>
      </Container>
      <section className="bodyabout2">
  <div className="abouttext2">
    <p>¿Cuál es mi misión?</p>
  </div>
  <div className="aboutparra">
    <p>
      Mi misión es crear oportunidades de desarrollo y diseño innovador, poniendo en práctica mis conocimientos y, lo más importante, escuchando atentamente los deseos y necesidades de mis futuros clientes.
    </p>
  </div>
</section>

    </div>
  )
}

export default Bio

