import React from 'react'
import './aboutMe.css';
import { Button } from '../common/button';




export const AboutMe = ({ onShowProjects }) => {

    return (
        <div className="containerAboutMe">
            <div className="h1AboutMe">
                <h1>Sobre Mí 🌟</h1>
            </div>
            <div className="contentAboutMe">

                <p>
                    ¡Hola!, soy un padawan siguiendo el camino Jedi de los maestros full-stack 🚀.
                    Me apasiona la tecnología y el desarrollo web, y he logrado crear aplicaciones básicas desde el frontend hasta el backend,
                    incluyendo una aplicación móvil 📱.
                </p>
                <p>
                    Mi formación en CoderHouse me permitió completar la carrera de Full Stack y trabajar en diversos proyectos
                    utilizando tecnologías como JavaScript, React.js, React Native y Node.js. He desarrollado aplicaciones web tanto en el frontend,
                    con un enfoque en HTML, CSS, y React.js, como en el backend, utilizando Node.js y MongoDB para crear aplicaciones funcionales enfocadas al E-commerce 🛒.
                </p>
            </div>
            <div>
                <h1>Experiencia</h1>
                <p>
                    Estoy en busca de mi primera oportunidad laboral ya que la experiencia que tengo en este momento es solo de los proyectos que he presentado en coderhouse.
                </p>
                
            </div>
            <div className='button1AboutMe'>
                <Button onClick={onShowProjects}>Mis Proyectos</Button>
            </div>
        </div>
    );
}
