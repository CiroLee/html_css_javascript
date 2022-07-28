const playBtn = document.getElementById('play');
const audio = document.getElementById('audio');
const iconBox = document.getElementById('icon-box');
const iconBack = document.querySelector('.icon-back');
const result = document.getElementById('result');
function tossResult() {
  // 随机获取0或1
  const random = Math.floor(Math.random() * 2);
  if (!random) {
    iconBack.classList.remove('back');
    result.innerText = '反';
  } else {
    iconBack.classList.add('back');
    result.innerText = '正';
  }

  result.classList.add('show');

}
playBtn.addEventListener('click', function() {
  audio.play();
  iconBox.classList.add('toss');
  // reset
  iconBack.classList.add('back');
  result.classList.remove('show');
  iconBox.addEventListener('animationend', function() {
    this.classList.remove('toss');
    tossResult();
  })
});