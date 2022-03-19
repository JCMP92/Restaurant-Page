'use strict';
import { pageHeader } from "./pageTitles";

const contactInit = (() => {
    const container =  document.getElementById('content');

    //Page title
    const menuTitle = pageHeader('Contacto')
    container.appendChild(menuTitle);

})
();

export{
    contactInit
}