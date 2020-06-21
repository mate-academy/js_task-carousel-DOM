'use strict';

const btnRight = document.querySelector('.carousel__btn_prev');
const btnLeft = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.carousel__dot');
const items = document.querySelectorAll('.carousel__item');

const itemsWidth = 350;

const carouselWidth = itemsWidth * items.length;

let position = 0;
let dotsPosition = 0;

function moveDots() {
  for (const dot of dots) {
    dot.classList.remove('carousel__dot_active');

    if (dotsPosition < 0) {
      dotsPosition = dots.length - 1;
    }

    if (dotsPosition > dots.length - 1) {
      dotsPosition = 0;
    }

    dots[dotsPosition].classList.add('carousel__dot_active');
  }
}

function prevCard() {
  position += itemsWidth;

  if (position > 0) {
    position = -(itemsWidth * (items.length - 1));
  }
  carousel.style.transform = `translateX(${position}px)`;
  dotsPosition--;
  moveDots();
}

function nextCard() {
  position -= itemsWidth;

  if (Math.abs(position) >= carouselWidth) {
    position = 0;
  }
  carousel.style.transform = `translateX(${position}px)`;
  dotsPosition++;
  moveDots();
}

btnLeft.addEventListener('click', nextCard);
btnRight.addEventListener('click', prevCard);
