'use strict';

const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const dots = document.querySelector('.carousel__dots-wrap');

let position = 0;
let indexOfActiveDot = 0;

function changePosition(i, step) {
  carousel.style.transform = `translate(${position - step}px)`;
  position -= step;
  dots.children[indexOfActiveDot].classList.remove('carousel__dot_active');
  dots.children[indexOfActiveDot - i].classList.add('carousel__dot_active');
  indexOfActiveDot -= i;
}

btnNext.addEventListener('click', (e) => {
  if (position <= -1050) {
    return;
  }
  changePosition(-1, 350);
});

btnPrev.addEventListener('click', (e) => {
  if (position >= 0) {
    return;
  }
  changePosition(1, -350);
});
