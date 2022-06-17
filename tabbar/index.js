const parentNode = document.querySelector('.tabbar');
const activeTop = document.querySelector('.active-top');
// 去除顶部active-top
const childList = [...parentNode.children].slice(1);

// 利用元素冒泡，使用事件委托绑定事件
parentNode.addEventListener('click', function(event) {
  let currentItem = null;
  const target = event.target;
  // tips: 或者使用event.target.closest(selector)获取最近父节点
  // const parentNode = event.target.closest('li');
  const parentNode = event.target.parentNode;

  // 鼠标点击的可能是li, 或者是其子元素i,p, 需要区分
  // 我们需要获取的是li元素，所以当点击的是i, p，要获取其父元素
  if (target.className.includes('tab-item')) {
    currentItem = target;
  } else if (parentNode.className.includes('tab-item')) {
    currentItem = parentNode;
  }


  // 当前点击元素的索引
  const currentItemIndex = childList.indexOf(currentItem);
  // 添加active类, 其他兄弟元素移除active
  currentItem.classList.add('active');
  childList.forEach((item, index) => {
    if (index !== currentItemIndex) {
      item.classList.remove('active')
    }
  });
  // 操作active-top，移动到当前元素上
  if (!activeTop.style.top && !activeTop.style.display) {
    activeTop.style.display = 'block';
    activeTop.style.top = '-6px'
  }
  const gap = currentItemIndex ? 23 : 22;
  activeTop.style.left = (currentItemIndex * currentItem.offsetWidth + currentItem.offsetWidth * (currentItemIndex + 1)) / 2 - gap + 'px';
});