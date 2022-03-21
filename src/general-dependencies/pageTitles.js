//This function creates the title for each page
const pageHeader = (headerText) => {
    const header = document.createElement('div');
    const pageTitle = document.createElement('h2');
        pageTitle.classList.add('mainTitle');
        pageTitle.textContent= headerText;

    header.appendChild(pageTitle);

    return header;
};

export{
    pageHeader,
}