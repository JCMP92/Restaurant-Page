'use strict';

import { menuSection, menuItem } from "./menu-dependencies/menuSection&ItemsCreators";
import { pageHeader } from "../general-dependencies/pageTitles";

const menuInit = () =>{
    
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });

    const container =  document.getElementById('content');
    const menuContainer = document.createElement('div');
        menuContainer.classList.add('mnu-container');
     
        const titleContent = document.createElement('div');
            titleContent.classList.add('title-content')
        menuContainer.appendChild(titleContent);

        const menuContent = document.createElement('div');
            menuContent.classList.add('mnu-content');
        menuContainer.appendChild(menuContent); 

        const titleContentTwo = document.createElement('div');
            titleContentTwo.classList.add('title-content-two')
        menuContainer.appendChild(titleContentTwo);

        const menuContentTwo = document.createElement('div');
            menuContentTwo.classList.add('mnu-content');
        menuContainer.appendChild(menuContentTwo); 
    
    container.appendChild(menuContainer);

    //Menu title
    const menuTitleDrink = pageHeader('Bebidas');
        menuTitleDrink.classList.add('mnu-drink-title');
    titleContent.appendChild(menuTitleDrink);
    
    // First Section
    const firstSection = menuSection('Calientes');
    menuContent.appendChild(firstSection);

    //Menu elements for their respective sections, we are appending them to the variable that we declared as firstSection.
    const cafeAmericano = menuItem('Café Americano', 'Lorem ipsum dolor', '35.00');
    firstSection.appendChild(cafeAmericano);    
    const cappuccino = menuItem('Cappuccino', 'Lorem ipsum dolor', '44.00');
    firstSection.appendChild(cappuccino);
    const moka = menuItem('Moka', 'Lorem ipsum dolor', '50.00');
    firstSection.appendChild(moka);  
    
    // Second Section
    const secondSection = menuSection('Frías');
    menuContent.appendChild(secondSection);

    //Menu elements for their respective sections, we are appending them to the variable that we declared as secondSection.
    const tisana = menuItem('Tisana', 'Lorem ipsum dolor', '40.00');
    secondSection.appendChild(tisana); 
    const ocaso = menuItem('Ocaso', 'Lorem ipsum dolor', '35.00');
    secondSection.appendChild(ocaso); 
    const coldBrew = menuItem('Cold Brew', 'Lorem ipsum dolor', '60.00');
    secondSection.appendChild(coldBrew); 

    // Third Section
    const thirdSection = menuSection('Métodos de extracción');
    menuContent.appendChild(thirdSection);

    //Menu elements for their respective sections, we are appending them to the variable that we declared as secondSection.
    const chemex = menuItem('Chemex', 'Lorem ipsum dolor', '60.00');
    thirdSection.appendChild(chemex); 
    const v60 = menuItem('V60', 'Lorem ipsum dolor', '60.00');
    thirdSection.appendChild(v60); 
    const aeropress = menuItem('Aeropress', 'Lorem ipsum dolor', '60.00');
    thirdSection.appendChild(aeropress); 




    //Menu title
    const menuTitleFood = pageHeader('Comida');
        menuTitleFood.classList.add('mnu-food-title');
    titleContentTwo.appendChild(menuTitleFood);

    // Fourth Section
    const frthSection = menuSection('Sándwich');
    menuContentTwo.appendChild(frthSection);

    //Menu elements for their respective sections, we are appending them to the variable that we declared as frthSection.
    const special = menuItem('KFFTO Especial', 'Lorem ipsum dolor', '60.00');
    frthSection.appendChild(special); 
    const tuna = menuItem('Atún', 'Lorem ipsum dolor', '45.00');
    frthSection.appendChild(tuna); 
    const veggie = menuItem('Veggie', 'Lorem ipsum dolor', '45.00');
    frthSection.appendChild(veggie);   
    
    // Fifth Section
    const fifthSection = menuSection('Postres');
    menuContentTwo.appendChild(fifthSection);

    //Menu elements for their respective sections, we are appending them to the variable that we declared as frthSection.
    const cookie = menuItem('Galleta KFFTO', 'Lorem ipsum dolor', '30.00');
    fifthSection.appendChild(cookie); 
    const brownie = menuItem('Brownie', 'Lorem ipsum dolor', '45.00');
    fifthSection.appendChild(brownie); 
    const pie = menuItem('Tartas', 'Lorem ipsum dolor', '45.00');
    fifthSection.appendChild(pie);  
};

export{
    menuInit
};

