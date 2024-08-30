import React from 'react';
import Slider from 'react-slick';
import './projectsCard.css'; // Asegúrate de incluir tus estilos personalizados

// Configuración de slick
const settings = {
    dots: false, // Desactiva los puntos de navegación
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Activa el modo centrado
    centerPadding: '30px', // Ajusta el espacio a los lados de la tarjeta central
    focusOnSelect: false, // Permite seleccionar una tarjeta con clic
};

export const ProjectCarrouselItemCard = ({ projects, tecnologiesIcons }) => {
    return (
        <Slider {...settings}>
            {projects.map((project, index) => (
                <div className="projectsCardContainer" key={index}>
                    <div className="projectCardContent">
                        <div className="projectsCardContentContainer">
                            <div className="projectsCardTextContent">
                                <h2>{project.nombre}</h2>
                                <p>Descripcion: {project.descripcion}</p>
                                <p>Tecnologías:</p>
                                <div className="projectsCardIconsContainer">
                                    {project.tecnologias.map((tech, techIndex) => (
                                        <span key={techIndex}>{tecnologiesIcons[tech]}</span>
                                    ))}
                                </div>
                                <a href={project.enlaceGitHub} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
                            </div>
                            <div className="projectCardImgBox">
                                <img src={project.imagen} alt={project.nombre} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};
