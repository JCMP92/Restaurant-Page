const clearContent = (body) => {

    const oldContent = document.querySelector('#content');
    if (oldContent) {
      body.removeChild(oldContent);
    }

    const newContent = document.createElement('div');
    newContent.setAttribute('id', 'content');
    body.appendChild(newContent);

    return newContent;
};  

export{
    clearContent,
}