'use strict';

const carousel = document.querySelector('.container');
let currentDot = document.querySelector(' .carousel__dot');
const next = document.querySelector('.carousel__btn_next');
const prev = document.querySelector('.carousel__btn_prev');

const width = 330;
let position = 0;
const list = carousel.querySelector('ul');
const listElements = carousel.querySelectorAll('li');

next.onclick = () => {
  position -= width;
  position = Math.max(position, -width * (listElements.length - 1));
  list.style.marginLeft = position + 'px';
  list.style.transition = 'margin-left 0.5s';
  if (!currentDot.nextElementSibling) {
    return;
  } else {
    currentDot.className = 'carousel__dot';
    currentDot = currentDot.nextElementSibling;
  }
  currentDot.classList.add('carousel__dot_active');
};

prev.onclick = () => {
  position += width;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
  if (!currentDot.previousElementSibling) {
    currentDot = document.querySelector('.carousel__dots-wrap .carousel__dot');
  } else {
    currentDot.className = 'carousel__dot';
    currentDot = currentDot.previousElementSibling;
  }
  currentDot.classList.add('carousel__dot_active');
};
