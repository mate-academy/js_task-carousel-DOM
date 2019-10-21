'use strict';

const previousItemBtn = document.querySelector('.carousel__btn_prev');
const nextItemBtn = document.querySelector('.carousel__btn_next');
let currentDot = document.querySelector('.carousel__dots-wrap .carousel__dot');
const style = document.createElement('style');
document.head.appendChild(style);
let currentPos = 0;

const nextBtnHandler = () => {
  if (!currentDot.nextElementSibling) {
    return;
  }
  currentDot.className = 'carousel__dot';
  currentDot = currentDot.nextElementSibling;
  currentDot.classList.add('carousel__dot_active');
  style.innerHTML = `.carousel__item {
    right: ${currentPos += 330}px;
  }`;
};

const prevBtnHandler = () => {
  if (!currentDot.previousElementSibling) {
    return;
  }
  currentDot.className = 'carousel__dot';
  currentDot = currentDot.previousElementSibling;
  currentDot.classList.add('carousel__dot_active');
  style.innerHTML = `.carousel__item {
    right: ${currentPos -= 330}px;
  }`;
};

nextItemBtn.addEventListener('click', nextBtnHandler);
previousItemBtn.addEventListener('click', prevBtnHandler);
