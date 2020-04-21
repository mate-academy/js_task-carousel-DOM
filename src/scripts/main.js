'use strict';

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');
const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const activeDot = 'carousel__dot_active';

let count = 0;
const itemSize = 340;
const marginRight = 10;

const slider = () => {
  carousel.style.transform = `
    translateX(${(-itemSize - marginRight) * count}px)`;
  dots[count].classList.add(activeDot);
};

nextBtn.addEventListener('click', () => {
  if (count >= items.length - 1) {
    count = -1;
    dots[items.length - 1].classList.remove(activeDot);
  }

  count++;
  slider();
  dots[count - 1].classList.remove(activeDot);
});

prevBtn.addEventListener('click', () => {
  if (count <= 0) {
    count = items.length;
    dots[0].classList.remove(activeDot);
  }

  count--;
  slider();
  dots[count + 1].classList.remove(activeDot);
});
