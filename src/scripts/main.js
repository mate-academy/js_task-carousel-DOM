'use strict';

initialCarusel();

function initialCarusel() {
  const prevBtn = document.querySelector('.carousel__btn_prev');
  const nextBtn = document.querySelector('.carousel__btn_next');
  const carousel = document.querySelector('.carousel');
  const listItems = carousel.querySelectorAll('.carousel__item');
  const dots = document.querySelectorAll('.carousel__dot');
  let startIndex = 0;

  nextBtn.addEventListener('click', () => {
    if (startIndex === listItems.length - 1) {
      dots[startIndex].classList.remove('carousel__dot_active');
      startIndex = 0;
      dots[startIndex].classList.add('carousel__dot_active');
      listItems.forEach(elem => (elem.style.transform = ''));
    } else {
      dots[startIndex].classList.remove('carousel__dot_active');
      startIndex++;
      dots[startIndex].classList.add('carousel__dot_active');

      listItems[startIndex].style.transform
        = `translateX(${-310 * startIndex}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (!startIndex) {
      dots[startIndex].classList.remove('carousel__dot_active');
      startIndex = listItems.length - 1;
      dots[startIndex].classList.add('carousel__dot_active');

      listItems.forEach((elem, index) =>
        (elem.style.transform = `translateX(${-310 * index}px)`));
    } else {
      dots[startIndex].classList.remove('carousel__dot_active');
      listItems[startIndex].style.transform = `translateX(0)`;
      startIndex--;
      dots[startIndex].classList.add('carousel__dot_active');
    }
  });
}
