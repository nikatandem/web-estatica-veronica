import * as React from "react"
import MenuLateral from "../components/menu-lateral/lateral";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import "../components/index.css";
<link rel="icon" href="/ruta/a/tu/favicon.ico" type="image/x-icon" />

const IndexPage = () => {
  return (
    <>
    <Layout />
    <MenuLateral />
    <div className="content">
          <h1>Patrimonio Nacional: Un Tesoro Histórico y Cultural</h1>
          <p>
            Bienvenido al sitio donde celebramos y protegemos el legado histórico, artístico y cultural de España. 
            Desde majestuosos palacios hasta extensos jardines, el Patrimonio Nacional juega un papel esencial en la 
            preservación de nuestra rica historia. Descubre cómo este organismo se dedica a mantener vivas las joyas 
            arquitectónicas y culturales de la nación.
          </p>
          <Link to="/conoce-historia" className="hero-button">Conoce nuestra Historia</Link>
      

      <section className="highlights">
        <div className="highlight-item">
          <h2>Nuestra Misión</h2>
          <p>
            El Patrimonio Nacional tiene la misión de conservar, proteger y poner en valor los monumentos, palacios, 
            monasterios y jardines que forman parte del legado cultural e histórico de España. 
            Nos esforzamos por garantizar que estos tesoros puedan ser disfrutados tanto por el público como por 
            las generaciones futuras.
          </p>
          <Link to="/bienvenida">Leer más</Link>
        </div>

        <div className="highlight-item">
          <h2>Consejo de Administración</h2>
          <p>
            El Consejo de Administración del Patrimonio Nacional está compuesto por figuras clave que aseguran 
            la gestión eficaz y sostenible de estos bienes culturales. Conoce más sobre las personas que están 
            detrás de esta importante labor.
          </p>
          <Link to="/consejo-administracion">Descubre quiénes somos</Link>
        </div>

        <div className="highlight-item">
          <h2>Eventos y Actos Oficiales</h2>
          <p>
            A lo largo del año, el Patrimonio Nacional organiza y acoge diversos actos oficiales e institucionales, 
            incluyendo recepciones, ceremonias y eventos que reflejan la importancia histórica de nuestras sedes.
          </p>
          <Link to="/actos">Ver más eventos</Link>
        </div>
      </section>

      <footer className="footer-section">
        <p>© 2024 · TandEM Aranjuez, todos los derechos reservados.</p>
      </footer>
      </div>
</>
  )
};

export default IndexPage

