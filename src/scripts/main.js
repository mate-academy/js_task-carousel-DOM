'use strict';

const carouselWrap = document.querySelector('.carousel__wrap');
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dots');
let index = 0;
let indexDots = 0;

carouselWrap.addEventListener('click', () => {
  const target = event.target;
  const item = event.target.closest('.carousel__btn');

  if (!item) {
    return;
  }

  if (target.classList[1] === 'carousel__btn_next' & index >= -620) {
    pesach(-310, 1);
  }

  if (target.classList[1] === 'carousel__btn_prev' & index <= -310) {
    pesach(310, -1);
  }
});

function pesach(size, item) {
  index = index + size;
  indexDots = indexDots + item;

  carousel.style.transform = `translateX(${index}px)`;
  dots[indexDots].style.backgroundColor = 'gray';

  if (indexDots) {
    dots[indexDots - 1].style.backgroundColor = 'whitesmoke';
  }

  if (indexDots < 3) {
    dots[indexDots + 1].style.backgroundColor = 'whitesmoke';
  }
};
