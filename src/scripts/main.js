'use strict';

const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');
const ul = document.querySelector('ul');
let runningImage = false;
let pos = 0;
let step = 0;
function change(action) {
  if (runningImage === true) {
    return;
  }
  runningImage = true;
  let plusOrMinus = -1;
  if (action.target.className === 'carousel__btn carousel__btn_prev') {
    plusOrMinus = 1;
  }
  step += plusOrMinus * (-1);
  if (step === 4) {
    pos = 0;
    step = 0;
  } else if (step === -1) {
    step = 3;
    pos = -1050;
  } else {
    pos += 350 * plusOrMinus;
  }
  ul.style.transform = `translate(${pos}px)`;
  ul.addEventListener('transitionend', function() {
    runningImage = false;
  });
  dots[step].classList.add('carousel__dot_active');
  for (let i = 0; i <= 4; i++) {
    if (i !== step && dots[i].classList.contains('carousel__dot_active')) {
      dots[i].classList.remove('carousel__dot_active');
    }
  }
}
prevButton.addEventListener('click', change);
nextButton.addEventListener('click', change);
