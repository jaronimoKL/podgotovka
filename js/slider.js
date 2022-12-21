document.addEventListener('DOMContentLoaded', () => {

    let mySwiper = new Swiper('.slider-block', {
    slidesPerView: 1,
    })

    const maxItems = 5;
    const sliderNavItems = document.querySelectorAll('.slider-nav__item');
    const sliderNav = document.querySelector('.slider-nav');

    sliderNavItems.forEach((el, index) => {
        el.setAttribute('data-index', index);

        el.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            console.log(index)
            mySwiper.slideTo(index);
        });
    });
});