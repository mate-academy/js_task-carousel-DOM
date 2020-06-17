'use strict';

const list = document.querySelector('.carousel');
const arrowPrev = document.querySelector('.carousel__btn_prev');
const arrowNext = document.querySelector('.carousel__btn_next');
const dots = [...document.querySelector('.carousel__dots-wrap').children];

arrowPrev.addEventListener('click', () => {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('carousel__dot_active')) {
      dots[i].classList.toggle('carousel__dot_active');

      if (i === 0) {
        dots[dots.length - 1].classList.add('carousel__dot_active');
        list.scrollTo(1240, 0);
        break;
      } else {
        dots[i - 1].classList.add('carousel__dot_active');
        list.scrollBy(-310, 0);
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
        list.scrollTo(0, 0);
      } else {
        dots[i + 1].classList.add('carousel__dot_active');
        list.scrollBy(310, 0);
        i++;
      }
    }
  }
});
