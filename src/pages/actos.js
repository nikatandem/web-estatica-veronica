import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import MenuLateral from "../components/menu-lateral/lateral";

const Actos = () => {
  return (
    <>
      <Layout />
      <MenuLateral />
      <div className="content">
        
        <h2>Actos oficiales e institucionales</h2>
        <p>
          Cada año los Palacios y Monasterios del Patrimonio Nacional acogen
          actos oficiales presididos por S.M. el Rey de España. Las Ceremonias
          de Estado conservan su carácter histórico y el protocolo tradicional.
          Entre las más importantes se encuentran las recepciones de gala a los
          Jefes de Estado que visitan nuestro país, o la presentación de cartas
          credenciales ante S.M. el Rey por los nuevos Embajadores extranjeros
          acreditados en España. En el Palacio Real de Madrid, residencia
          oficial del monarca, también se celebran las Audiencias Militares, el
          Acto del Relevo Solemne de la Guardia Real, las recepciones al Cuerpo
          Diplomático acreditado en España, la Pascua Militar o la Recepción del
          12 de octubre, día de la Fiesta Nacional.
        </p>
        <p>
          Además, los Reyes presiden, en el Palacio Real de Madrid, encuentros
          con el mundo de la cultura y las letras, y en el Palacio Real de
          Aranjuez la reunión anual del Patronato del Instituto Cervantes. Por
          su parte, la entrega de los Premios Nacionales del Deporte, el
          concurso “¿Qué es un rey para ti?” y los Premios Internacionales de
          Investigación tienen lugar en el Palacio Real de El Pardo; en la
          Iglesia del Monasterio de Yuste se celebra, a su vez, el acto de
          entrega del premio internacional europeo Carlos V, el 9 de mayo, con
          ocasión del Día de Europa. A estos actos se suman las reuniones
          anuales de los diferentes Patronatos de las Fundaciones Princesa de
          Asturias, Princesa de Girona, Cotec y Elcano.
        </p>
        <p>
          A lo largo de los años, Patrimonio Nacional y la Casa de S.M. El Rey
          han colaborado en actos de gran relevancia histórica, como la
          recepción extraordinaria que tuvo lugar en el Palacio Real de Madrid
          con motivo de la Proclamación del Rey Don Felipe VI (19 de junio de
          2014) o la Abdicación de S.M. El Rey Don Juan Carlos I (18 de junio
          de 2014). Otros actos de importancia internacional en este lugar
          fueron la Presidencia de España en la Conferencia de Paz, celebrada en
          Madrid en 1991, el Consejo de la Unión Europea (1989, 1995, 2001 y
          2010), la firma del Acta de Adhesión a la UE (1985), y la segunda
          Cumbre Iberoamericana de Jefes de Estado y de Gobierno (1992).
        </p>
      </div>
    </>
  );
};

export default Actos;
