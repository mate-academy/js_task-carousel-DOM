'use strict';

const width = 310;
const count = 1;
let position = 0;
let active = 0;

const list = document.querySelector('ul');
const listElems = document.querySelectorAll('li');
const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');

btnPrev.addEventListener('click', prevAct);

function prevAct() {
  if (position === 0) {
    position = -width * (dots.length - 1);
    list.style.marginLeft = position + 'px';
  } else {
    position += width * count;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
  }
}

btnNext.addEventListener('click', nextAct);

function nextAct() {
  if (position === -width * (dots.length - 1)) {
    position = 0;
    list.style.marginLeft = position + 'px';
  } else {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  }
}

btnNext.addEventListener('click', nextDot);

function nextDot() {
  dots[active].classList.remove('carousel__dot_active');

  if (active + 1 === dots.length) {
    active = 0;
  } else {
    active++;
  }
  dots[active].classList.add('carousel__dot_active');
}

btnPrev.addEventListener('click', prevDot);

function prevDot() {
  dots[active].classList.remove('carousel__dot_active');

  if (active === 0) {
    active = dots.length - 1;
  } else {
    active--;
  }
  dots[active].classList.add('carousel__dot_active');
}
