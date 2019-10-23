'use strict';

const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const carousel = document.querySelector('.container');
let dot = document.querySelector(' .carousel__dot');

const width = 330;
let pos = 0;
const list = carousel.querySelector('ul');
const slides = carousel.querySelectorAll('li');

function showNextSlide() {
  pos -= width;
  pos = Math.max(pos, -width * (slides.length - 1));
  list.style.marginLeft = pos + 'px';
  list.style.transition = 'margin-left 0.5s';

  if (!dot.nextElementSibling) {
    return;
  } else {
    dot.className = 'carousel__dot';
    dot = dot.nextElementSibling;
  }

  dot.classList.add('carousel__dot_active');
}

nextBtn.addEventListener('click', showNextSlide);

function showPrevSlide() {
  pos += width;
  pos = Math.min(pos, 0);
  list.style.marginLeft = pos + 'px';

  if (!dot.previousElementSibling) {
    dot = document.querySelector('.carousel__dots-wrap .carousel__dot');
  } else {
    dot.className = 'carousel__dot';
    dot = dot.previousElementSibling;
  }

  dot.classList.add('carousel__dot_active');
}

prevBtn.addEventListener('click', showPrevSlide);
