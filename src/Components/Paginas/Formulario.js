import React, { Component } from 'react';
import './Formulario.css'

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      email: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o procesarlos localmente.
    console.log('Nombre:', this.state.nombre);
    console.log('Email:', this.state.email);
  }

  render() {
    return (
      <div>
        <section class="project">
     <h1 className='titulocont'> Contacto</h1>
    <form action="mailto:valerojasu98@hotmail.com" method="post" encType="text/plain">
      <section className="container">
        <div className="row">
          <div className="row">
            <div className="col">
              <label htmlFor="inputEmail4" className="form-label titulitos" >Nombre</label>
              <input type="text" name="name" className="form-control" aria-label="Nombre"/>
            </div>
            <div className="col">
              <label htmlFor="inputEmail4" className="form-label titulitos" >Apellido</label>
              <input type="text" className="form-control"  aria-label="Last name" id="apellido"/>
            </div>
          </div>
            <div class="col">
                <div className="col-auto">
                  <label type="email" className="titulitos">Correo Electrónico</label>
                  <div className="input-group">
                    <div className="input-group-text" >@</div>
                    <input type="text" name="mail" className="form-control" id="email" />
                  </div>              
                </div>
          </div>
          </div>
          </section>
          <section className="container">
          <div className="row">
            <div className="col-12">
<<<<<<< HEAD
                <label className="form-label titulitos">Cuentenos de su proyecto</label>
=======
                <label className="form-label titulitos">Cuénteme de su proyecto</label>
>>>>>>> eca353f (Agregar archivos iniciales)
                <textarea type="text" name="comment" className="form-control" rows="3" placeholder="Ingrese su mensaje"></textarea>
              </div>
          </div>
          <button type="submit" className="botonf">ENVIAR</button>

    </section>
    <div>
      
    </div>
    </form>

 </section>   
        
  </div>
    );
  }
}

export default Formulario;
