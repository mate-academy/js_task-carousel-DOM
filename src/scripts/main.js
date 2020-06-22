'use strict';

const buttonLeft = document.querySelector('.carousel__btn_next');
const buttonRight = document.querySelector('.carousel__btn_prev');
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.carousel__dot');
const items = document.querySelectorAll('.carousel__item');

const itemsWidth = 350;

const carouselWidth = itemsWidth * items.length;

let position = 0;
let dotsPosition = 0;

function carouselDots() {
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

function prevSlider() {
  position += itemsWidth;

  if (position > 0) {
    position = -(itemsWidth * (items.length - 1));
  }
  carousel.style.transform = `translateX(${position}px)`;
  dotsPosition--;
  carouselDots();
}

function nextSlider() {
  position -= itemsWidth;

  if (Math.abs(position) >= carouselWidth) {
    position = 0;
  }
  carousel.style.transform = `translateX(${position}px)`;
  dotsPosition++;
  carouselDots();
}

buttonRight.addEventListener('click', prevSlider);
buttonLeft.addEventListener('click', nextSlider);
