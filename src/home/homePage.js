'use strict';

const pageInit = (() =>{
    const container = document.getElementById('content');
    const mainImage = document.createElement('img');
        mainImage.src = "../images/mainImage/coffee-6632533_1920.jpg";
    const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'Kffto';
    const slogan = document.createElement('h1'); 
        slogan.classList.add('slogan');
        slogan.textContent = 'Vive la Experienccia del Café';    

    container.appendChild(mainImage);
    container.appendChild(title);
    container.appendChild(slogan);  
})
();

export {
    pageInit
};
