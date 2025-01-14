// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Unichamba', image: 'imagen1.png', 
    Description:'Sistema Universitario Ues dedicado a estudiantes para encontrar trabajos.',
  direccionUrl:'https://unichamba.com/inicio' },
    { title: 'Fylo', image: 'imagen2.png' ,Description:'Landing Page Statico (Boostrap + Css)',
      direccionUrl:'https://fyloangelalvarado.netlify.app/'},
    { title: 'KMusic', image: 'imagen3.png',Description:'Sitio Web Replica de Musica (React+Hml Responsive)',
      direccionUrl:'https://kodigomusicangelalvarado.netlify.app/' },
    { title: 'BlogCafe', image: 'imagen4.png' ,Description:'Laging Page ( Utilizando Html + Css Grid + Flexbox)',
      direccionUrl:'https://blogcafeangelito.netlify.app/'},
    { title: 'Omelette', image: 'imagen5.png' ,Description:'Lagind Page ( Utilizando Html + Css)',
      direccionUrl:'https://omeletteangel.netlify.app/'},
    
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
             <a href={project.direccionUrl} target="_blank"> <button>Visitar</button></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
