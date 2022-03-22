'use strict';

const pageInit = (() =>{
    const container = document.getElementById('content');
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
    
    container.appendChild(textDiv);
})
();

export {
    pageInit
};
