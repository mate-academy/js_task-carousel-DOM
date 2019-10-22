'use strict';

/* конфигурация */
const width = 316; // ширина картинки
const count = 1; // видимое количество изображений
let position = 0; // положение ленты прокрутки

const list = document.querySelector('.carousel__container');
const listElems = document.querySelectorAll('li');
const leftMove = document.querySelector('.carousel__btn_prev');
const rightMove = document.querySelector('.carousel__btn_next');
let dotElems = document.querySelector('.carousel__dot');

leftMove.addEventListener('click', function() {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
  if (!dotElems.previousElementSibling) {
    return;
  }
  dotElems.className = 'carousel__dot';
  dotElems = dotElems.previousElementSibling;
  dotElems.classList.add('carousel__dot_active');
});

rightMove.addEventListener('click', function() {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
  if (!dotElems.nextElementSibling) {
    return;
  }
  dotElems.className = 'carousel__dot';
  dotElems = dotElems.nextElementSibling;
  dotElems.classList.add('carousel__dot_active');
});
