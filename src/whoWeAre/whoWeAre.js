'use strict';
import { bigTitle, textDescription  } from "./whoWe-dependencies/titleCreator&text";

const identityInit = () => {

    window.scroll({
        top: 0, 
        left: 0, 
        // behavior: 'smooth' 
       });

    const container =  document.getElementById('content');
    const identContainer = document.createElement('div');
        identContainer.classList.add('id-container');
    container.appendChild(identContainer); 
    
    const textContainer = document.createElement('div');
        textContainer.classList.add('txt-container');

    const firstPart = bigTitle('LOREM IPSUM DOLOR', 'first-section');
        firstPart.classList.add('first-part-title');
    identContainer.appendChild(firstPart);

    const firstText = textDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum ex ac lacinia convallis', 'first-text');
        firstText.classList.add('first-part-text');
    textContainer.appendChild(firstText);

    container.appendChild(textContainer);
};

export{
    identityInit
}