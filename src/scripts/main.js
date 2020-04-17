'use strict';

const slider = document.querySelector('.carousel');
const slides = [...slider.querySelectorAll('.carousel__item')];
const dots = [...document.querySelectorAll('.carousel__dot')];
const slide = slider.querySelector('.carousel__item');
const count = slider.childElementCount;
const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const slideSize = slide.offsetWidth;
const margin = parseInt(getComputedStyle(slide).marginRight);
let number = 0;

function moveSlider(currentSlide) {
  const shift = (slideSize + margin) * number;

  currentSlide.style.transform = `translateX(${-shift}px)`;
  dots[number].classList.add('carousel__dot_active');
}

nextButton.addEventListener('click', (passage) => {
  dots[number].classList.remove('carousel__dot_active');

  if (number === count - 1) {
    number = -1;
  }

  number++;
  slides.forEach(moveSlider);
});

prevButton.addEventListener('click', (passage) => {
  dots[number].classList.remove('carousel__dot_active');

  if (!number) {
    number = count;
  }

  number--;
  slides.forEach(moveSlider);
});
