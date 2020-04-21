'use strict';

let position = 0;
const step = 320;

document.addEventListener('click', arrow);

function arrow(ev) {
  const item = document.querySelectorAll('.carousel__item');
  const dots = document.querySelectorAll('.carousel__dot');

  dots[position / step].classList.toggle('carousel__dot_active');

  if (ev.target.className.includes('carousel__btn_next')) {
    position += step;

    if (position > 960) {
      position = 0;
    }

    for (const el of item) {
      el.style.transform = `translate(-${position}px, 0)`;
    }
  }

  if (ev.target.className.includes('carousel__btn_prev')) {
    position -= step;

    if (position < 0) {
      position = 960;
    }

    for (const el of item) {
      el.style.transform = `translate(-${position}px, 0)`;
    }
  }

  dots[position / step].classList.toggle('carousel__dot_active');
}
