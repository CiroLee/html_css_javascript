const progress = document.getElementById('progress');
const val = document.querySelector('#progress span');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const pauseBtn = document.getElementById('pause');
let width = '';
let timer;
let s = null;

function animate() {
  width =  Number(progress.style.width.replace(/%/, ''));
  if (width < 100) {
    progress.style.width = width + 0.2 + '%';
    val.innerHTML = parseInt(progress.style.width) + '%';
    timer = requestAnimationFrame(animate);
  } else {
    progress.classList.add('finished');
  }
}
function start() {
  s = 'start';
  progress.classList.add('start');
  progress.classList.remove('finished');
  timer = requestAnimationFrame(animate);
}

function toggle() {
  switch(s) {
    case 'start':
      cancelAnimationFrame(timer);
      pauseBtn.innerText = 'continue';
      s = 'pause';
    break;
    case 'pause':
      timer = requestAnimationFrame(animate);
      pauseBtn.innerText = 'pause';
      s = 'start';
  }
}

function reset() {
  cancelAnimationFrame(timer);
  progress.classList.remove('start');
  progress.classList.remove('finished');
  progress.style.width = '0%';
  s = 'start';
  pauseBtn.innerText = 'pause';
}

startBtn.addEventListener('click', start, false);
pauseBtn.addEventListener('click', toggle, false);
resetBtn.addEventListener('click', reset, false)