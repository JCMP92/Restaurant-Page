'use strict';
const navBar =(() =>{

    const navbarTitle = document.getElementById('navbar');

    //Home button or "Inicio"
    const home = document.createElement('button');
    home.classList.add('nav-btn');
    home.textContent = 'KFFTO';

    //About us button
    const aboutUs = document.createElement('button');
    aboutUs.classList.add('nav-btn');
    aboutUs.textContent = 'QUIENES SOMOS';

    //Menu button
    const menu = document.createElement('button');
    menu.classList.add('nav-btn');
    menu.textContent = 'MENÚ';

    //Contact button
    const contact = document.createElement('button');
    contact.classList.add('nav-btn');
    contact.textContent = 'CONTACTO';



    navbarTitle.appendChild(home); 
    navbarTitle.appendChild(aboutUs);
    navbarTitle.appendChild(menu);
    navbarTitle.appendChild(contact);
})();

export {
    navBar
};