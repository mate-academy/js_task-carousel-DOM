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
  const toSlideLeft = carouselPos - itemWidth;

  if (Math.abs(toSlideLeft) >= carouselWidth) {
    currentSlide = items.length - 1;

    return;
  }

  carousel.style.transform = `translateX(${toSlideLeft}px)`;
  carouselPos = toSlideLeft;
  currentSlide++;

  changeDot();
}

function prevSlide() {
  const toSlideRight = carouselPos + itemWidth;

  if (toSlideRight > 0) {
    currentSlide = 0;

    return;
  }

  carousel.style.transform = `translateX(${toSlideRight}px)`;
  carouselPos = toSlideRight;
  currentSlide--;

  changeDot();
}

function changeDot() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('carousel__dot_active');
  }

  dots[currentSlide].classList.add('carousel__dot_active');
}
