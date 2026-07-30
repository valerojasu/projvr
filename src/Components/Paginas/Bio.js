import React from "react";
import "./Bio.css";
import { Container, Row, Col } from "react-bootstrap";

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
                Hi, I'm <strong className="nombc">Valeria Rojas</strong>, a
                frontend developer passionate about creating modern, responsive
                websites that help businesses build a stronger online presence.
              </p>

              <p className="bioparra">
                With a background in Business Computing, Digital Marketing, and
                Full Stack Development, I combine technology and creativity to
                create websites that are not only visually appealing, but also
                functional and user-focused.
              </p>

              <p className="bioparra">
                I enjoy turning ideas into digital experiences through clean
                design, responsive development, and solutions tailored to each
                client's needs.
              </p>
            </div>
          </Col>

          {/* Columna de Imagen */}
          <Col sm={12} md={6}>
            <img
              src={require("../../assets/fotoportada2.jpg")}
              alt=""
              className="foto"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bio;
