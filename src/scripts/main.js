'use strict';

const items = document.querySelectorAll('.carousel__item');
let position = -20;
const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
let currentDot = document.querySelector(`.carousel__dots-wrap .carousel__dot`);
const WIDTH = 350;

next.onclick = () => {
  if (!currentDot.nextElementSibling) {
    return;
  }
  position = position + WIDTH;
  items[0].style.marginLeft = -position + 'px';
  currentDot.className = `carousel__dot`;
  currentDot = currentDot.nextElementSibling;
  currentDot.classList.add(`carousel__dot_active`);
};

prev.onclick = () => {
  if (!currentDot.previousElementSibling) {
    return;
  }
  position = position - WIDTH;
  items[0].style.marginLeft = -position + 'px';
  currentDot.className = `carousel__dot`;
  currentDot = currentDot.previousElementSibling;
  currentDot.classList.add(`carousel__dot_active`);
};
