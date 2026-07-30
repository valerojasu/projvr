import React from "react";
import "./Conocimientos.css";

const Conocimientos = () => {
  const technologies = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Git",
  ];

  return (
    <div className="conocimientos-container">
      <section className="conocimientos-header">
        <p className="conotext">Tech Stack</p>
      </section>

      <section className="tech-list">
        {technologies.map((tech, index) => (
          <div className="tech-pill" key={index}>
            {tech}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Conocimientos;
