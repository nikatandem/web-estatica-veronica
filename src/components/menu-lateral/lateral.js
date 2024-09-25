import React, { useState } from "react";
import { Link } from "gatsby";
import "./lateral.css";

const MenuLateral = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="menu-bar">
        <button className="menu-button" onClick={toggleMenu}>
          {isOpen ? 'X' : '☰'}
        </button>
      </div>
      <div className={`menu-lateral ${isOpen ? 'open' : ''}`}>
        <ul>
          <h1 className="title-menu">INFORMACIÓN INSTITUCIONAL</h1>
          <Link className="enlace" to="/bienvenida"><li>Bienvenida de la Presidenta</li></Link>
          <Link className="enlace" to="/conoce-historia"><li>Conoce nuestra historia</li></Link>
          <Link className="enlace" to="/consejo-administracion"><li>Consejo de Administración</li></Link>
          <Link className="enlace" to="/retratos-oficiales"><li>Retratos oficiales Ministerio de la Presidencia</li></Link>
          <Link className="enlace" to="/app-qr"><li>Generador Códigos QR</li></Link>
        </ul>
      </div>
      <div className="content">
 
      </div>
    </div>
  );
};

export default MenuLateral;
