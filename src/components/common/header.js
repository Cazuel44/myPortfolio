import React from 'react';
import './header.css';


export const Header = () => {
    return (
        <div className="containerHeder">
            <div className="headerContent">
                <img src="/img/imgJedi.jpeg" alt="Jedi" />
                <h1>Rodrigo Cortes Full-Stack trainee</h1>
            </div>
            <div className="line"></div> 
        </div>
    );
};

