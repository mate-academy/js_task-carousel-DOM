'use strict';

const buttonLeft = document.querySelector('.carousel__btn_prev');
let left = 0;
let circle = 1;
const carousel = document.querySelector('.carousel');
buttonLeft.addEventListener('click', () => {
  circle++;
  let dot = document.getElementById('' + circle);
  const dotBefor = document.getElementById('' + (circle - 1));
  left -= 400;
  if (left < -1200) {
    left = 0;
    circle = 1;
    dot = document.getElementById('' + 1);
  }
  carousel.style.left = left + 'px';
  dotBefor.style.backgroundColor = 'silver';
  dot.style.backgroundColor = 'black';
});

const buttonRight = document.querySelector('.carousel__btn_next');
buttonRight.addEventListener('click', () => {
  circle--;
  let dot = document.getElementById('' + circle);
  const dotAfter = document.getElementById('' + (circle + 1));
  left += 400;
  if (left > 1) {
    left = -1200;
    circle = 4;
    dot = document.getElementById('' + 4);
  }
  carousel.style.left = left + 'px';
  dotAfter.style.backgroundColor = 'silver';
  dot.style.backgroundColor = 'black';
});
