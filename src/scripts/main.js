'use strict';

const twit = document.querySelector('.carousel').firstElementChild;
const arrowPrev = document.querySelector('.carousel__btn_prev');
const arrowNext = document.querySelector('.carousel__btn_next');
const dots = [...document.querySelector('.carousel__dots-wrap').children];
const item = document.querySelector('.carousel__item');

const margin = parseFloat(getComputedStyle(item).marginRight);
const gap = parseFloat(getComputedStyle(item).width) + margin;

arrowPrev.addEventListener('click', () => {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('carousel__dot_active')) {
      dots[i].classList.toggle('carousel__dot_active');

      if (i === 0) {
        dots[dots.length - 1].classList.add('carousel__dot_active');

        const distance = gap * (i + dots.length - 1);

        twit.style.marginLeft = `-${distance}px`;
        break;
      } else {
        dots[i - 1].classList.add('carousel__dot_active');

        const distance = gap * (i - 1);

        twit.style.marginLeft = `-${distance}px`;
      }
    };
  }
});

arrowNext.addEventListener('click', () => {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('carousel__dot_active')) {
      dots[i].classList.toggle('carousel__dot_active');

      if (i === (dots.length - 1)) {
        dots[0].classList.add('carousel__dot_active');
        twit.style.marginLeft = 0;
      } else {
        dots[i + 1].classList.add('carousel__dot_active');

        const distance = gap * (i + 1);

        twit.style.marginLeft = `-${distance}px`;
        break;
      }
    }
  }
});
