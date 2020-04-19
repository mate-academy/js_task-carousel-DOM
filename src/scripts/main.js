'use strict';

const button = document.querySelectorAll('.carousel__btn');
const leftBtn = button[0];
const rightBtn = button[1];
const ul = document.querySelector('.carousel');
const cardWidth = ul.clientWidth;
let transformX = 0;
const dots = document.querySelectorAll('.carousel__dot');
let index = 0;

leftBtn.addEventListener('click', () => {
  transformX += cardWidth;
  index++;

  if (transformX > 1050) {
    transformX = 0;
    index = 0;
  }

  ul.style.transform = `translateX(-${transformX}px)`;

  changeDot();
});

rightBtn.addEventListener('click', () => {
  transformX -= cardWidth;
  index++;

  if (transformX < -1050) {
    transformX = 0;
    index = 0;
  }

  ul.style.transform = `translateX(${transformX}px)`;
  changeDot();
});

function changeDot() {
  dots.forEach(dot => dot.classList.remove('carousel__dot_active'));
  dots[index].classList.add('carousel__dot_active');
}
