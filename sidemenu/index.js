const toogle = document.querySelector('#toogle');
const sideMenu = document.querySelector('#side-menu');

toogle.addEventListener('click', function() {
  isCollapsible = Array.from(sideMenu.classList).includes('collapsible');
  if (isCollapsible) {
    sideMenu.classList.remove('collapsible');
  } else {
    sideMenu.classList.add('collapsible');
  }
});