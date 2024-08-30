import React from 'react';
import './contact.css'
import { ContactCard } from '../common/contactCard'
import { Button } from '../common/button'

export const Contact = ({ onShowAboutMe }) => {
    return (
        <div className='containerContact'>
            <div className='cardContainerContact'>
                <ContactCard />
            </div>
            {/* <div className='button1Contact'>
                <Button onClick={onShowAboutMe}>Inicio</Button>
            </div> */}
        </div>
    )
}
