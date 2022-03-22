'use strict';

const pageInit = (() =>{
    const container = document.getElementById('content');
    const homeContainer = document.createElement('div');
        homeContainer.classList.add('hm-container');
    container.appendChild(homeContainer);  

    const textDiv = document.createElement('div');
        textDiv.classList.add('text-container');
    const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'KFFTO';
    const slogan = document.createElement('h1'); 
        slogan.classList.add('slogan');
        slogan.textContent = 'Vive la Experiencia del Café';    

    textDiv.appendChild(title);
    textDiv.appendChild(slogan);
    
    homeContainer.appendChild(textDiv);
})
();

export {
    pageInit
};
