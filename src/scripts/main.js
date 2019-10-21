'use strict';
const cards = document.querySelectorAll('.carousel__item');
const buttonSlideRight = document.querySelector('.carousel__btn_next');
const buttonSlideLeft = document.querySelector('.carousel__btn_prev');
const carousel = document.querySelector('.carousel');
carousel.style.transition = 'transform 1s';
let SliderCounter = 0;
const dots = document.querySelectorAll('.carousel__dot');

buttonSlideRight.onclick = () => {
  if (SliderCounter <= -((cards.length - 1) * 350)) {
    return;
  }
  SliderCounter -= 350;
  carousel.style.transform = `translateX(${SliderCounter}px)`;
  pointer(dots);
};

buttonSlideLeft.onclick = () => {
  if (SliderCounter >= 0) {
    return;
  }
  SliderCounter += 350;
  carousel.style.transform = `translateX(${SliderCounter}px)`;
  pointer(dots);
};

function pointer(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === Math.abs(SliderCounter / 350)) {
      array[i].className = 'carousel__dot carousel__dot_active';
    } else {
      array[i].className = 'carousel__dot';
    }
  }
}
