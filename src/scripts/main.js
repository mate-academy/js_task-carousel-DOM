'use strict';
//
const createCarousel = () => {
  const wrapper = document.querySelector('.wrapper');
  const galleryelement = document.querySelector('.carousel');
  const allItems = document.querySelectorAll('.carousel__item');
  const points = document.querySelectorAll('.carousel__dot');
  const activeClass = 'carousel__dot_active';
  let counter = 0;
  let index = 1;
  const step = 330;

  wrapper.addEventListener('click', e => {
    if (e.target.classList.contains('carousel__btn_prev')) {
      index--;

      if (index <= 0) {
        index = allItems.length;
        counter = -(step * allItems.length);
      }

      counter += step;

      for (const item of points) {
        item.classList.remove(activeClass);
      }

      points[index - 1].classList.add(activeClass);
      galleryelement.style = `transform: translateX(${counter}px);`;
    } else if (e.target.classList.contains('carousel__btn_next')) {
      counter -= step;

      if (index >= allItems.length) {
        counter = 0;
        index = 0;
      }

      index++;

      for (const item of points) {
        item.classList.remove(activeClass);
      }

      points[index - 1].classList.add(activeClass);
      galleryelement.style = `transform: translateX(${counter}px);`;
    }
  });
};

createCarousel();
