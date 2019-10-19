'use strict';
const carousel = document.querySelector('.carousel-container');
let currentDot = document.querySelector(' .carousel__dot');
const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');

let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  i++;
}

let width = 330;
let count = 1;

let list = carousel.querySelector('ul');
let listElements = carousel.querySelectorAll('li');

let position = 0;

prevButton.onclick = function() {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
  if (!currentDot.previousElementSibling) {
    currentDot = document.querySelector('.carousel__dots-wrap .carousel__dot');
  } else  {
    currentDot.className = 'carousel__dot';
    currentDot = currentDot.previousElementSibling;
  }
  currentDot.classList.add('carousel__dot_active');
};

nextButton.onclick = function() {
  position -= width * count;
  position = Math.max(position, -width * (listElements.length - count));
  list.style.marginLeft = position + 'px';
  list.style.transition = 'margin-left 0.5s';
  if (!currentDot.nextElementSibling) {
    return
  } else  {
    currentDot.className = 'carousel__dot';
    currentDot = currentDot.nextElementSibling;
  }
  currentDot.classList.add('carousel__dot_active');
};
