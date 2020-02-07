'use strict';

const carousel = document.querySelector('.wrapper');
const gallery = carousel.querySelector('ul');
const cards = carousel.querySelectorAll('li');
const next = document.querySelector('.carousel__btn_next');
const previous = document.querySelector('.carousel__btn_prev');
let dot = document.querySelector(' .carousel__dot');
const card = document.querySelector('.carousel__item');
const width = card.offsetWidth;
let moveMargin = 0;

next.addEventListener('click', () => {
  moveMargin -= width;
  moveMargin = Math.max(moveMargin, -width * (cards.length - 1));
  gallery.style.transition = 'margin-left 0.7s';
  gallery.style.marginLeft = moveMargin + 'px';

  if (dot.nextElementSibling) {
    dot.className = 'carousel__dot';
    dot = dot.nextElementSibling;
    dot.classList += ' carousel__dot_active';
  }
});

previous.addEventListener('click', () => {
  moveMargin += width;
  moveMargin = Math.min(moveMargin, 0);
  gallery.style.marginLeft = moveMargin + 'px';

  if (dot.previousElementSibling) {
    dot.className = 'carousel__dot';
    dot = dot.previousElementSibling;
    dot.classList += ' carousel__dot_active';
  }
});
