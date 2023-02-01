import React from 'react';
import { STATUS } from '../../models/status.enum';
import { Contact } from "../../models/contact.class"
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact("Edgar", "Avila","avilaedgar2001@gmail.com", STATUS.ONLINE);
    return (
        <div>
            <div>
                <h1>Your Contacts:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista*/}
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
        
    );
};


export default ContactListComponent;
