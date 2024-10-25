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
      
      <a href="https://www.linkedin.com/in/angel-aristides-alvarado-landaverde-322bb6246/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>

      <a href="https://github.com/angel6464" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>

      <a href="https://wa.me/77514613" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      </div>
    </div>
    <div className="profile-pic">
      <img src="perfil4.png" alt="Profile" />
    </div>
  </section>
);

export default Home;
