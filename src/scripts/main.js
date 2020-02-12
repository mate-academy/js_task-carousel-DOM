'use strict';

const width = 310;
let position = 0;
let index = 0;

const list = document.querySelector('ul');
const next = document.querySelector('.carousel__btn_next');
const prev = document.querySelector('.carousel__btn_prev');
const dots = document.querySelectorAll('.carousel__dot');

prev.addEventListener('click', () => {
  if (index > 0 && index <= (dots.length - 1)) {
    indexDot(-1);
  }

  position += width;
  position = Math.min(position, 0);
  list.style.marginLeft = `${position}px`;
});

next.addEventListener('click', () => {
  if (index >= 0 && index < (dots.length - 1)) {
    indexDot(1);
  }
  position -= width;
  position = Math.max(position, -width * (dots.length - 1));
  list.style.marginLeft = `${position}px`;
});

function indexDot(x) {
  dots[index].className = ('carousel__dot');
  index = index + x;
  dots[index].className = ('carousel__dot carousel__dot_active');
}
