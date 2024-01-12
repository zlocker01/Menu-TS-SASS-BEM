document.addEventListener('DOMContentLoaded', (): void => {
    const headerButton = document.querySelector('.header__button') as HTMLButtonElement;
    const headerNav = document.querySelector('.header__nav') as HTMLElement;
    
    headerButton.addEventListener('click', (): void => {
        headerNav.classList.toggle('header__nav--active');
    })
})