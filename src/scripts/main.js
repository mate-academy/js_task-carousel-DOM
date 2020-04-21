'use strict';

const carousel = document.querySelector('.carousel');
const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');
const dots = document.querySelector('.carousel__dots-wrap');
const width = 350;
let position = 0;
let activeDot = 0;

function changePosition(index, step) {
  carousel.style.transform = `translate(${position - step}px)`;
  position -= step;
  dots.children[activeDot].classList.remove('carousel__dot_active');
  dots.children[activeDot - index].classList.add('carousel__dot_active');
  activeDot -= index;
}

btnNext.addEventListener('click', (e) => {
  if (position <= -(width * 3)) {
    return;
  }
  changePosition(-1, width);
});

btnPrev.addEventListener('click', (e) => {
  if (position >= 0) {
    return;
  }
  changePosition(1, -width);
});
