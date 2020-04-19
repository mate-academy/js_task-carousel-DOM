'use strict';

const carouselWrap = document.querySelector('.carousel__wrap');
const carousel = document.querySelector('.carousel');
let index = 0;

carouselWrap.addEventListener('click', () => {
  const target = event.target;
  const item = event.target.closest('.carousel__btn');

  if (!item) {
    return;
  }

  if (target.classList[1] === 'carousel__btn_next' & index <= 620) {
    pesach(310);
  }

  if (target.classList[1] === 'carousel__btn_prev' & index >= 310) {
    pesach(-310);
  }
});

function pesach(item) {
  index = index + item;
  carousel.style.marginLeft = `-${index}px`;
}
