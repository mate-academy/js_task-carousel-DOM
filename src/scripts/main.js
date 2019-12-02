'use strict';

init();

function init() {
  const carousel = document.querySelector('.carousel');
  const arrowNext = document.querySelector('.carousel__btn_next');
  const arrowPrev = document.querySelector('.carousel__btn_prev');
  const card = document.querySelector('.twitter-card');
  const maxWidth = carousel.clientWidth;

  let translate = 0;
  let dot = document.querySelector('.carousel__dot');

  arrowNext.addEventListener('click', () => {
    translate -= card.offsetWidth + 20;

    if (translate <= -maxWidth) {
      translate = 0;
    };

    carousel.style.transform = `translateX(${translate}px)`;

    if (dot.nextElementSibling) {
      dot.classList.remove('carousel__dot_active');
      dot = dot.nextElementSibling;
      dot.classList.add('carousel__dot_active');
    } else {
      dot.classList.remove('carousel__dot_active');
      dot = document.querySelector('.carousel__dot');
      dot.classList.add('carousel__dot_active');
    };
  });

  arrowPrev.addEventListener('click', () => {
    translate += card.offsetWidth + 20;

    if (translate > 0) {
      translate = -maxWidth + translate - 20;
    };

    carousel.style.transform = `translateX(${translate}px)`;

    if (dot.previousElementSibling) {
      dot.classList.remove('carousel__dot_active');
      dot = dot.previousElementSibling;
      dot.classList.add('carousel__dot_active');
    } else {
      dot.classList.remove('carousel__dot_active');
      dot = document.querySelector('.carousel__dots-wrap').lastElementChild;
      dot.classList.add('carousel__dot_active');
    };
  });
}
