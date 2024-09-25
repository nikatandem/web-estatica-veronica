import React from "react";
import "./button1.css"; 


const estiloDefault = {
    padding: '3px',
    height:'40px',
    width:'auto',
};

const clase = {
    borderRadius: '10px',
};

const Button = ({ onClick=()=>{}, style = {}, className = '', children = 'boton' }) => {
    // Combina los estilos predeterminados con los que se pasen como prop
    const combinedStyle = { ...estiloDefault, ...style, ...clase };

    return (
        <button 
    
            style={combinedStyle} 
            className={`button ${className}`}
            onClick={onClick}> {/* Añade la clase 'button' por defecto y las clases adicionales */}
            {children}
        </button>
    );
};

export default Button;
