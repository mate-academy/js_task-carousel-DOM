'use strict';

function carousel(block) {
  const list = [...document.querySelectorAll('.carousel__item')];
  const dots = [...document.querySelectorAll('.carousel__dot')];
  const rev = document.querySelector('.carousel__btn_prev');
  const fwd = document.querySelector('.carousel__btn_next');

  let position = 0;
  const step = 330;
  const maxRotations = list.length - 1;
  let activeDot = 0;

  dots[activeDot].style.backgroundColor = 'darkgrey';

  fwd.addEventListener('click', () => {
    position += step;

    for (const item of list) {
      if (position > maxRotations * step) {
        position = 0;
      }
      item.style.right = `${position}px`;
    }
    ;
    dots[activeDot].style.backgroundColor = 'lightgrey';

    if (activeDot === 3) {
      activeDot = 0;
      dots[activeDot].style.backgroundColor = 'darkgrey';

      return;
    }
    dots[activeDot + 1].style.backgroundColor = 'darkgrey';
    activeDot++;
  });

  rev.addEventListener('click', () => {
    position -= step;

    for (const item of list) {
      if (position < 0) {
        position = maxRotations * step;
      }
      item.style.right = `${position}px`;
    }
    ;
    dots[activeDot].style.backgroundColor = 'lightgrey';

    if (activeDot === 0) {
      activeDot = 3;
      dots[activeDot].style.backgroundColor = 'darkgrey';

      return;
    }
    dots[activeDot - 1].style.backgroundColor = 'darkgrey';
    activeDot--;
  });
};

carousel(
  document.querySelector('.main__wrap'),
);
