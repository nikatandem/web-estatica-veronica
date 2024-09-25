import * as React from "react";
import Layout from "../components/layout/layout";
import PersonCard from "../components/personacard/persona-card";
import MenuLateral from "../components/menu-lateral/lateral";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";
import image16 from "../images/image16.jpeg";


const Consejo = () => {
  const person1 = {
    name: "ANA DE LA CUEVA FERNÁNDEZ",
    position: "PRESIDENTA DE PATRIMONIO NACIONAL",
    imageSrc:  image1,
    description: [
      "Licenciada en Ciencias Económicas y Empresariales por la Universidad Autónoma de Madrid en la especialidad de Economía Cuantitativa.",
      "Ha desarrollado toda su carrera profesional en el Ministerio de Asuntos Económicos y Transformación Digital, donde ingresó por oposición en el Cuerpo de Técnicos Comerciales y Economistas del Estado en 1991.",
      "Ha sido secretaria de Estado de Economía y Apoyo a la Empresa desde junio de 2018 hasta mayo de 2021, ostentando la Secretaría de la Comisión Delegada del Gobierno para Asuntos Económicos.",
      "Anteriormente había desempeñado diversos cargos de responsabilidad en el Ministerio, en la Dirección General de Política Comercial e Inversiones Exteriores, la Dirección General de Política Económica y la Dirección General del Tesoro y fue directora del Gabinete del secretario de Estado de Economía.",
      "Ha sido miembro de los siguientes Consejos de Administración e instituciones nacionales e internacionales: consejera de la Casa de la Moneda y Timbre, consejera de Expansión Exterior (actualmente ICEX), Consejera de la Compañía Española de Crédito a la Exportación (CESCE), consejera de RENFE, consejera de la Sociedad Estatal de Participaciones Industriales (SEPI), consejera de la Autoridad Macroprudencial Consejo de Estabilidad Financiera (AMCESFI), gobernadora alterna por España en el Grupo Banco Mundial, en el Banco Interamericano de Desarrollo, el Banco Centroamericano de Integración Económica, el Banco Asiático de Desarrollo, el Banco Asiático para Inversión en Infraestructuras, el Banco Africano de Desarrollo y el Banco Europeo de Reconstrucción y Desarrollo, presidenta de la Comisión para la prevención del blanqueo de capitales y las infracciones monetarias, miembro de la Comisión de Coordinación del Plan de Recuperación, Transformación y Resiliencia.",
    ],
  };

  const person2 = {
    name: "MARÍA DOLORES MENÉNDEZ COMPANY",
    position: "GERENTE DE PATRIMONIO NACIONAL",
    imageSrc:  image2,
    description: [
      "Licenciada en Ciencias Económicas y Empresariales, rama de Economía de la Empresa, por la Universidad Complutense de Madrid. ",
      "Funcionaria en servicio activo de la Escala Técnica de Gestión de Organismos Autónomos y en excedencia del Cuerpo Técnico de Auditoría y Contabilidad, Executive Master in Public Administration (EMPA). ESADE.",
      "Ha trabajado como Subdirectora General de Administración Financiera y Oficialía Mayor en el Ministerio de Asuntos Económicos y Transformación Digital. Ha sido Secretaria General del Consejo Superior de Deportes y del Instituto Español de Oceanografía y Subdirectora General Adjunta de Administración Económica en la Secretaría General de la Dirección General de Tráfico.",
      "Ha trabajado como Subdirectora General de Administración Financiera y Oficialía Mayor en el Ministerio de Asuntos Económicos y Transformación Digital. Ha sido Secretaria General del Consejo Superior de Deportes y del Instituto Español de Oceanografía y Subdirectora General Adjunta de Administración Económica en la Secretaría General de la Dirección General de Tráfico.",
      "Miembro del Consejo de Administración del Centro para el Desarrollo Tecnológico Industrial E.P.E. (CDTI).",
    ],
  };

  const person3 = {
    name: "ANA MARÍA ARIAS DE COSSÍO",
    position: "CONSEJERA",
    imageSrc: image3,
    description: [
      "Doctora en Historia del Arte y catedrática emérita de la Universidad Complutense de Madrid.",
      "Ha desempeñado una amplia actividad investigadora, con 6 sexenios de investigación reconocidos por la Comisión Nacional Evaluadora. Cuenta en su haber con publicaciones sobre estudios de pintura y sobre historia intelectual referida a la Institución Libre de Enseñanza y a Manuel B. Cossío. También ha realizado estudios sobre escenografía teatral, ha publicado 14 libros individuales y 10 con otros autores, numerosos artículos en revistas especializadas y participado en ponencias a congresos.",
      "Cuenta con una reconocida trayectoria vinculada a los organismos de conservación del arte. Es académica de la Real Academia de Bellas Artes de Santa Isabel de Hungría de Sevilla y de la Real Academia Canaria de Bellas Artes de San Miguel Arcángel.",
      "Es presidenta de la Fundación Jiménez-Cossío.",
    ],
  };

  const person4 = {
    name: "FRANCISCO BELIL CREIXELL",
    position: "CONSEJERO",
    imageSrc: image4,
    description: [
      "Ingeniero Superior en la Universidad Politécnica de Cataluña.",
      "Amplió sus estudios de ingeniería en la Universidad de Pittsburgh (EE.UU.) e INSEAD, en Fontainebleau (Francia). En julio de 1972 ingresó en Bayer AG, desempeñando diversas funciones en las fábricas alemanas de Leverkusen, Dormagen y Uerdingen. En 1978 fue destinado a Mobay en USA, donde trabajó en la central de Pittsburgh y la fábrica de New Martinsville. En 1981, fue nombrado Director en el Grupo Bayer de México hasta julio de 1987.",
      "El 1 de abril de 1996 fue nombrado Consejero Delegado de Bayer Hispania, la Región Iberia (España y Portugal). El 1 de agosto de 2006, se incorporó a Siemens, S.A. como Vicepresidente y Consejero Delegado. En abril de 2008 fue nombrado CEO de la Región Suroeste de Europa, formada por 15 países. En junio de 2013 fue nombrado Vicepresidente de la Fundación Bertelsmann. En julio de 2015, Presidente de la Fundación Princesa de Girona.",
      "Otros cargos que ha desempeñado: 2000-2006 Presidente de FEIQUE; 2005-2010 Presidente de la Cámara de Comercio alemana para España · Vicepresidente de la Fundación CEDE · Vicepresidente Alumni UPC; Consejos de Administración/ Consejos Asesores: Naturgy, Linde, Uriach, KPMG, Caixabank Banca Privada, APD, Foment, CEOE; 2010 Cruz de Caballero de la Orden del Mérito de la República Federal de Alemania · 1999 'Directivo del año' AED; 2011 Premio a la Excelencia Empresarial por la Cámara Alemana de Comercio; 2017 Encomienda con placa de la Orden Civil de Alfonso X el Sabio en el ámbito de educación.",
    ],
  };

  const person5 = {
    name: "Mª ÁNGELES HERMOSILLA ÁLVAREZ",
    position: "CONSEJERO",
    imageSrc: image5,
    description: [
      "Catedrática de Teoría de la Literatura y Literatura Comparada en la Universidad de Córdoba.",
      "Ha impartido conferencias en distintas universidades españolas y ha sido Profesora Visitante o docente de Postgrado en universidades extranjeras, como París 8, Pau et des pays de l´Adour, La República de Uruguay o Yale University.",
      "Autora de más de medio centenar de publicaciones, cuenta con 4 sexenios de investigación reconocidos, ha formado parte del equipo parisino “Traverses” (1994-2008) y es directora del grupo “Lenguajes” (HUM-224) desde 1995, donde estudia la interacción de códigos (sobre todo pintura y poesía) y las creaciones de mujeres.",
      "Además, ha colaborado con instituciones públicas: Consejería de Cultura de la Junta de Andalucía (Consejo de Bibliotecas) y, en Córdoba, Real Academia, de la que es académica correspondiente; Ateneo, que le concedió el premio “Fiambrera de plata” y Diputación Provincial (comisión de Publicaciones y Consejo Rector de la Fundación de Artes Plásticas “Rafael Botí”).",
    ],
  };

  const person6 = {
    name: "ALBERTO HERRERA RODRÍGUEZ",
    position: "CONSEJERO",
    imageSrc: image6,
    description: [
      " Subsecretario del Ministerio de Presidencia, Justicia y Relaciones con las Cortes.",
      "Nacido en Madrid en 1983. Pertenece al Cuerpo Superior de Administradores Civiles del Estado. Licenciado en Derecho y en Administración y Dirección de Empresas por la Universidad Autónoma de Madrid, máster oficial en Intervención de la Administración en la Sociedad por la UNED, habiendo completado formación con distintos programas cursados en IESE-Universidad de Navarra, LSE-London School of Economics and Political Science, Middlesex University London o el Centro Superior de Estudios de la Defensa Nacional (CESEDEN).",
      "Ha desarrollado labor investigadora en el marco del Programa de Doctorado en Derecho y Políticas Públicas de la UAM, con la preparación de una tesis sobre la dimensión constitucional del acceso a información pública. Ha participado como ponente en diferentes cursos y conferencias en el INAP, la AECID, el Ministerio de la Presidencia, las Delegaciones  del Gobierno, o la Escuela Nacional de Administración Pública de Colombia, sobre gestión y dirección pública.",
      " En la Administración General del Estado ha desempeñado distintos puestos en el ámbito de los Ministerios de Sanidad, Asuntos Exteriores y Cooperación, y Hacienda y Administraciones Públicas. Entre 2014 y 2018, desempeñó el puesto de subdirector general de la Inspección de servicios de la Administración Periférica del Estado en el Ministerio de la Presidencia y para las Administraciones Territoriales. Durante 2018 y 2019, fue director general de Protección Civil y Emergencias en el Ministerio del Interior. Entre enero de 2020 y febrero de 2021 fue subsecretario de Sanidad. Actualmente desempeñaba el puesto de subsecretario de Política Territorial y Función Pública. Está en posesión de la Cruz de Plata de la Orden del Mérito de la Guardia Civil.",
    ],
  };

  const person7 = {
    name: "MARÍA DEL CARMEN IGLESIAS CANO",
    position: "CONSEJERA",
    imageSrc: image7,
    description: [
      "Directora de la Real Academia de la Historia desde diciembre de 2014 (reelegida en 2018).",
      "Académica numeraria de la Real Academia de la Historia desde 1991 y de la Real Academia Española desde 2000, es catedrática de Historia de las Ideas y Formas Políticas de la Universidad Complutense (1984-2000), catedrática de Historia de las Ideas Morales y Políticas de la Universidad Rey Juan Carlos (2000-09) y Sillón Montesquieu de la Real  Academia Europea de Yuste.",
      "Ha sido directora del Centro de Estudios Políticos y Constitucionales, consejera nata del Consejo de Estado y presidenta del consejo de administración del Grupo Unidad Editorial. Profesora de Historia y de Ciencias Sociales de S.A.R. el Príncipe de Asturias y tutora universitaria de S.A.R. Dª Cristina de Borbón en la Universidad Complutense. Especialista en Historia Moderna europea y española y en otros temas de historia y filosofía política de distintas épocas, es autora de más de doscientas publicaciones entre libros, monografías y artículos varios. Comisaria de diez relevantes exposiciones históricas y directora de sus correspondientes catálogos, ha recibido diversos premios y distinciones honoríficas nacionales e internacionales por sus investigaciones y su labor académica y docente, así como por otras contribuciones culturales.",
    ],
  };

  const person8 = {
    name: "GREGORIO MARAÑÓN Y BERTRÁN DE LIS",
    position: "CONSEJERO",
    imageSrc: image8,
    description: [
      "Presidente del Teatro Real y de la Fundación Ortega-Marañón.",
      "Es presidente del Consejo de Administración de Logista, del Consejo de Administración de Universal Music Spain y del Consejo de Administración de Air City Madrid Sur. Es patrono del Museo del Ejército, del Archivo Histórico de la Nobleza y vocal del Consejo Asesor de Cáritas.",
      "Es académico de número de la Real Academia de Bellas Artes de San Fernando y vocal de su Comisión de Administración; académico correspondiente de la Real Academia de Bellas Artes de San Telmo; académico honorario de la Real Academia de Bellas Artes y Ciencias Históricas de Toledo; y académico numerario de la Academia Europea de  Ciencias, Artes y Letras.",
      " Gregorio Marañón está en posesión de la Gran Cruz de Alfonso X el Sabio, la Medalla de Oro al Mérito en las Bellas Artes, la Medalla de Oro de la Comunidad de Madrid y la Medalla de Oro de Castilla-La Mancha. Es comendador de la Legión de Honor francesa y doctor Honoris Causa por la Universidad de Castilla-La Mancha. Tiene el Premio de periodismo Mariano de Cavia 2017.",
    ],
  };

  const person9 = {
    name: "JUDIT ALEXANDRA GONZÁLEZ PEDRAZ",
    position: "CONSEJERA",
    imageSrc: image9,
    description: [
      "Secretaria general de la Presidencia del Gobierno.",
      "Nacida en 1979 en Madrid. Licenciada en Derecho por la Universidad Autónoma de Madrid. Ingresó en el Cuerpo Superior de Administradores Civiles del Estado en el 2006.",
      "Ha sido directora del Departamento de Coordinación Técnica y Jurídica, dependiente del Gabinete del Presidente del Gobierno; secretaria general de la Escuela de Organización Industrial (EOI), fundación pública dependiente del Ministerio de Industria, Comercio y Turismo; subdirectora de cooperación y Coordinación Territorial en el Ministerio de Justicia. Asimismo, ha ocupado puestos de responsabilidad en la secretaría general de la Dirección General del Patrimonio del Estado del Ministerio de Hacienda y en la Agencia Española de Protección de Datos. Con anterioridad ha sido subdirectora general de Relaciones con la Administración de Justicia y el Ministerio Fiscal y asesora en el Gabinete del secretario de Estado de Justicia.",
      "Ha colaborado como profesora asociada en la Universidad Carlos III de Madrid y participado en diversos proyectos de investigación.",
      "Condecorada con la Cruz Distinguida de 1ª Clase de la Orden de San Raimundo de Peñafort.",
    ],
  };

  const person10 = {
    name: "JOSÉ LUIS MARTÍNEZ-ALMEIDA NAVASQÜÉS",
    position: "CONSEJERO",
    imageSrc: image10,
    description: [
      "Alcalde de Madrid.",
      "Licenciado en Derecho por la Universidad Pontificia de Comillas (ICAI-ICADE), Abogado del Estado desde 2001. Su carrera como abogado del Estado es amplia y en concreto ante los Juzgados de lo Social y en la Sala de lo Contencioso Administrativo.",
      "En 2007 es propuesto como Director General de Patrimonio Histórico de la Comunidad de Madrid hasta 2011. Entre los años 2011 y 2013 fue Secretario General del Consejo de Gobierno de la Comunidad Autónoma de Madrid, Secretario General del Consejo de Administración de SEPI Desarrollo Empresarial (SEPIDES) desde septiembre de 2013 hasta abril de 2014, asumiendo también la Dirección de la Asesoría Jurídica.",
      "En abril de 2014 es nombrado por acuerdo del Consejo de Ministros Director de la División Jurídico Institucional de la Autoridad Independiente de Responsabilidad Fiscal.",
      "Tras las Elecciones Municipales y Autonómicas de 2015 toma posesión como Concejal del GM PP y el 28 de abril de 2017 es elegido Portavoz del Grupo Municipal Partido Popular.",
      "El 13 de enero de 2019 fue designado Candidato a la Alcaldía de Madrid por el Partido Popular y, tras las elecciones municipales de 26 de mayo de 2020, fue elegido Alcalde de Madrid (Sesión de Investidura de 15 de junio de 2020).",
    ],
  };
  const person11 = {
    name: "DOMINGO MARTÍNEZ PALOMO",
    position: "CONSEJERO",
    imageSrc: image11,
    description: [
      "Secretario general de la Casa de su Majestad el Rey.",
      "Tras superar el Curso Selectivo, ingresó en la Academia General Militar en 1974, siendo promovido al empleo de Teniente de la Guardia Civil en 1978. Es licenciado en Derecho por la Universidad Complutense de Madrid.",
      "Por Real Decreto 654/1996, de 18 de abril, fue nombrado Jefe del Gabinete de Planificación y Coordinación de la Secretaría General de la Casa de SM el Rey, cargo que desempeñó hasta junio del 2014.",
      "Por Real Decreto 566/2014, de 27 de junio de 2014, fue nombrado Secretario General de la Casa de Su Majestad el Rey.",
      "Por Real Decreto 888/2015, de 2 de octubre, fue promovido al empleo de Teniente General del Cuerpo de la Guardia Civil. Por Real Decreto 85/2017, de 10 de febrero, fue nombrado Vocal del Consejo de Administración del Patrimonio Nacional.",
    ],
  };

  const person12 = {
    name: "JAVIER SOLANA DE MADARIAGA",
    position: "CONSEJERO",
    imageSrc: image12,
    description: [
      "Doctor en Ciencias Físicas y catedrático por la Universidad Complutense de Madrid.",
      "  Ha sido durante trece años miembro del Gobierno de España, donde ostentó varios cargos ministeriales incluidos el de Cultura, Educación, y Asuntos Exteriores. En 1995 fue nombrado Secretario General de la OTAN; y en 1999, el primer Alto Representante para la Política Exterior y de Seguridad Común (PESC) de la Unión Europea. Regresó a España en enero de 2010.",
      " Actualmente, preside EsadeGeo–Centro de Economía y Geopolítica Global de Esade, el Real patronato del Museo del Prado; Aspen Institute España, y el Comité Ejecutivo del Instituto de Salud Global Barcelona. Pertenece a los patronatos de la Fundación la Caixa y Fundación Telefónica; así como al del Council on Foreign Relations y European Council on Foreign Relations, el Real Instituto Elcano, y la Comisión Global sobre las Drogas. Es distinguido fellow de Brookings Institution (Washington, DC), y profesor visitante senior de la London School of Economics, donde fue investido Doctor Honoris Causa en diciembre de 2010.",
    ],
  };
  const person13 = {
    name: "JUAN TEJEDOR CARNERO",
    position: "CONSEJERO",
    imageSrc: image13,
    description: [
      "Licenciado en Ciencias Económicas y Empresariales por la Universidad Complutense de Madrid y funcionario del Cuerpo Superior de Interventores y Auditores del Estado.",
      " Ha desarrollado su labor profesional en el Ministerio de Hacienda, inicialmente en la Oficina Nacional de Auditoría (ONA) de la Intervención General de la Administración del Estado, y posteriormente en la Dirección General del Patrimonio del Estado, como Vocal Asesor de Empresas Públicas y como Subdirector General de Empresas y Participaciones Estatales.",
      "Asimismo, ha sido ponente en cursos del Instituto de Estudios Fiscales, así como vocal del Consejo de Administración de diversas sociedades mercantiles estatales y patrono de fundaciones del sector público estatal.",
      "Actualmente, desde julio de 2018, es Director General del Patrimonio del Estado.",
    ],
  };

  const person14 = {
    name: "MARÍA PÉREZ SÁNCHEZ-LAULHÉ",
    position: "CONSEJERA",
    imageSrc: image14,
    description: [
      "Licenciada en Derecho por la Universidad Pontificia de Comillas (ICADE). Curso de Posgrado ('Título de Experto') en Gestión Cultural en el Exterior por la Universidad Carlos III de Madrid (coorganizado por la AECID).",
      "En 2006 ingresa en la carrera diplomática, entre 2006 y 2008, desempeña diversos puestos de carácter técnico en la Secretaría de Estado para la Unión Europea. En 2008 se incorpora como consejera técnica al Gabinete de la Secretaria de Estado para Iberoamérica, entre 2009 y 2010 forma parte, como vocal asesora, del Gabinete de la Ministra de Sanidad y Asuntos Sociales. Entre 2010 y 2013 es destinada a la Embajada de España en La Paz (Bolivia) como secretaria de Embajada y encargada de los asuntos culturales. Entre 2013 y 2016 es destinada a la Embajada de Costa Rica como consejera cultural y encargada de los Asuntos Consulares en la Embajada de España en San José (Costa Rica). Entre 2014 y 2015, ejerció, además, como directora del Centro Cultural de España en Costa Rica. Desde 2016 a 2019 es destinada de nuevo a Bolivia, como Segunda Jefatura de la Embajada de España en La Paz; además, ejerció como directora del Centro Cultural de España en La Paz entre 2016 y 2018.",
      "En septiembre de 2019 se incorpora a la Agencia Española de Cooperación Internacional para el Desarrollo (AECID) como jefa de la Unidad de Apoyo de la directora de Cooperación con América Latina y el Caribe y, desde marzo de 2020, como jefa del Departamento de Cooperación con los Países Andinos y el Cono Sur. En agosto de 2021 se incorpora Ministerio de Cultura y Deporte, como jefa del Gabinete del Secretario General de Cultura y Deporte.",
      "Desde febrero de 2023 es Subsecretaria de Cultura.",
    ],
  };

  const person15 = {
    name: "SAMUEL ALONSO LLORENTE",
    position: "CONSEJERO",
    imageSrc: image15,
    description: [
      "Maestro de Educación primaria.",
      "Diputado provincial por la provincia de Segovia desde el año 2019. Ha sido concejal del Ayuntamiento del Real Sitio de San Ildefonso y teniente de alcalde del Ayuntamiento del Real Sitio de San Ildefonso.",
      "Abogado del Estado (1992) y abogado del Estado Jefe en Patrimonio Nacional. Marzo 2019.",
      "Actualmente es alcalde del Real Sitio de San Ildefonso.",
      "",
    ],
  };

  const person16 = {
    name: "TOMÁS SUÁREZ-INCLÁN GONZÁLEZ",
    position: "SECRETARIO",
    imageSrc: image16,
    description: [
      "Abogado del Estado (1992) y abogado del Estado Jefe en Patrimonio Nacional. Marzo 2019.",
      "De entre los cargos desempeñados anteriormente destacan: Secretario del Consejo de la Comisión Nacional de los Mercados y la Competencia. Septiembre 2013- Febrero 2017; Secretario general técnico-director del Secretariado del Gobierno. Ministerio de la Presidencia. Enero 2012- Septiembre 2013 (secretario adjunto de la Comisión General de Secretarios de Estado y Subsecretarios);   Secretario general técnico del Ministerio de la Presidencia. Noviembre 2010-Enero 2012;  Secretario general técnico Ministerio de Defensa. Abril 2007 - Noviembre 2010;  Presidente del Comisionado para el Mercado de Tabacos. Julio 2000-Mayo 2004.",
      "Ha prestado servicios en las Abogacías del Estado en Burgos, Soria, Asturias, Madrid y en los ministerios del Interior y Agricultura.",
    ],
  };

  return (
    <>
    <Layout />
    <MenuLateral />
    <div className="content">
      
     
      <h2>Consejo de Administración</h2>
      <div>
        <PersonCard {...person1} />
        <PersonCard {...person2} />
        <PersonCard {...person3} />
        <PersonCard {...person4} />
        <PersonCard {...person5} />
        <PersonCard {...person6} />
        <PersonCard {...person7} />
        <PersonCard {...person8} />
        <PersonCard {...person9} />
        <PersonCard {...person10} />
        <PersonCard {...person11} />
        <PersonCard {...person12} />
        <PersonCard {...person13} />
        <PersonCard {...person14} />
        <PersonCard {...person15} />
        <PersonCard {...person16} />
      </div>
      </div>
    </>
  );
};



export default Consejo;
