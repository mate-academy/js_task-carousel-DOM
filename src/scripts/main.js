'use strict';

const track = document.querySelector('.carousel');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__btn_next');
const prevButton = document.querySelector('.carousel__btn_prev');
const dotsWrap = document.querySelector('.carousel__dots-wrap');
const dots = Array.from(dotsWrap.children);
const slideWidth = 310;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('carousel__dot_active');
  targetDot.classList.add('carousel__dot_active');
};

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsWrap.querySelector('.carousel__dot_active');
  const prevDot = currentDot.previousElementSibling;

  moveToSlide(currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsWrap.querySelector('.carousel__dot_active');
  const nextDot = currentDot.nextElementSibling;

  moveToSlide(currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});

dotsWrap.addEventListener('click', e => {
  const targetDot = e.target.closest('.carousel__dot');
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsWrap.querySelector('.carousel__dot_active');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
