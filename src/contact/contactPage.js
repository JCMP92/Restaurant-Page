'use strict';
import { pageHeader } from "../general-dependencies/pageTitles";
import { contactCard } from "./contact-dependencies/contactNumber";
import { socialMedia } from "./contact-dependencies/socialMediaCreator";

const contactInit = () => {
    const container =  document.getElementById('content');
    const contactContainer = document.createElement('div');
        contactContainer.classList.add('contact-container');
    container.appendChild(contactContainer);  

    //Page title
    const menuTitle = pageHeader('Vive la experiecia del café');
    const titleContainer = document.createElement('div');
        titleContainer.classList.add('title-div');

    titleContainer.appendChild(menuTitle);
    contactContainer.appendChild(titleContainer);

    //Contact card
    const myContact = contactCard('¡Bienvenido!', 2222002200);
    const phoneContainer = document.createElement('div');
        phoneContainer.classList.add('phone-div');

    phoneContainer.appendChild(myContact);
    contactContainer.appendChild(phoneContainer);

    //Social media div
    const myMedia = socialMedia();
    const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('media-div');

    mediaContainer.appendChild( myMedia);
    contactContainer.appendChild(mediaContainer);

};

export{
    contactInit
}