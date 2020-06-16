'use strict';

const previous = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
const firstLi = document.querySelector('.first');
let position = 0;

previous.onclick = function() {
  position += 310;

  if (position > 0) {
    position = -930;
  }

  firstLi.style.marginLeft = position + 'px';
};

next.onclick = function() {
  position -= 310;

  if (position < -1200) {
    position = 0;
  }
  firstLi.style.marginLeft = position + 'px';
};
