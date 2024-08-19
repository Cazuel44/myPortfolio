import React, { useState } from 'react';
import './main.css';
import { Header } from '../common/header';
import { Projects } from './projects.js';
import { AboutMe } from './aboutMe.js';
import { Contact } from './contact.js';




function Main() {

    const [activeScreen, setActiveScreen] = useState('aboutMe');

    const handleShowProjects = () => {
        setActiveScreen('projects');
    }; 

    const handleShowAboutMe = () => {
        setActiveScreen('aboutMe');
    };

    const handleShowContact = () => {
        setActiveScreen('contact');
    };

    return (
        <div className="containerMain">
            <Header />
            {activeScreen === 'aboutMe' && <AboutMe onShowProjects={handleShowProjects} />}
            {activeScreen === 'projects' && <Projects onShowAboutMe={handleShowAboutMe} onShowContact={handleShowContact} />}
            {activeScreen === 'contact' && <Contact onShowAboutMe={handleShowAboutMe}/>}
        </div>
    );
}

export default Main;


