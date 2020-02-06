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
const dotsWrapper = document.querySelector('.carousel__dots-wrap');
let counter = 0;
let selectedDot = null;

allSlides.forEach((slide) => {
  slide.style.marginRight = `${slideGap}px`;
});

dots.forEach((dot, index) => {
  dot.setAttribute('data-num', `${index}`);
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

const handleDotClick = ({ target }) => {
  const index = target.getAttribute('data-num');

  for (let i = 0; i < dots.length; i += 1) {
    dots[i].classList.remove('carousel__dot_active');
  }

  if (selectedDot) {
    selectedDot.classList.remove('carousel__dot_active');
  }
  target.classList.add('carousel__dot_active');
  selectedDot = target;
  position = -(slideWidth + slideGap) * index;
  carousel.style.marginLeft = `${position}px`;
  carousel.style.transition = 'margin 0.3s ease-in-out';
};

nextButton.addEventListener('click', handleNextButtonClick);
prevButton.addEventListener('click', handlePrevButtonClick);
dotsWrapper.addEventListener('click', handleDotClick);
