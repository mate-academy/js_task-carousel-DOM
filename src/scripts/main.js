'use strict';

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel__item');
const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');
const gap = 340;

let position = 0;
let i = 0;

prev.addEventListener('click', slideLeft);
next.addEventListener('click', slideRight);

function slideRight(e) {
  position -= gap;

  if (Math.abs(position) >= items.length * gap) {
    position = 0;
  };

  carousel.style.transform = `translateX(${position}px)`;

  function moveDotRight() {
    dots[i].classList.toggle('carousel__dot_active');
    i++;

    if (i > items.length - 1) {
      i = 0;
    };

    dots[i].classList.toggle('carousel__dot_active');
  };

  setTimeout(moveDotRight, 500);
};

function slideLeft(e) {
  position += gap;

  if (position > 0) {
    position = -((items.length - 1) * gap);
  };

  carousel.style.transform = `translateX(${position}px)`;

  function moveDotsLeft() {
    dots[i].classList.toggle('carousel__dot_active');
    i--;

    if (i < 0) {
      i = items.length - 1;
    };

    dots[i].classList.toggle('carousel__dot_active');
  };

  setTimeout(moveDotsLeft, 500);
};
