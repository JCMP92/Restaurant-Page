'use strict';

const socialMedia = () => {

    const socialContainer = document.createElement('div');
    socialContainer.classList.add('social-container');
  
    const kTwitter = document.createElement('a');
    kTwitter.setAttribute('href', '#');
    const twitter = document.createElement('i');
    twitter.classList.add('fab', 'fa-twitter');
    kTwitter.appendChild(twitter);
  
    const kInsta = document.createElement('a');
    kInsta.setAttribute('href', '#');
    const instagram = document.createElement('i');
    instagram.classList.add('fab', 'fa-instagram');
    kInsta.appendChild(instagram);

    const kFace = document.createElement('a');
    kFace.setAttribute('href', '#');
    const facebook = document.createElement('i');
    facebook.classList.add('fab', 'fa-facebook-square'); 
    kFace.appendChild(facebook);
  
    socialContainer.appendChild(kTwitter);
    socialContainer.appendChild(kInsta);
    socialContainer.appendChild(kFace);
  
    return socialContainer;
  };

  export {
      socialMedia,
  }