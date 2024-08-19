import React from 'react'
import { ContactCard } from '../common/contactCard'
import { Button } from '../common/button'

export const Contact = ({ onShowAboutMe }) => {
    return (
        <div>
            <div>
                <Button onClick={onShowAboutMe}>Inicio</Button>
            </div>
            <ContactCard />
        </div>
    )
}
