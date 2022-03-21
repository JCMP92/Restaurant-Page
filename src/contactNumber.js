'use strict';

const contactCard = (title, phoneNumber) => {
    const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
    const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = title;
    const cardContent = document.createElement('p');
        cardContent.classList.add('card-content');
        cardContent.innerHTML = `¿En que podemos ayudarte? <br />
                                ${phoneNumber}`
                                
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardContent);

    return cardContainer;
}

export{
    contactCard,
}