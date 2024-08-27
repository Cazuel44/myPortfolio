import React from 'react';
import './projects.css';
import { ProjectsCard } from '../common/projectsCard'
import { Button } from '../common/button';

export const Projects = ({ onShowAboutMe, onShowContact }) => {
    return (
        <div className="projectsContainer">
            {/* <div className='buttonsProjects'>
                <Button onClick={onShowAboutMe}>Volver a Sobre Mí</Button>
            </div> */}
            <div>
                <ProjectsCard />
            </div>
            {/* <div className='buttonsProjects'>
                <Button onClick={onShowContact}>Contáctame</Button>
            </div> */}
        </div>
    );
}
