 'use strict';

 const menuSection = (menuSubText) => {


    const mSection = document.createElement('section');
        mSection.classList.add('sections');
    const subTDiv = document.createElement('div');
        subTDiv.classList.add('mnu-subtitle');
    const subTitle = document.createElement('h3');
        subTitle.textContent = menuSubText;

    subTDiv.appendChild(subTitle);
    mSection.appendChild(subTDiv);
    return mSection;


 };

 const menuItem = (itemName, itemDescription, itemPrice) => {

    const menuItemContent = document.createElement('div');
        menuItemContent.classList.add('menu-item');

    const nameContainer = document.createElement('div');
    const foodName = document.createElement('h4');
        foodName.textContent = itemName;
    const foodDescription = document.createElement('p');
        foodDescription.textContent = itemDescription;
    
    nameContainer.appendChild(foodName);
    nameContainer.appendChild(foodDescription);

    const priceContainer = document.createElement('div');
    const price = document.createElement('h5');
        price.textContent = `$ ${itemPrice} MXN.`
    
    priceContainer.appendChild(price);

    menuItemContent.appendChild(nameContainer);
    menuItemContent.appendChild(priceContainer);

    return menuItemContent;


 }





 export{
    menuSection,
    menuItem,
};