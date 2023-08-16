const panel = document.querySelector('.panel');
const inputX = document.querySelector('#js-x');
const inputY = document.querySelector('#js-y');

inputX.addEventListener('input', () => {
  panel.style.setProperty('--rotate-x', inputX.value + 'deg');
});

inputY.addEventListener('input', () => {
  panel.style.setProperty('--rotate-y', inputY.value + 'deg');
});