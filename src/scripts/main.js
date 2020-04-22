'use strict';

const carousel = document.querySelector('.carousel');
const carouselItems = Array.from(carousel.children);
const buttonNext = document.querySelector('.carousel__btn_next');
const buttonPrev = document.querySelector('.carousel__btn_prev');
const dots = document.querySelector('.carousel__dots-wrap');

let count = 1;
let position = 0;
const itemsAmount = 4;
const itemWidth = 350;

buttonNext.addEventListener('click', () => {
  if (count >= itemsAmount) {
    count = 1;
    position = 0;

    carouselItems.map(item => {
      item.style.transform = `translate(${position}px)`;
    });

    dots.children[itemsAmount - 1].classList.remove('carousel__dot_active');
    dots.children[count - 1].classList.add('carousel__dot_active');

    return;
  }

  dots.children[count - 1].classList.remove('carousel__dot_active');
  dots.children[count].classList.add('carousel__dot_active');

  count++;
  position -= itemWidth;

  carouselItems.map(item => {
    item.style.transform = `translate(${position}px)`;
  });
});

buttonPrev.addEventListener('click', () => {
  if (count === 1) {
    count = itemsAmount;
    position = -(count - 1) * itemWidth;

    carouselItems.map(item => {
      item.style.transform = `translate(${position}px)`;
    });

    dots.children[0].classList.remove('carousel__dot_active');
    dots.children[count - 1].classList.add('carousel__dot_active');

    return;
  }

  dots.children[count - 1].classList.remove('carousel__dot_active');
  dots.children[count - 2].classList.add('carousel__dot_active');

  count--;
  position += itemWidth;

  carouselItems.map(item => {
    item.style.transform = `translate(${position}px)`;
  });
});
