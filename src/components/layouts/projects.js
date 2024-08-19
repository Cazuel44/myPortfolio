import React from 'react'
import { ProjectsCard } from '../common/projectsCard'
import { Button } from '../common/button';

export const Projects = ({ onShowAboutMe, onShowContact }) => {
    return (
        <div className="projectContainer">
            <Button onClick={onShowAboutMe}>Volver a Sobre Mí</Button>
            <ProjectsCard />
            <div className=''>
                <Button onClick={onShowContact}>Contáctame</Button>
            </div>
        </div>
    );
}
