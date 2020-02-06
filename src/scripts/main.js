'use strict';

const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const allSlides = document.querySelectorAll('.carousel__item');
const numberOfSlides = allSlides.length;
const carousel = allSlides[0];
const slideWidth = carousel.offsetWidth;
const slideGap = 30;
let position = 0;
const dots = document.querySelectorAll('.carousel__dot');
let counter = 0;

allSlides.forEach((slide) => {
  slide.style.marginRight = `${slideGap}px`;
});

const handleNextButtonClick = () => {
  if (position <= (-(numberOfSlides - 1) * slideWidth)) {
    position = slideWidth + slideGap;
  }

  counter += 1;

  if (counter === dots.length) {
    counter = 0;
  }

  dots[counter].classList.add('carousel__dot_active');

  if (counter - 1 >= 0) {
    dots[counter - 1].classList.remove('carousel__dot_active');
  } else {
    dots[dots.length - 1].classList.remove('carousel__dot_active');
  }
  position -= (slideWidth + slideGap);
  carousel.style.marginLeft = `${position}px`;
  carousel.style.transition = 'margin 0.3s ease-in-out';
};

const handlePrevButtonClick = () => {
  if (position === 0) {
    position = -(numberOfSlides) * (slideWidth + slideGap);
  }

  counter -= 1;

  if (counter === -1) {
    counter = dots.length - 1;
    dots[0].classList.remove('carousel__dot_active');
  }

  dots[counter].classList.add('carousel__dot_active');

  if (counter + 1 < dots.length) {
    dots[counter + 1].classList.remove('carousel__dot_active');
  }

  position += slideWidth + slideGap;
  carousel.style.marginLeft = `${position}px`;
  carousel.style.transition = 'margin 0.3s ease-in-out';
};

nextButton.addEventListener('click', handleNextButtonClick);
prevButton.addEventListener('click', handlePrevButtonClick);
