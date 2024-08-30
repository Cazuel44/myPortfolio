import React, { useState, useEffect } from 'react';
import './projectsCard.css';
import projectsData from '../../data/projectsData.json';
/* import { ProjectAnimationItemCard } from './projectAnimationItemCard'; */
import {ProjectCarrouselItemCard} from '../common/projectCarrouselItemCard'
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
  return (
    <div className="projectsCard">
      <ProjectCarrouselItemCard projects={projectsData} tecnologiesIcons={tecnologiesIcons} />
    </div>
  );
};




/* export const ProjectsCard = ({ visibleIndex }) => {
  return (
    <div className="projectsCardContainer">
      {projectsData.map((project, index) => (
        <ProjectAnimationItemCard
          key={project.id}
          project={project}
          index={index}
          tecnologiesIcons={tecnologiesIcons}
          isVisible={index === visibleIndex}
          visibleIndex={visibleIndex}
        />
      ))}
    </div>
  );
}; */


/* export const ProjectsCard = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleNext = () => {
    setVisibleIndex(prevIndex => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setVisibleIndex(prevIndex => (prevIndex - 1 + projectsData.length) % projectsData.length);
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
        <Button onClick={handlePrev}>Anterior</Button>
        <Button onClick={handleNext}>Siguiente</Button>
      </div>
    </div>
  );
}; */



