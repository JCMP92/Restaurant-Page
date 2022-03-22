'use strict';

import { menuSection, menuItem } from "./menu-dependencies/menuSection&ItemsCreators";
import { pageHeader } from "../general-dependencies/pageTitles";

const menuInit = (() =>{
    const container =  document.getElementById('content');
    const menuContainer = document.createElement('div');
        menuContainer.classList.add('mnu-container');
     
        const titleContent = document.createElement('div');
            titleContent.classList.add('title-content')
        menuContainer.appendChild(titleContent);

        const menuContent = document.createElement('div');
            menuContent.classList.add('mnu-content');
        menuContainer.appendChild(menuContent); 
    
    container.appendChild(menuContainer);

    //Page title
    const menuTitle = pageHeader('Menú')
    titleContent.appendChild(menuTitle);
    
    // First Section
    const firstSection = menuSection('Bebidas calientes');
    menuContent.appendChild(firstSection);

    //Menu elements for their respective sections, we are appending them to the variable that we declared as firstSection.
    const cafeAmericano = menuItem('Café Americano', 'Lorem ipsum dolor', '35.00');
    firstSection.appendChild(cafeAmericano);    
    const cappuccino = menuItem('Cappuccino', 'Lorem ipsum dolor', '44.00');
    firstSection.appendChild(cappuccino);
    const moka = menuItem('Moka', 'Lorem ipsum dolor', '50.00');
    firstSection.appendChild(moka);  
    
    // Second Section
    const secondSection = menuSection('Métodos de extracción');
    menuContent.appendChild(secondSection);

    //Menu elements for their respective sections, we are appending them to the variable that we declared as secondSection.
    const chemex = menuItem('Chemex', 'Lorem ipsum dolor', '60.00');
    secondSection.appendChild(chemex); 
    const v60 = menuItem('V60', 'Lorem ipsum dolor', '60.00');
    secondSection.appendChild(v60); 
    const aeropress = menuItem('Aeropress', 'Lorem ipsum dolor', '60.00');
    secondSection.appendChild(aeropress); 

})
();

export{
    menuInit
};

