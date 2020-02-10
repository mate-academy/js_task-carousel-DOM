'use strict';

const carouselSlide = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('li');
const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
let counter = 0;
const size = carouselImages[0].clientWidth;
const dots = document.querySelectorAll('.carousel__dot');

const quantity = carouselImages.length - 1;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', (e) => {
  if (counter >= quantity) {
    counter = -1;
  }

  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

  for (let i = 0; i <= quantity; i++) {
    if (i === counter) {
      dots[i].classList.add('carousel__dot_active');
    } else {
      dots[i].classList.remove('carousel__dot_active');
    }
  }
});

prev.addEventListener('click', e => {
  if (counter <= 0) {
    counter = quantity;
  }

  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

  for (let i = 0; i <= quantity; i++) {
    if (i === counter) {
      dots[i].classList.add('carousel__dot_active');
    } else {
      dots[i].classList.remove('carousel__dot_active');
    }
  }
});
