'use strict';

const track = document.querySelector('.carousel');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__btn_next');
const prevButton = document.querySelector('.carousel__btn_prev');
const dotsWrapper = document.querySelector('.carousel__dots-wrap');
const dots = Array.from(dotsWrapper.children);
const slideWidth = 310;

const setSlidePosition = (slide, index) => {
  const slideWidthIndex = slideWidth * index;

  slide.style.left = `${slideWidthIndex}px`;
};

slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('carousel__dot--active');
  targetDot.classList.add('carousel__dot--active');
};

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsWrapper.querySelector('.carousel__dot--active');
  const prevDot = currentDot.previousElementSibling;

  moveToSlide(currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsWrapper.querySelector('.carousel__dot--active');
  const nextDot = currentDot.nextElementSibling;

  moveToSlide(currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});

dotsWrapper.addEventListener('click', e => {
  const targetDot = e.target.closest('.carousel__dot');

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsWrapper.querySelector('.carousel__dot--active');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
