'use strict';

const carouselSlide = document.querySelector('.carousel');
const carouselCards = document.querySelectorAll('.carousel__item');
const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');

let counter = 0;
const size = carouselCards[0].clientWidth;

nextBtn.addEventListener('click', () => {
  if (counter === carouselCards.length - 1) {
    return;
  }
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  dots[counter].classList.add('carousel__dot_active');
  dots[counter - 1].classList.remove('carousel__dot_active');
});

prevBtn.addEventListener('click', () => {
  if (counter === 0) {
    return;
  }
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  dots[counter].classList.add('carousel__dot_active');
  dots[counter + 1].classList.remove('carousel__dot_active');
});
