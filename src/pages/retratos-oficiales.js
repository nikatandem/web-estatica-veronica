import * as React from "react";
import Layout from "../components/layout/layout";
import MenuLateral from "../components/menu-lateral/lateral";
import CardRetrato from "../components/card-retraro/card-retrato";
import "../components/index.css";

import image1 from '../images/retrato1.jpg';
import image2 from '../images/retrato2.jpg';
import image3 from '../images/retrato3.jpg';
import image4 from '../images/retrato4.jpg';
import image5 from '../images/retrato5.jpg';
import image6 from '../images/retrato6.jpg';
import image7 from '../images/retrato7.jpg';
import image8 from '../images/retrato8.jpg';
import image9 from '../images/retrato9.jpg';
import image10 from '../images/retrato10.jpg';
import image11 from '../images/retrato11.jpg';

const RetratosPage = () => {
  const retratos = [
    {
      name: "S.M. el Rey S.M. el Rey",
      imageSrc: image1,
      description: "© Casa de S.M.el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: "M-5986-2020",
      nipo: "093-20-006-X"
    },
    {
      name: "S.M. el Rey con indumentaria de gala en el Palacio Real de Madrid",
      imageSrc: image2,
      description: " © Casa de S.M. el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: "M-5983-2020",
      nipo: "093-20-006-X"
    },
    {
      name: "S.M. EL REY CON UNIFORME DE DIARIO DE CAPITÁN GENERAL DEL EJÉRCITO DE TIERRA",
      imageSrc: image3 ,
      description: "© Casa de S.M. el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: "M-3588-2015",
      nipo: "006-15-001-3"
    },
    { 
      name: "S.M.EL REY CON UNIFORME DE DIARIO DE CAPITÁN GENERAL DE LA ARMADA",
      imageSrc: image4,
      description: "© Casa de S.M. el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: "M-3588-2015",
      nipo: "006-15-001-3"
    },
    { 
      name: "S.M. EL REY CON UNIFORME DE DIARIO DE CAPITÁN GENERAL DEL EJÉRCITO DEL AIRE",
      imageSrc: image5,
      description: "© Casa de S.M. el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: " M-3588-2015",
      nipo: "006-15-001-3"
    },
    {      
      name: "S.M. la Reina S.M. la Reina",
      imageSrc: image6,
      description: " © Casa de S.M. el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: "M-5987-2020",
      nipo: "093-20-006-X"
    },

    {
      name: "S.M. la Reina con indumentaria de gala en el Palacio Real de Madrid",
      imageSrc: image7,
      description: "©Casa de S.M. el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: "M-5984-2020",
      nipo: "093-20-006-X"
    },
    { 
      name: "SS.MM. los Reyes",
      imageSrc: image8,
      description: "© Casa de S.M. el Rey",
      formato: "60 cm y 30 x 40 cm",
      depositoLegal: "M-5988-2020",
      nipo: "093-20-006-X"
    },
    {
      name: "SS.MM. los Reyes con indumentaria de gala en el Palacio Real de Madrid",
      imageSrc: image9,
      description: "© Casa de S.M. el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: " M-5985-2020",
      nipo: "093-20-006-X"
    },
    { 
      name: "S.A.R. la Princesa de Asturias",
      imageSrc: image10,
      description: "© Casa de S.M. el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: "M-5989-2020",
      nipo: "093-20-006-X"
    },
    { 
      name: "S.A.R. la Infanta Doña Sofía",
      imageSrc: image11,
      description: "© Casa de S.M. el Rey",
      formato: "50 x 60 cm y 30 x 40 cm",
      depositoLegal: "M-5990-2020",
      nipo: "093-20-006-X"
    }
  ];

  return (
    <>
     <Layout />
      <MenuLateral />
      <div className="content">
      <h2>Retratos de la Familia Real</h2>

         <div className="cards-container">
      {retratos.map((retrato, index) => (
        <CardRetrato
          key={index}
          name={retrato.name}
          imageSrc={retrato.imageSrc}
          description={retrato.description}
          formato={retrato.formato}
          depositoLegal={retrato.depositoLegal}
          nipo={retrato.nipo}
        />
      ))}
    </div>
    <footer className="footer-section">
        <p>© 2024 · TandEM Aranjuez, todos los derechos reservados.</p>
      </footer>
      </div>
    </>
   
  );
};

export default RetratosPage;