'use strict';

const container = document.querySelector('.container');
const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const list = container.querySelector('ul');
const listElement = container.querySelectorAll('li');
let dot = document.querySelector('.carousel__dot');
const width = 350;
const count = 1;
let position = 0;

prevButton.onclick = function() {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
  if (!dot.previousElementSibling) {
    return;
  } else {
    dot.className = 'carousel__dot';
    dot = dot.previousElementSibling;
  }
  dot.classList.add('carousel__dot_active');
};

nextButton.onclick = function() {
  position -= width * count;
  position = Math.max(position, -width * (listElement.length - count));
  list.style.marginLeft = position + 'px';
  list.style.transition = 'margin-left 0.5s';
  if (!dot.nextElementSibling) {
    return;
  } else {
    dot.className = 'carousel__dot';
    dot = dot.nextElementSibling;
  }
  dot.classList.add('carousel__dot_active');
};
