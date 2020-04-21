'use strict';

const carousel = document.querySelector('.carousel');
const btnNext = document.querySelector('.carousel__btn_next');
const btnPrev = document.querySelector('.carousel__btn_prev');
const cardWidth = 330;
let position = 0;
let count = 0;

const carouselItems = Array.from(carousel.children);
const dots = Array.from((document.querySelector('.carousel__dots-wrap')).children);

btnNext.addEventListener('click', (event) => {
  moveCard(event);
});

btnPrev.addEventListener('click', (event) => {
  moveCard(event);
});

function moveCard(eventBtn) {
  if (eventBtn.target === btnNext) {
    if (position === -cardWidth * (carouselItems.length - 1)) {
      position = 0;
      dots[count].classList.remove('carousel__dot_active');

      carouselItems.map(item => {
        item.style.transform = `translate(${position}px)`;
      });

      count = 0;
      dots[count].classList.add('carousel__dot_active');
    } else {
        position -= cardWidth;
        dots[count].classList.remove('carousel__dot_active');

        carouselItems.map(item => {
        item.style.transform = `translate(${position}px)`;
      });

      count++;
      dots[count].classList.add('carousel__dot_active');
    }
  }

  if (eventBtn.target === btnPrev) {
    if (position === 0) {
      position = -cardWidth * (carouselItems.length - 1);
      dots[count].classList.remove('carousel__dot_active');

      carouselItems.map(item => {
        item.style.transform = `translate(${position}px)`;
      });

      count = carouselItems.length - 1;
      dots[count].classList.add('carousel__dot_active');
    } else {
        position += cardWidth;
        dots[count].classList.remove('carousel__dot_active');

        carouselItems.map(item => {
        item.style.transform = `translate(${position}px)`;
      });

      count--;
      dots[count].classList.add('carousel__dot_active');
    }
  }
}
