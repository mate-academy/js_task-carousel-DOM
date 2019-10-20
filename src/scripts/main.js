'use strict';

const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const carouselItems = [...document.querySelectorAll('.carousel__item')];
const dotItems = [...document.querySelectorAll('.carousel__dots')];

nextBtn.addEventListener('click', scrollNext);
prevBtn.addEventListener('click', scrollPrev);

function scrollNext() {
  for (let i = 0; i < carouselItems.length - 1; i++) {
    if (carouselItems[i].classList.contains('dot_active')) {
      carouselItems[i].classList.remove('dot_active');
      carouselItems[i].classList.add('dot');
      carouselItems[i].style.marginLeft = '-310px';
      carouselItems[i].style.transition = 'all 0.3s';
      dotItems[i].classList.remove('carousel__dots_active');

      dotItems[i + 1].classList.add('carousel__dots_active');
      carouselItems[i + 1].classList.remove('dot');
      carouselItems[i + 1].classList.add('dot_active');
      carouselItems[i + 1].style.transition = 'all 0.3s';
      return;
    }
  }
}

function scrollPrev() {
  for (let i = carouselItems.length - 1; i > 0; i--) {
    if (carouselItems[i].classList.contains('dot_active')) {
      carouselItems[i].classList.remove('dot_active');
      carouselItems[i].classList.add('dot');
      carouselItems[i].style.transition = 'all 0.3s';
      dotItems[i].classList.remove('carousel__dots_active');

      carouselItems[i - 1].style.marginLeft = '0';
      carouselItems[i - 1].classList.remove('dot');
      carouselItems[i - 1].classList.add('dot_active');
      carouselItems[i - 1].style.transition = 'all 0.3s';
      dotItems[i - 1].classList.add('carousel__dots_active');
      return;
    }
  }
}
