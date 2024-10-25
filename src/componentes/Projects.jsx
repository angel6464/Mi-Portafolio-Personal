// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Unichamba', image: 'imagen1.png', 
    Description:'Sistema Universitario Ues dedicado a estudiantes para encontrar trabajos.' },
    { title: 'Fylo', image: 'imagen2.png' ,Description:'Landing Page Statico (Boostrap + Css'},
    { title: 'KMusic', image: 'imagen3.png',Description:'Sitio Web Replica de Musica (React+Hml Responsive)' },
    { title: 'Proyecto 4', image: 'ruta/a/imagen4.jpg' ,Description:''},
    { title: 'Proyecto 5', image: 'ruta/a/imagen5.jpg' ,Description:''},
    { title: 'Proyecto 6', image: 'ruta/a/imagen6.jpg' ,Description:''},
    { title: 'Proyecto 7', image: 'ruta/a/imagen7.jpg' ,Description:''},
    { title: 'Proyecto 8', image: 'ruta/a/imagen8.jpg' ,Description:''},
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
              <p>{project.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
