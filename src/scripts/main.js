'use strict';

const btnLeft = document.querySelector('.carousel__btn_prev');
const btnRight = document.querySelector('.carousel__btn_next');
const items = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');

let left = 0;
let count = 0;

function sliderRight() {
  left = left - 320;

  if (left < -1000) {
    left = 0;
    dots[count].classList.remove('carousel__dot_active');
    count = 0;
    dots[count].classList.add('carousel__dot_active');
  } else {
    dots[count].classList.remove('carousel__dot_active');
    dots[count = count + 1].classList.add('carousel__dot_active');
  }

  for (const key of items) {
    key.style.left = left + 'px';
  }
}

function sliderLeft() {
  left = left + 320;

  if (left > 0) {
    left = 0;
    dots[count].classList.remove('carousel__dot_active');
    count = 0;
    dots[count].classList.add('carousel__dot_active');
  } else {
    dots[count].classList.remove('carousel__dot_active');
    dots[count = count - 1].classList.add('carousel__dot_active');
  }

  for (const key of items) {
    key.style.left = left + 'px';
  }
}

btnRight.addEventListener('click', sliderRight);
btnLeft.addEventListener('click', sliderLeft);
