const buttonBurgerElement = document.querySelector('.main-nav__toggle--active');
const menuElement = document.querySelector('.main-menu');

const onMenuOpenClick = () => {
    menuElement.classList.toggle('main-menu--open');
    buttonBurgerElement.classList.toggle('main-nav__toggle--animate');
}

buttonBurgerElement.addEventListener('click', onMenuOpenClick);

export { };