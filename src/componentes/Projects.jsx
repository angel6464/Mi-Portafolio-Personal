// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Unichamba', image: 'imagen1.png' },
    { title: 'Proyecto 2', image: 'ruta/a/imagen2.jpg' },
    { title: 'Proyecto 3', image: 'ruta/a/imagen3.jpg' },
    { title: 'Proyecto 4', image: 'ruta/a/imagen4.jpg' },
    { title: 'Proyecto 5', image: 'ruta/a/imagen5.jpg' },
    { title: 'Proyecto 6', image: 'ruta/a/imagen6.jpg' },
    { title: 'Proyecto 7', image: 'ruta/a/imagen7.jpg' },
    { title: 'Proyecto 8', image: 'ruta/a/imagen8.jpg' },
  ];

  return (
    <section id="projects" className="projects-container">
      <h2>Proyectos</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>Sistema Universitario Ues dedicado a estudiantes para encontrar trabajos.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
