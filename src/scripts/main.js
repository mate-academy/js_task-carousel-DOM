'use strict';

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel__item');
const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
const gap = 340;

let position = 0;

function slideLeft(e) {
  position -= gap;

  if (Math.abs(position) >= items.length * gap) {
    position = 0;
  };

  carousel.style.transform = `translateX(${position}px)`;
};

function slideRight(e) {
  position += gap;

  if (position > 0) {
    position = -((items.length - 1) * gap);
  };

  carousel.style.transform = `translateX(${position}px)`;
};

prev.addEventListener('click', slideLeft);
next.addEventListener('click', slideRight);
