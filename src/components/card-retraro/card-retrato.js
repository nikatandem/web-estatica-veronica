import React from 'react';
import "./card-retrato.css";

const CardRetrato = ({ name, imageSrc, description, formato, depositoLegal, nipo }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc; // La URL de la imagen
    link.download = `${name}.jpg`; // Nombre con el que se descargará
    document.body.appendChild(link);
    link.click(); // Simula un clic en el enlace
    document.body.removeChild(link); // Limpia el DOM
  };

  return (
    <div className="card-retrato">
      <img src={imageSrc} alt={name} className="card-retrato-image" />
      <div className="card-info">
        <p className='titulo-retrato'>{name}</p>
        <p className='texto-retrato'>{description}</p>
        <p className='texto-retrato'><strong>Formato:</strong> {formato}</p>
        <p className='texto-retrato'><strong>Depósito legal:</strong> {depositoLegal}</p>
        <p className='texto-retrato'><strong>NIPO:</strong> {nipo}</p>
        <button className="download-button" onClick={handleDownload}>
          Descargar
        </button>
      </div>
    </div>
  );
};

export default CardRetrato;
