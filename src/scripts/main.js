'use strict';

const twits = document.querySelectorAll('.carousel__item');

const twitsStorage = [];

for (let i = 0; i < twits.length; i++) {
  twitsStorage[i] = twits[i];
  twits[i].remove();
}

let step = 0;
const offset = 0;

function draw() {
  let twit = document.createElement('li');

  twit = twitsStorage[step];
  twit.style.left = offset * 310 + 'px';
  document.querySelector('.carousel').appendChild(twit);

  if (step + 1 === twitsStorage.length) {
    step = 0;
  } else {
    step++;
  }
}

function nextTwit() {
  const twits2 = document.querySelectorAll('.carousel__item');
  const dot = document.querySelector('.carousel__dot_active');
  const dot2 = dot.nextElementSibling;
  let offset2 = 0;

  for (let i = 0; i < twits2.length; i++) {
    twits2[i].style.left = offset2 * 310 - 310 + 'px';
    offset2++;
  }

  setTimeout(function() {
    twits2[0].remove();
    dot.classList.toggle('carousel__dot_active');
    dot2.classList.toggle('carousel__dot_active');
    draw();
  }, 1000);
}

function prevTwit() {
  const twits2 = document.querySelectorAll('.carousel__item');
  const dot = document.querySelector('.carousel__dot_active');
  const dot2 = dot.previousElementSibling;
  let offset2 = 0;

  for (let i = 0; i < twits2.length; i++) {
    twits2[i].style.left = offset2 * 310 + 310 + 'px';
    offset2++;
  }

  setTimeout(function() {
    twits2[0].remove();
    dot.classList.toggle('carousel__dot_active');
    dot2.classList.toggle('carousel__dot_active');
    draw();
  }, 1000);
}

const nextButton = document.querySelector('.carousel__btn_next');
const prevButton = document.querySelector('.carousel__btn_prev');

draw(); draw();
nextButton.addEventListener('click', nextTwit);
prevButton.addEventListener('click', prevTwit);
