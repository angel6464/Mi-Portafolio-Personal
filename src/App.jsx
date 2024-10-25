import './App.css'
import About from './componentes/About'
import Footer from './componentes/Footer'
import Home from './componentes/Home'
import Projects from './componentes/Projects'

function App() {
  return (
    <>
  <div className="App">
      <nav className="header">
        <div className="contenidodelmenu">
          <a href="#home">Inicio</a>
          <a href="#about">Acerca de mí</a>
          <a href="#projects">Proyectos</a>
        </div>
      </nav>
   
    <Home />
    <About />
    <Projects />
    <Footer />
  </div>
    </>
  )
}

export default App
