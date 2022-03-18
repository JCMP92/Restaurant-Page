'use strict';

const menuInit = (() =>{
    const container =  document.getElementById('content');

    //Page title
    const menuHeader = document.createElement('div');
    const menuTitle = document.createElement('h2');
        menuTitle.classList.add('mainTitle');
        menuTitle.textContent= 'Menú';
    
    // First Section
    const firstSection = document.createElement('section');
        firstSection.classList.add('sections');
    const firstSubTitle = document.createElement('h3');
    firstSubTitle.textContent = 'Lorem ipsum';
    //First Section div content
    const divContent = document.createElement('div');
        divContent.classList.add('menu-item');
    const nameDescription = document.createElement('div');
        const foodName = document.createElement('h4');
            foodName.textContent = 'Plate´s or Beverage´s name';
        const foodDescription = document.createElement('p'); 
            foodDescription.textContent = 'The description of this Plate or Beverage';
    const foodPrice = document.createElement('div');
        const price = document.createElement('h5');
            price.textContent = '$ XX.XX MXN.'


    

    
    menuHeader.appendChild(menuTitle);
    container.appendChild(menuHeader);

    nameDescription.appendChild(foodName);
    nameDescription.appendChild(foodDescription);
    foodPrice.appendChild(price);
    divContent.appendChild(nameDescription);
    divContent.appendChild(foodPrice);

    firstSection.appendChild(firstSubTitle);
    firstSection.appendChild(divContent);
    
    container.appendChild(firstSection);    
})
();

export{
    menuInit
};

