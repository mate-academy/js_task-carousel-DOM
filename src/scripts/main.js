'use strict';

const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');
const dotsArr = Array.from(dots);
const list = document.querySelector('.carousel');
let counterPx = 0;

next.addEventListener('click', function() {
  if (counterPx === -1080) {
    counterPx = 360;
  }

  counterPx -= 360;
  list.style.cssText = `transform: translateX(${counterPx}px);`;

  if (counterPx === 0) {
    dotsArr[0].classList.add('carousel__dot_active');
    dotsArr[3].classList.remove('carousel__dot_active');
  }

  if (counterPx === -360) {
    dotsArr[1].classList.add('carousel__dot_active');
    dotsArr[0].classList.remove('carousel__dot_active');
  }

  if (counterPx === -720) {
    dotsArr[2].classList.add('carousel__dot_active');
    dotsArr[1].classList.remove('carousel__dot_active');
  }

  if (counterPx === -1080) {
    dotsArr[3].classList.add('carousel__dot_active');
    dotsArr[2].classList.remove('carousel__dot_active');
  }
});

prev.addEventListener('click', function() {
  if (counterPx === 0) {
    counterPx = -1440;
  }
  counterPx += 360;
  list.style.cssText = `transform: translateX(${counterPx}px);`;

  if (counterPx === 0) {
    dotsArr[0].classList.add('carousel__dot_active');
    dotsArr[1].classList.remove('carousel__dot_active');
  }
  if (counterPx === -360) {
    dotsArr[1].classList.add('carousel__dot_active');
    dotsArr[2].classList.remove('carousel__dot_active');
  }
  if (counterPx === -720) {
    dotsArr[2].classList.add('carousel__dot_active');
    dotsArr[3].classList.remove('carousel__dot_active');
  }
  if (counterPx === -1080) {
    dotsArr[3].classList.add('carousel__dot_active');
    dotsArr[0].classList.remove('carousel__dot_active');
  }
});
