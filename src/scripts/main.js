'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
const itemWidth = 350;

const carousel = document.querySelector('.carousel');
const carouselWidth = itemWidth * carouselItems.length;

const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');

let position = 0;
let dotPositionActive = 0;

nextButton.addEventListener('click', nextCard);
prevButton.addEventListener('click', prevCard);

function prevCard() {
  position = position + itemWidth;

  if (position > 0) {
    position = -(itemWidth * (carouselItems.length - 1));
  }
  carousel.style.transform = `translateX(${position}px)`;
  dotPositionActive--;
  dotsPosition();
}

function nextCard() {
  position = position - itemWidth;

  if (Math.abs(position) >= carouselWidth) {
    position = 0;
  }
  carousel.style.transform = `translateX(${position}px)`;
  dotPositionActive++;
  dotsPosition();
}

function dotsPosition() {
  for (const dot of dots) {
    dot.classList.remove('carousel__dot_active');

    if (dotPositionActive > dots.length - 1) {
      dotPositionActive = 0;
    }

    if (dotPositionActive < 0) {
      dotPositionActive = dots.length - 1;
    }

    dots[dotPositionActive].classList.add('carousel__dot_active');
  }
}
