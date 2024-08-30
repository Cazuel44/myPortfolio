import React, { useEffect, useState } from 'react';
import './projects.css';
import { ProjectsCard } from '../common/projectsCard';
import { Button } from '../common/button';
import projectsData from '../../data/projectsData.json';

export const Projects = () => {
    /* const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        setVisibleIndex(0); // Establece el índice visible inicial
    }, []);

    const handleNext = () => {
        setVisibleIndex(prevIndex => (prevIndex + 1) % projectsData.length);
    };
    
    const handlePrev = () => {
        setVisibleIndex(prevIndex => (prevIndex - 1 + projectsData.length) % projectsData.length);
    }; */

    return (
        <div className="projectsContainer">
            <div className='h2Projects'>
                <h2>Todos los proyectos en los que he trabajado hasta ahora</h2>
            </div>
            <ProjectsCard /* visibleIndex={visibleIndex} */ />
            {/* <div className="navigationButtons">
                <Button onClick={handlePrev}>Anterior</Button>
                <Button onClick={handleNext}>Siguiente</Button>
            </div> */}
        </div>
    );
};