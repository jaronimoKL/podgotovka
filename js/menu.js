// переменные бургер и оверлей
const burger = document?.querySelector('.burger'),
overlay = document?.querySelector('.overlay');
// функция добавления класса лок
const lockScroll = () => {
    document.body.classList.add('lock');
}
// функция удаления класса лок
const unlockScroll = () => {
    document.body.classList.remove('lock');
}
// слушатель нажатий и добавление класса опен
burger.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('open');
    lockScroll();
    initialMenu();
});
// слушатель нажатий и удаления класса опен
overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
});
// переменная скрол меню
const scrollTop = () => {
    menu.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
// переменная для дропменю
const initialMenu = () => {
    document?.querySelector('.nav__list--dropdown').classList.remove('transformation');
// переменная для навигации
document?.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
    scrollTop();
}
// переменная для меню
const menu = document.querySelector('.nav');
menu.addEventListener('click', (e) => {
// условие 1
    if (e.target.classList.contains('nav__link--drop')) {
        e.preventDefault();
        e.target.closest('.nav__list').classList.add('transformation');
        e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
    scrollTop();
    }
// условие 2
    if (e.target.classList.contains('mobile-back__link')) {
        e.preventDefault();
        e.target.closest('.nav__list--dropdown').classList.remove('transformation');
        e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
    scrollTop();
    }
// условие3
    if (e.target.classList.contains('nav__link') &&
        !e.target.classList.contains('nav__link--drop')) {
        e.preventDefault();
        menu.classList.remove('open');
        overlay.classList.remove('open');
        unlockScroll();
    }
});