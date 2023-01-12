const phone = document.querySelector('.phone');
const keyboard = document.querySelector('.keyboard');
const phoneWidth = phone.offsetWidth;
const input = document.querySelector('.phone__input');
const deleteBtn = document.querySelector('.delete');
const enterBtn = document.querySelector('.enter');

// init size
keyboard.setAttribute('style', `--width: ${phoneWidth - 16}px`);
// window resize to reset the keyboard size
window.addEventListener('resize', function () {
  keyboard.setAttribute('style', `--width: ${phone.offsetWidth - 16}px`);
});
keyboard.addEventListener('click', function (event) {
  const num = event.target.dataset.num;
  if (num) {
    if (num === '.' && input.innerText.includes('.')) {
      return;
    }
    if (num === '.' && !input.innerText.includes('.')) {
      input.innerText = '0.';
    } else {
      input.innerText = input.innerText + num;
    }
  }
});

deleteBtn.addEventListener('click', function () {
  if (input.innerText.length > 1) {
    input.innerText = input.innerText.slice(0, -1);
  } else if (input.innerText.length === 1) {
    input.innerText = '';
  }
});

enterBtn.addEventListener('click', function () {
  alert(`the value is: ${input.innerText}`);
});
