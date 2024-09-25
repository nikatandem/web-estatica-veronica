import React from "react";
import Layout from "../components/layout/layout";
import MenuLateral from "../components/menu-lateral/lateral";
import Generador from "../components/generadorqr/generador-componente";
import "../components/index.css";

const AppQr = () =>{
    return(
<>
<Layout/>
<MenuLateral/>
<Generador/>
<footer className="footer-section">
        <p>© 2024 · TandEM Aranjuez, todos los derechos reservados.</p>
      </footer>
</>
    )
}

export default AppQr