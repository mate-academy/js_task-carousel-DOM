'use strict';

const width = 310;

const slider = document.getElementById('slider');
const list = slider.querySelector('ul');
const listElems = slider.querySelectorAll('li');

let position = 0;

const dot = document.querySelectorAll('.carousel__dot');
let count = 0;
dot[count].className = 'carousel__dot carousel__dot_active';

slider.querySelector('.carousel__btn_prev').onclick = function() {
  position += width;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';

  if (count === 0) {
    dot[count].className = 'carousel__dot carousel__dot_active';
  } else {
    dot[count].className = 'carousel__dot';
    count--;
    dot[count].className = 'carousel__dot carousel__dot_active';
  }
};

slider.querySelector('.carousel__btn_next').onclick = function() {
  dot[count].className = 'carousel__dot';
  position -= width;
  position = Math.max(position, -width * (listElems.length - 1));
  list.style.marginLeft = position + 'px';

  if (count === dot.length - 1) {
    dot[count].className = 'carousel__dot carousel__dot_active';
  } else {
    dot[count].className = 'carousel__dot';
    count++;
    dot[count].className = 'carousel__dot carousel__dot_active';
  }
};
