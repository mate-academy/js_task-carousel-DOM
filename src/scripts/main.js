'use strict';

const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelector('.carousel__item');
const carouselItemLength = [...document.querySelectorAll('.carousel__item')]
  .length;
const dots = [...document.querySelectorAll('.carousel__dot')];

const btnNext = document.querySelector('.carousel__btn_next');
const btnPrev = document.querySelector('.carousel__btn_prev');
const slideStep = carouselItem.clientWidth;

let carouselPosition = 0;
let activeDot = 0;

btnNext.addEventListener('click', nextCard);
btnPrev.addEventListener('click', prevCard);

function nextCard() {
  carouselPosition = carouselPosition - slideStep;
  carousel.style.transform = `translateX(${carouselPosition}px)`;
  activeDot++;

  if (Math.abs(carouselPosition) > slideStep * (carouselItemLength - 1)) {
    carouselPosition = 0;
    carousel.style.transform = `translateX(${carouselPosition}px)`;
  }
  slideDots();
}

function prevCard() {
  carouselPosition = carouselPosition + slideStep;
  carousel.style.transform = `translateX(${carouselPosition}px)`;
  activeDot--;

  if (carouselPosition > 0) {
    carouselPosition = -slideStep * (carouselItemLength - 1);
    carousel.style.transform = `translateX(${carouselPosition}px)`;
  }
  slideDots();
}

function slideDots() {
  for (const dot of dots) {
    dot.classList.remove('carousel__dot_active');

    if (activeDot > dots.length - 1) {
      activeDot = 0;
    }

    if (activeDot < 0) {
      activeDot = dots.length - 1;
    }

    dots[activeDot].classList.add('carousel__dot_active');
  }
}
