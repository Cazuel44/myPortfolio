import React, { useState, useEffect } from 'react';
import './projectsCard.css';
import projectsData from '../../data/projectsData.json';
import { ProjectAnimationItemCard } from './projectAnimationItemCard';
import { JsIcon } from '../../icons/jsIcon';
import { HtmlIcon } from '../../icons/htmlIcon';
import { CssIcon } from '../../icons/cssIcon';
import { ReactIcon } from '../../icons/reactIcon';
import { ReactNativeIcon } from '../../icons/reactNativeIcon';
import { BoostrapIcon } from '../../icons/boostrapIcon';
import { NodeJsIcon } from '../../icons/nodeJsIcon';
import { MongoDbIcon } from '../../icons/mongoDbIcon';
import { HandlebarsIcon } from '../../icons/handlebarsIcon';
import { FirebaseIcon } from '../../icons/firebaseIcon';
import { ExpoIcon } from '../../icons/expoIcon';
import { useInView } from 'react-intersection-observer';
import { Button } from './button';

const tecnologiesIcons = {
  'Boostrap': <BoostrapIcon />,
  'Css': <CssIcon />,
  'HTML': <HtmlIcon />,
  'JavaScript': <JsIcon />,
  'mongoDB': <MongoDbIcon />,
  'Nodejs': <NodeJsIcon />,
  'Reactjs': <ReactIcon />,
  'ReactNative': <ReactNativeIcon />,
  'Handlebars': <HandlebarsIcon />,
  'Firebase': <FirebaseIcon />,
  'Expo': <ExpoIcon />
}

export const ProjectsCard = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleNext = () => {
    setVisibleIndex(prevIndex => (prevIndex < projectsData.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handlePrev = () => {
    setVisibleIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="projectsCardContainer">
      {projectsData.map((project, index) => (
        <ProjectAnimationItemCard
          key={project.id}
          project={project}
          index={index}
          tecnologiesIcons={tecnologiesIcons}
          isVisible={index === visibleIndex}
        />
      ))}
      <div className="navigationButtons">
        <Button onClick={handlePrev} disabled={visibleIndex === 0}>Anterior</Button>
        <Button onClick={handleNext} disabled={visibleIndex === projectsData.length - 1}>Siguiente</Button>
      </div>
    </div>
  );
};



/* export const ProjectsCard = () => {


  return (
    <div className="projectsCardContainer">
      {projectsData.map((project) => (
        <div key={project.id} className="projectCardContent">
          <div className="projectsCardContentContainer">
            <div className="projectsCardTextContent">
              <h2>{project.nombre}</h2>
              <p>Descripcion: {project.descripcion}</p>
              <p>Tecnologías: </p>
              <div className="projectsCardIconsContainer">
                {project.tecnologias.map((tech, index) => (
                  <span key={index}>{tecnologiesIcons[tech]}</span>
                ))}
              </div>
              <a href={project.enlaceGitHub} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
            </div>
            <div className='projectCardImgBox'>
              <img src={project.imagen} alt={project.nombre} />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}; */