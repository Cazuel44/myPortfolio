import React from 'react';
import { motion } from 'framer-motion';
import './projectsCard.css';

export const ProjectAnimationItemCard = ({ project, index, tecnologiesIcons, isVisible }) => {
    return (
        <motion.div
            className="projectCardContent"
            initial={{ opacity: 1, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.2, delay: index * 0.3 }}
            exit={{ opacity: 0, y: 50 }}
            style={{ display: isVisible ? 'block' : 'none' }} // Ocultar tarjetas que no están visibles
        >
            <div className="projectsCardContentContainer">
                <div className="projectsCardTextContent">
                    <h2>{project.nombre}</h2>
                    <p>Descripcion: {project.descripcion}</p>
                    <p>Tecnologías: </p>
                    <div className="projectsCardIconsContainer">
                        {project.tecnologias.map((tech, techIndex) => (
                            <span key={techIndex}>{tecnologiesIcons[tech]}</span>
                        ))}
                    </div>
                    <a href={project.enlaceGitHub} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
                </div>
                <div className='projectCardImgBox'>
                    <img src={project.imagen} alt={project.nombre} />
                </div>
            </div>
        </motion.div>
    );
};