'use strict';

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');
const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');

let count = 0;
const itemSize = 310;
const marginRight = 10;

const moveItems = () => {
  carousel.style.transform = `
    translateX(${(-itemSize - marginRight) * count}px)
  `;
  dots[count].classList.add('carousel__dot_active');
};

nextBtn.addEventListener('click', () => {
  if (count >= items.length - 1) {
    count = -1;
    dots[items.length - 1].classList.remove('carousel__dot_active');
  }

  count++;
  moveItems();
  dots[count - 1].classList.remove('carousel__dot_active');
});

prevBtn.addEventListener('click', () => {
  if (count <= 0) {
    count = items.length;
    dots[0].classList.remove('carousel__dot_active');
  }

  count--;
  moveItems();
  dots[count + 1].classList.remove('carousel__dot_active');
});
