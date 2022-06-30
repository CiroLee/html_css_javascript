// switch事件
// 1. switch 长按改变样式, 按下计时， 超过2s则，添加动画类
let switchLangPressTimer;
const switchMouseDown = (labelElement) => {
  let time = 0;
  switchLangPressTimer = setInterval(() => {
    time += 200;
    if (time > 200) {
      labelElement.classList.add('circle-screw');
      clearInterval(switchLangPressTimer);
    }
  }, 200);
  
}
const switchEl = document.getElementById('switch');
switchEl.addEventListener('mousedown', () => {
  const nextLabel = switchEl.nextElementSibling;
  switchMouseDown(nextLabel);
});
switchEl.addEventListener('mouseup', (event) => {
  clearInterval(switchLangPressTimer);
  switchEl.nextElementSibling.classList.remove('circle-screw');
});

switchEl.addEventListener('click', function(event) {
  const { checked } = event.target;
  if (checked) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  }
})

