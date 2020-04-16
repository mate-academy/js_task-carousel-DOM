'use strict';

const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.carousel__dot');
const item = document.querySelector('.carousel__item');
const items = document.querySelectorAll('.carousel__item');
const itemWidth = item.clientWidth;
const carouselWidth = itemWidth * items.length;

let carouselPos = 0;
let currentSlide = 0;

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

function nextSlide() {
  let toSlide = carouselPos - itemWidth;

  if (Math.abs(toSlide) >= carouselWidth) {
    toSlide = 0;
    currentSlide = -1;
  }

  carousel.style.transform = `translateX(${toSlide}px)`;
  carouselPos = toSlide;
  currentSlide++;

  changeDot();
}

function prevSlide() {
  let toSlide = carouselPos + itemWidth;

  if (toSlide > 0) {
    currentSlide = dots.length;
    toSlide = itemWidth - carouselWidth;
  }

  carousel.style.transform = `translateX(${toSlide}px)`;
  carouselPos = toSlide;
  currentSlide--;

  changeDot();
}

function changeDot() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('carousel__dot_active');
  }

  dots[currentSlide].classList.add('carousel__dot_active');
}
