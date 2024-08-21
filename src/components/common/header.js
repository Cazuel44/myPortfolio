import React from 'react';
import './header.css';
import { PillTabs } from './pillTab';



export const Header = ({ onTabClick }) => {
    return (
        <div className="containerHeder">
            <div className="headerContent">
                <img src="/img/imgJedi.jpeg" alt="Jedi" />
                <h1>Rodrigo Cortes Full-Stack trainee</h1>
            </div>
            <div className="line"></div> 
            <div className='navBarHeder'>
                <PillTabs onTabClick={onTabClick}/>
            </div>
        </div>
    );
};

