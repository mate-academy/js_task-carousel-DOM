'use strict';

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');
const next = document.querySelector('.carousel__btn_next');
const prev = document.querySelector('.carousel__btn_prev');
const activeDot = 'carousel__dot_active';

let count = 0;
const itemSize = 310;
const marginRight = 10;

const slide = () => {
  carousel.style.transform = `
    translateX(${(-itemSize - marginRight) * count}px)
  `;
  dots[count].classList.add(activeDot);
};

next.addEventListener('click', () => {
  if (count >= items.length - 1) {
    count = -1;
    dots[items.length - 1].classList.remove(activeDot);
  }

  count++;
  slide();
  dots[count - 1].classList.remove(activeDot);
});

prev.addEventListener('click', () => {
  if (count <= 0) {
    count = items.length;
    dots[0].classList.remove(activeDot);
  }

  count--;
  slide();
  dots[count + 1].classList.remove(activeDot);
});
