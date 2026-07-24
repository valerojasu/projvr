import React from "react";
import "./Home.css";
import "../Navegacion/Navb.css";
import Bio from "./Bio";
import Conocimientos from "../Paginas/Conocimientos";
import Work from "../Paginas/Work";
import Formulario from "./Formulario";
import Footerp from "../Paginas/Footerp";
import HomeNavbar from "../Navegacion/HomeNavbar"; // ✅ navbar importado

const Home = () => {
  return (
    <div>
      <div className="portada">
        <HomeNavbar />
        <h1 className="portatitu">
          <strong>Hi, I'm Valeria Rojas</strong>
          <br />
          FULL STACK DEVELOPER
          <br />I build modern and responsive websites and web applications.
        </h1>
      </div>

      <Bio />
      <Conocimientos />
      <Work />
      <Formulario />
      <Footerp />
    </div>
  );
};

export default Home;
