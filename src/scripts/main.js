/* eslint-disable no-console */
'use strict';

const previous = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
const firstLi = document.querySelector('.first');
const dots = document.querySelectorAll('.carousel__dot');

console.log(dots);

let position = 0;
let i = 0;

dots[i].style.backgroundColor = 'blue';

previous.onclick = function() {
  position += 310;
  i--;

  if (position > 0) {
    position = -930;
    i = 3;
  }

  dots.forEach(dot => {
    dot.style.backgroundColor = 'grey';
  });
  dots[i].style.backgroundColor = 'blue';
  firstLi.style.marginLeft = position + 'px';
};

next.onclick = function() {
  position -= 310;
  i++;

  if (position < -1200) {
    position = 0;
    i = 0;
  }

  dots.forEach(dot => {
    dot.style.backgroundColor = 'grey';
  });
  dots[i].style.backgroundColor = 'blue';
  firstLi.style.marginLeft = position + 'px';
};
