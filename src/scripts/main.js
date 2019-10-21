'use strict';
const carousel = document.querySelector('.carousel-container');
let currentDot = document.querySelector(' .carousel__dot');
const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const listItems = carousel.querySelectorAll('li');

let width = 330;

const list = carousel.querySelector('ul');
const listElements = listItems;

let position = 0;

prevButton.addEventListener('click', function () {
  position += width;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
  if (!currentDot.previousElementSibling) {
    currentDot = document.querySelector('.carousel__dots-wrap .carousel__dot');
  } else  {
    currentDot.className = 'carousel__dot';
    currentDot = currentDot.previousElementSibling;
  }
  currentDot.classList.add('carousel__dot_active');
});

nextButton.addEventListener('click', function() {
  position -= width;
  position = Math.max(position, -width * (listElements.length - 1));
  list.style.marginLeft = position + 'px';
  list.style.transition = 'margin-left 0.5s';
  if (!currentDot.nextElementSibling) {
    return
  }
  currentDot.className = 'carousel__dot';
  currentDot = currentDot.nextElementSibling;
  currentDot.classList.add('carousel__dot_active');
});
