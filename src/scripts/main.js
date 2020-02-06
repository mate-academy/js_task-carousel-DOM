'use strict';

const cardWrapper = document.createElement('div');
const ul = document.querySelector('.carousel');
let position = 0;
const width = 330;

cardWrapper.classList.add('wrapper', 'wrapper-card');
cardWrapper.innerHTML = ul.outerHTML;
ul.outerHTML = cardWrapper.outerHTML;

const carouselWrapper = document.createElement('div');

carouselWrapper.classList.add('wrapper', 'wrapper-carousel');
carouselWrapper.innerHTML = document.body.innerHTML;
document.body.innerHTML = carouselWrapper.outerHTML;

const list = document.querySelector('ul');
const listElems = document.querySelectorAll('li');
const dot = document.querySelectorAll('.carousel__dot');
let dotIndex = 0;

list.style.transition = '0.3s';

const showPrevCard = function() {
  if (dotIndex > 0) {
    dotIndex--;
    dot[dotIndex].classList.add('carousel__dot_active');
    dot[dotIndex + 1].classList.remove('carousel__dot_active');
  }
  position += width;
  position = Math.min(position, 0);
  list.style.transform = `translate(${position}px)`;
};

function showNextCard() {
  if (dotIndex < dot.length - 1) {
    dotIndex++;
    dot[dotIndex].classList.add('carousel__dot_active');
    dot[dotIndex - 1].classList.remove('carousel__dot_active');
  }
  position -= width;
  position = Math.max(position, -width * (listElems.length - 1));
  list.style.transform = `translate(${position}px)`;
}

document.querySelector('.carousel__btn_prev').addEventListener(
  'click',
  showPrevCard
);

document.querySelector('.carousel__btn_next').addEventListener(
  'click',
  showNextCard
);
