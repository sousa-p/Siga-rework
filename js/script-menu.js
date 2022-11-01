const menuNav = document.querySelector('.nav')
const menuButton = document.querySelector('.menu__hamburguer');
let menuButtonOpen = false;

menuButton.addEventListener('click', () => {
    if (menuButtonOpen) {
        menuButtonOpen = false;
        menuNav.classList.remove('animation');
    } else {
        menuButtonOpen = true;
        menuNav.classList.add('animation');
    }
});