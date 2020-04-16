'use strict';

function carousel(block) {
  const list = [...document.querySelectorAll('.carousel__item')];
  const dots = [...document.querySelectorAll('.carousel__dot')];
  const rev = document.querySelector('.carousel__btn_prev');
  const fwd = document.querySelector('.carousel__btn_next');

  let activeView = 0;
  let activeDot = 0;

  list[activeView].style.display = 'initial';
  dots[activeDot].style.backgroundColor = 'darkgrey';

  rev.addEventListener('click', () => {
    list[activeView].style.display = 'none';

    if (activeView === 0) {
      activeView = 3;
      list[activeView].style.display = 'initial';

      return;
    }
    list[activeView - 1].style.display = 'initial';
    activeView--;
  });

  rev.addEventListener('click', () => {
    dots[activeDot].style.backgroundColor = 'lightgrey';

    if (activeDot === 0) {
      activeDot = 3;
      dots[activeDot].style.backgroundColor = 'darkgrey';

      return;
    }
    dots[activeDot - 1].style.backgroundColor = 'darkgrey';
    activeDot--;
  });

  fwd.addEventListener('click', () => {
    list[activeView].style.display = 'none';

    if (activeView === 3) {
      activeView = 0;
      list[activeView].style.display = 'initial';

      return;
    }
    list[activeView + 1].style.display = 'initial';
    activeView++;
  });

  fwd.addEventListener('click', () => {
    dots[activeDot].style.backgroundColor = 'lightgrey';

    if (activeDot === 3) {
      activeDot = 0;
      dots[activeDot].style.backgroundColor = 'darkgrey';

      return;
    }
    dots[activeDot + 1].style.backgroundColor = 'darkgrey';
    activeDot++;
  });
};

carousel(
  document.querySelector('.carousel__wrap'),
);
