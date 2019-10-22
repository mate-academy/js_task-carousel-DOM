'use strict';

const movePrev = document.querySelector('.carousel__btn_prev');
const moveNext = document.querySelector('.carousel__btn_next');
const slides = document.getElementById('thumbs');
const dots = document.getElementsByClassName('carousel__dot');

let position = 0;
let currentDot = 0;

function changeDots(n) {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' carousel__dot_active', '');
  }
  dots[n].className += ' carousel__dot_active';
}

movePrev.addEventListener('click', function() {
  position -= 330;

  if (position < 0) {
    position = 990;
    currentDot = 4;
  }

  slides.style.transition = 'right 1s';
  slides.style.right = `${position}px`;

  currentDot--;
  changeDots(currentDot);
});

moveNext.addEventListener('click', function() {
  position += 330;

  if (position > 990) {
    position = 0;
    currentDot = -1;
  }

  // slides.style.transition = 'right 1s';
  slides.style.right = `${position}px`;

  currentDot++;
  changeDots(currentDot);
});
