// src/components/Home.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => (
  <section id="home" className="home-container">
    <div className="info">
      <h1>Hola! Soy Angel Alvarado</h1>
      <p>Soy Desarrollador Web Junior. Explora mis proyectos y descubre cómo cada línea 
        de código cuenta una historia.</p>
      <div className="social-icons">
      <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      </div>
    </div>
    <div className="profile-pic">
      <img src="perfil.png" alt="Profile" />
    </div>
  </section>
);

export default Home;
