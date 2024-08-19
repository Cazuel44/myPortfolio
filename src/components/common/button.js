import React from 'react';
import './button.css'; // Si deseas agregar estilos

export const Button = ({ onClick, children }) => {


  return (
    <button className="customButton" onClick={onClick}>
      {children}
    </button>
  );
};
