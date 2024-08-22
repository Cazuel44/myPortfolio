import React from 'react';
import './contactCard.css'

export const ContactCard = () => {
  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h2>Rodrigo Cortes</h2>
        <p>Full-Stack Developer trainee</p>
      </div>
      <div className="contactInfo">
        <p>Email: rodrigo.cortes@gmail.com</p>
        <p>Teléfono: +56 9 33242803</p>
        <p>Ubicación: Coquimbo, Chile</p>
      </div>
      <div className="contactLinks">
        <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};