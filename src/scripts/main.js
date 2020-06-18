'use strict';

const wrapper = document.querySelector('.carousel-wrapper');
let act = document.querySelector('.carousel__dot_active');
const dots = document.querySelector('.carousel__dots-wrap');

document.body.addEventListener('click', scrollItems);

function scrollItems(e) {
  const element = e.target;

  if (element.classList.contains('carousel__dot')) {
    const dotsList = document.querySelectorAll('.carousel__dot');
    const current = [...dotsList].indexOf(act);
    const next = [...dotsList].indexOf(element);

    act.classList.remove('carousel__dot_active');
    act = element;
    act.classList.add('carousel__dot_active');

    wrapper.scrollBy({
      top: 0,
      left: (next - current) * 310,
      behavior: 'smooth',
    });
  }

  if (element.classList.contains('carousel__btn_next')) {
    wrapper.scrollBy({
      top: 0,
      left: 310,
      behavior: 'smooth',
    });

    if (act !== dots.lastElementChild) {
      act.classList.remove('carousel__dot_active');
      act.nextElementSibling.classList.add('carousel__dot_active');

      act = act.nextElementSibling;
    }
  }

  if (element.classList.contains('carousel__btn_prev')) {
    wrapper.scrollBy({
      top: 0,
      left: -310,
      behavior: 'smooth',
    });

    if (act !== dots.firstElementChild) {
      act.classList.remove('carousel__dot_active');
      act.previousElementSibling.classList.add('carousel__dot_active');
      act = act.previousElementSibling;
    }
  }
}
