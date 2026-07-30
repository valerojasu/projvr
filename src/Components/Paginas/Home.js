import React from "react";
import "./Home.css";
import "../Navegacion/Navb.css";

import Bio from "./Bio";
import Conocimientos from "../Paginas/Conocimientos";
import Work from "../Paginas/Work";
import Formulario from "./Formulario";
import Footerp from "../Paginas/Footerp";
import HomeNavbar from "../Navegacion/HomeNavbar";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className="portada">
        <HomeNavbar />

        <div className="hero-content">
          <h1 className="portatitu">
            Hi, I'm <strong>Valeria Rojas</strong>
          </h1>

          <p className="portatitu2">
            I build fast, modern websites for small businesses and
            entrepreneurs.
          </p>

          <p className="portatitu3">
            Responsive • User-focused • Performance-driven
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primarys">
              My Projects
            </a>

            <a href="#contact" className="btn-secondarys">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <Conocimientos />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Work />
      </section>

      {/* ABOUT */}
      <section id="about">
        <Bio />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Formulario />
      </section>

      <Footerp />
    </div>
  );
};

export default Home;
