'use strict';

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel__item');
const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');
const size = carouselItems[0].clientWidth;
const marginRight = +getComputedStyle(carouselItems[0])
  .marginRight.replace('px', '');
let counter = 0;
let bufferedDot = dots[0];

function moveSlider(index) {
  bufferedDot.classList.remove('carousel__dot_active');
  dots[index].classList.add('carousel__dot_active');
  bufferedDot = dots[index];
  carousel.style.transform = `translateX(-${(size + marginRight) * index}px)`;
}

nextBtn.addEventListener('click', () => {
  if (counter > carouselItems.length - 2) {
    return;
  }
  counter++;
  moveSlider(counter);
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    return;
  }
  counter--;
  moveSlider(counter);
});
