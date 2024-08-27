import React from 'react';
import './projectsCard.css';
import projectsData from '../../data/projectsData.json';
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
              <img src={project.imagen} /* alt={project.nombre} */ />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};