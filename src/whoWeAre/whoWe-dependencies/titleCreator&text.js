'use strict';

const bigTitle = (title, sectionClass) => {
    const titleSection = document.createElement('section');
        titleSection.classList.add(`${sectionClass}`);
    const titleText = document.createElement('div');
        titleText.textContent = `${title}`;
        
    titleSection.appendChild(titleText);

    return titleSection;
}

const textDescription = (allText, textClass) => {
    const textContainer = document.createElement('div');
        textContainer.classList.add(`${textClass}`);
    const pText = document.createElement('p');
        pText.textContent = `${allText}`;

    textContainer.appendChild(pText);

    return textContainer;        
}

export{
    bigTitle,
    textDescription,
}