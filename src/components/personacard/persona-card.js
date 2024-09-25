import React, { useState } from 'react';
import "./persona-card.css"

const PersonCard = ({ name, position, imageSrc, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageSrc} className="img-fluid rounded-start" alt={`Foto de ${name}`} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{position}</p>
            {isExpanded ? (
              <div className="card-text">
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="card-text">{description[0]}</p>
            )}
            <button onClick={toggleDescription} className="btn">
              {isExpanded ? "Leer menos" : "Leer más"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
