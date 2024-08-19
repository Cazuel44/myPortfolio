import React from 'react';
import './projectsCard.css';
import projectsData from '../../data/projectsData.json';

export const ProjectsCard = () => {
  return (
    <div className="projectsCardContainer">
      {projectsData.map((project) => (
        <div key={project.id} className="cardContent">
          <img src={project.imagen} /* alt={project.nombre} */ />
          <h2>{project.nombre}</h2>
          <p>Tecnologías: {project.tecnologias.join(', ')}</p>
          <a href={project.enlaceGitHub} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
        </div>
      ))}
    </div>
  );
};