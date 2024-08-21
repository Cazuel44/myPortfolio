import React, { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './main.css';
import { Header } from '../common/header';
import { Projects } from './projects.js';
import { AboutMe } from './aboutMe.js';
import { Contact } from './contact.js';



function Main() {
    const [activeScreen, setActiveScreen] = useState('aboutMe');
    const nodeRef = useRef(null);

    const handleTabClick = (screen) => {
        setActiveScreen(screen);
    };



    return (
        <div className="containerMain">
            <Header onTabClick={handleTabClick} />
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={activeScreen}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="fade"
                    addEndListener={(done) => {
                        nodeRef.current.addEventListener("transitionend", done, false);
                    }}
                >
                    <div className="screen" ref={nodeRef}>
                        {activeScreen === 'aboutMe' && <AboutMe />}
                        {activeScreen === 'projects' && <Projects />}
                        {activeScreen === 'contact' && <Contact />}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}

export default Main;









/* import React, { useState } from 'react';
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


 */