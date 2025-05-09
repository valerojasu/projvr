import React, { Component } from 'react';
import './Formulario.css';

class Formulario extends Component {
  render() {
    return (
      <div>
        <section className="project">
          <h1 className="titulocont">Contacto</h1>
          {/* Formulario con la funcionalidad de Netlify */}
          <form name="contact" method="POST" data-netlify="true" className="contact-form">
            {/* Campo oculto necesario para Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <section className="container">
              <div className="row">
                <div className="col">
                  <label htmlFor="inputName" className="form-label titulitos">Nombre</label>
                  <input type="text" name="name" className="form-control" id="inputName" required />
                </div>
                <div className="col">
                  <label htmlFor="inputApellido" className="form-label titulitos">Apellido</label>
                  <input type="text" name="lastname" className="form-control" id="inputApellido" required />
                </div>
              </div>
              <div className="col">
                <label htmlFor="inputEmail" className="form-label titulitos">Correo Electrónico</label>
                <input type="email" name="email" className="form-control" id="inputEmail" required />
              </div>
            </section>
            <section className="container">
              <div className="row">
                <div className="col-12">
                  <label className="form-label titulitos">Cuéntanos sobre tu proyecto</label>
                  <textarea name="message" className="form-control" rows="3" placeholder="Escribe tu mensaje aquí" required></textarea>
                </div>
              </div>
            </section>
            <button type="submit" className="botonf">ENVIAR</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Formulario;
