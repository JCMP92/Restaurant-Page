'use strict';
import { pageHeader } from "./pageTitles";
import { contactCard } from "./contactNumber";
import { socialMedia } from "./socialMediaCreator";

const contactInit = (() => {
    const container =  document.getElementById('content');

    //Page title
    const menuTitle = pageHeader('Contacto')
    container.appendChild(menuTitle);

    //Contact card
    const myContact = contactCard('Bienvenido', 2222002200);
    container.appendChild(myContact);

    //Social media div
    const myMedia = socialMedia();
    container.appendChild(myMedia);

})
();

export{
    contactInit
}