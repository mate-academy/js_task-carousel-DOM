'use strict';

const width = 310;
const carousel = document.querySelector('.container');
const list = carousel.querySelector('ul');
const listItems = carousel.querySelectorAll('li');
let position = 0;
const dotArr = document.querySelectorAll('.carousel__dot');
// console.log(dotArr[1].classList.add('_active'));
// console.log(`position = ${position}; marginLeft = ${list.style.marginLeft}`);

carousel.querySelector('.carousel__btn_prev').addEventListener('click', () => {
  if (position <= 0) {
    position = listItems.length;
  }

  position--;
  list.style.marginLeft = -position * width + 'px';

  /* console.log(`
                  position = ${position};
                  marginLeft = ${list.style.marginLeft}
                `); */

  highlightDot();
});

carousel.querySelector('.carousel__btn_next').addEventListener('click', () => {
  if (position >= listItems.length - 1) {
    position = -1;
  }
  position++;
  list.style.marginLeft = -position * width + 'px';

  /* console.log(`
                  position = ${position};
                  marginLeft = ${list.style.marginLeft}
                `); */

  highlightDot();
});

function highlightDot() {
  for (let i = 0; i < dotArr.length; i++) {
    if (i === position) {
      dotArr[i].classList.add('carousel__dot_active');
    } else {
      dotArr[i].classList.remove('carousel__dot_active');
    }
  }
}
