'use strict'

const element = document.querySelector('.secondary__button-regular');
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMediaQuery(event) {
    if (event.matches) {
        element.classList.add('secondary__button-small');
    } else {
        element.classList.remove('secondary__button-regular');
    }
}

mediaQuery.addListener(handleMediaQuery);
handleMediaQuery(mediaQuery);
