const grid = document.getElementById('grid');
const code = document.querySelector('#code code');
const range = document.getElementById('range');
const colorPanel = document.getElementById('color-panel');

// 选色
colorPanel.addEventListener('click', function(event) {
  if (event.target.nodeName.toLowerCase() === 'li') {
    document.documentElement.style.setProperty('--color', event.target.dataset.color);
  }
})
// 滑块滑动事件
range.addEventListener('input', function(event) {
  document.documentElement.style.setProperty('--size', `${event.target.value}px`);
  this.nextElementSibling.innerText = event.target.value;
})
// 获取元素的css属性
function getShapeElementProperties(el) {
  const className = el.className.split(' ')[1];
  const computedStyle = getComputedStyle(el);
  let pseudoStyle = '';
  const shapeStyle = `
  .${className} {
    width: ${computedStyle.getPropertyValue('width')};
    height: ${computedStyle.getPropertyValue('height')};
    border-radius: ${computedStyle.getPropertyValue('border-radius')};
    background-color: ${computedStyle.getPropertyValue('background-color')};
    clip-path: ${computedStyle.getPropertyValue('clip-path')};
  }`;
  if (className.includes('half-star')) {
    const styleWithPseudo = getComputedStyle(el, '::after');
    pseudoStyle = `
    .${className}::after {
      content: '';
      position: 'absolute';
      width: ${styleWithPseudo.getPropertyValue('width')};
      height: ${styleWithPseudo.getPropertyValue('height')};
      background-color: ${styleWithPseudo.getPropertyValue('background-color')};
    }`
  }
  return shapeStyle + '\n' + pseudoStyle;
}
grid.addEventListener('click', function(event) {
  if(event.target.className.includes('shape')) {
    let codeStr = getShapeElementProperties(event.target);
    code.innerHTML = codeStr;
  }
})